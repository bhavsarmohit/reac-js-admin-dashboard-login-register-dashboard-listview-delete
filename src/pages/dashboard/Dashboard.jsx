import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

import 'react-toastify/dist/ReactToastify.css';
// import '../../assets/css/style.css';


import Header from '../../components/dashboard/Header';
import Sidebar_Nav from '../../components/dashboard/Sidebar_Nav';
import Dashboard_Home from '../../components/dashboard/Dashboard_Home';
import { ToastContainer, toast } from 'react-toastify';
import Blog_Lists from '../../components/dashboard/Blog_Lists';

export const Dashboard = () => {

    const [uemail, setuemail] = useState(localStorage.getItem("uemail"));
    let upass = localStorage.getItem("upass");
    let uname = localStorage.getItem("uname");
    let umobile = localStorage.getItem("umobile");

    const navigate = useNavigate();

    // =====================
    // CUSTOM LOGIN VALIDATION
    useEffect(() => {
        if (uemail === null || uemail === '') {
            console.log(uemail);
            navigate('/login');
        }
    })
    // =====================

    const logout = () => {
        localStorage.removeItem("uemail")
        localStorage.removeItem("upass")
        localStorage.removeItem("uname")
        localStorage.removeItem("umobile")

        window.location.reload()
    }


    const [dashboardSidebarNavComponent, setDashboardSidebarNavComponent] = useState('blog_lists');
    const handleDataReceiveSidebar_Nav = (component) => {

        console.log("Received data from child component:", component);
        setDashboardSidebarNavComponent(component);
        // do something with the received data
    };

    const dashboardComponent = () => {
        switch (dashboardSidebarNavComponent) {
            case 'dashboard_home':
                return <Dashboard_Home />;
                break;

            case 'blog_lists':
                return <Blog_Lists />;
                break;

            case 'blog_accordion':
                toast.info("clicked on accordion");
                return <Dashboard_Home />;
                break;

            case 'about_contact':
                toast.info('clicked on contact')
                return <Dashboard_Home />;
                // Toast
                break;
            default:
                return <Dashboard_Home />;
                break;
        }
        // dashboardSidebarNavComponent=='' return <Dashboard_Home />;
    }

    return (
        <>

            <ToastContainer />
            <Header />

            <Sidebar_Nav onSidebarNavSelect={handleDataReceiveSidebar_Nav} />
            <main id="main" className="main">
                {
                    dashboardComponent()
                }
            </main>
        </>
    )
}
