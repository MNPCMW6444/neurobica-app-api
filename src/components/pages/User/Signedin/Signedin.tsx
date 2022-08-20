import Generic from "../../Generic";

export default function Signedin() {
  return (
    <Generic
      type="GET"
      ePURL="/user/signedin"
      params={[]}
      results={[
        {
          objectDescription: ["{user} - mongo modal interface"],
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
          messageObject: [
            '{clientError: "At least one of the fields are missing"}',
          ],
          description:
            "This means the email, the fullname, the password or the passwordagain parameter is missing",
        },
        {
          code: 400,
          messageObject: [
            'clientError: "Password isn\'t strong enough, the value is" + passStrength',
          ],
          description: "This means the two passwords aren't the same",
        },
        {
          code: 400,
          messageObject: ['{clientError: "Passwords doesn\'t match"}'],
          description:
            "This means the password doesn't meet the minimum complexity policy - an ID of at least 2 (Medium), also the ID is given",
        },
        {
          code: 400,
          messageObject: [
            '{clientError: "An account with this email already exists"}',
          ],
          description: "As it is",
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
