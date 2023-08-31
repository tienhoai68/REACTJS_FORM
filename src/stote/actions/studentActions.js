import { ADD_STUDENT, DELETE_STUDENT, SELECTED_STUDENT, SET_EDITING, UPDATE_STUDENT } from "../types/studentType"

export const addStudent = (data) => {
    return {
        type : ADD_STUDENT,
        payload: data,
    }
}

export const selectedStudent = (data) => {
    return {
        type: SELECTED_STUDENT,
        payload: data,
    }
}
export const updateStudent = (data) => {
    return {
        type: UPDATE_STUDENT,
        payload : data,
    }
};
export const deleteStudent = (data) => {
    return {
        type: DELETE_STUDENT,
        payload: data,
    }
};
export const setEditing = (data) => {
    return {
        type: SET_EDITING,
        payload: data,
    };
};