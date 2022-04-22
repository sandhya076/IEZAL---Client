import * as api from "../API/api";

export const getForm = () => async (dispatch) => {
  try {
    const { data } = await api.fetchForm();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createForm = (Form) => async (dispatch) => {
  try {
    const { data } = await api.createForm(Form);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateForm = (id, Form) => async (dispatch) => {
  try {
    const { data } = await api.updateForm(id, Form);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteForm = (id) => async (dispatch) => {
  try {
    await api.deleteForm(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
