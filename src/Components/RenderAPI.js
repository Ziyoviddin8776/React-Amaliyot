import React, {useEffect, useState} from 'react';
import Card from "./Card/Card";
import GetAPI from "../API/getAPI";
import Loader from "../UI/Loader/Loader";
import {useFetching} from "../hook/useFetching";
function RenderApi(props) {
    const [posts,setPosts]=useState([])

    const [getPosts,isLoading,postError]=useFetching(async ()=>{
        const posts=await GetAPI.getAllPosts()
        setPosts(posts.data)
    })

    useEffect(()=>{
         getPosts()
    },[])

    const removePost=(post)=>{
        const newPosts=posts.filter(val=>val.id!==post.id)
        setPosts(newPosts)
    }
    return (
        <div className="container my-5">
            <div className="row">
                {postError && <h2>Error</h2>}
                {
                    isLoading ? <Loader/>
                        : <Card removePost={removePost} posts={posts}/>
                }
            </div>
        </div>
    );
}

export default RenderApi;