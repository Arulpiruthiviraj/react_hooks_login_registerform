import React from 'react';
import LogIn from "../form/LoginForm";
import RegisterForm from "../form/RegisterForm";
import UserRecord from "../records/RegisteredUser";

const Master = () => {
    const userData = [
        { id: 1, name: 'Arul', age: '24' ,email:'aprprasanth16@gmail.com'},
        { id: 2, name: 'Mohan', age: '34' ,email:'mehananan@gmail.com'},
        { id: 3, name: 'Ganeshan', age: '28' ,email:'jonathan@gmail.com'},
    ];
    return (
        <div className="App">
            <RegisterForm/>
            <LogIn/>
            <UserRecord users={userData}/>
        </div>
    );
};

export default Master;