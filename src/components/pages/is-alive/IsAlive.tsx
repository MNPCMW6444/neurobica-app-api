import React from "react";
import Generic from "../Generic";

export default function IsAlive() {
  return (
    <div>
      <Generic
        type="get"
        ePURL="/isalive"
        params={[]}
        result={[]}
        errors={[]}
      />
    </div>
  );
}
