import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function Generic(props: {
  type: string;
  ePURL: string;
  params: { name: string; description: string }[];
  results: { objectDescription: string[]; description: string }[];
  errors: { code: number; message: string; description: string }[];
}) {
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
          variant="h5"
          component="h5"
        >
          Type: {props.type}
        </Typography>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Parameters:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.params.map((param) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{"name: " + param.name}</TableCell>
                </TableRow>
              ))}
              {props.params.length === 0 && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>None</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Possible (200) Results:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.results.map((result) => (
                <>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {result.objectDescription.length === 1 ? (
                        <span>
                          <b>Object Description: </b>
                          {result.objectDescription[0]}
                        </span>
                      ) : (
                        <b>Object Description: </b>
                      )}
                    </TableCell>
                  </TableRow>
                  {result.objectDescription.length > 1 &&
                    result.objectDescription.map((line) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{line}</TableCell>
                      </TableRow>
                    ))}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <b>Description: </b> {result.description}
                    </TableCell>
                  </TableRow>
                </>
              ))}
              {props.results.length === 0 && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>None</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Possible Errors:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.errors.map((error) => (
                <>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <b>Code: </b> {error.code}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <b>Mesage: </b> {error.message}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <b>Description: </b> {error.description}
                    </TableCell>
                  </TableRow>
                </>
              ))}
              {props.errors.length === 0 && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>None</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
