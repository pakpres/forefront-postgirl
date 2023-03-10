function handleCSRFToken(req, res, next) {
    console.log("masuk sini pakcik")
    res.locals.csrfToken = req.csrfToken();
    next();
}

module.exports = {
    handleCSRFToken
}