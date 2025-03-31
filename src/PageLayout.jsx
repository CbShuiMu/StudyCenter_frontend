import { BrowserRouter, Outlet, Router,Link} from "react-router-dom";

export default function PageLayout() {
    const Username = "CbShuiMu"
    return (
        <div>
            <header>
                <h1>Welcome {Username}</h1>
                <img src="https://shuimucage-public.s3.ap-southeast-2.amazonaws.com/Ame.jpg"></img>
                <ul>
                    <li><Link to="/StudyCenter">StudyCenter</Link></li>
                </ul>
            </header>
            <main>
            <Outlet/>
            </main>
            <footer>
                <h1>GoogleBye {Username}</h1>
            </footer>
        </div>
    );
}