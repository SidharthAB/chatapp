import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => { //accept the event of the button as e, and it is asyncronous 
        e.preventDefault();

        const authObject = { 'Project-ID': "e2115efc-13b8-42df-993b-caade83dbe59", 'User-Name': username, 'User-Secret': password};

        //this is asynchronous req so we add a  wait before, axios is the function to make req to innerworking of the API 
        //Where the client continues execution after initiating the request and processes the result whenever the AppServer makes it available.
        try{
            // username / password ==> chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', {headers : authObject });
            // workout->logged in 

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);//stores the username and pass so everytime we move out we dont need to go to login page

            window.location.reload();//this is used so if there is no login data at the local storage it will return login form , App.js it is called

        }
        catch(error){
            setError('sorry mahn- its not correct')
            // error --> try with new username
        }
        
        
        


    }

    return (
        <div className="wrapper">
            <div className = "form">
                <h1 className = "title" >EDPLAT</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>BEGIN CHATTING</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                    
                </form>
                
            </div>
        </div>
    );
}

export default LoginForm //always export dont forget that