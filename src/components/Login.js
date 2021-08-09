import React from 'react';
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons';
import firebase from 'firebase/app';
import { auth } from '../Firebase/Firebase';

export default function Login() {

    function signInWithGoogle() {
        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
    // function signInWithFacebook() {
    //     auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
    // }

    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome To Chat Messenger</h2>
                <div className='login-button google'
                onClick={signInWithGoogle}>
                    <GoogleOutlined/> Sign In With Google
                </div>
                <br/> <br/>
                <div className='login-button facebook'>
                    <FacebookOutlined/> Sign In With Facebook
                </div>
            </div>
        </div>
    )
}
