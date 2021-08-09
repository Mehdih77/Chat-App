import React from 'react';
import { auth } from '../Firebase/Firebase';
import { ChatEngine } from 'react-chat-engine';
import { useHistory } from 'react-router';


export default function Chats() {

    const history = useHistory();

    async function handleLogout() {
        await auth.signOut();
        history.push('/')
    }

    return (
        <div className='chats-page'>
            <div className="nav-bar">
                <div className="logo-tab">Chat Messenger</div>
                <div onClick={handleLogout} className='logout-tab'>Logout</div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="1b946ccf-963a-4c5c-9c60-6c135321c0fb"
                userName="."
                userSecret="."
             />
        </div>
    )
}
