import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMeasure from '../../../shared/components/inputs/input/inputMeasure/InputMeasure';
import InputMoney from '../../../shared/components/inputs/input/inputMoney/inputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlex,
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import { useCategory } from '../../category/hooks/useCategory';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRouteEnum } from '../routes';

const ProductInsert = () => {
  const navigate = useNavigate();
  const {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleChangeSelect,
    handleOnClickInsert,
  } = useInsertProduct();

  const { categories } = useCategory();

  const listBreadcrumb = [
    {
      title: 'HOME',
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

  const handleOnClickCancel = () => {
    navigate(ProductRouteEnum.PRODUCT);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width="400px">
          <Input
            value={product?.name}
            label="Nome:"
            placeholder="Nome"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'name')}
          />
          <Input
            value={product?.image}
            label="Url Imagem:"
            placeholder="Url Imagem"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'image')}
          />
          <InputMoney
            value={product?.price}
            label="Preço:"
            placeholder="Preço"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'price', true)}
          />
          <Select
            label="Categoria:"
            margin={'0px 0px 16px 0px'}
            defaultValue="Selecione"
            onChange={handleChangeSelect}
            options={[...listOptions]}
          />
          <DisplayFlex>
            <InputMeasure
              value={product?.weight}
              label="Peso:"
              placeholder="Peso"
              margin="0px 16px 16px 0px"
              addonBefore="Kg"
              onChange={(event) => onChangeInput(event, 'weight', true)}
            />
            <InputMeasure
              value={product?.length}
              label="Comprimento:"
              placeholder="Comprimento"
              margin="0px 0px 16px 0px"
              onChange={(event) => onChangeInput(event, 'length', true)}
            />
          </DisplayFlex>
          <DisplayFlex>
            <InputMeasure
              value={product?.height}
              label="Altura:"
              placeholder="Altura"
              margin="0px 16px 16px 0px"
              onChange={(event) => onChangeInput(event, 'height', true)}
            />
            <InputMeasure
              value={product?.width}
              label="Largura:"
              placeholder="Largura"
              margin="0px 0px 16px 0px"
              onChange={(event) => onChangeInput(event, 'width', true)}
            />
          </DisplayFlex>

          <InputMeasure
            value={product?.diameter}
            label="Diametro:"
            placeholder="Diametro"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'diameter', true)}
          />

          <DisplayFlexJustifyRight>
            <LimitedContainer width="120px" margin="0px 16px">
              <Button danger type="primary" onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width="120px">
              <Button
                loading={loading}
                disabled={disabledButton}
                type="primary"
                onClick={handleOnClickInsert}
              >
                Inserir Produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default ProductInsert;
