import React from "react";
import { Input } from "@material-tailwind/react";
import { PasswordHideSVG } from "icons";

const Textfield = ({
  error,
  placeholder,
  name,
  isRequired,
  type,
  icon,
  ...props }) => {
  const [isPassword, SetPassWord] = React.useState(false)
  return (
    <div className="w-full ">
      <div className="relative">
        {icon && type.toLowerCase() === 'password' ?
          <span onClick={() => SetPassWord(!isPassword)} className={`z-[2] absolute top-2 right-3 bg-white ${type.toLowerCase() === 'password' ? 'cursor-pointer' : 'cursor-none'}`}>{isPassword ? <PasswordHideSVG className={`w-6 h-6 bg-transparent `} /> : icon}</span>
          : <span className={`z-[2] absolute top-2 right-3 bg-white ${type.toLowerCase() === 'password' ? 'cursor-pointer' : 'cursor-none'}`}>{isPassword ? <PasswordHideSVG className={'w-6 h-6 bg-transparent '} /> : icon}</span>}


        <Input label={placeholder}
          type={isPassword ? 'text' : type}
          name={name}
          required={isRequired}
          {...props}
          className={`input input-bordered  ${icon && ''} w-full ${error && "border border-primary-color"
            }`}
        />
      </div>
      <p className=" px-2 text-[#f5594e] mb-0 pt-1 text-xs ">{error?.message}</p>
    </div>
  );
}

export default React.forwardRef(Textfield);
