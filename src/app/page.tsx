import useShoppingList from "@/hooks/useShoppingList"
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
import NextLink from "next/link"

export default async function Home() {
  const { items } = await useShoppingList()

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
                    <Button
                      variant="outlined"
                      component={NextLink}
                      href={`/items/${item.id}`}
                    >
                      編集
                    </Button>
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
