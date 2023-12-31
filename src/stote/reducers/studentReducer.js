import data from "../../Data/listStudent.json"
import { ADD_STUDENT, DELETE_STUDENT, SELECTED_STUDENT, SET_EDITING, UPDATE_STUDENT } from "../types/studentType";

const DEFAULT_STATE = {
    listStudent: data,
    selectedStudent: null,
    // tạo thêm isEditing để khi nhấn edit thì cập nhật lại thành true
    isEditing: false,
};
const stringify = localStorage.getItem("LIST_STUDENT");
if (stringify) {
    DEFAULT_STATE.listStudent = JSON.parse(stringify)
}


export const studentReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_STUDENT: {
            action.payload.id = Math.random();
            state.listStudent = [...state.listStudent, action.payload];
            localStorage.setItem("LIST_STUDENT", JSON.stringify(state.listStudent));
            break;
        };
        case SELECTED_STUDENT: {
            state.selectedStudent = action.payload;
            break;
        };
        case SET_EDITING:
            // console.log(action);
            return {
                ...state,
                // thay đổi trạng thái thành true
                isEditing: action.payload,
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
            // console.log(action.payload);
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