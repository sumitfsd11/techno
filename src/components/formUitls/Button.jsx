import React from 'react'
import { Button  as Btn} from "@material-tailwind/react";
export default function Button({
  isDisabled=false ,
  children, 
   isLoading = false , 
   className,
   type="button",
   variant,
   conaitnerClass,
   ...props}) {
  return (
    <span className={conaitnerClass}>
        <Btn varient={variant??'filled'} type={type} disabled={isDisabled} className={`${className} b-0 btn  px-2  no-animation ${isDisabled&&'btn-disabled'} `} {...props}>{isLoading ?' Loading.. . . ': children}</Btn>
    </span>
  )
}
