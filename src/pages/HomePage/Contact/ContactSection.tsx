import React, { useState, useReducer, useEffect, useCallback } from "react";
import "../Home.css";
import { styles } from "./contactStyles";
import sendEmail from "../../../helpers/sendEmail";
import Globe from "../../../components/Globe/Globe";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
    default:
      return state;
  }
};

const ContactSection: React.FC = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const [showEmailResponse, setShowEmailResponse] = useState<boolean>(false);
  const [emailResponse, setEmailResponse] = useState<EmailResponse>();

  const handleEmailResponse = () => {
    setShowEmailResponse(true);
    setTimeout(function () {
      setShowEmailResponse(false);
    }, 5000);
  };

  const handleEmail = async () => {
    setEmailResponse(
      await sendEmail(formState.name, formState.email, formState.message)
    );

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

  const renderSection = useCallback(() => {
    const title = document.getElementById("contactTitle");
    if (title) {
      title.setAttribute("id", "typewriterEffect");
      title.innerHTML = "Contact Me";
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#contactSection",
      onEnter: renderSection,
    });
  }, [renderSection]);

  return (
    <div style={styles.Section}>
      <p id="contactTitle" style={styles.Title} />
      <p>For any questions or enquiries feel free drop me an email.</p>
      <div id="contactSection" style={styles.FormAndGloveDiv}>
        <div style={styles.FormDiv}>
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
                />
                {formState.name === "" && (
                  <p className="text-red-100 text-xs italic">
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
                />
                {formState.email === "" && (
                  <p className="text-red-100 text-xs italic">
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
                  onChange={(e) => handleEmailChange(e, ACTIONS.UPDATE_MESSAGE)}
                  className="no-resize appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  style={{ backgroundColor: "#323232" }}
                ></textarea>
                {formState.message === "" && (
                  <p className="text-red-100 text-xs italic">
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
                      className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Send
                    </button>
                  )}
              </div>
            </div>
            {showEmailResponse && emailResponse?.message}
          </form>
        </div>
        <Globe />
      </div>
    </div>
  );
};

export default ContactSection;