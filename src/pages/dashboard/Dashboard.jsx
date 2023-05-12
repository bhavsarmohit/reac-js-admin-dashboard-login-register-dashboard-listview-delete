import { React, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

import 'react-toastify/dist/ReactToastify.css';
// import '../../assets/css/style.css';


import Header from '../../components/dashboard/Header';
import { ToastContainer, toast } from 'react-toastify';
import DashboardHome from '../../components/dashboard/DashboardHome';
import BlogLists from '../../components/dashboard/BlogLists';
import SidebarNav from '../../components/dashboard/SidebarNav';

export const Dashboard = () => {

    // const [uemail, setuemail] = useState(localStorage.getItem("uemail"));
    // let upass = localStorage.getItem("upass");
    // let uname = localStorage.getItem("uname");
    // let umobile = localStorage.getItem("umobile");
    // const navigate = useNavigate();
    // // =====================
    // // CUSTOM LOGIN VALIDATION
    // useEffect(() => {
    //     if (uemail === null || uemail === '') {
    //         console.log(uemail);
    //         navigate('/login');
    //     }
    // })
    // // =====================
    // const logout = () => {
    //     localStorage.removeItem("uemail")
    //     localStorage.removeItem("upass")
    //     localStorage.removeItem("uname")
    //     localStorage.removeItem("umobile")
    //     window.location.reload()
    // }


    const [dashboardSidebarNavComponent, setDashboardSidebarNavComponent] = useState('blog_lists');
    const handleDataReceiveSidebarNav = (component) => {

        console.log("Received data from child component:", component);
        setDashboardSidebarNavComponent(component);
        // do something with the received data
    };

    const dashboardComponent = () => {
        switch (dashboardSidebarNavComponent) {
            case 'DashboardHome':
                return <DashboardHome />;
            // break;

            case 'BlogLists':
                return <BlogLists />;
            // break;

            case 'BlogAccordion':
                toast.info("clicked on accordion");
                return <DashboardHome />;
            // break;

            case 'AboutContact':
                toast.info('clicked on contact')
                return <DashboardHome />;
            // Toast
            // break;
            default:
                return <DashboardHome />;
            // break;
        }
        // dashboardSidebarNavComponent=='' return <Dashboard_Home />;
    }

    return (
        <>

            <ToastContainer />
            <Header />

            <SidebarNav onSidebarNavSelect={handleDataReceiveSidebarNav} />
            <main id="main" className="main">
                {
                    dashboardComponent()
                }
            </main>
        </>
    )
}
