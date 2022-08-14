import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { padding } from "@mui/system";

export default function Generic(props: {
  type: string;
  ePURL: string;
  params: { name: string; type: string }[];
  result: { name: string; type: string }[];
  errors: { code: number; message: string }[];
}) {
  return (
    <div style={{ padding: "10%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"row.name"}
              </TableCell>
              <TableCell align="right">{"row.calories"}</TableCell>
              <TableCell align="right">{"row.fat"}</TableCell>
              <TableCell align="right">{"row.carbs"}</TableCell>
              <TableCell align="right">{"row.protein"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}