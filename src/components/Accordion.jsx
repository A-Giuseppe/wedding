import { useState } from "react";

const Accordion = ({title, body}) => {
    const [isAccordionOpen,setIsAccordionOpen] = useState(false);

    return (
        <li id={title} className="flex flex-col w-full py-5 border-b-1 border-[#6b3406]">
            <button onClick={() => setIsAccordionOpen(!isAccordionOpen)} className="flex justify-between items-center w-full">
                <h3 className="text-start text-lg font-light md:text-2xl xl:text-3xl font-bad-spript">{title}</h3>
                <svg className="fill-[#6b3406] shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                            isAccordionOpen && "!rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            isAccordionOpen && "!rotate-180"
                        }`}
                    />
                </svg>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
                isAccordionOpen 
                    ? "grid-rows-[1fr] opacity-100 mt-5" 
                    : "grid-rows-[0fr] opacity-0"
            }`}>
                <div className="overflow-hidden text-lg md:text-xl leading-relaxed flex flex-col space-y-5 font-playfair-display italic">
                    {body}
                </div>
            </div>
        </li>
    )
}

export default Accordion;