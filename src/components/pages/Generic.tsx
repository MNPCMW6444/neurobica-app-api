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
  params: {
    name: string;
    description: string;
    required: boolean;
    default?: string;
  }[];
  results: {
    objectDescription: string[];
    cookies: { name: string; description: string }[];
    description: string;
  }[];
  errors: { code: number; messageObject: string[]; description: string }[];
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
        <Typography
          color={
            new Date().getHours() > 6 && new Date().getHours() < 20
              ? "black"
              : "white"
          }
          variant="h5"
          component="h5"
        >
          URI: {props.ePURL}
        </Typography>
        <br />
        <TableContainer component={Paper}>
          <Table
            sx={{ border: "1px solid orange" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Parameters:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.params.map((param) => (
                <div
                  style={{
                    backgroundColor: param.required ? "#FF000010" : "#00404010",
                    border: "0.3px solid orange",
                  }}
                >
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <span style={{ fontWeight: 900 }}>Name: </span>
                      {param.name}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <span style={{ fontWeight: 900 }}>Description: </span>
                      {param.description}
                    </TableCell>
                  </TableRow>
                  {!param.required && (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <span style={{ fontWeight: 900 }}>Default: </span>
                        {param.default}
                      </TableCell>
                    </TableRow>
                  )}
                </div>
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
          <Table
            sx={{ border: "1px solid orange" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Possible (200) Results:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.results.map((result) => (
                <div
                  style={{
                    backgroundColor: "#FF000010",
                    border: "0.3px solid orange",
                  }}
                >
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {result.objectDescription.length === 1 ? (
                        <span>
                          <span style={{ fontWeight: 900 }}>
                            Object Description:
                          </span>
                          {result.objectDescription[0]}
                        </span>
                      ) : result.objectDescription.length > 1 ? (
                        <span style={{ fontWeight: 900 }}>
                          Object Description:
                        </span>
                      ) : (
                        <span>
                          <span style={{ fontWeight: 900 }}>
                            Object Description:
                          </span>
                          None
                        </span>
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
                      {result.cookies.length > 0 ? (
                        <span style={{ fontWeight: 900 }}>Cookies: </span>
                      ) : (
                        <span>
                          <span style={{ fontWeight: 900 }}>Cookies: </span>
                          None
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                  {result.cookies.length > 0 &&
                    result.cookies.map((line) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <span style={{ fontWeight: 410 }}>{line.name}</span>
                          <span>: </span>
                          {line.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <span style={{ fontWeight: 900 }}>Description: </span>
                      {result.description}
                    </TableCell>
                  </TableRow>
                </div>
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
          <Table
            sx={{ border: "1px solid orange" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Possible Errors:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.errors.map((error) => (
                <div
                  style={{
                    backgroundColor: "#FF000010",
                    border: "0.3px solid orange",
                  }}
                >
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <span style={{ fontWeight: 900 }}>Code: </span>
                      {error.code}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {error.messageObject.length === 1 ? (
                        <span>
                          <span style={{ fontWeight: 900 }}>
                            Object Description:
                          </span>
                          {error.messageObject[0]}
                        </span>
                      ) : (
                        <span style={{ fontWeight: 900 }}>
                          Object Description:
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                  {error.messageObject.length > 1 &&
                    error.messageObject.map((line) => (
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
                      <span style={{ fontWeight: 900 }}>Description: </span>
                      {error.description}
                    </TableCell>
                  </TableRow>
                </div>
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
