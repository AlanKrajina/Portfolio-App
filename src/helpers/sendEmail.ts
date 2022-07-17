import emailjs from "emailjs-com";

const sendEmail = async (
  from_name: string,
  to_name: string,
  message: string
) => {
  try {
    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICEID as string,
      process.env.REACT_APP_EMAILJS_TEMPLATEID as string,
      { from_name, to_name, message },
      process.env.REACT_APP_EMAILJS_USERID
    );

    if (response.status === 200) {
      return {
        sent: true,
        message: "Message successfully sent.",
      };
    }
  } catch (error) {
    return {
      sent: false,
      message: `Failed to send email. ${error}`,
    };
  }
};

export default sendEmail;
