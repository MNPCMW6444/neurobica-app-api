import LoginPageLogo from "./login-page/login-page-logo/LoginPageLogo";
import LoginPageExternalAuthButtons from "./login-page/login-page-external-auth-buttons/LoginPageExternalAuthButtons";
import LoginPageFields from "./login-page/login-page-fields/LoginPageFields";
import LoginPagefooter from "./login-page/login-page-footer/LoginPagefooter";
import LoginPageOptions from "./login-page/login-page-options/LoginPageOptions";
import LoginPageSendButton from "./login-page/login-page-send-button/LoginPageSendButton";
import LoginPageSignInSignUp from "./login-page/login-page-sign-in-sign-up/LoginPageSignInSignUp";

export default function LoginPage() {
  return (
    <div>
      <LoginPageLogo />
      <LoginPageSignInSignUp />
      <LoginPageFields />
      <LoginPageOptions />
      <LoginPageSendButton />
      <LoginPageExternalAuthButtons />
      <LoginPagefooter />
    </div>
  );
}
