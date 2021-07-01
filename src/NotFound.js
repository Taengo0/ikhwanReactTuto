import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry, page not found!</h2>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;