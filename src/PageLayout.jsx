import { BrowserRouter, Outlet, Router,Link} from "react-router-dom";

export default function PageLayout() {
    return (
        <div className="container">
            <header>
                <h1>Jun Inagawa</h1>
                <img src="https://shuimucage-public.s3.ap-southeast-2.amazonaws.com/01_dag_Jun_Inagawa_Key_Visual.jpeg"/>
                <nav>
                    <Link to="">HomePage</Link><br/>
                    <Link to="about">AboutPage</Link>
                </nav>
            </header>
            <Outlet/>
            <footer>
                <img src="https://shuimucage-public.s3.ap-southeast-2.amazonaws.com/Ame.jpg"></img>
                <h1>CbShuiMu</h1>
            </footer>
        </div>
    );
}