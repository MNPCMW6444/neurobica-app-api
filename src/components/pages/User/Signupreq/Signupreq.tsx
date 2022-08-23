import { match } from "assert";
import Generic from "../../Generic";

export default function Signin() {
  return (
    <Generic
      type="POST"
      ePURL="/user/signupreq"
      params={[
        {
          name: "email",
          description: "The user's account's email",
          required: true,
        },
      ]}
      results={[
        {
          objectDescription: ['{result:"email successfully sent to "+email}'],
          description:
            "The request is valid and an email was send with sendgrid",
          cookies: [],
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
          description: "As it is",
        },
      ]}
    />
  );
}
