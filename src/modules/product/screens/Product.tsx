import { useEffect } from 'react';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();
  const loadProducts = async () => {
    request(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return products.map((product) => <div key={product.id}>{product?.name}</div>);
};

export default Product;
