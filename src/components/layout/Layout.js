import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <div>
            <MainNavigation /><br></br>
            <main>{props.children}</main>
        </div>
    );
};
export default Layout;