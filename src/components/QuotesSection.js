import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaSync, FaWifi, FaExclamationTriangle } from 'react-icons/fa';
import apiService from '../services/apiService';

const QuotesSection = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [apiStatus, setApiStatus] = useState({ online: true, responseTime: null });

    const fetchQuotes = async() => {
        setLoading(true);
        setError(null);

        try {
            // Check API health first
            const health = await apiService.checkApiHealth();
            setApiStatus(health);

            if (!health.online) {
                throw new Error('API is offline. Using cached quotes.');
            }

            const fetchedQuotes = await apiService.fetchQuotes(3);
            setQuotes(fetchedQuotes);
        } catch (err) {
            setError(err.message);
            // Fallback to default quotes
            const defaultQuotes = await apiService.fetchQuotes(3);
            setQuotes(defaultQuotes);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuotes();

        // Refresh quotes every 30 seconds
        const interval = setInterval(fetchQuotes, 30000);
        return () => clearInterval(interval);
    }, []);

    return ( <
        section className = "quotes-section py-5"
        id = "quotes" >
        <
        div className = "container" >
        <
        div className = "d-flex justify-content-between align-items-center mb-4" >
        <
        h2 className = "text-primary" >
        <
        FaQuoteLeft className = "me-2" / > Daily Inspiration <
        /h2> <
        div className = "d-flex align-items-center gap-3" >
        <
        div className = "api-status" >
        <
        span className = { `d-flex align-items-center ${apiStatus.online ? 'online' : 'offline'}` } > { apiStatus.online ? < FaWifi className = "me-1" / > : < FaExclamationTriangle className = "me-1" / > }
        API: { apiStatus.online ? 'Online' : 'Offline' } { apiStatus.responseTime && ` (${apiStatus.responseTime}ms)` } <
        /span> <
        /div> <
        button onClick = { fetchQuotes }
        className = "btn btn-outline-primary btn-sm"
        disabled = { loading } >
        <
        FaSync className = { loading ? 'spinner' : '' }
        /> Refresh <
        /button> <
        /div> <
        /div>

        {
            error && ( <
                div className = "alert alert-warning" >
                <
                FaExclamationTriangle className = "me-2" / > { error } - Using offline quotes <
                /div>
            )
        }

        {
            loading ? ( <
                div className = "text-center py-5" >
                <
                div className = "loading-spinner" > < /div> <
                p className = "mt-3" > Fetching inspirational quotes from API... < /p> <
                /div>
            ) : ( <
                div className = "row" > {
                    quotes.map((quote, index) => ( <
                        div key = { index }
                        className = "col-md-6 col-lg-4 mb-4" >
                        <
                        div className = "quote-card p-4 rounded shadow-sm h-100" >
                        <
                        FaQuoteLeft className = "text-danger mb-3"
                        size = { 24 }
                        /> <
                        p className = "fs-5 fst-italic" > "{quote.text}" < /p> <
                        p className = "text-primary fw-bold mt-3" > —{ quote.author } < /p> <
                        div className = "mt-3 pt-3 border-top" >
                        <
                        small className = "text-muted" >
                        Source: Quotable API• Updated: { new Date().toLocaleTimeString() } <
                        /small> <
                        /div> <
                        /div> <
                        /div>
                    ))
                } <
                /div>
            )
        }

        <
        div className = "alert alert-info mt-4" >
        <
        p className = "mb-0" >
        <
        strong > Note: < /strong> These inspirational quotes are fetched in real-time from the Quotable API. 
        The API updates automatically every 30 seconds.If the API is offline, cached quotes are displayed. <
        /p> <
        /div> <
        /div> <
        /section>
    );
};

export default QuotesSection;