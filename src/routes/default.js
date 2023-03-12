const { validateEmail } = require("../utils/formater");
const { createMailContent } = require("../utils/functions");
const { INVALID_EMAIL } = require("../variables/responseMessage");

const defaultRoute = (app, mailer) => {
    app.post(`/v${process.env.APP_MAJOR_VERSION}/send`, async (req, res) => {
        // check query param availability
        if (!req.body) return res.sendStatus(400);
        if (!validateEmail(req.body.receiver)) return res.send(INVALID_EMAIL).status(400);

        // run send function
        const content = createMailContent(req.body.receiver, req.body.subject, req.body.mailType, req.body.props);
        mailer.sendMail(content, function (error, info) {
            if (error) res.send(error).status(400);
            else res.send('Email sent: ' + info.response).status(200);
        });
    });
}

module.exports = {
    defaultRoute
}