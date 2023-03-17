const SEND_OTP = "SEND_OTP"
const SEND_NEWSLETTER = "SEND_NEWSLETTER"
const SEND_EMAIL_EXISTENCE = "SEND_EMAIL_EXISTENCE"

module.exports = {
    MAIL_CONTENT: [
        {
            type: SEND_OTP,
            content: (props) => {
                return "hello " + props.username + "here's ur otp number " + props.OTP + " pleaseverify before " + props.expireAt
            }
        },
        {
            type: SEND_NEWSLETTER,
            content: (props) => {
                return "hello " + props.username + "here's ur otp number " + props.OTP
            }
        },
        {
            type: SEND_EMAIL_EXISTENCE,
            content: (props) => {
                return "hello " + props.username + "you have successfully become our member !"
            }
        }
    ]
}