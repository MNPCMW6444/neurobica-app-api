import { match } from "assert";
import Generic from "../../Generic";

export default function Signin() {
  return (
    <Generic
      type="POST"
      ePURL="/user/signup"
      params={[
        {
          name: "email",
          description: "The user's account's email",
          required: true,
        },
        {
          name: "password",
          description: "The user's account's desired password",
          required: true,
        },
        {
          name: "passwordagain",
          description:
            "The user's account's desired password, typed again to verify brain-browser connectivity integrity",
          required: true,
        },
        {
          name: "rememberme",
          description:
            "A boolean flag that will help set the cookie expiration date. if true - the expiration time will be 30 days.",
          required: false,
          default: "false (expiration time will be set to 6 hours)",
        },
      ]}
      results={[
        {
          objectDescription: [],
          description:
            "The login was successfull and you have a jwt as a cookie",
          cookies: [
            {
              name: "jwt",
              description:
                "A secure httpOnly cookie that contains the Json Web Token",
            },
          ],
        },
      ]}
      errors={[
        {
          code: 500,
          messageObject: [
            '{serverError: "Server is down now. Please try again later."}',
          ],
          description:
            "This means the server is obviously up because it responds but one of the Dbs, the main and/or the OC are unreachable",
        },
        {
          code: 400,
          messageObject: ['{clientError: "Passwords doesn\'t match"}'],
          description: "This means the two passwords aren't the same",
        },
        {
          code: 400,
          messageObject: ['{clientError: "Email already exists"}'],
          description:
            "This means that there is already an account using this email",
        },
      ]}
    />
  );
}
