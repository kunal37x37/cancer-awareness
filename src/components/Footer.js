import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaServer, FaCode } from 'react-icons/fa';
import apiService from '../services/apiService';

const Footer = ({ onRedirect }) => {
    const [apiStatus, setApiStatus] = useState({ online: false, loading: true });

    useEffect(() => {
        const checkApi = async() => {
            const status = await apiService.checkApiHealth();
            setApiStatus({...status, loading: false });
        };

        checkApi();
        const interval = setInterval(checkApi, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return ( <
        footer className = "footer py-5 bg-dark text-light" >
        <
        div className = "container" >
        <
        div className = "row g-4" >
        <
        div className = "col-md-4 text-center text-md-start" >
        <
        div className = "d-flex align-items-center gap-2 mb-2 justify-content-center justify-content-md-start" >
        <
        FaHeartbeat className = "fs-3 text-danger" / >
        <
        span className = "fs-4 fw-bold" > Cancer Awareness < /span> <
        /div> <
        p > Support, hope, and community
        for everyone affected by cancer. < /p> <
        div className = "d-flex gap-2 justify-content-center justify-content-md-start" >
        <
        FaFacebook / >
        <
        FaTwitter / >
        <
        FaInstagram / >
        <
        FaLinkedin / >
        <
        /div>

        <
        div className = "mt-3 pt-3 border-top border-secondary" >
        <
        div className = "d-flex align-items-center" >
        <
        FaServer className = "me-2" / >
        <
        small >
        API Status:
        <
        span className = { `ms-2 ${apiStatus.online ? 'text-success' : 'text-danger'}` } > { apiStatus.loading ? 'Checking...' : apiStatus.online ? 'Online' : 'Offline' } <
        /span> <
        /small> <
        /div> <
        /div> <
        /div>

        <
        div className = "col-md-4 text-center text-md-start" >
        <
        h5 className = "text-danger mb-3" > Quick Links < /h5> <
        div className = "d-flex flex-column gap-2" >
        <
        a href = "#features"
        className = "btn btn-outline-light d-flex align-items-center gap-2" > Services < /a> <
        a href = "#quotes"
        className = "btn btn-outline-light d-flex align-items-center gap-2" > Inspiration < /a> <
        a href = "#support"
        className = "btn btn-outline-light d-flex align-items-center gap-2" > Support Groups < /a> <
        a href = "#contact"
        className = "btn btn-outline-light d-flex align-items-center gap-2" > Contact < /a> <
        /div> <
        /div>

        <
        div className = "col-md-4 text-center text-md-start" >
        <
        h5 className = "text-danger mb-3" > Contact Us < /h5> <
        p > support @cancerawareness.org < /p> <
        p > +91 1800 - 227 - 2345 < /p> <
        div className = "d-flex gap-2" >
        <
        button className = "btn btn-outline-danger d-flex align-items-center gap-2"
        onClick = { onRedirect } >
        <
        FaHome / > Main Website <
        /button> <
        button className = "btn btn-outline-info d-flex align-items-center gap-2"
        onClick = {
            () => window.open('https://github.com/public-apis/public-apis', '_blank') } >
        <
        FaCode / > APIs Used <
        /button> <
        /div>

        <
        div className = "mt-3 pt-3 border-top border-secondary" >
        <
        small className = "text-muted" >
        <
        FaCode className = "me-1" / >
        Powered by: Quotable API• JSONPlaceholder• React <
        /small> <
        /div> <
        /div> <
        /div>

        <
        div className = "text-center mt-4 border-top border-secondary pt-3" >
        <
        div className = "row" >
        <
        div className = "col-md-6" >
        <
        small >
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy <
        /small> <
        /div> <
        div className = "col-md-6" >
        <
        small className = "text-muted" > ©{ new Date().getFullYear() }
        Cancer Awareness & Support• Real - time API Integration Demo <
        /small> <
        /div> <
        /div> <
        /div> <
        /div> <
        /footer>
    );
};

export default Footer;