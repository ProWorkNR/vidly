import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    
    state = {
        account:{username:"", password:""},
        errors : {}
};

validateProperty = ({name, value})=>{
 if(name==='username')
 if(value.trim()==='') return 'Usermae is RequiredVP';
 if(name==='password')
 if(value.trim()==='') return 'Password is RequiredVP';
};

    handleChange= ({currentTarget: input})=>{
        const account = {...this.state.account};
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        //account[e.currentTarget.name] = e.currentTarget.value;
        account[input.name] = input.value;
        this.setState({account,errors});
    };

    validate = () =>{
        const errors ={};
        const {account} = this.state;

        if(account.username.trim ()=== '')
        errors.username = 'Usrname is Required.'
        if(account.password.trim ()=== '')
        errors.password = 'Password is Required.'

        return Object.keys(errors).length === 0 ? null : errors;
    };

    handleSubmit = e =>{
        e.preventDefault();
        const errors = this.validate();
        console.log(errors);
        this.setState({errors: errors || {}});
        if(errors) return;
        //callthe server
        console.log("submitted");
    }

    render() { 
        const {account, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name='username' 
                        value={account.username} 
                        label='Username' 
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input 
                        name='password' 
                        value={account.password} 
                        label='Password' 
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;