const { MAIL_CONTENT } = require("../variables/general");

function createMailContent(
  receiver,
  subject,
  mailType,
  props
) {
  return (content = {
    from: process.env.APP_EMAIL_USER,
    to: receiver,
    subject: subject,
    text: generateMailContent(mailType).content(props),
  });
}

function generateMailContent(mailType) {
  const content = MAIL_CONTENT.find(
    (content) => mailType === content.type
  );
  if (content) return content;
}

module.exports = {
  createMailContent,
  generateMailContent,
};
