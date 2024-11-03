import { useParams } from "react-router-dom";
export default function CoffeeCards() {
  const obj = useParams();

  return <h2>Coffee Cards {obj.category}</h2>;
}
