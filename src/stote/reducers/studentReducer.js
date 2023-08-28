import data from "../../Data/listStudent.json"
import { ADD_STUDENT } from "../types/studentType";

const DEFAULT_STATE = {
    listStudent: data,
};
const stringify = localStorage.getItem("LIST_STUDENT");
if(stringify) {
   DEFAULT_STATE.listStudent = JSON.parse(stringify)
}


export const studentReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_STUDENT: {
            state.listStudent = [...state.listStudent, action.payload];
            localStorage.setItem("LIST_STUDENT", JSON.stringify(state.listStudent));
            break;
        }
    };


    return { ...state }
};