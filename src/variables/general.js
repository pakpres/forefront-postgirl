const SEND_OTP = "SEND_OTP"
const SEND_NEWSLETTER = "SEND_NEWSLETTER"

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
        }
    ]
}