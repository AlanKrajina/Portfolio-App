import React from "react";
import { saveAs } from "file-saver";

const DownloadPDF: React.FC = () => {
  const saveFile = () => {
    saveAs("CV.pdf", "CV.pdf");
  };
  return (
    <div className="flex justify-center">
      <button
        className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-4 rounded"
        type="button"
        onClick={saveFile}
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPDF;
