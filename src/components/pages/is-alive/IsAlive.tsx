import Generic from "../Generic";

export default function IsAlive() {
  return (
    <div>
      <Generic
        type="GET"
        ePURL="/areyoualive"
        params={[]}
        results={[
          {
            objectDescription: ['{answer:"yes"}'],
            description: "The server is alive and connected to all it's DBs",
          },
        ]}
        errors={[
          {
            code: 500,
            message: '"Server is down now. Please try again later."',
            description:
              "This means the server is obviously up because it responds but one of the Dbs, the main and/or the OC are unreachable",
          },
        ]}
      />
    </div>
  );
}
