import React, { Component } from 'react';

class AuthValidator extends Component {

    constructor(props){
        super(props);
        
    }

    componentDidMount () {
        // console.log(this.props)
    }

    // isValid = () => {
    //     //TODO IMPLEMENT VALIDATION LOGIC HERE.
    // }

    render() {
        // if (this.isValid()) {
        //     return (
        //         <this.props.authorizedcomponent {...this.props}/>
        //     );
        // }else{
        //     this.props.history.push('/login/?rto='+btoa(this.props.urlpath));
        //     return(<div></div>);
        // }
        return (
            <this.props.authorizedcomponent {...this.props}/>
        );
    }

}

export default AuthValidator;