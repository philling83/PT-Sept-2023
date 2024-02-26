const buildError = (message, title, statusCode) => {
    const err = new Error(message);
    err.title = title;
    err.status = statusCode;

    return err;
}

module.exports = {
    buildError
}
