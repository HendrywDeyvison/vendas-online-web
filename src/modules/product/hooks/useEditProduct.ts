import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { URL_PRODUCT_ID } from '../../../shared/constants/urls';
import { InsertProductDto } from '../../../shared/dtos/InsertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connectionAPIPut } from '../../../shared/functions/connections/connectionAPI';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { ProductRouteEnum } from '../routes';

export const useEditProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { setNotification } = useGlobalReducer();
  const { request, loading: loadingRequest } = useRequests();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { product: productReducer, setProduct: setProductReducer } = useProductReducer();
  const [product, setProduct] = useState<InsertProductDto>();

  useEffect(() => {
    setDisabledButton(true);

    request(
      URL_PRODUCT_ID.replace('{productId}', `${productId}`),
      MethodsEnum.GET,
      setProductReducer,
    );
  }, [productId]);

  useEffect(() => {
    if (productReducer) {
      setProduct({
        name: productReducer.name,
        price: productReducer.price,
        image: productReducer.image,
        width: productReducer.width,
        height: productReducer.height,
        length: productReducer.length,
        weight: productReducer.weight,
        diameter: productReducer.diameter,
        categoryId: productReducer.category.id,
      });
    }
  }, [productReducer]);

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    if (
      product?.name ||
      product?.price ||
      product?.image ||
      product?.width ||
      product?.height ||
      product?.length ||
      product?.weight ||
      product?.diameter ||
      product?.categoryId
    ) {
      setDisabledButton(false);

      setProduct({
        ...product,
        [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
      });
    }
  };

  const handleChangeSelect = (value: string) => {
    if (product) {
      setDisabledButton(false);

      setProduct({ ...product, categoryId: Number(value) });
    }
  };

  const handleOnClickEdit = async () => {
    setLoading(true);

    await connectionAPIPut(URL_PRODUCT_ID.replace('{productId}', `${productId}`), product)
      .then(() => {
        setLoading(false);

        setNotification('success', 'Sucesso!', 'Produto editado com sucesso!');
        navigate(ProductRouteEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setLoading(false);
        setNotification('error', 'Erro ao tentar editar o produto', error.message);
      });
  };

  return {
    product,
    loading,
    loadingRequest,
    disabledButton,
    onChangeInput,
    handleChangeSelect,
    handleOnClickEdit,
  };
};
