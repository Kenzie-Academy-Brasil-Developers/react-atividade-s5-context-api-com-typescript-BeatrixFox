import { useCart } from "../../Provider/Cart/index";
import { Container } from "./style";

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  product: ProductData;
}

export const CardCart = ({
  id,
  title,
  description,
  image,
  price,
  product,
}: ProductsProps) => {
  const { deleteProduct } = useCart();

  return (
    <Container>
      <img src={image} alt={title} height="150px" />
      <h5>{title}</h5>
      <p>
        Price: <span>R$ {price}</span>
      </p>
      <button onClick={() => deleteProduct(product)}>Remover Produto</button>
    </Container>
  );
};

export default CardCart;
