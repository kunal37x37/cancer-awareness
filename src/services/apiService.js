import axios from 'axios';
import { API_URLS, DEFAULT_QUOTES } from '../utils/constants';

class ApiService {
    constructor() {
        this.api = axios.create({
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // Fetch inspirational quotes from API
    async fetchQuotes(limit = 3) {
        try {
            const response = await this.api.get(`${API_URLS.QUOTES}?limit=${limit}`);
            return response.data.map(quote => ({
                text: quote.content,
                author: quote.author
            }));
        } catch (error) {
            console.error('Error fetching quotes:', error);
            // Return default quotes if API fails
            return DEFAULT_QUOTES.slice(0, limit);
        }
    }

    // Submit contact form data
    async submitContactForm(formData) {
        try {
            // This is a mock API call - in real app, replace with your backend endpoint
            const response = await this.api.post(API_URLS.CONTACT_FORM, {
                ...formData,
                timestamp: new Date().toISOString()
            });

            return {
                success: true,
                data: response.data,
                message: 'Message sent successfully!'
            };
        } catch (error) {
            console.error('Error submitting form:', error);
            return {
                success: false,
                error: 'Failed to send message. Please try again.',
                details: error.message
            };
        }
    }

    // Check API health
    async checkApiHealth() {
        try {
            const response = await this.api.get('https://api.quotable.io/tags');
            return {
                online: true,
                responseTime: response.duration || 'N/A'
            };
        } catch (error) {
            return {
                online: false,
                error: error.message
            };
        }
    }
}

export default new ApiService();