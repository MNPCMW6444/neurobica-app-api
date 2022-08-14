import React from "react";
import Generic from "../Generic";

export default function Users() {
  return (
    <div>
      <Generic type="get" ePURL="/users" params={[]} result={[]} errors={[]} />{" "}
    </div>
  );
}
