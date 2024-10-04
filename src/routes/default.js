const { validateEmail } = require("../utils/formater");
const { createMailContent } = require("../utils/functions");
const {
  INVALID_EMAIL,
} = require("../variables/responseMessage");

const defaultRoute = (app, mailer) => {
  app.get(`/v1/`, async (req, res) => {
    return res.sendStatus(200);
  });

  app.post(`/v1/send`, async (req, res) => {
    try {
      // Validate the reciever email
      if (!validateEmail(req.body.receiver))
        return res.status(400).send(INVALID_EMAIL);

      // Run send function
      const content = createMailContent(
        req.body.receiver,
        req.body.subject,
        req.body.mailType,
        req.body.props
      );

      // Send email and handle errors
      await mailer.sendMail(
        content,
        function (error, info) {
          if (error) {
            throw new Error(
              `Failed to send email: ${error.message}`
            );
          } else {
            return res.status(200).send({
              message: "Email sent",
              response: info.response,
            });
          }
        }
      );
    } catch (err) {
      console.error("An error occurred: ", err);
      return res.status(500).send({
        message: "Internal Server Error",
        response: err.message,
      });
    }
  });
};

module.exports = {
  defaultRoute,
};
