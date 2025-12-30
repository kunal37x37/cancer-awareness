import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import QuotesSection from '../components/QuotesSection';
import SupportSection from '../components/SupportSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const LandingPage = () => {
    const [redirecting, setRedirecting] = useState(false);

    const handleRedirect = () => {
        setRedirecting(true);
        setTimeout(() => {
            window.location.href = "https://www.bing.com/ck/a?!&&p=4976e65bcc28bbcf87e21f3b396b534116bdb27cfa73e480ca553d071d58ae1bJmltdHM9MTc2NzA1MjgwMA&ptn=3&ver=2&hsh=4&fclid=21f3def4-edd4-6d1e-2049-cde0ec666cd6&psq=india+canser+website&u=a1aHR0cHM6Ly9jYW5jZXJpbmRpYS5vcmcuaW4v";
        }, 1000);
    };

    return ( <
        div className = "cancer-awareness-landing" > { /* Redirect Overlay */ } {
            redirecting && ( <
                div className = "redirect-overlay d-flex justify-content-center align-items-center" >
                <
                div className = "redirect-content text-center p-4 rounded shadow bg-white" >
                <
                h2 > Redirecting to Main Website < /h2> <
                div className = "loading-spinner my-3" > < /div> <
                p > Please wait... < /p> < /
                div > <
                /div>
            )
        }

        <
        Header onRedirect = { handleRedirect }
        /> <
        Hero onRedirect = { handleRedirect }
        /> <
        Stats / >
        <
        Features / >
        <
        QuotesSection / >
        <
        SupportSection onRedirect = { handleRedirect }
        /> <
        ContactForm / >
        <
        Footer onRedirect = { handleRedirect }
        /> < /
        div >
    );
};

export default LandingPage;