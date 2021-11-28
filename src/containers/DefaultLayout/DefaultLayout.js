import React, { Component, Fragment, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import PropTypes from 'prop-types';
import DefaultHeader from "../DefaultHeader";
import DefaultFooter from "../DefaultFooter";
import Loader from "../../components/Loader";
import AuthValidator from "../../components/AuthValidator";
import routes from "../../routes";

class DefaultLayout extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render () {
        return (
            <Fragment>
                <div id={`default-layout`} className={`full-w flex flex-col justify-center content-center items-center`}>
                    <DefaultHeader></DefaultHeader>
                    <span>default layout</span>
                    <main className={`full-w flex flex-col justify-center content-center items-center`}>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                {routes.map((route, index) => {
                                    console.log(route)
                                    return route?.component ? (
                                        <Route
                                            key={index}
                                            path={route?.path}
                                            exact={route?.exact}
                                            name={route?.name}
                                            element={
                                                <AuthValidator
                                                    authorizedcomponent={route.component}
                                                    urlpath={route.path}
                                                    routes={route?.routes ? route?.routes : []}
                                                    {...this.props}
                                                />
                                            }
                                        />
                                    ) : null;
                                })}
                            </Routes>
                        </Suspense>
                    </main>
                    <DefaultFooter></DefaultFooter>
                </div>
            </Fragment>
        )
    }
}

DefaultLayout.propTypes = {
    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);