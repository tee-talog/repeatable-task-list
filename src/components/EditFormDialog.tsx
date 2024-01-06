"use client"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import { useId } from "react"

const EditFormDialog: React.FC<{
  item: any
  onUpdate: (formData: FormData) => void
}> = ({ item, onUpdate }) => {
  const id = useId()

  return (
    <Dialog open={true}>
      <DialogTitle>編集</DialogTitle>

      <DialogContent>
        <form action={onUpdate} id={id}>
          <input name="name" type="text" value={item.name} />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => history.back()}>キャンセル</Button>
        <Button type="submit" form={id}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditFormDialog
