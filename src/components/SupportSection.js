import React from 'react';
import { FaCalendarCheck, FaPhoneAlt, FaUsers, FaShieldAlt, FaHome, FaDatabase } from 'react-icons/fa';

const SupportSection = ({ onRedirect }) => {
    return ( <
        section className = "support py-5"
        id = "support" >
        <
        div className = "container" >
        <
        div className = "row align-items-center g-4" >
        <
        div className = "col-lg-6 text-center text-lg-start" >
        <
        h2 > Get the Support You Need < /h2> <
        p className = "text-muted" >
        Our comprehensive support system makes it easy to access counseling,
        connect with others, and find resources during your cancer journey. <
        /p> <
        ul className = "list-unstyled" >
        <
        li className = "mb-2" > < FaCalendarCheck className = "text-danger me-2" / > Schedule counseling sessions < /li> <
        li className = "mb-2" > < FaPhoneAlt className = "text-danger me-2" / > 24 / 7 crisis helpline available < /li> <
        li className = "mb-2" > < FaUsers className = "text-danger me-2" / > Support group meetings < /li> <
        li className = "mb-2" > < FaShieldAlt className = "text-danger me-2" / > Confidential and secure < /li> <
        li className = "mb-2" > < FaDatabase className = "text-danger me-2" / > Real - time API integration < /li> <
        /ul> <
        div className = "d-flex gap-2 flex-wrap mt-3" >
        <
        button className = "btn btn-light d-flex align-items-center gap-2" >
        <
        FaPhoneAlt / > Call Helpline <
        /button> <
        button className = "btn btn-light d-flex align-items-center gap-2" >
        <
        FaCalendarCheck / > Book Session <
        /button> <
        button className = "btn btn-outline-dark d-flex align-items-center gap-2"
        onClick = { onRedirect } >
        <
        FaHome / > Main Website <
        /button> <
        /div> <
        /div> <
        div className = "col-lg-6 text-center" >
        <
        div className = "support-image p-3 bg-dark rounded-4 shadow-lg d-inline-block" >
        <
        img src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        className = "img-fluid rounded-4"
        alt = "Support Group" /
        >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /section>
    );
};

export default SupportSection;