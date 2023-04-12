import React from 'react'
import './header.css'
export default function Header() {
    return (
        <div className='myHeader'>
            <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#"><i class="fa-solid fa-glasses"></i></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navMenu">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Prada</a>
                                    <a className="dropdown-item" href="#">Dior</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Fendi / Gucci</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline my-2 my-lg-0 ml-5 ">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
            </nav>
        </div>

    )
}
