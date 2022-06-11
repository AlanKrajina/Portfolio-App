import emailjs from "emailjs-com";

const sendEmail = async (from_name, to_name, message) => {
  try {
    const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        { from_name, to_name, message },
        process.env.REACT_APP_EMAILJS_USERID
    );

    if (response.status === 200) {
        return {
            sent: true, 
            message: "Successfully sent message."
        }
    }
  } catch (error) {
        return {
            sent: false, 
            message: `Failed to send email. ${error}`
        }
  }
};

export default sendEmail;