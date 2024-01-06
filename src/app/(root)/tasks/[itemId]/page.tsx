import EditTaskForm from "@/components/EditTaskForm"
import useTask from "@/hooks/useTask"
import { Box, Container } from "@mui/material"

const TasksId: React.FC<{ params: { taskId: string } }> = async ({
  params,
}: {
  params: { taskId: string }
}) => {
  const { task } = await useTask(params.taskId)
  const update = async (formData: FormData) => {
    "use server"
    // TODO
    console.log("test", formData)
  }

  return (
    <Container>
      <Box component="form" action={update}>
        <EditTaskForm task={task} />
      </Box>
    </Container>
  )
}

export default TasksId
