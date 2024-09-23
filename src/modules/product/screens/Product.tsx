import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

const Product = () => {
  const { user } = useGlobalContext();

  return <div>{`PRODUTOS, USER: ${user?.name}`}</div>;
};

export default Product;
