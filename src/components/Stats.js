import React, { useState, useEffect } from 'react';
import { FaHeart, FaMapMarkerAlt, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Stats = () => {
    const [stats, setStats] = useState([
        { number: 0, text: 'People Supported', icon: < FaHeart / > },
        { number: 0, text: 'Cities', icon: < FaMapMarkerAlt / > },
        { number: 0, text: 'Support Sessions', icon: < FaUsers / > },
        { number: 0, text: 'Expert Counselors', icon: < FaShieldAlt / > }
    ]);

    useEffect(() => {
        const intervals = [
            setInterval(() => {
                setStats(prev => {
                    const newStats = [...prev];
                    if (newStats[0].number < 5000) newStats[0].number += 25;
                    return newStats;
                });
            }, 10),
            setInterval(() => {
                setStats(prev => {
                    const newStats = [...prev];
                    if (newStats[1].number < 30) newStats[1].number += 1;
                    return newStats;
                });
            }, 100),
            setInterval(() => {
                setStats(prev => {
                    const newStats = [...prev];
                    if (newStats[2].number < 10000) newStats[2].number += 30;
                    return newStats;
                });
            }, 10),
            setInterval(() => {
                setStats(prev => {
                    const newStats = [...prev];
                    if (newStats[3].number < 150) newStats[3].number += 1;
                    return newStats;
                });
            }, 50)
        ];

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    return ( <
        section className = "stats py-5"
        style = {
            { background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)' }
        } >
        <
        div className = "container" >
        <
        div className = "row text-center g-4" > {
            stats.map((stat, index) => ( <
                div className = "col-6 col-md-3"
                key = { index } >
                <
                div className = "stat-item p-3 rounded shadow-sm bg-white" >
                <
                div className = "stat-icon fs-1 text-secondary" > { stat.icon } < /div> <
                div className = "stat-number fs-3 fw-bold" > { stat.number.toLocaleString() } + < /div> <
                div className = "stat-text" > { stat.text } < /div> < /
                div > <
                /div>
            ))
        } <
        /div> < /
        div > <
        /section>
    );
};

export default Stats;