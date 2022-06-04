import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api",
    params: {
        key: '27168820-f15fc1954e471e2ff7d31a8fb',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12
    }
})

export const getImages = async (q, page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            q,
            page
        }
    });
    return data.hits;
};