import React ,{forwardRef} from "react";
import { Radio as Rd } from "@material-tailwind/react";
const  Radio=({
 control,
  ...props
})=> {
  return (
    <React.Fragment>
        <span><Rd type="radio"  {...props} label={props?.label} name={props?.name} className={`  ${props?.className}  `} /></span>  
    </React.Fragment>
  )
}
export default forwardRef(Radio);