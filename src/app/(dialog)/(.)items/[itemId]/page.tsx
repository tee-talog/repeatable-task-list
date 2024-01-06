import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"

const ItemsId: React.FC<{ params: { itemId: string } }> = ({
  params,
}: {
  params: { itemId: string }
}) => {
  return (
    <Dialog open={true}>
      <DialogTitle>編集</DialogTitle>

      <DialogContent>{params.itemId}</DialogContent>

      <DialogActions>
        <Button>キャンセル</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ItemsId
