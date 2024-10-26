import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRouteEnum } from '../routes';

export const useProduct = () => {
  const { products, setProducts } = useProductReducer();
  const [productsFiltered, setProductsFiltered] = useState<ProductType[]>();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setProductsFiltered(products);
  }, [products]);

  useEffect(() => {
    request(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRouteEnum.PRODUCT_INSERT);
  };

  const onSearch: SearchProps['onSearch'] = (value: string) => {
    if (value.length) {
      setProductsFiltered(
        products?.filter((product) => product.name.toLowerCase().includes(value.toLowerCase())),
      );
    } else {
      setProductsFiltered([...products]);
    }
  };

  const handleOnClickDelete = async (productId: number) => {
    await request(URL_PRODUCT_ID.replace('{productId}', `${productId}`), MethodsEnum.DELETE);
    await request(URL_PRODUCT, MethodsEnum.GET, setProducts);
  };

  return {
    productsFiltered,
    handleOnClickInsert,
    handleOnClickDelete,
    onSearch,
  };
};
