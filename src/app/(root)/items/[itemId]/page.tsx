const ItemsId: React.FC<{ params: { itemId: string } }> = ({
  params,
}: {
  params: { itemId: string }
}) => {
  return <div>{params.itemId} default</div>
}

export default ItemsId
