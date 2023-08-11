import React from "react";
import Step4 from "../Steps/Step4";
import { useSigner } from "@thirdweb-dev/react";

const Pay = () => {
  const signer = useSigner();

  const signMessage = async () => {
    const message = "Hello World";
    const signature = await signer.signMessage(message);
    console.log(signature);
  };

  return (
    <div className="flex flex-row mt-[58px] gap-[150px]">
      <div className="flex flex-col gap-[24px]">
        <p className="text-[28px]">Attestation</p>
        <div className="flex flex-row gap-[16px] w-[540px] h-[110px] rounded-[10px] bg-[#f8f8f8] p-[24px]">
          <img onClick={signMessage} src="/images/check.svg" alt="" />
          <p className="text-[24px] w-[441px] leading-28px">
            Click on the check box to attest the templates created by you
          </p>
        </div>
        <p className="text-[28px] mt-[8px]">Invoice</p>

        <div className="relative flex flex-col gap-[24px] bg-[#f8f8f8] pt-[32px] px-[24px] rounded-[15px]">
          <div className="flex flex-row w-[492] justify-between">
            <span className="text-black text-[20px]">AI Agent</span>
            <span className="text-black text-[20px]">$10</span>
          </div>
          <div className="flex flex-row w-[492] justify-between">
            <span className="text-black text-[20px]">Template 1</span>
            <span className="text-black text-[20px]">$5</span>
          </div>
          <div className="flex flex-row w-[492] justify-between">
            <span className="text-black text-[20px]">Template 2</span>
            <span className="text-black text-[20px]">$5</span>
          </div>
          <div className="flex flex-row w-[492] justify-between mb-[108px]">
            <span className="text-black text-[20px]">Total</span>
            <span className="text-black text-[20px]">$20</span>
          </div>
          <div className="absolute flex flex-row items-center justify-center bottom-0 left-0 right-0 w-full h-[60px] bg-[#699BF7] font-bold text-white text-[24px] rounded-[15px] cursor-pointer">
            CONFIRM
          </div>
        </div>
      </div>
      <div className="mt-[58px]">
        <Step4 />
      </div>
    </div>
  );
};

export default Pay;