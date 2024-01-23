import axios from 'axios';

const API_URL = 'http://localhost:3001/books';

export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};

export const addBook = async (book: any) => {
    const response = await axios.post(`${API_URL}`, book);
    return response.data;
}

export const updateBook = async (id: string, book: any) => { 
    const response = await axios.put(`${API_URL}/${id}`, book);
    return response.data;
}

export const deleteBook = async (id: string) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
}