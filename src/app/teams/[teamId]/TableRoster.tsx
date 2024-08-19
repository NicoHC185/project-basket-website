import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IInfoPlayer } from "interfaces";
import { Theme, useTheme } from "@mui/material/styles";

const TableCellCustom = ({ children }: { children: any }) => {
  const theme: Theme = useTheme();
  const borderRow = `1px solid ${theme.palette.primary.dark}`;
  return (
    <TableCell
      sx={{
        borderTop: borderRow,
        borderBottom: borderRow,
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      {children}
    </TableCell>
  );
};

export default function TableRoster({ data }: { data: IInfoPlayer[] }) {
  const theme: Theme = useTheme();
  const borderRow = `1px solid ${theme.palette.primary.dark}`;
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "primary.light",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                borderBottom: borderRow,
              }}
            >
              {" "}
              Name
            </TableCell>
            <TableCell
              sx={{
                borderBottom: borderRow,
              }}
            >
              Position
            </TableCell>
            <TableCell
              sx={{
                borderBottom: borderRow,
              }}
            >
              Number
            </TableCell>
            <TableCell
              sx={{
                borderBottom: borderRow,
              }}
            >
              Country
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                // border: `1px solid ${theme.palette.primary.dark}`,
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCellCustom>{row.name}</TableCellCustom>
              <TableCellCustom>{row.position}</TableCellCustom>
              <TableCellCustom>{row.number}</TableCellCustom>
              <TableCellCustom>{row.country}</TableCellCustom>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
