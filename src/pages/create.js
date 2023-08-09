import React, { useState } from "react";
import Layout from "../components/UI/Layout";
import Colorpicker from "../components/Custom/ColorPicker";

const Create = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const fileInputRef = React.createRef();

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <Layout>
      <div>
        <div className="text-[16px] breadcrumbs">
          <ul>
            <li>Choose templates</li>
            <li>Import theme</li>
            <li>Customise templates</li>
            <li>Preview</li>
          </ul>
        </div>

        {currentStep === 1 && (
          <div className="flex flex-row mt-[58px]">
            <div className="flex flex-col gap-[45px]">
              <p className="text-[32px] ">About your project</p>

              <div className="flex flex-col gap-[24px] bg-[#f8f8f8] py-[48px] px-[24px] rounded-[15px]">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black text-[24px] mb-[8px]">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input bg-white rounded-[10px] w-[460px] h-[64px] focus:outline-none "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black text-[24px] mb-[8px]">
                      Link
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input bg-white rounded-[10px] w-[460px] h-[64px] focus:outline-none "
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black text-[24px] mb-[8px]">
                      Upload your logo
                    </span>
                  </label>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                    />
                    <button
                      className="w-[453px] h-[60px] border border-black rounded-[8px] flex items-center justify-center space-x-2 cursor-pointer"
                      onClick={() => fileInputRef.current.click()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 8L12.5 3L7.5 8"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.5 3V15"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      &nbsp; Attach image (jpeg,png)
                    </button>
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-black text-[24px] mb-[8px]">
                      Import theme
                    </span>
                  </label>
                  <div className="flex flex-row gap-[10px]">
                    <Colorpicker />
                    <Colorpicker />
                    <Colorpicker />
                  </div>
                </div>
              </div>
            </div>

            <button onClick={handleNext}>next</button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            hello 2 <button onClick={handleNext}>next</button>
          </div>
        )}

        {currentStep === 3 && <div>hello 3</div>}
      </div>
    </Layout>
  );
};

export default Create;
