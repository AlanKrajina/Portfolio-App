import React, { useState, useReducer } from 'react';
import '../Home.css';
import { styles } from "./contactStyles";
import sendEmail from "../../../helpers/sendEmail"
import ReactGlobe from "react-globe.gl";

interface EmailResponse {
    sent: boolean, 
    message: string
};

interface InitialFormState {
    name: string;
    email: string;
    message: string;
};

const initialFormState: InitialFormState = {
    name: '',
    email: '',
    message: ''
};

const ACTIONS = {
    UPDATE_NAME: 'update_name',
    UPDATE_EMAIL: 'update_email',
    UPDATE_MESSAGE: 'update_message'
};

const reducer = (state: InitialFormState, action: { type: string; payload: string; }) => {
    switch (action.type) {
        case ACTIONS.UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case ACTIONS.UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case ACTIONS.UPDATE_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        default: 
            return state;
    }
}

const ContactSection: React.FC = () => {

    const [formState, dispatch] = useReducer(reducer, initialFormState);
    const [showEmailResponse, setShowEmailResponse] = useState<boolean>(false);
    const [emailResponse, setEmailResponse] = useState<EmailResponse>();

    const handleEmailResponse = () =>{
        setShowEmailResponse(true);
        setTimeout(function(){
            setShowEmailResponse(false);
        }, 5000);
    };

    const handleEmail = async () => {
        setEmailResponse(await sendEmail(
            formState.name,
            formState.email,
            formState.message
        ));

        handleEmailResponse();
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, actionType: string) => {
        dispatch({
            type: actionType, 
            payload: e.target.value
        });
    };

    const arcsData = Array.from(Array(20).keys()).map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
    }));

    return (
        <div style={styles.Section}>
           <div style={styles.FormDiv}>
                <h1 style={styles.Title}>Let's Connect</h1>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6" style={{minHeight: '6rem'}}>
                        <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Name
                        </label>
                        <input onChange={(e) => handleEmailChange(e, ACTIONS.UPDATE_NAME)} className="text-gray-700 appearance-none block w-full bg-gray-200 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                        {formState.name === '' ? <p className="text-red-100 text-xs italic">Name field required.</p> : ''}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6" style={{minHeight: '6rem'}}>
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            E-mail
                        </label>
                        <input onChange={(e) => handleEmailChange(e, ACTIONS.UPDATE_EMAIL)} className="text-gray-700 appearance-none block w-full bg-gray-200 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"/>
                        {formState.email === '' ? <p className="text-red-100 text-xs italic">Email field required.</p> : ''}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Message
                        </label>
                        <textarea onChange={(e) => handleEmailChange(e, ACTIONS.UPDATE_MESSAGE)} className="text-gray-700 no-resize appearance-none block w-full bg-gray-200 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        {formState.message === '' ? <p className="text-red-100 text-xs italic">Message field required.</p> : ''}
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        {formState.name !== '' && formState.email !== '' && formState.message !== '' ? 
                            <button onClick={handleEmail} className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Send
                            </button> : ''}
                        </div>
                    </div>
                    {showEmailResponse ? emailResponse?.message : ''}
                </form>


            </div>
            <div style={styles.GlobeDiv}>
                <ReactGlobe
                    backgroundColor="#1d1d1d"
                    width={500}
                    height={500}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    arcsData={arcsData}
                    arcColor={'color'}
                    arcDashLength={() => Math.random()}
                    arcDashGap={() => Math.random()}
                    arcDashAnimateTime={() => Math.random() * 4000 + 1500}
                    />
            </div>
        
       </div>
    )
  }
  
  export default ContactSection;