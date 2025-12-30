import React from 'react';
import { FaHeartbeat, FaPhoneAlt, FaCalendarCheck, FaHome } from 'react-icons/fa';

const Hero = ({ onRedirect }) => {
    return ( <
        section className = "hero position-relative d-flex align-items-center"
        style = {
            { minHeight: '90vh', background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' } } >

        <
        div className = "container d-flex flex-column flex-lg-row align-items-center text-center text-lg-start" >
        <
        div className = "hero-content text-white flex-lg-1 mb-4 mb-lg-0" >
        <
        h1 className = "display-4" >
        India 's Best <span className="highlight">Cancer Support</span> Platform <
        /h1> <
        p className = "lead" >
        Comprehensive support
        for cancer patients and families.Access counseling,
        community support, and resources to help you through your journey. <
        /p> <
        div className = "d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start" >
        <
        button className = "btn btn-light d-flex align-items-center gap-2" >
        <
        FaPhoneAlt / > 24 / 7 Helpline <
        /button> <
        button className = "btn btn-light d-flex align-items-center gap-2" >
        <
        FaCalendarCheck / > Book Counseling <
        /button> <
        button className = "btn btn-outline-light d-flex align-items-center gap-2"
        onClick = { onRedirect } >
        <
        FaHome / > Visit Main Website <
        /button> <
        /div> <
        /div> <
        div className = "hero-image flex-lg-1" >
        <
        img src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        className = "img-fluid rounded shadow-lg"
        alt = "Cancer Support" /
        >
        <
        /div> <
        /div> <
        /section>
    );
};

export default Hero;