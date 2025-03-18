const isEmpty = (object) => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export { isEmpty };