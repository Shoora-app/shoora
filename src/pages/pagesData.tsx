import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
// pages
import  SignUpPage  from "./signup";
// components
import EmailForm from "../components/EmailForm";
import PasswordForm from "../components/PasswordForm";
import ProfileForm from "../components/ProfileForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "signup",
        element: <SignUpPage />,
        children: [
          { path: "email", element: <EmailForm /> },
          { path: "profile", element: <ProfileForm /> },
          { path: "password", element: <PasswordForm /> },
        ],
      },
    ],
  },
]);
