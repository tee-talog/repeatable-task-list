import useItem from "@/hooks/useItem"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"

const ItemsId: React.FC<{ params: { itemId: string } }> = async ({
  params,
}: {
  params: { itemId: string }
}) => {
  const { item } = await useItem(params.itemId)

  return (
    <Dialog open={true}>
      <DialogTitle>編集</DialogTitle>

      <DialogContent>{item.name}</DialogContent>

      <DialogActions>
        <Button>キャンセル</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ItemsId
