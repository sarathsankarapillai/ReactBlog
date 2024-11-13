import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Error</h1>
            <p>Page not Found</p>
            <Link to='/'>Go To Home</Link>
        </div>
    );
}
 
export default NotFound;