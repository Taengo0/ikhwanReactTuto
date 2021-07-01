import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();
    console.log(data);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending ? <div>Loading..</div> : (data && (
                <>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                    <h2>Author :{data.author}</h2>
                    <button onClick={handleClick}>Delete</button>
                </>
            ))}

        </div>
    );
}
 
export default BlogDetails;