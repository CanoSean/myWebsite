import "./intro.scss"
import { init } from 'ityped'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor:false,
            backDelay:1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Developer", "Desinger", "Artist"]
        });
    }, [])
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/person.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Sean Cano</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#resume">
                    <KeyboardArrowDownIcon className="down"/>
                </a>
            </div>
        </div>
    )
}
