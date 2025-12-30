import React, { useState } from 'react';
import { FaHeartbeat, FaPhoneAlt, FaUserMd, FaHome, FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ onRedirect }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( <
        header className = "header sticky-top bg-dark bg-opacity-25 backdrop-blur py-3 shadow-sm" >
        <
        div className = "container d-flex justify-content-between align-items-center flex-wrap" >
        <
        div className = "d-flex align-items-center gap-2" >
        <
        FaHeartbeat className = "logo-icon fs-2 text-danger" / >
        <
        span className = "logo-text fs-3 fw-bold text-white" > Cancer Awareness & Support < /span> <
        /div>

        { /* Desktop Navigation */ } <
        nav className = "d-none d-md-flex align-items-center gap-3 flex-wrap" >
        <
        a className = "text-white nav-link"
        href = "#features" > Features < /a> <
        a className = "text-white nav-link"
        href = "#quotes" > Inspiration < /a> <
        a className = "text-white nav-link"
        href = "#support" > Support < /a> <
        a className = "text-white nav-link"
        href = "#contact" > Contact < /a> <
        button className = "btn btn-danger d-flex align-items-center gap-1"
        onClick = { onRedirect } >
        <
        FaHome / > Main Website < FaExternalLinkAlt / >
        <
        /button> <
        /nav>

        { /* Mobile Menu Button */ } <
        button className = "d-md-none btn btn-danger d-flex align-items-center gap-1"
        onClick = {
            () => setMenuOpen(!menuOpen) } >
        { menuOpen ? < FaTimes / > : < FaBars / > } <
        /button> <
        /div>

        { /* Mobile Navigation */ } {
            menuOpen && ( <
                div className = "d-md-none container mt-3" >
                <
                div className = "bg-dark bg-opacity-75 rounded p-3" >
                <
                a className = "text-white nav-link d-block py-2"
                href = "#features"
                onClick = {
                    () => setMenuOpen(false) } >
                Features <
                /a> <
                a className = "text-white nav-link d-block py-2"
                href = "#quotes"
                onClick = {
                    () => setMenuOpen(false) } >
                Inspiration <
                /a> <
                a className = "text-white nav-link d-block py-2"
                href = "#support"
                onClick = {
                    () => setMenuOpen(false) } >
                Support <
                /a> <
                a className = "text-white nav-link d-block py-2"
                href = "#contact"
                onClick = {
                    () => setMenuOpen(false) } >
                Contact <
                /a> <
                button className = "btn btn-danger w-100 d-flex align-items-center justify-content-center gap-1 mt-2"
                onClick = {
                    () => {
                        setMenuOpen(false);
                        onRedirect();
                    }
                } >
                <
                FaHome / > Main Website < FaExternalLinkAlt / >
                <
                /button> <
                /div> <
                /div>
            )
        } <
        /header>
    );
};

export default Header;