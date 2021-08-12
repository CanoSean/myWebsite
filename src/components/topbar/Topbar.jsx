import "./topbar.scss"
import {Phone,Mail,Menu} from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Sean</a>
                    <div className="itemContainer">
                        <Phone className="icon"/><span>(587) 700 2181</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/><span>sean.cano@edu.sait.ca</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
