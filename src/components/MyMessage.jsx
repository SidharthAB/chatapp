const MyMessage = ({ message }) => {
    if(message?.attachments?.length > 0) { //checking its an image or a message
        return (
            <img//if image the image is renderd as in ChatFeed
                src = {message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float:'right '}}
            />
        );
    }
    return ( //if not image it will be rendered as follows
        <div className = "message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
};

export default MyMessage;