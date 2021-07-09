import axios from 'axios';

export const getPosts = async () => {
    const res = await axios.get('/api/post/');
    // return res.data.splice(0, 4);
    console.log(res.data)
    return res.data; 
}

export const getPostByID = async (id) => {
    const res = await axios.get(`/api/post/${id}`);
    console.log(res.data)
    return res.data;
}

export const createPost = async (body) => {
    const res = await axios.post(`/api/post/`, body);
    console.log('res', res)
    return res.data;
}

export const updatePost = async (id, body) => {
    const res = await axios.patch(`/api/post/${id}`, body);
    console.log('update', updatePost)
    return res.data;
}

export const deletePost = async (id) => {
    const res = await axios.delete(`/api/post/${id}`);
    return res.data;
}