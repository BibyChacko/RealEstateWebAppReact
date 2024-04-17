import { useState } from "react";
import "./navbar.scss";

export default function NavBar(){
    const [open,setOpen] = useState(false);
    return (
        <nav>
            <div className="leftSide">
                <a href="./" className="logo">
                    <img src="logo.png" alt="Pin Address" />
                    <span>PinAddress</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="rightSide"> 
                <a href="/">Sign in</a>
                <a href="/" className="registerButton">Sign up</a>
                <div className="menuIcon">
                    <img src="menu.png" alt="Menu" onClick={()=>setOpen(prev => !prev)} />
                </div>
                <div className="menu" style={{right:open?"-50%":"0",}}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
              
        </nav>
    );
}