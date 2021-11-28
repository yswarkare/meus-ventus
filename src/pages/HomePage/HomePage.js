import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAlbums, setMyFavouriteAlbums } from "../../redux/actions/userActions";
import thumbsUp from "../../assets/icons/thumbs_up.svg";
import tailSpin from "../../assets/icons/Tail_Spin_Green.svg";

class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            usersArray: [],
            albums: [],
            showAlbumsList: [],
            likedAlbumIds: [],
            likedAlbums: [],
            waiting_To_Get_Albums: false,
        }
    }

    componentDidMount = async () => {
        await this.getAllAlbums();
        if (this.props.usersArray?.length > 0) {
            this.setInitialShowListOnCard(this.props.usersArray);
        }
        if (this.props.favouriteAlbums?.length > 0) {
            this.setInitialLikedAlbums(this.props.favouriteAlbums);
        }
        console.log(this.state);
    }

    getAllAlbums = async () => {
        try {            
            this.setState({ waiting_To_Get_Albums: true });
            console.log("waiting_To_Get_Albums", this.state.waiting_To_Get_Albums)
            let res = await this.props?.getAlbums();
            if (res?.status === 200) {
                this.setState({
                    usersArray: this.props.usersArray,
                    albums: this.props.albums,
                })
            }
            this.setState({ waiting_To_Get_Albums: false });
            console.log("waiting_To_Get_Albums", this.state.waiting_To_Get_Albums)
        } catch (error) {
            this.setState({ waiting_To_Get_Albums: false });
            console.log("waiting_To_Get_Albums", this.state.waiting_To_Get_Albums)
        }
    }

    setInitialShowListOnCard = (usersArray) => {
        let showAlbumsList = [];
        for (let index = 0; index < usersArray.length; index++) {
            showAlbumsList.push(false);
        }
        this.setState({ showAlbumsList: showAlbumsList });
    }

    setInitialLikedAlbums = (favouriteAlbums) => {
        let likedAlbumIds = [];
        let likedAlbums = [];
        for (let i = 0; i < favouriteAlbums.length; i++) {
            likedAlbumIds.push(favouriteAlbums[i].id);
            likedAlbums.push(favouriteAlbums[i]);
        }
        this.setState({
            likedAlbumIds: likedAlbumIds,
            likedAlbums: likedAlbums,
        });
    }

    toggleShowListOnCard = (index) => {
        let showAlbumsList = this.state.showAlbumsList;
        showAlbumsList[index] = !showAlbumsList[index];
        this.setState({ showAlbumsList: showAlbumsList });
    }

    toggleLikedAlbumIds = async (album) => {
        let likedAlbumIds = this.state.likedAlbumIds;
        let likedAlbums = this.state.likedAlbums;
        if (likedAlbumIds.includes(album?.id)) {
            likedAlbumIds?.splice(likedAlbumIds.indexOf(album?.id), 1);
            likedAlbums.splice(likedAlbumIds.indexOf(album?.id), 1);
        } else {
            likedAlbumIds.push(album?.id);
            likedAlbums.push(album);
        }
        console.log(likedAlbumIds)
        this.setState({
            likedAlbumIds: likedAlbumIds,
            likedAlbums: likedAlbums,
        })
        await this.props.setMyFavouriteAlbums(likedAlbums);
    }

    render () {
        return (
            <Fragment>
                <div className={`full-w flex flex-col justify-center content-center items-center`}>
                    <div className={`full-w px-4 py-4 flex flex-row justify-center content-center items-center`}>
                        <span className={`text-20 text-dark-gray-700 font-bold`}>
                            User Albums
                        </span>
                    </div>
                    {
                        this.state.waiting_To_Get_Albums === true &&
                        <div className={`full-w flex flex-col justify-center content-center items-center`}>
                            <img src={tailSpin} alt={``} className={`w-8 h-auto`}></img>
                        </div>
                    }
                    <div className={`full-w flex flex-col justify-center content-center items-start`}>
                        <div className={`full-w pt-4 pb-16 flex-wrap flex flex-row justify-center content-center items-center`}>
                            {
                                this.state?.usersArray?.map((user, index)=> {
                                    return (
                                        <>
                                            <div className={`relative w-52 h-72 m-4 bg-teal-50 ionic-material-card flex flex-col justify-center content-center items-center animate__animated animate__zoomIn transition transform duration-200`}
                                                // onMouseEnter={()=>{this.toggleShowListOnCard(index)}}
                                                // onMouseLeave={()=>{this.toggleShowListOnCard(index)}}
                                                key={index}
                                            >
                                                {
                                                    this.state.showAlbumsList[index] === false &&
                                                    <div className={`full-w full-h bg-teal-50  hover:bg-teal-100 border-0 rounded-md flex flex-col justify-center content-center items-center animate__animated animate__fadeIn`}
                                                        onClick={()=>{this.toggleShowListOnCard(index)}}
                                                    >
                                                        <span className={`text-30 text-dark-gray-700 font-bold`}>
                                                            {user.userId}
                                                        </span>
                                                        <div className={`absolute top-0 right-0 -mt-3 -mr-3 overflow-visible`}
                                                            onClick={()=>{this.toggleShowListOnCard(index)}}
                                                        >
                                                            <i className={`fas fa-circle text-20 text-gray-300`}
                                                            ></i>
                                                            <div className={`absolute top-0 right-0 pt-1 pr-2`}
                                                                onClick={()=>{this.toggleShowListOnCard(index)}}
                                                            >
                                                                {(user?.albums?.length)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                {
                                                    this.state?.showAlbumsList[index] === true &&
                                                    <div className={`p-2 full-w full-h bg-lime-200 hover:bg-lime-300 border-0 rounded-md flex flex-col justify-start content-start items-start `}
                                                    >
                                                        <div className={`full-w flex flex-row justify-center content-center items-center`}>
                                                            <span className={`text-center`}>
                                                                {`Albums list`}
                                                            </span>
                                                        </div>
                                                        {
                                                            user?.albums?.map((album, index2)=>{
                                                                console.log(this.state?.likedAlbumIds?.includes(album?.id))
                                                                return (
                                                                    <div className={`full-w flex flex-row justify-start content-start items-start animate__animated animate__backInRight`} key={`${index}_${index2}`} >
                                                                        <span className={`pr-1`}>
                                                                            {`${(index2+1)}.`}
                                                                        </span>
                                                                        <div className={`w-36 pl-1 text-9 text-start truncate flex flex-row justify-start content-start items-start`}>
                                                                            <span>
                                                                                {album?.title}
                                                                            </span>
                                                                        </div>
                                                                        <div
                                                                            onClick={()=>{this.toggleLikedAlbumIds(album, index2, index)}}
                                                                        >
                                                                            <img 
                                                                                src={thumbsUp} 
                                                                                alt={``}
                                                                                className={`w-6 h-auto text-10 ml-1 pl-1 text-black translate transform ${this.state?.likedAlbumIds?.includes(album?.id) === true? "rotate-180 mt-1" : "rotate-0"}`}
                                                                            ></img>
                                                                            {/* <i
                                                                                className={`bi text-10 ml-1 pl-1 text-dark-gray-600 translate transform ${this.state?.likedAlbumIds?.includes(album?.id) === true? "bi-hand-thumbs-down-fill" : "bi-hand-thumbs-up-fill"}`}
                                                                            ></i> */}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <div className={`absolute top-0 right-0 -mt-3 -mr-3 fade-in overflow-visible`}
                                                            onClick={()=>{this.toggleShowListOnCard(index)}}
                                                        >
                                                            <i className={`fas fa-times-circle text-18 text-dark-gray-600`}
                                                            ></i>
                                                            {/* <div className={`absolute top-0 right-0 mt-3 pt-1/2 mr-3 pr-1/2 flex flex-col justify-center content-center items-center`}>
                                                                <i className={`absolute fas fa-times text-15 text-lime-500`}></i>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

HomePage.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        albums: state.userState?.albums,
        usersArray: state.userState?.usersArray,
        favouriteAlbums: state.userState?.myFavouriteAlbums
    }
}

const mapDispatchToProps = {
    getAlbums,
    setMyFavouriteAlbums,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);