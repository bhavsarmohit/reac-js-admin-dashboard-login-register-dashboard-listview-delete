import React from "react";
import { Link } from 'react-router-dom';

const SidebarNav = (props) => {
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <Link className="nav-link " onClick={() => { props.onSidebarNavSelect('DashboardHome') }}>
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="#">
                            <i className="bi bi-menu-button-wide"></i><span>Blogs</span><i className="bi bi-chevron-down ms-auto"></i>
                        </Link>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>

                                <Link onClick={() => { props.onSidebarNavSelect('BlogLists') }}>
                                    <i className="bi bi-circle"></i><span>Lists</span>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => { props.onSidebarNavSelect('BlogAccordion') }}>
                                    <i className="bi bi-circle"></i><span>Accordion</span>
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <li className="nav-heading">About</li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => { props.onSidebarNavSelect('AboutContact') }}>
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li>


                </ul>

            </aside>
        </>
    )
}

export default SidebarNav;