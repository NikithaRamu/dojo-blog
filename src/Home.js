import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () =>{

    const {isPending,data:blogs,error} = useFetch('http://localhost:8000/blogs')

    // function deleteBlog(id)
    // {
    //     setBlogs(blogs.filter(blog=>blog.id!==id))
    // }

    return(
        <div>
            <h2>Homepage</h2>
            {/* <button onClick={clickHandler}>click me</button>
            <button onClick={()=>clickHandler1('mario')}>click me</button>
            <button onClick={(event)=>clickHandler2(event)}>click me</button> */}
            {error && <h1>{error}</h1>}
            {isPending && <h1>Waiting for response</h1>}
            {blogs &&
                    <BlogList blogs={blogs} title="all blogs"></BlogList>
                    // <BlogList blogs={blogs.filter(blog=>blog.author==='mario')} title = "marios blogs"></BlogList>
            }

        </div>
    )
}

export default Home;