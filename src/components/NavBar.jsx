import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function NavBar() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark')
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true);
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            setIsDarkMode(false);
        }
    }, [])

    return (
        <div className="Area" id="Nav">
            <div className="NavBar Region">
                <div className="Silicon FCC">
                    <Link to="/">
                        <img src="images/1_Header/SiliconLogo.svg" alt="Alternate Text" />
                    </Link>
                    Features
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="NavElements FCC">
                    <button className="btn DarkMode FCC">
                        Dark Mode
                        <label className="switch">
                            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}></input>
                            <span className="slider-round"></span>
                        </label>
                    </button>
                    <button className="btn">
                        <img src="images/1_Header/LoginLogo.png" alt="Alternate Text" />
                        Sign in / up
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NavBar