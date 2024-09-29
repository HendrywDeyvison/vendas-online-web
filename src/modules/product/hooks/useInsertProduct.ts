import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProductDto } from '../../../shared/dtos/InsertProduct.dto';
import { connectionAPIPost } from '../../../shared/functions/connections/connectionAPI';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRouteEnum } from '../routes';

export const useInsertProduct = () => {
  const navigate = useNavigate();
  const { setNotification } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [product, setProduct] = useState<InsertProductDto>({
    name: '',
    price: 0,
    image: '',
    width: 0,
    height: 0,
    length: 0,
    weight: 0,
    diameter: 0,
    categoryId: 0,
  });

  useEffect(() => {
    if (
      product.name &&
      product.price &&
      product.image &&
      product.width &&
      product.height &&
      product['length'] &&
      product.weight &&
      product.diameter &&
      product.categoryId
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [product]);

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleChangeSelect = (value: string) => {
    setProduct({ ...product, categoryId: Number(value) });
  };

  const handleOnClickInsert = async () => {
    setLoading(true);

    await connectionAPIPost(URL_PRODUCT, product).catch((error: Error) => {
      setNotification('error', 'Erro ao tentar inserir um novo produto', error.message);
    });

    setLoading(false);

    setNotification('success', 'Sucesso!', 'Produto inserido com sucesso!');
    navigate(ProductRouteEnum.PRODUCT);
  };

  return {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleChangeSelect,
    handleOnClickInsert,
  };
};
