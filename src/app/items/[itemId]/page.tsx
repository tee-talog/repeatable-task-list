const ItemsId: React.FC<{ params: { itemId: string } }> = ({
  params,
}: {
  params: { itemId: string }
}) => {
  return <div>{params.itemId}</div>
}

export default ItemsId
