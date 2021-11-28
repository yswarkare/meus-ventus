import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { link_HomePage, link_MyFavorites } from '../../routes';


class DefaultHeader extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <Fragment>
                <div className={`fill-w flex flex-col justify-center content-center items-center`}>
                    <div className={`full-w px-4 py-4 bg-light-green-200 flex flex-row justify-center content-center items-center`}>
                        <span className={`text-20 text-dark-gray-700 font-bold`}>
                            {`Albums`}
                        </span>
                    </div>
                    <hr className={`full-w text-gray-400`}/>
                    <div className={`full-w px-16 py-1 bg-gray-200 flex flex-row justify-start content-start items-start`}>
                        <Link to={link_HomePage} className={`link mx-2 px-2 py-2`} >
                            <span className={`mx-4 px-4 text-12 font-semibold`}>
                                Home
                            </span>
                        </Link>
                        <Link to={link_MyFavorites} className={`link mx-2 px-2 py-2`} >
                            <span className={`mx-4 px-4 text-12 font-semibold`}>
                                My Favorites
                            </span>
                        </Link>
                    </div>
                    <hr className={`full-w text-gray-400`}/>
                </div>
            </Fragment>
        )
    }
}

DefaultHeader.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultHeader);