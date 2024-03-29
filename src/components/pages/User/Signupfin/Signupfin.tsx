import { match } from "assert";
import Generic from "../../Generic";

export default function Signin() {
  return (
    <Generic
      type="POST"
      ePURL="/user/signupfin"
      params={[
        {
          name: "email",
          description: "The user's account's email",
          required: true,
        },
        {
          name: "key",
          description: "The key that was sent by email after signupreq",
          required: true,
        },
        {
          name: "fullname",
          description: "The user's Full name - how he wants to be called",
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
      ]}
      results={[
        {
          objectDescription: [],
          description:
            "The signup was successfull and you have a jwt as a cookie",
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
          messageObject: [
            '{clientError: "At least one of the fields are missing"}',
          ],
          description:
            "This means the email, the key, the fullname, the password or the passwordagain parameter is missing",
        },
        {
          code: 400,
          messageObject: ['{clientError: "Passwords doesn\'t match"}'],
          description: "This means the two passwords aren't the same",
        },
        {
          code: 400,
          messageObject: ['{clientError: "The key is wrong"}'],
          description:
            "This means that the key what was send by email doesnt mactch the key passed as a parameter",
        },
        {
          code: 400,
          messageObject: [
            'clientError: "Password isn\'t strong enough, the value is" + passStrength',
          ],
          description:
            "This means the password doesn't meet the minimum complexity policy - an ID of at least 2 (Medium), also the ID is given",
        },
        {
          code: 400,
          messageObject: [
            '{clientError: "An account with this email already exists"}',
          ],
          description:
            "As it is, because on requests this isn't enough to be checked",
        },
      ]}
    />
  );
}
