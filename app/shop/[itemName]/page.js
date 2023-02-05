export default function ItemNamePage(props) {
  console.log(props);
  return <h1>Single Item {props.params.itemName}</h1>;
}
