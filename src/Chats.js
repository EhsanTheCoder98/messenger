import React , {useState,useEffect,useContext} from 'react';
import Navbar from './Navbar';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
import { AuthContext } from './Contexts/AuthContextProvider';

const Chats = () => {

    const [loading,setLoading] = useState(true);
    const user = useContext(AuthContext);

    const navigate = useNavigate();
    const logoutHandler = async() => {
        await auth.signOut();
        navigate("/") ;
    }

    useEffect(()=>{
        if(!user){
            navigate("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me",{
            headers:{
                "project-id":"36403f4c-280f-4369-a05d-64672cf80dc7",
                "user-name":user.email,
                "user-secret":user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formdata = new FormData();
            formdata.append("email",user.email);
            formdata.append("username",user.email);
            formdata.append("secret",user.uid);
            getFile(user.photoURL)
                .then(avatar=>{
                    formdata.append("avatar",avatar,avatar.name);
                    axios.post("https://api.chatengine.io/users/",formdata,{
                        headers:{
                            "private-key":"e4b954d4-917c-4a97-a628-2c43c1bf99e4"
                        }
                    })
                    .then(()=>setLoading(false))
                    .catch((err)=>console.log(err))
                })
        })

    },[user,navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data],"userPhoto.jpg",{type : "image/jpeg"})
    }

    if(!user || loading) return "IS LOADING"

    return (
        <div>
            <Navbar handler={logoutHandler}/>
            <ChatEngine 
                height="calc(100vh - 45px)"
                projectID="36403f4c-280f-4369-a05d-64672cf80dc7"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;