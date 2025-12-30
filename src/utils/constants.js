export const API_URLS = {
    QUOTES: 'https://api.quotable.io/quotes/random',
    CONTACT_FORM: 'https://jsonplaceholder.typicode.com/posts', // Mock API for contact form
    CANCER_RESOURCES: 'https://api.cancer.org/v1/resources' // Example API
};

export const DEFAULT_QUOTES = [{
        text: "Cancer is a word, not a sentence.",
        author: "John Diamond"
    },
    {
        text: "You never know how strong you are until being strong is your only choice.",
        author: "Bob Marley"
    },
    {
        text: "Hope is being able to see that there is light despite all of the darkness.",
        author: "Desmond Tutu"
    }
];

export const FORM_CONFIG = {
    FIELDS: {
        name: { required: true, minLength: 2, maxLength: 50 },
        email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
        phone: { required: false, pattern: /^[0-9+\-\s()]{10,15}$/ },
        message: { required: true, minLength: 10, maxLength: 500 }
    }
};