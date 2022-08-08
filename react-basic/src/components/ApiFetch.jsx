import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export const ApiFetch = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res => {
        //     setPosts(res.data)
        // });

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clicked]);

    const handlerClick = () => {
        setClicked(!clicked);
    };

    const onChangeId = (e) => {
        setId(e.target.value);
    };

  return (

    <div>
        <input type="text" value={id} onChange={onChangeId} />
        <br />
        <button onClick={handlerClick}>更新</button>
        <br />
        {posts.title}
        {/* <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}

        </ul> */}
    </div>
  )
}
