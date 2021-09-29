import React from 'react';
import './NavBar.css';
import { slide as Menu } from 'react-burger-menu';
import {Link, withRouter} from 'react-router-dom';
class NavBar extends React.Component{
    render(){ 
        const {location}=this.props;
        console.log(location);

        const homeClass = location.pathname==='/Portfolio' ? 'active-item':'';
        const aboutClass = location.pathname==='/about' ? 'active-item':'';
        const contactClass = location.pathname==='/contact' ? 'active-item':'';
        const skillsClass = location.pathname==='/skills' ? 'active-item':'';
        const projectClass = location.pathname==='/project' ? 'active-item':'';
        return (
        <Menu>
            {/* <a id="home" className="menu-item" href="/">Home</a> */}
            <Link to="/Portfolio" className={`menu-item ${homeClass}`}>
                Home
            </Link>
            <Link to="/about" className={`menu-item ${aboutClass}`}>
                About
            </Link>
            <Link to="/project" className={`menu-item ${projectClass}`}>
                Project
            </Link>
            <Link to="/skills" className={`menu-item ${skillsClass}`}>
                Skills
            </Link>
            <Link to="/contact" className={`menu-item ${contactClass}`}>
                Contact
            </Link>
            
        </Menu>
        );
    }
}
export default withRouter(NavBar);