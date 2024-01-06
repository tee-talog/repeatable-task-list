"use client"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"

const EditFormDialog: React.FC<{ item: any }> = ({ item }) => {
  return (
    <Dialog open={true}>
      <DialogTitle>編集</DialogTitle>

      <DialogContent>{item.name}</DialogContent>

      <DialogActions>
        <Button onClick={() => history.back()}>キャンセル</Button>
        <Button>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditFormDialog
