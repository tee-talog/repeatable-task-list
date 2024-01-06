// TODO リネーム
// ショッピングリストを一般化して task にしてしまうのが良さそう
const useItem = async (itemId: string) => {
  // TODO mock
  const item = {
    id: itemId,
    name: "牛乳",
    limit: "2024-01-01",
    repeat: true,
    repeatDuration: {
      days: 2,
    },
  }

  return {
    item,
  }
}

export default useItem
