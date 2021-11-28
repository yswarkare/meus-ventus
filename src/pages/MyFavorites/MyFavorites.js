import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class MyFavorites extends Component {

    constructor(props){
        super(props)
        this.state = {
            favouriteAlbums: [],
        }
    }

    componentDidMount = () => {
        this.setState({
            favouriteAlbums: this.props?.favouriteAlbums
        })
    }

    render () {
        return (
            <Fragment>
                <div className={`full-w flex flex-col justify-center content-center items-center`}>
                    <div className={`full-w px-4 py-4 flex flex-row justify-center content-center items-center`}>
                        <span className={`text-20 text-dark-gray-700 font-bold`}>
                            My Favourite Albums
                        </span>
                    </div>
                    <div className={`full-w px-4 py-4 flex flex-col justify-center content-center items-center`}>
                        {
                            this.state?.favouriteAlbums?.map((album, index) => {
                                return (
                                    <div className={`w-1/2 my-1 mx-1 py-1 px-4 bg-glass border-1 border-darker-gray-500 rounded-md flex flex-row justify-start content-start items-start`} key={index}>
                                        <span className={`pr-1`}>
                                            {`${(index+1)}.`}
                                        </span>
                                        <span className={`pl-1`}>
                                            {album?.title}
                                        </span>
                                    </div>
                                )
                            })
                        }
                        {
                            this.state?.favouriteAlbums?.length <= 0 &&
                            <div className={`full-w flex flex-col justify-center content-center items-center`}>
                                <span className={`text-darker-gray-500`}>
                                    {`No favourite albums available`}
                                </span>
                            </div>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

MyFavorites.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        favouriteAlbums: state.userState?.myFavouriteAlbums
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyFavorites);