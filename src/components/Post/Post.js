import React from 'react';
import {useHistory} from 'react-router';

const Post = (props) => {
    const post = {
        border : "1px solid red",
        margin : "8px 10px",
        padding : "10px",
        borderRadius : "10px"
    }
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComment = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div style={post}>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={()=>showComment(id)}>Detail</button>
        </div>
    );
};

export default Post;