const ItemsId: React.FC<{ params: { itemId: string } }> = ({
  params,
}: {
  params: { itemId: string }
}) => {
  return <div>{params.itemId} intercepting</div>
}

export default ItemsId
