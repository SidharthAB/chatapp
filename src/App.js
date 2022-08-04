import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm /> //login form called if not in local storage


	return (
		<ChatEngine
			height="100vh"
			projectID="e2115efc-13b8-42df-993b-caade83dbe59"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>} //customise everything related to chat
			
		/>
	);
}
export default App;