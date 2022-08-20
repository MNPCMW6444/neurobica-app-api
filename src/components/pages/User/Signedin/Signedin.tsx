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
          description: "The token is valid nd the full user object is retuned",
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
          code: 401,
          messageObject: ['{clientError: "Unauthorized"}'],
          description:
            "This means that the request was made without a jwt httpOnly cookie containing a valid token, try signing in and check that your client is setting the cookie`",
        },
      ]}
    />
  );
}
