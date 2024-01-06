import { CheckBox } from "@mui/icons-material"
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import Container from "@mui/material/Container"

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>買うもの</TableCell>
                <TableCell sx={{ width: "250px" }}>期限</TableCell>
                <TableCell sx={{ width: "200px" }}>リピート</TableCell>
                <TableCell sx={{ width: "200px" }}></TableCell>
                <TableCell sx={{ width: "200px" }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow hover>
                <TableCell>牛乳</TableCell>
                <TableCell>2024-01-01（5 日前）</TableCell>
                <TableCell>
                  <Checkbox inputProps={{ "aria-label": "リピート" }} />
                </TableCell>
                <TableCell>
                  <Button variant="outlined">編集</Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="success">
                    買った
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}
