export default async function ProductsId({params}) {
    const {id} = await params;

    
  return (
    <h1>ProductsId is : {id} </h1>
  );
}