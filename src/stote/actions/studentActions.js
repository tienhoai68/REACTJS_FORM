import { ADD_STUDENT } from "../types/studentType"

export const addStudent = (data) => {
    return {
        type : ADD_STUDENT,
        payload: data,
    }
}