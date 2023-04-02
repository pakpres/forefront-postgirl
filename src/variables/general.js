const SEND_OTP = "SEND_OTP"
const SEND_NEWSLETTER = "SEND_NEWSLETTER"
const SEND_EMAIL_EXISTENCE = "SEND_EMAIL_EXISTENCE"
const SEND_NEW_PASSWORD_REQUEST = "SEND_NEW_PASSWORD_REQUEST"

module.exports = {
    MAIL_CONTENT: [
        {
            type: SEND_OTP,
            content: (props) => {
                return "Hello " + props.username + " here's your OTP number " + props.OTP + " please verify before " + new Date(props.OTPExpiration)
            }
        },
        {
            type: SEND_NEWSLETTER,
            content: (props) => {
                return "Hello " + props.username + " here's your OTP number " + props.OTP
            }
        },
        {
            type: SEND_EMAIL_EXISTENCE,
            content: (props) => {
                return "Hello " + props.username + " you have successfully become our member !"
            }
        },
        {
            type: SEND_NEW_PASSWORD_REQUEST,
            content: (props) => {
                return "Hello " + props.fullName + ` this is the link to the new password form you've requested, ${process.env.CLIENT_BASE_URL}/?recoveryToken=${props.token}`
            }
        }
    ]
}