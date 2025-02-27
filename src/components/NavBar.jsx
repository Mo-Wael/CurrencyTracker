import { useEffect, useState } from 'react';
import reactLogo from '../assets/react.svg'

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('dark-mode');
        if (savedMode) {
            document.body.classList.add('dark-mode');
            setIsDarkMode(true);
        }
    }, []);

    const changeMode = () => {
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            localStorage.removeItem('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'true');
        }
        setIsDarkMode(!isDarkMode);
    };

    return ( 
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="https://react.dev/"><img src={reactLogo} alt="react logo" /></a>
                    <h2 className="brand-logo">Currency Converter💵💹</h2>
                    <button onClick={changeMode} className='navButton'>{isDarkMode? "Light Mode" : "Dark Mode"}</button>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;