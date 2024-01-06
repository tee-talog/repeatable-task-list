import useTasks from "@/hooks/useTasks"
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
  const { tasks } = await useTasks()

  return (
    <Container maxWidth="xl">
      <Box>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>タスク</TableCell>
                <TableCell sx={{ width: "250px" }}>期限</TableCell>
                <TableCell sx={{ width: "200px" }}>リピート</TableCell>
                <TableCell sx={{ width: "150px" }}></TableCell>
                <TableCell sx={{ width: "150px" }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tasks.map((task) => (
                <TableRow hover key={task.id}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>{task.limit}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      label={task.repeatDuration}
                      control={
                        <Checkbox
                          inputProps={{ "aria-label": "リピート" }}
                          checked={task.repeat}
                        />
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      component={NextLink}
                      href={`/tasks/${task.id}`}
                    >
                      編集
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="success">
                      完了
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
