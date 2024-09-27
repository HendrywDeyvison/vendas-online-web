import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input/input';
import InputMeasure from '../../../shared/components/inputs/input/inputMeasure/inputMeasure';
import InputMoney from '../../../shared/components/inputs/input/inputMoney/inputMoney';
import Select from '../../../shared/components/inputs/select/select';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexRight } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProductDto } from '../../../shared/dtos/InsertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connectionAPIPost } from '../../../shared/functions/connections/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRouteEnum } from '../routes';
import { ProductInsertContainer } from '../styles/productInsert.style';

const ProductInsert = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();
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

  const loadCategories = () => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  };

  useEffect(() => {
    if (categories.length === 0) {
      loadCategories();
    }
  }, []);

  const listBreadcrumb = [
    {
      title: 'Home',
    },
    {
      title: 'PRODUTOS',
      navigateTo: ProductRouteEnum.PRODUCT,
    },
    {
      title: 'INSERIR PRODUTO',
    },
  ];

  const listOptions = categories.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });

  const onChange = (
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

  const handleOnClickCancel = () => {
    navigate(ProductRouteEnum.PRODUCT);
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

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <ProductInsertContainer>
        <LimitedContainer width="400px">
          <Input
            value={product?.name}
            label="Nome:"
            placeholder="Nome"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'name')}
          />
          <InputMoney
            value={product?.price}
            label="Preço:"
            placeholder="Preço"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'price', true)}
          />
          <Input
            value={product?.image}
            label="Url Imagem:"
            placeholder="Url Imagem"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'image')}
          />
          <InputMeasure
            value={product?.width}
            label="Largura:"
            placeholder="Largura"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'width', true)}
          />
          <InputMeasure
            value={product?.height}
            label="Altura:"
            placeholder="Altura"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'height', true)}
          />
          <InputMeasure
            value={product?.length}
            label="Comprimento:"
            placeholder="Comprimento"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'length', true)}
          />
          <InputMeasure
            value={product?.weight}
            label="Peso:"
            placeholder="Peso"
            margin="0px 0px 16px 0px"
            addonBefore="Kg"
            onChange={(event) => onChange(event, 'weight', true)}
          />
          <InputMeasure
            value={product?.diameter}
            label="Diametro:"
            placeholder="Diametro"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'diameter', true)}
          />
          <Select
            label="Categoria:"
            margin={'0px 0px 32px 0px'}
            defaultValue="Selecione"
            onChange={handleChangeSelect}
            options={[...listOptions]}
          />

          <DisplayFlexRight>
            <LimitedContainer width="120px" margin="0px 16px">
              <Button danger type="primary" onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width="120px">
              <Button loading={loading} type="primary" onClick={handleOnClickInsert}>
                Inserir Produto
              </Button>
            </LimitedContainer>
          </DisplayFlexRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
