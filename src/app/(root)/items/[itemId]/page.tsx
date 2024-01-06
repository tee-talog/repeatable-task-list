import EditFormDialog from "@/components/EditFormDialog"
import useItem from "@/hooks/useItem"

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

  return <EditFormDialog item={item} onUpdate={update} />
}

export default ItemsId
