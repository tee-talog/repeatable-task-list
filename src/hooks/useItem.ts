// TODO リネーム
// ショッピングリストを一般化して task にしてしまうのが良さそう
const useItem = async (itemId: string) => {
  // TODO mock
  const item = {
    id: itemId,
    name: "牛乳",
    limit: "2024-01-01（5 日前）",
    repeat: true,
    repeatPeriod: "2 週",
  }

  return {
    item,
  }
}

export default useItem
