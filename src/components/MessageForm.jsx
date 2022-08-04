import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';//icons for uploading the image

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const {chatId, creds } = props;


    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);

    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if( text.length>0 ){
            sendMessage(creds, chatId, { text });
        }

        setValue(''); //after sending message resetting the value to an empty string

    };
    //below the event is uploading the image
    const handleUpload = (event) => {
        sendMessage(creds , chatId, { files: event.target.files, text: ''});//text is null as its just an image there.
    };

    //setting the icons for image button send button etc above are the functions for the functionality and below we are making a form to do it


    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder="Send a message... "
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button"> 
                <span className = "image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple = {false}
                id = "upload-button"
                style = {{display: 'none' }}
                onChange = {handleUpload}
            />
            <button type = "submit" className= "send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
};

export default MessageForm;