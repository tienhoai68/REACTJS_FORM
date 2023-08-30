export const disableError = (ref) => {
    // ref.style.display = "none";
    ref.innerHTML = "";
};
export const hiddenError = (maSV, name, phoneNumber, email) => {
    const errors = [
        maSV,
        name,
        phoneNumber,
        email,
    ];

    errors.forEach((ref) => {
        disableError(ref);
    });
};