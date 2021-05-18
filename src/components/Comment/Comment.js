import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <h1>{name} : {email}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Comment;