
import { CURRENCY_SYMBOL } from "constants/common.constants";
import moment from "moment";
import toast from 'react-hot-toast';
import styled from "styled-components";
import no_img_sqr from "assets/free__blog_no_img.jpg"


export const isFunction = (fn) => typeof fn === "function";
export const stringifyError = (errors) => {
  return errors;
};

export const Img_ = (path) => {
  if (path) {
    return path
  } else {
    return no_img_sqr
  }
}
export const getLocalStorage = (key, initialValue) => {
  const resource = localStorage.getItem(key);
  return resource ? JSON.parse(resource) : initialValue;
};
export const isMobile = () => {

  if (window) {
    if (window.matchMedia("(max-width: 700px)").matches) {
      return true;
    } else {
      return false;
    }
  }
}

export const TxtCopy = (textBoad) => {
  const node = document.getElementById(textBoad);
  navigator.clipboard.writeText(node.innerText).then((done) => {
    toast.success("Copied");
  }).catch((error) => {
    toast.error("Something gone wrong ");
  })
}


export const getProductNameByLang = (detail, language = "end") => {
  if (detail?.length > 0)
    return detail?.find((a) => a.language === language) ?? detail[0];
  return (
    detail?.find((a) => a.language === language) ?? {
      name: "",
      description: "",
    }
  );
};

export const numberFormatter = (number, isCurrency) => {
  const isCurrencyBoolean = isCurrency ? true : false;
  return `${isCurrencyBoolean ? CURRENCY_SYMBOL : ""} ${new Intl.NumberFormat(
    "en-IN",
    { maximumSignificantDigits: 3 }
  ).format(number)}`;
};

export const generateYears = () => {
  var max = new Date().getFullYear()
  const moonLanding = new Date('July 20, 20 00:20:18').getFullYear();
  const current = max - moonLanding;
  var min = max - current;
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}

export const formatDate = (date, formate = "YYYY-MM-DD") => {
  return date ? moment(date).format(formate) : "-";
};
export const contactNumberFormatter = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumberString;
}


export const weekFirstDateLastDate = () => {
  let wDate = new Date();
  let dDay = wDate.getDay() > 0 ? wDate.getDay() : 7;
  let first = wDate.getDate() - dDay + 1;
  let firstDateWeek = new Date(wDate.setDate(first));
  let lastDateWeek = new Date(wDate.setDate(firstDateWeek.getDate() + 6));
  return { firstDateWeek, lastDateWeek };
}

export const monthFirstDateLastDate = () => {
  var date = new Date();
  var monthFirstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  var monthLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return { monthFirstDate, monthLastDate };
}



export const preciseNum = (num, decimal) => {
  return parseInt(num)?.toFixed(decimal ?? 2);
}
export const toExponent = (num, decimalValue = 3, isCurrency = false) => {
  if (num < 50000) {
    return ` ${isCurrency ? '$' : ''} ${parseInt(numberFormatter(num))}`;
  } else {
    return ` ${isCurrency ? '$' : ''} ${parseInt(num)?.toExponential(decimalValue)}`;
  }
}

export const ImgProvider = (src) => {
  if (src) {
    return `${src}`;
  } else {
    // remove from string 
    return 'ProfileImg';
  }
}

export const phoneFormat = (input, prefix) => {
  if (!input || isNaN(input)) return ` must be number  ${input}`
  if (typeof (input) !== 'string') input = input.toString()
  if (input.length === 10) {
    if (prefix) {
      return `${prefix} ${input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`;
    } else {
      return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
  } else if (input.length < 10) {
    return 'must be 10 digit'
  } else if (input.length > 10) {
    return 'must be  10 digit number'
  } else {
    return 'something went wrong'
  }
}
export const redirectOut = (e) => {
  if (window) {
    window.open(e);
  }
}

export const LogoIcon = styled.img`
width: ${props => props?.theme.width ?? '140px'};
height:auto;
margin:auto;
&& @media only screen and (max-width:550px){
  width: ${props => props?.theme.width ?? '140px'};
}
`;

export const isPublicApi = (url) => {
  const publicApiArray = ["/api/login/", "/api/register/"];
  return Boolean(publicApiArray.filter((e) => url?.includes(e))?.length);
};

export const asyncWrapper = (promise) =>
  promise.then((data) => ({ data, error: null }))
    .catch((error) => ({ data: null, error }));




export const universalRoutes = (isUser, routes) => {
  let user_arr = ["/login", "/forget-password", "/admin/verfiy-otp"]
  let high_priority = ["/admin/login", "/admin/forget-password", "/admin/verfiy-otp"]
  if (isUser) {
    return !Boolean(routes.map((j) => user_arr.some((i) => i === j))[0])
  } else {
    return !Boolean(routes.map((j) => high_priority.some((i) => i === j))[0])
  }
}

// pagination component 
function remevoFilterKey(object__) {
  Object.keys(object__).forEach((key) => ((object__[key] === undefined
    || object__[key] === null
    || object__[key] === "") && delete object__[key]))
}

function preparedQuery(object__) {
  Object.keys(object__).map((key) => {
    return key + "=" + object__[key]
  }).join("&")
}

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
export const file_base64 = async (file) => {
  const base64 = await convertBase64(file)
  return base64;
};
export {
  preparedQuery,
  remevoFilterKey
}