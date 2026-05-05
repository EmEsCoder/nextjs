import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <Link href={"products/item1"} >item1</Link>
    </>
  );
}
