import axios from 'axios';
import { IBook } from '../models/types';

const booksApi = axios.create({
    baseURL: 'http://localhost:3001'
});

export const API_URL = '/books';

export const fetchBooks = async () => {
    const response = await booksApi.get(API_URL);
    return response.data;
};

export const addBook = async (book: IBook) => {
    const response = await booksApi.post(API_URL, book);
    return response.data;
};

export const updateBook = async (book: IBook) => {
    const response = await booksApi.put(`${API_URL}/${book.id}`, book);
    return response.data;
}

export const removeBook = async (id: string | number) => {
    return await booksApi.delete(`${API_URL}/${id}`);
};


