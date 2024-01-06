import EditItemForm from "@/components/EditItemForm"
import useItem from "@/hooks/useItem"
import { Box, Container } from "@mui/material"

const ItemsId: React.FC<{ params: { itemId: string } }> = async ({
  params,
}: {
  params: { itemId: string }
}) => {
  const { item } = await useItem(params.itemId)
  const update = async (formData: FormData) => {
    "use server"
    // TODO
    console.log("test", formData)
  }

  return (
    <Container>
      <Box component="form" action={update}>
        <EditItemForm item={item} />
      </Box>
    </Container>
  )
}

export default ItemsId
