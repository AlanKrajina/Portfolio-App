import React from "react";
import { saveAs } from "file-saver";
import Button from "../SharedButton/Button";

const DownloadPDF: React.FC = () => {
  const saveFile = () => {
    saveAs("CV.pdf", "CV.pdf");
  };
  return (
    <div className="flex justify-center">
      <Button
        buttonFunction={saveFile}
        buttonTitle={"Download PDF"}
        styling={
          "shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        }
      />
    </div>
  );
};

export default DownloadPDF;
