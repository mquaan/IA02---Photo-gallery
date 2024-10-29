import axios from "axios";

const API_KEY = "gFGpYDbBobDuWMQytV14Jn9rBdgrKuiAGch-OFrMiD8";
const API_URL = "https://api.unsplash.com";

export const fetchPhotos = (page = 1) =>
    axios.get(`${API_URL}/photos`, {
        params: { page, client_id: API_KEY, per_page: 10 },
    });

export const fetchPhotoById = (id) =>
    axios.get(`${API_URL}/photos/${id}`, {
        params: { client_id: API_KEY },
    });