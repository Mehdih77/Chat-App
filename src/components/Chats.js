import React, {useState,useEffect,useRef} from 'react';
import { auth } from '../Firebase/Firebase';
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from 'react-router';
import {useAuth} from '../contexts/AuthContext';
import axios from 'axios';


export default function Chats() {

    const {user} = useAuth();
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    async function handleLogout() {
        await auth.signOut();
        history.push('/')
    }
    //for getting any type of files like image
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: 'image/jpeg' } )
    }

    useEffect(() => {
        if (!user) {
            history.push('/');
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": "1b946ccf-963a-4c5c-9c60-6c135321c0fb",
                "user-name": user.email,
                "user-secret": user.uid
            }
        }).then( () => {
            setLoading(false);
        }).catch(() => {
            // if does not have user, create new user
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);

        getFile(user.photoURL)
            .then((avatar) => {
                    formdata.append("avatar", avatar, avatar.name );

            axios.post('https://api.chatengine.io/users', 
                    formdata,
                    { headers: {
                        "private-key" : "24d9f43e-7430-4885-9860-c5d3e7ec8d57"
                    }})
            .then(() => setLoading(false))
            .catch((error) => console.log(error))
            })
        })
    }, [user,history])

    if (!user || loading) {
        return "Loading ..."
    }

    return (
        <div className='chats-page'>
            <div className="nav-bar">
                <div className="logo-tab">Chat Messenger</div>
                <div onClick={handleLogout} className='logout-tab'>Logout</div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="1b946ccf-963a-4c5c-9c60-6c135321c0fb"
                userName={user.email}
                userSecret={user.uid}
             />
        </div>
    )
}
