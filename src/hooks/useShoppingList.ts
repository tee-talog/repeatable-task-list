const useShoppingList = async () => {
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

  return {
    items,
  }
}

export default useShoppingList
