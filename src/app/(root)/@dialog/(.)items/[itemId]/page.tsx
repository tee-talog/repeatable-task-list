import EditFormDialog from "@/components/EditFormDialog"
import useItem from "@/hooks/useItem"

const ItemsId: React.FC<{ params: { itemId: string } }> = async ({
  params,
}: {
  params: { itemId: string }
}) => {
  const { item } = await useItem(params.itemId)
  return <EditFormDialog item={item} />
}

export default ItemsId
