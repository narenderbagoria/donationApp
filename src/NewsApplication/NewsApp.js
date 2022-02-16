import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost';


function NewsApp() {
    const [BlogList, setBlogList] = useState([]);
    const API_KEY = "cfc9db640b432ab6881bda19ac492987";
    let BaseURL = `http://api.mediastack.com/v1/news?access_key=${API_KEY}`;
    let API = 'https://jsonplaceholder.typicode.com/photos';
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => console.log(data));
        });
        console.log("BlogList");
        return (
            <>
                console.log(BlogList);
                <h2>NewsApp</h2>
                <BlogPost List={BlogList} />
            </>
        )
    }
export default NewsApp