import React from 'react';
import Navbar from './Navbar';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

const Chats = () => {

    const navigate = useNavigate();
    const logoutHandler = async() => {
        await auth.signOut();
        navigate("/") ;
    }

    return (
        <div>
            <Navbar handler={logoutHandler}/>
            <ChatEngine 
                height="calc(100vh - 45px)"
                projectID="36403f4c-280f-4369-a05d-64672cf80dc7"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chats;