import axios from "axios";

const url = "http://localhost:5000/form";

export const fetchForm = () => axios.get(url); // read
export const createForm = (newForm) => axios.post(url, newForm); // create
export const updateForm = (id, updateForm) =>
  axios.patch(`${url}/${id}`, updateForm);
export const deleteForm = (id) => axios.delete(`${url}/${id}`);
