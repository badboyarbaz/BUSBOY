import axios from 'axios';

export const getCities = async () => {
    try {
        const response = await axios.get('http://localhost:8800/api/cities');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};