import data from "../../Data/listStudent.json"
import { ADD_STUDENT, DELETE_STUDENT, SELECTED_STUDENT, UPDATE_STUDENT } from "../types/studentType";

const DEFAULT_STATE = {
    listStudent: data,
    selectedStudent: null,
};
const stringify = localStorage.getItem("LIST_STUDENT");
if (stringify) {
    DEFAULT_STATE.listStudent = JSON.parse(stringify)
}


export const studentReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_STUDENT: {
            state.listStudent = [...state.listStudent, action.payload];
            localStorage.setItem("LIST_STUDENT", JSON.stringify(state.listStudent));
            break;
        };
        case SELECTED_STUDENT: {
            // console.log(action.payload);
            state.selectedStudent = action.payload;
            console.log(state.selectedStudent);
            break;
        };
        case UPDATE_STUDENT: {
            const data = [...state.listStudent];
            const index = data.findIndex((element => element.maSV === action.payload.maSV));
            data[index] = action.payload;
            state.listStudent = data;
            state.selectedStudent = null;
            localStorage.setItem("LIST_STUDENT", JSON.stringify(state.listStudent));
            break;
        };
        case DELETE_STUDENT: {
            console.log(action.payload);
            const data = [...state.listStudent];
            const index = data.findIndex((element => element.maSV === action.payload.maSV));
            data.splice(index, 1);
            state.selectedStudent = null;
            state.listStudent = data;
            localStorage.setItem("LIST_STUDENT", JSON.stringify(state.listStudent));
            break;
        }
    };


    return { ...state }
};