import React, { useContext } from "react";
import { EcoSystemContext } from "../../contexts/EcoSystemContext";
import colors from "../../data/colors";

const SidePanel = ({ setInputValue, setResponseText, setOutputContent }) => {
  const { ecosystem } = useContext(EcoSystemContext);

  const nextPrompt = (e) => {
    e.stopPropagation();
    setInputValue("");
    setResponseText("");
    setOutputContent("");
  };

  const inputs = [
    {
      title: "Wallet Health",
      prompt:
        "Create a step-by-step guide on how to deploy a sample contract using thirdweb",
      img: "/cats/cat3.svg",
    },
    {
      title: "User manual",
      prompt:
        "Create a step-by-step guide on how to deploy a sample contract using thirdweb",
      img: "/cats/cat5.svg",
    },
    {
      title: "Generate NFTS!!!",
      prompt: "I want to mint a NFT",
      img: "/cats/cat2.svg",
    },
    {
      title: "User Manual",
      prompt: "",
      img: "/speech-bubble.svg",
    },
    {
      title: "Deploy smart contract",
      prompt: "Help me create a NFT collection on mode network",
      img: "/cats/cat3.svg",
    },
    {
      title: "Deploy smart contract",
      prompt: "Help me create a NFT collection on mode network",
      img: "/cats/cat3.svg",
    },
    {
      title: "Generate NFTS!!!",
      prompt: "I want to mint a NFT",
      img: "/cats/cat2.svg",
    },
    {
      title: "Deploy smart contract",
      prompt: "Help me create a NFT collection on mode network",
      img: "/cats/cat3.svg",
    },
    {
      title: "User Manual",
      prompt: "",
      img: "/speech-bubble.svg",
    },
  ];

  return (
    <div className="flex flex-col ">
      <div className=" flex flex-col gap-[24px] mt-[100px] h-[472px] overflow-scroll hide-scrollbar">
        {inputs.map((input, index) => {
          const { title, prompt, img } = input;

          return (
            <div
              onClick={() => setInputValue(prompt)}
              style={{ border: `1px solid ${colors[ecosystem].border}` }}
              className="h-[100px] w-[411px] rounded-[15px] cursor-pointer"
              key={index}
            >
              <div className="flex flex-row h-[100px] px-[24px] items-center justify-between">
                <p style={{ color: "#D9D9D9" }} className="text-[24px]">
                  {title}
                </p>

                <img
                  className="h-[60px] w-[60px]"
                  src={img}
                  alt={`Image for ${title}`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-center mt-[24px] mb-[64px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M9 13.5L18 22.5L27 13.5"
            stroke="#D9D9D9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <button
        onClick={nextPrompt}
        style={{ backgroundColor: colors[ecosystem].bg }}
        className="h-[60px] w-[411px] rounded-[10px] cursor-pointer"
      >
        <p style={{ color: colors[ecosystem].text }} className="text-[32px]">
          Next prompt
        </p>
      </button>
    </div>
  );
};

export default SidePanel;
