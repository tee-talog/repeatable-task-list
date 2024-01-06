const useTasks = async () => {
  // TODO mock
  const tasks = [
    {
      id: "aaa",
      name: "task 1",
      limit: "2024-01-01（5 日前）",
      repeat: true,
      repeatDuration: "2 週",
    },
    {
      id: "bbb",
      name: "task 2",
      limit: "2024-01-08",
      repeat: true,
      repeatDuration: "2 週",
    },
    {
      id: "ccc",
      name: "task 3",
      limit: "2024-01-09",
      repeat: false,
      repeatDuration: "2 週",
    },
  ]

  return {
    tasks,
  }
}

export default useTasks
