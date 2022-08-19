import { Typography } from "@mui/material";

export default function Route(props: { ePURL: string; description: string }) {
  return (
    <div style={{ padding: "10%" }}>
      <Typography
        color={
          new Date().getHours() > 6 && new Date().getHours() < 20
            ? "black"
            : "white"
        }
        variant="h2"
        component="h2"
      >
        Neurobica App API ❤️
      </Typography>
      <Typography
        color={
          new Date().getHours() > 6 && new Date().getHours() < 20
            ? "black"
            : "white"
        }
        variant="h4"
        component="h4"
      >
        We ❤️ <a href="https://www.youtube.com/watch?v=-MTSQjw5DrM">REST</a>
      </Typography>
      <br />
      <br />
      <div
        style={{
          padding: "5%",
          borderRadius: "30px",
          backgroundColor:
            new Date().getHours() > 6 && new Date().getHours() < 20
              ? "#FFFFFFB0"
              : "#000000B0",
        }}
      >
        <Typography
          color={
            new Date().getHours() > 6 && new Date().getHours() < 20
              ? "black"
              : "white"
          }
          variant="h4"
          component="h4"
        >
          URL: {props.ePURL}
        </Typography>
        <br />
        <Typography
          color={
            new Date().getHours() > 6 && new Date().getHours() < 20
              ? "black"
              : "white"
          }
          variant="h5"
          component="h5"
        >
          {props.description}
        </Typography>
      </div>
    </div>
  );
}
