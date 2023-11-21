const BlogList = ({blogs,title,deleteBlog}) =>
{
    // console.log(props.blogs)
    // const blogs = props.blogs;

    // function deleteBlog(id)
    // {
    //     console.log("deletee"+id)
    // }
    return(
        <div className="blog-list">
            {title}
                        {blogs.map((blog)=>(
                <div className = "blog-preview" key={blog.id}>
                 <h2>{blog.title}</h2>   
                  <p>Written by {blog.author}</p> 
                    {/* <button onClick={()=>deleteBlog(blog.id)}>Delete</button> */}
                </div>
            ))}
        </div>

    )
}

export default BlogList;