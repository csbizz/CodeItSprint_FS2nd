const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function verifyId(email) {
    return pattern.test(email);
}

export { verifyId };