import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaComment, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import apiService from '../services/apiService';
import { FORM_CONFIG } from '../utils/constants';

const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        const [errors, setErrors] = useState({});
        const [submitting, setSubmitting] = useState(false);
        const [submissionResult, setSubmissionResult] = useState(null);
        const [apiResponse, setApiResponse] = useState(null);

        const validateField = (name, value) => {
            const config = FORM_CONFIG.FIELDS[name];
            if (!config) return true;

            const newErrors = {...errors };

            if (config.required && !value.trim()) {
                newErrors[name] = 'This field is required';
            } else if (config.minLength && value.length < config.minLength) {
                newErrors[name] = `Minimum ${config.minLength} characters required`;
            } else if (config.maxLength && value.length > config.maxLength) {
                newErrors[name] = `Maximum ${config.maxLength} characters allowed`;
            } else if (config.pattern && !config.pattern.test(value)) {
                newErrors[name] = 'Invalid format';
            } else {
                delete newErrors[name];
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
            validateField(name, value);
        };

        const handleSubmit = async(e) => {
            e.preventDefault();

            // Validate all fields
            let isValid = true;
            Object.keys(formData).forEach(key => {
                if (key !== 'phone' || formData[key]) { // Phone is optional
                    if (!validateField(key, formData[key])) {
                        isValid = false;
                    }
                }
            });

            if (!isValid) {
                setSubmissionResult({
                    success: false,
                    message: 'Please fix the errors in the form'
                });
                return;
            }

            setSubmitting(true);
            setSubmissionResult(null);
            setApiResponse(null);

            try {
                // Send form data to API
                const result = await apiService.submitContactForm(formData);

                setApiResponse(result.data); // Store API response

                if (result.success) {
                    setSubmissionResult({
                        success: true,
                        message: 'Message sent successfully! We will contact you soon.'
                    });

                    // Reset form after successful submission
                    setTimeout(() => {
                        setFormData({ name: '', email: '', phone: '', message: '' });
                        setSubmissionResult(null);
                    }, 5000);
                } else {
                    setSubmissionResult({
                        success: false,
                        message: result.error || 'Failed to send message. Please try again.'
                    });
                }
            } catch (error) {
                console.error('Form submission error:', error);
                setSubmissionResult({
                    success: false,
                    message: 'Network error. Please check your connection and try again.'
                });
            } finally {
                setSubmitting(false);
            }
        };

        return ( <
                section className = "contact py-5 bg-light"
                id = "contact" >
                <
                div className = "container" >
                <
                div className = "row" >
                <
                div className = "col-lg-8 mx-auto" >
                <
                div className = "card border-0 shadow-lg" >
                <
                div className = "card-body p-5" >
                <
                h2 className = "text-center mb-4" > Contact Us
                for Support < /h2> <
                p className = "text-center text-muted mb-4" >
                Fill out the form below and we 'll get back to you within 24 hours <
                /p>

                {
                    submissionResult && ( <
                        div className = { `alert alert-${submissionResult.success ? 'success' : 'danger'} d-flex align-items-center` } > {
                            submissionResult.success ?
                            <
                            FaCheckCircle className = "me-2" / > :
                                <
                                FaExclamationCircle className = "me-2" / >
                        } { submissionResult.message } <
                        /div>
                    )
                }

                <
                form onSubmit = { handleSubmit }
                noValidate >
                <
                div className = "row mb-3" >
                <
                div className = "col-md-6" >
                <
                label htmlFor = "name"
                className = "form-label" >
                <
                FaUser className = "me-2" / > Full Name *
                <
                /label> <
                input type = "text"
                className = { `form-control ${errors.name ? 'is-invalid' : ''}` }
                id = "name"
                name = "name"
                value = { formData.name }
                onChange = { handleChange }
                placeholder = "Enter your full name"
                required /
                > {
                    errors.name && < div className = "invalid-feedback" > { errors.name } < /div>} <
                    /div> <
                    div className = "col-md-6" >
                    <
                    label htmlFor = "email"
                    className = "form-label" >
                    <
                    FaEnvelope className = "me-2" / > Email Address *
                    <
                    /label> <
                    input
                    type = "email"
                    className = { `form-control ${errors.email ? 'is-invalid' : ''}` }
                    id = "email"
                    name = "email"
                    value = { formData.email }
                    onChange = { handleChange }
                    placeholder = "Enter your email"
                    required /
                    > {
                        errors.email && < div className = "invalid-feedback" > { errors.email } < /div>} <
                        /div> <
                        /div>

                        <
                        div className = "mb-3" >
                        <
                        label htmlFor = "phone"
                        className = "form-label" >
                        <
                        FaPhone className = "me-2" / > Phone Number(Optional) <
                        /label> <
                        input
                        type = "tel"
                        className = { `form-control ${errors.phone ? 'is-invalid' : ''}` }
                        id = "phone"
                        name = "phone"
                        value = { formData.phone }
                        onChange = { handleChange }
                        placeholder = "Enter your phone number" /
                        > {
                            errors.phone && < div className = "invalid-feedback" > { errors.phone } < /div>} <
                            /div>

                            <
                            div className = "mb-4" >
                            <
                            label htmlFor = "message"
                            className = "form-label" >
                            <
                            FaComment className = "me-2" / > How can we help you ? *
                            <
                            /label> <
                            textarea
                            className = { `form-control ${errors.message ? 'is-invalid' : ''}` }
                            id = "message"
                            name = "message"
                            value = { formData.message }
                            onChange = { handleChange }
                            rows = "4"
                            placeholder = "Tell us about your needs, questions, or how we can support you..."
                            required >
                            < /textarea> {
                                errors.message && < div className = "invalid-feedback" > { errors.message } < /div>} <
                                    div className = "form-text text-end" > { formData.message.length }
                                /500 characters <
                                /div> <
                                /div>

                                <
                                div className = "text-center" >
                                    <
                                    button
                                type = "submit"
                                className = "btn btn-danger btn-lg px-5"
                                disabled = { submitting } >
                                    {
                                        submitting ? ( <
                                            >
                                            <
                                            span className = "spinner-border spinner-border-sm me-2"
                                            role = "status" > < /span>
                                            Sending... <
                                            />
                                        ) : ( <
                                            >
                                            <
                                            FaPaperPlane className = "me-2" / > Send Message via API <
                                            />
                                        )
                                    } <
                                    /button> <
                                    /div> <
                                    /form>

                                {
                                    apiResponse && ( <
                                        div className = "mt-4 pt-4 border-top" >
                                        <
                                        h6 className = "text-muted" > API Response: < /h6> <
                                        pre className = "bg-light p-3 rounded"
                                        style = {
                                            { fontSize: '0.8rem' } } > { JSON.stringify(apiResponse, null, 2) } <
                                        /pre> <
                                        small className = "text-muted" >
                                        This is a mock API response.In production, this would connect to your backend. <
                                        /small> <
                                        /div>
                                    )
                                }

                                <
                                div className = "mt-4 pt-3 border-top" >
                                    <
                                    small className = "text-muted" >
                                    *
                                    Required fields.Your data is securely transmitted via HTTPS.
                                We use JSONPlaceholder mock API
                                for demonstration. <
                                    /small> <
                                    /div> <
                                    /div> <
                                    /div> <
                                    /div> <
                                    /div> <
                                    /div> <
                                    /section>
                            );
                        };

                        export default ContactForm;