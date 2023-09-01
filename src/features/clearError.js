export const clearError = (refName) => {
    const inputRef = refName;
    if (inputRef.current.innerHTML) {
        inputRef.current.innerHTML = "";
    };
};