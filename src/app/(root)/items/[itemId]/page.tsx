import useItem from "@/hooks/useItem"

const ItemsId: React.FC<{ params: { itemId: string } }> = async ({
  params,
}: {
  params: { itemId: string }
}) => {
  const { item } = await useItem(params.itemId)

  return <div>{item.name}</div>
}

export default ItemsId
