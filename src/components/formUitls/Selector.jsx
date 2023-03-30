import React ,{forwardRef}from 'react'
import { Select as Sel, Option } from "@material-tailwind/react";
 const  SelectTail=({
  selectionOption  ,
   classsNam , 
   label,
   name,
   error,
   defaultValues,
   isRequired=false,
    ...props}) =>{
  return (
  
    <div>
      <Sel  {...props} name={name} required={isRequired} label={label} className={`${classsNam}`}>
      {
        selectionOption?
        selectionOption.map((item , index)=>(
          <Option key={index} selected={defaultValues === item ?true:false}  value={item}>{item}</Option>
        ))
        :(
          <Option value={null} >Not Options</Option>
        )
      }
      </Sel>
      <p className=" text-xs px-2 mb-0 pt-1 text-[#f5594e] ">{error?.message}</p>
    </div>
  )
}
export default forwardRef(SelectTail);