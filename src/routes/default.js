const { validateEmail } = require("../utils/formater");
const { createMailContent } = require("../utils/functions");
const {
  INVALID_EMAIL,
} = require("../variables/responseMessage");

const defaultRoute = (app, mailer) => {
  app.post(
    `/v${process.env.APP_MAJOR_VERSION}/send`,
    async (req, res) => {
      // check query param availability
      if (!req.body) return res.sendStatus(400);
      if (!validateEmail(req.body.receiver))
        return res.status(400).send(INVALID_EMAIL);

      // run send function
      const content = createMailContent(
        req.body.receiver,
        req.body.subject,
        req.body.mailType,
        req.body.props
      );
      mailer.sendMail(content, function (error, info) {
        if (error) return res.status(400).send(error);
        else
          return res
            .status(200)
            .send("Email sent: " + info.response);
      });
    }
  );
};

module.exports = {
  defaultRoute,
};
