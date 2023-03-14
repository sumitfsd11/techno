import React from 'react'
import { Textarea } from "@material-tailwind/react";
const TextArea = ({
  placeholder,
  className,
  label,
error,
  isRequired = false,
  labelClassName,
  name,
  ...props
}) => {
  return (
    <div>
      <div>
        <Textarea {...props} name={name} required={isRequired} className={`textarea textarea-bordered ${className}`} label={placeholder}/>
        <p className=" px-2 mb-0 pt-1 text-xs text-[#f5594e]">{error?.message}</p>
      </div>
    </div>
  )
}

export default React.forwardRef(TextArea);
