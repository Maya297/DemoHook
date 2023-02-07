import { Link } from "react-router-dom";

const MainNavigation = () => {
    return (
        <header>
            <h2>React Hooks</h2>
            <div>
                <Link to='/state'>Hooks</Link>
                <Link to='/context-api'>Context</Link>
                <Link to='/redux'>Redux</Link>
            </div>
        </header>
    );
};
export default MainNavigation;