import apiInstance, { apiInstanceAuth } from "../utils/axios";

export const getCourse = async () => apiInstanceAuth.get('/course').then(res => res.data)
export const getCategories = async () => apiInstance.get('/category').then(res => res.data)