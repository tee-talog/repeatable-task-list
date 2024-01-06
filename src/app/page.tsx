import { CheckBox } from "@mui/icons-material"
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import Container from "@mui/material/Container"

export default function Home() {
  // TODO mock
  const items = [
    {
      id: "aaa",
      name: "牛乳",
      limit: "2024-01-01（5 日前）",
      repeat: true,
      repeatPeriod: "2 週",
    },
    {
      id: "bbb",
      name: "たまご",
      limit: "2024-01-08",
      repeat: true,
      repeatPeriod: "2 週",
    },
    {
      id: "ccc",
      name: "お菓子",
      limit: "2024-01-09",
      repeat: false,
      repeatPeriod: "2 週",
    },
  ]

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
                <TableCell sx={{ width: "150px" }}></TableCell>
                <TableCell sx={{ width: "150px" }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items.map((item) => (
                <TableRow hover key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.limit}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      label={item.repeatPeriod}
                      control={
                        <Checkbox
                          inputProps={{ "aria-label": "リピート" }}
                          checked={item.repeat}
                        />
                      }
                    />
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}
