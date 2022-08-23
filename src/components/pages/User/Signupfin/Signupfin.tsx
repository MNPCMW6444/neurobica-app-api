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
          description: "This means the email or the key parameter is missing",
        },
        {
          code: 400,
          messageObject: [
            '{clientError: "An account with this email already exists"}',
          ],
          description: "As it is, because on requests this isn't been checked",
        },
      ]}
    />
  );
}
