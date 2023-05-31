import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup.string().required("Username  is required ").email("Email is invalid"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(40, "Password must not exceed 40 characters")
});

const emailValidationSchema = yup.object().shape({
  email: yup.string().email().required("")
})

const ticketReplayValidationSchema = yup.object({
  title: yup.string("Please provide valide value").required("Please provide valide value"),
  message: yup.string("Please provide valide value").required("Please provide valide value")
})

const documentValidationSchema = yup.object({
  title: yup.string('string type value').required('it is required '),
  content: yup.string('string type value').required('it is required ')
})

const changePasswordValidationSchema = yup.object({
  password: yup.string()
    .required("Current Password is required")
    .min(6, "Current Password must be at least 6 characters")
    .max(40, "Current Password must not exceed 40 characters"),
  confirmPassword: yup.string().oneOf(
    [yup.ref("password"), null],
    "New Password and Confirm password must match"
  ),
})

export const applyValidation = yup.object({
  firstName: yup.string().required('First Name is required ! '),
  lastName: yup.string().required('Last Name is required ! '),
  postal_code: yup.string().required('Postal code is required ! '),
  mail_id: yup.string().required('Mail is required ! '),
  contact_number: yup.string().required('Contact Number is required ! '),
  country_name: yup.string().required('Country is required ! '),
  course: yup.string().required('Course is required !'),
  current_role: yup.string().required('Course Role is required !'),
  linkedin_profile: yup.string().required('Linkedin profile  url  is required !'),
  exprience: yup.string().required('Linkedin profile  url  is required !'),
  whyInterested: yup.string().required('Linkedin profile  url  is required !'),
})

export const applyValidation_wider = yup.object({
  firstName: yup.string().required('First Name is required ! '),
  lastName: yup.string().required('Last Name is required ! '),
  postal_code: yup.string().required('Postal code is required ! '),
  mail_id: yup.string().required('Mail is required ! '),
  contact_number: yup.string().required('Contact Number is required ! '),
  country_name: yup.string().required('Country is required ! '),

  course: yup.string().required('Course is required !'),
  current_role: yup.string().required('Job role is required!'),
  linkedin_profile: yup.string().required('Job role is required!'),
  exprience: yup.string().required('experience is required!'),
  whyInterested: yup.string().required('This field is required!'),

  inspiration: yup.string().required('This field is required'),
  education: yup.string().required('Education is required!'),
  beleieveOnInstructor: yup.string().required('This field is required!'),
  ProfessionalTraining: yup.string().required('This field is required!'),
  studyTime: yup.string().required('Study time is required!'),
  workingHour: yup.string().required('Working Hour is required!'),
  intraction: yup.string().required('This field is required!'),
  courseScope: yup.string().required('This field is required!'),
  pacework: yup.string().required('This field is required!'),
  success: yup.string().required('This field is required!'),
  learnMore:yup.string().required('This field is required!'),
  hopeFromCourse: yup.string().required('This field is required!'),
  hearFrom: yup.string().required('This field is required!'),
  workAuth: yup.string().required('work authorization is required!'),
  willing: yup.string().required('Your willing is required!'),
  referedName: yup.string().required('Referal name is required!'),
  couponCode:yup.string().required('Referal name is required!'),
  aboutYourSelf: yup.string().required('About yourself is required!'),
})

export const courseValidation = yup.object({
  bannerTitle: yup.string().required('Title is required ! '),
  bannerDes: yup.string().required('Describition is required ! '),
})

export {
  loginValidationSchema,
  emailValidationSchema,
  ticketReplayValidationSchema,
  documentValidationSchema,
  changePasswordValidationSchema
};

