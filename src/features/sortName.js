export const firstName = (hoTen) => {
    const mangTen = hoTen.split(' ');
    const ten = mangTen[mangTen.length - 1];
    return ten;
}

// Hàm so sánh tên theo thứ tự A-Z
export const sapXepTenAZ = (a, b) => {
    const tenA = firstName(a.name);
    const tenB = firstName(b.name);
    if (tenA < tenB) {
        return -1;
    }
    if (tenA > tenB) {
        return 1;
    }
    return 0;
}

// Hàm so sánh tên theo thứ tự Z-A
export const sapXepTenZA = (a, b) => {
    const tenA = firstName(a.name);
    const tenB = firstName(b.name);
    if (tenA < tenB) {
        return 1;
    }
    if (tenA > tenB) {
        return -1;
    }
    return 0;
};