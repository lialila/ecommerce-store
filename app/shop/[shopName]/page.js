export default function ShopNamePage(props) {
  console.log(props);
  return <h1>Single Item {props.params.shopName}</h1>;
}
