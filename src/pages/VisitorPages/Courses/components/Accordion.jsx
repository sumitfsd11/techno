import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function AccordionComponent({ props }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  return (
    <Fragment>
      {
        props?.map((i, index, arr) => (
          <Accordion key={index} className="drop-shadow-lg my-4 py-1 px-3 border-[#e7e7ec] rounded-md border  " style={{ boxShadow: "0px 4px 6px 0px rgba(50,50,93,0.11) , 0px 1px 3px 0px rgba(0,0,0,0.08)" }} open={open === index+1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className="border-0" onClick={() => handleOpen(index + 1)}>
              {i?.title}
            </AccordionHeader>
            <AccordionBody>
              {i?.des}
            </AccordionBody>
          </Accordion>
        ))
      }
    </Fragment>
  );
}