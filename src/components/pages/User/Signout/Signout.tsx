import Generic from "../../Generic";

export default function Signout() {
  return (
    <Generic
      type="t"
      ePURL="t"
      params={[
        {
          name: "",
          description: "",
          required: true,
        },
        {
          name: "",
          description: "",
          required: true,
        },
        {
          name: "",
          description: "",
          required: false,
          default: "",
        },
      ]}
      results={[
        {
          objectDescription: [],
          description: "",
          cookies: [
            {
              name: "",
              description: "",
            },
          ],
        },
      ]}
      errors={[
        {
          code: 500,
          messageObject: ['{serverError: "'],
          description: "",
        },
        {
          code: 500,
          messageObject: ['serverError: "'],
          description: "",
        },
        {
          code: 400,
          messageObject: ['{clientError: "'],
          description: "",
        },
      ]}
    />
  );
}
