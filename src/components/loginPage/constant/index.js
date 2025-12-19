export const SIGNUP = [
  {
    name: "username",
    label: "Username",
    type: "input",
    placeholder: "Enter your Username",
    required: "Username is required!",
    isRequired: true,
  },
  {
    name: "email",
    label: "Email",
    type: "input",
    placeholder: "Email",
    isRequired: true,
    required: "Email is required!",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Enter valid email",
    },
  },
  {
    name: "password",
    label: "Password",
    type: "input",
    placeholder: "Password",
    isRequired: true,
    required: "Password is required!",
    pattern: {
      value: /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
      message: "Must include letters, number, symbol.",
    },
  },
];

export const SIGNIN = [
  {
    name: "username",
    label: "Email/Username",
    type: "input",
    placeholder: "Username",
    isRequired: true,
    required: "Username is required!",
    spellCheck: false,
  },
  {
    name: "password",
    label: "Password",
    type: "input",
    placeholder: "Password",
    isRequired: true,
    required: "Password is required!",
  },
];

export const FORGOT_PASSWORD = [
  {
    name: "email",
    label: "Email",
    type: "input",
    isRequired: true,
    placeholder: "Enter your email address",
    required: "Email is required!",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Enter valid email",
    },
  },
];
