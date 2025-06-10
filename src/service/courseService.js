import apiInstance, { apiInstanceAuth } from "../utils/axios";

export const getCourse = async () =>
  apiInstanceAuth.get("/course").then((res) => res.data);

export const getCategories = async () =>
  apiInstance.get("/category").then((res) => res.data);

export const getDetailCourse = async (id) =>
  apiInstanceAuth.get(`/course/${id}`).then((res) => res.data);

export const createCourse = async (data) =>
  apiInstanceAuth
    .post("/course", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const updateCourse = async (data, id) =>
  apiInstanceAuth
    .put(`/course/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);

export const deleteCourse = async (id) => apiInstanceAuth.delete(`/course/${id}`).then(res => res.data)
