import "./scss/main.scss";
import SideNav from "./components/sideNav.tsx";

function App() {
    document.documentElement.setAttribute("data-theme", "light");
    return (
        <>
          <SideNav></SideNav>
        </>
    );
}

export default App;
