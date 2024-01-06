import useItem from "@/hooks/useItem"
import { Button } from "@mui/material"

const ItemsId: React.FC<{ params: { itemId: string } }> = async ({
  params,
}: {
  params: { itemId: string }
}) => {
  const { item } = await useItem(params.itemId)
  const update = async (formData: FormData) => {
    "use server"
    console.log("test", formData)
  }

  return (
    <form action={update}>
      <h2>編集</h2>
      <input name="name" type="text" value={item.name} />
      <Button>キャンセル</Button>
      <Button type="submit">OK</Button>
    </form>
  )
}

export default ItemsId
