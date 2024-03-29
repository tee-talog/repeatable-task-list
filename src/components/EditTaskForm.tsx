"use client"

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material"
import React, { useMemo, useState } from "react"
import NextLink from "next/link"

const EditTaskForm: React.FC<{ task: any }> = ({ task }) => {
  const [repeat, setRepeat] = useState(task.repeat)
  const changeRepeat = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRepeat(() => ev.target.checked)
  }

  // TODO 入力方法を考える or UI ライブラリを探す
  const repeatDuration = useMemo(
    () =>
      Object.entries(task.repeatDuration)
        .filter((e) => !!e)
        .map((e) => e[1] + e[0]),
    [task.repeatDuration],
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <Typography variant="h2">編集</Typography>

      <Box>
        <TextField
          name="name"
          type="text"
          label="名前"
          required
          defaultValue={task.name}
        />
      </Box>

      <Box>
        <TextField
          name="limit"
          type="date"
          label="期限"
          required
          defaultValue={task.limit}
        />
      </Box>

      <Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="repeat"
                required
                defaultChecked={repeat}
                value={repeat}
                onChange={changeRepeat}
              />
            }
            label="繰り返し"
          />
        </FormGroup>
      </Box>

      <Box>
        <TextField
          name="repeatDuration"
          type="text"
          label="繰り返し周期"
          defaultValue={repeatDuration}
          disabled={!repeat}
        />
      </Box>

      <Box>
        <Button variant="outlined" component={NextLink} href="/">
          キャンセル
        </Button>
        <Button variant="contained" type="submit">
          OK
        </Button>
      </Box>
    </Box>
  )
}

export default EditTaskForm
