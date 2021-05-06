import React, { Component } from 'react'
import {Link} from "gatsby"
// import {logo} from '../../images/logo.png'
import "../layout.css"
import { FaCartArrowDown } from "react-icons/fa";

export default class Navbar extends Component {

    state = {
        navbarState: false,
        navbarClass: "collapse navbar-collapse justify-content-end",
        menus:[{
            id:1,
            text:"Home",
            url:"/",
        }, {
            id:2,
            text:"About",
            url:"/about",
        }, {
            id:3,
            text:"Services",
            url:"/services",
        },{
            id:4,
            text:"Contact",
            url:"/contact",
        }]
    }
    myToggler = () => {
        this.state.navbarState ? this.setState({
            navbarState:false,
            navbarClass:"collapse navbar-collapse"
        }) : this.setState({
            navbarState:true,
            navbarClass:"collapse navbar-collapse collapse show justify-content-end"
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm text-white bg-theme ">
            <Link to="/" className="navbar navbar-expand-sm bg-theme text-white">    
            </Link>
                <button className="navbar-toggler" type="button" onClick={this.myToggler}>
                    <span className="text-white">Menu</span>
                </button>
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav mr-5">
                        {this.state.menus.map( menu => {
                            return(
                            <li key={menu.id} className="nav-item">
                                <Link to={menu.url} className="nav-link text-white">{menu.text}</Link>
                            </li>
                            )
                        })}    
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                            <FaCartArrowDown className="cart-icon"/>
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}
