import { Link } from "react-router-dom";

const BlogList = (props) => {
    console.log(props)
    const blogs = props.blogs;
    const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog =>
                <Link key={blog.id} to={"/blogs/"+ blog.id}>
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        {/* <button onClick={}>Delete Blog</button> */}
                    </div>
                </Link> 
            )}
        </div>
     );
}
 
export default BlogList;