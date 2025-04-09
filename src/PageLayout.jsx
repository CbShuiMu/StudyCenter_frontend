import styles from "./PageLayout.module.css"
import { motion } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { BrowserRouter, Outlet, Router, Link, useNavigate } from "react-router-dom";


export default function PageLayout() {
    const Username = "CbShuiMu"
    const navigate = useNavigate();
    const buttonRefs = useRef({});
    const footerdivRef = useRef(null);
    const [bondObject, setbondObject] = useLocalStorage("bondObject", "AboutMe");

    const navTo = (path) => {
        setbondObject(path)
        navigate(path);
    }

    function useLocalStorage(key, initialValue = null) {
        const [value, setValue] = useState(() => {
            try {
                const data = window.localStorage.getItem(key);
                return data ? JSON.parse(data) : initialValue;
            } catch {
                return initialValue;
            }
        });

        useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(value));
        }, [value, setValue])

        return [value, setValue];
    }

    useEffect(() => {
        if (bondObject) {
            // moveBar(bondObject);
        }
    }, [bondObject]);
    return (
        <div className={styles.PageLayout}>
            <header>

                <text>Welcome {Username}</text>
                {/* <ul>
                    <li><Link to="/AboutMe">AboutMe</Link></li>
                    <li><Link to="/StudyCenter">StudyCenter</Link></li>
                </ul> */}

            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* <h1>this is footer</h1> */}
                <div ref={footerdivRef}>
                    {/* <li className={styles.motiondiv}>
                        <motion.div

                            style={box}
                            initial={initialposition}
                            animate={position}
                            transition={{ duration: 0.5 }}
                        />
                    </li> */}
                    {['AboutMe', 'StudyCenter'].map((path) => (
                        <li key={path}>
                            <button
                                ref={(el) => (buttonRefs.current[path] = el)}
                                onClick={() => navTo(path)}
                            >
                                <img className={styles.buttonIcon} src={`/${path}.svg`} />
                                <br />
                                {path}
                            </button>
                        </li>
                    ))}
                    <img src="https://shuimucage-public.s3.ap-southeast-2.amazonaws.com/Ame.jpg" />
                </div>
            </footer>
            <h3>GoogleBye {Username}</h3>
        </div>
    );
}