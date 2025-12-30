import React, { useState, useEffect } from 'react';
import { FaHeart, FaUsers, FaHandsHelping } from 'react-icons/fa';

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const features = [{
            icon: < FaHeart / > ,
            title: 'Emotional Support',
            text: 'Professional counseling and support groups for emotional well-being during treatment and recovery.'
        },
        {
            icon: < FaUsers / > ,
            title: 'Community',
            text: 'Connect with others who understand your journey in our supportive community groups.'
        },
        {
            icon: < FaHandsHelping / > ,
            title: 'Practical Help',
            text: 'Transportation assistance, meal services, and financial guidance for patients.'
        }
    ];

    return ( <
        section className = "features py-5 bg-light"
        id = "features" >
        <
        div className = "container text-center" >
        <
        h2 className = "mb-3" > What We Offer < /h2> <
        p className = "mb-5 text-muted" > Comprehensive support services
        for cancer patients and families < /p> <
        div className = "row g-4" > {
            features.map((feature, i) => ( <
                div className = "col-md-4"
                key = { i } >
                <
                div className = { `feature-card p-4 rounded shadow-sm ${activeFeature === i ? 'active' : ''}` } >
                <
                div className = "feature-icon fs-1 text-danger mb-3" > { feature.icon } < /div> <
                h3 > { feature.title } < /h3> <
                p > { feature.text } < /p> <
                /div> <
                /div>
            ))
        } <
        /div> <
        div className = "mt-3 d-flex justify-content-center gap-2" > {
            [0, 1, 2].map(i => ( <
                button key = { i }
                className = { `indicator btn btn-sm rounded-circle ${activeFeature === i ? 'bg-danger' : 'bg-secondary'}` }
                onClick = {
                    () => setActiveFeature(i) } >
                < /button>
            ))
        } <
        /div> <
        /div> <
        /section>
    );
};

export default Features;