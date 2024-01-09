import axios from 'axios';
import { useRouter } from "next/router";

const fetchAPI = async (endpoint, method = 'GET', data = {}, contentType = '') => {
    try {
        const checkEndpoint = endpoint === '/messageboard/posts/list' || endpoint === '/messageboard/posts/topcontibotor' || endpoint === '/messageboard/posts/unansweredtopics' || endpoint.includes('/messageboard/posts/postdetails')

        const token = sessionStorage.getItem('AccessToken');
        let response = {};
        response = await axios({
            method: method,
            url: process.env.BASE_URL + endpoint,
            data: data,
            headers: {
                Authorization: checkEndpoint ? `Bearer ${process.env.STATIC_TOKEN}` : `Bearer ${token}`,
                "Content-Type": contentType
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            // Redirect to login page
            const router = useRouter();
            await router.push('/');
            return;
        } else {
            console.log('Error fetching API data:', error);
            return error?.response
        }

        // throw error;
    }
};
export default fetchAPI

