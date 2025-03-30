import { BrowserRouter, Outlet, Router,Link} from "react-router-dom";

export default function PageLayout() {
    return (
        <div className="container">
            <header>
                <h1>CbShuiMu</h1>
                <img src="https://shuimucage-public.s3.ap-southeast-2.amazonaws.com/Ame.jpg"></img>
            </header>
            <Outlet/>
        </div>
    );
}