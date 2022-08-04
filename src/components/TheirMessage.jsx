const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser =! lastMessage || lastMessage.sender.username !== message.sender.username;


//if it is the first message by the user setting the background image as the avatar's for all the other messages code from mymessage is taken
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            {message?.attachments?.length > 0 //checking its an image or a message
                ? (
                    <img//if image the image is renderd as in ChatFeed
                        src = {message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{  marginLeft: isFirstMessageByUser ? '4px' : '48px ' }}
                    />
                ) : (
                    <div className = "message" style={{ float: 'left', backgroundColor: '#CABCDC',marginLeft: isFirstMessageByUser ? '4px' : '48px ' }}>
                        {message.text}
                    </div>
                )//the message is sent by others appear in left just like any chat application
            } 
        </div>
    );
}

export default TheirMessage;