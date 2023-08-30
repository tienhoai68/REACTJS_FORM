export const handleCheckExistCode = (value, ref, mess, listStudent) => {
    debugger
    let isExist = false;
    listStudent.forEach(employee => {
        if (Number(value) === Number(employee.maSV)) {
            isExist = true;
        }
    });
    if (isExist) {
        ref.innerHTML = mess;
        return false;
    }
    ref.innerHTML = "";
    return true;
};
export const handleCheckExistEmail = (value, ref, mess, listStudent) => {
    let isExist = false;
    listStudent.forEach(employee => {
        if (value === employee.email) {
            isExist = true;
        }
    });
    if (isExist) {
        ref.innerHTML = mess;
        return false;
    }
    ref.innerHTML = "";
    return true;
};
export const handleValidate = (value, ref, mess) => {
    if (value) {
        ref.innerHTML = "";
        return true;
    }
    ref.innerHTML = mess;
    return false;
};
export const handleValidatePattern = (value, ref, mess, letter) => {
    if (letter.test(value)) {
        ref.innerHTML = "";
        return true;
    }
    ref.innerHTML = mess;
    return false;
}
export const findByid = (maSV, listStudent) => {
    const existedPerson = listStudent.find((element) => {
        return element.maSV === maSV;
    })
    return existedPerson;
};

export const findCurrentEmail = (maSv, listStudent) => {
    // debugger
    let maSV = maSv;
    let currentStudent = findByid(maSV, listStudent);
    return currentStudent.email;
}