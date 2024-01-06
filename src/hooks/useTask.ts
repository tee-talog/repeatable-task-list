const useTask = async (taskId: string) => {
  // TODO mock
  const task = {
    id: taskId,
    name: "task 1",
    limit: "2024-01-01",
    repeat: true,
    repeatDuration: {
      days: 2,
    },
  }

  return {
    task,
  }
}

export default useTask
