import React, { useState, useReducer } from "react";
import "../Home.css";
import "../../../helpers/animations.css";
import { styles } from "./contactStyles";
import sendEmail from "../../../helpers/sendEmail";
import "../../../helpers/animations.css";
import Globe from "../../../components/Globe/Globe";
import useScrollTrigger from "../../../hooks/use-scrollTrigger";

interface EmailResponse {
  sent: boolean;
  message: string;
}

interface InitialFormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: InitialFormState = {
  name: "",
  email: "",
  message: "",
};

const ACTIONS = {
  UPDATE_NAME: "update_name",
  UPDATE_EMAIL: "update_email",
  UPDATE_MESSAGE: "update_message",
  RESET_FORM: "reset_form",
};

const reducer = (
  state: InitialFormState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ACTIONS.UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ACTIONS.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ACTIONS.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case ACTIONS.RESET_FORM:
      return {
        ...initialFormState,
      };
    default:
      return state;
  }
};

const ContactSection: React.FC = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const [showEmailResponse, setShowEmailResponse] = useState<boolean>(false);
  const [emailResponse, setEmailResponse] = useState<EmailResponse>();
  const [showFormAndGlobe, setShowFormAndGlobe] = useState<boolean>(false);
  const [emailLoading, setEmailLoading] = useState<boolean>(false);

  useScrollTrigger("contactTitle", "Contact Me", "#contactSection", () =>
    setShowFormAndGlobe(true)
  );

  const handleEmailResponse = () => {
    setShowEmailResponse(true);
    setTimeout(function () {
      setShowEmailResponse(false);
      dispatch({
        type: ACTIONS.RESET_FORM,
        payload: "",
      });
    }, 5000);
  };

  const handleEmail = async () => {
    setEmailLoading(true);
    setEmailResponse(
      await sendEmail(formState.name, formState.email, formState.message)
    );
    setEmailLoading(false);

    handleEmailResponse();
  };

  const handleEmailChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    actionType: string
  ) => {
    dispatch({
      type: actionType,
      payload: e.target.value,
    });
  };

  return (
    <div style={styles.Section}>
      <p id="contactTitle" style={styles.Title} />
      <p id="contactSection" style={{ maxWidth: "60rem" }}>
        For any questions, comments or enquiries feel free to fill in this form
        and drop me an email or connect with me via{" "}
        <a
          href="https://www.linkedin.com/in/alankrajina/"
          target="_blank"
          rel="noreferrer"
          style={styles.Link}
        >
          LinkedIn
        </a>
        . I would be more than happy to have a chat and maybe discuss some new
        ideas about development.
      </p>
      <p>{emailLoading}</p>

      {showFormAndGlobe && (
        <div style={styles.FormAndGloveDiv}>
          <div style={styles.FormDiv} className="animated fadeInLeft">
            <form className="w-full max-w-xxl" style={{ minHeight: "35rem" }}>
              <div
                className="flex flex-wrap -mx-3 mb-6"
                style={{ minHeight: "6.6rem" }}
              >
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-s font-bold mb-2">
                    Name
                  </label>
                  <input
                    onChange={(e) => handleEmailChange(e, ACTIONS.UPDATE_NAME)}
                    className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    style={{ backgroundColor: "#323232" }}
                    value={formState.name}
                  />
                  {formState.name === "" && (
                    <p className="text-red-100 text-xs italic opacity-50">
                      Name field required.
                    </p>
                  )}
                </div>
              </div>
              <div
                className="flex flex-wrap -mx-3 mb-6"
                style={{ minHeight: "6.6rem" }}
              >
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-s font-bold mb-2">
                    E-mail
                  </label>
                  <input
                    onChange={(e) => handleEmailChange(e, ACTIONS.UPDATE_EMAIL)}
                    className="appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    style={{ backgroundColor: "#323232" }}
                    value={formState.email}
                  />
                  {formState.email === "" && (
                    <p className="text-red-100 text-xs italic opacity-50">
                      Email field required.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-s font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    onChange={(e) =>
                      handleEmailChange(e, ACTIONS.UPDATE_MESSAGE)
                    }
                    className="no-resize appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    style={{ backgroundColor: "#323232" }}
                    value={formState.message}
                  ></textarea>
                  {formState.message === "" && (
                    <p className="text-red-100 text-xs italic opacity-50">
                      Message field required.
                    </p>
                  )}
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  {formState.name !== "" &&
                    formState.email !== "" &&
                    formState.message !== "" && (
                      <button
                        onClick={handleEmail}
                        className="w-16	h-10 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                      >
                        {emailLoading ? <div className="spinner" /> : "Send"}
                      </button>
                    )}
                </div>
              </div>
              {showEmailResponse && emailResponse?.message}
            </form>
          </div>
          <div style={styles.GlobeDiv}>
            <Globe />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
