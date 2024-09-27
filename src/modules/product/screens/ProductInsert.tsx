import { useEffect } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input/input';
import Screen from '../../../shared/components/screen/Screen';
import Select from '../../../shared/components/selects/select/select';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRouteEnum } from '../routes';
import { LimitedContainer } from '../styles/productInsert.style';

const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <LimitedContainer>
        <Input label="Nome:" placeholder="Nome" margin="0px 0px 16px 0px" />
        <Input label="Preço:" placeholder="Preço" margin="0px 0px 16px 0px" />
        <Input label="Url Imagem:" placeholder="Url Imagem" margin="0px 0px 16px 0px" />
        <Input label="Largura:" placeholder="Largura" margin="0px 0px 16px 0px" />
        <Input label="Altura:" placeholder="Altura" margin="0px 0px 16px 0px" />
        <Input label="Comprimento:" placeholder="Comprimento" margin="0px 0px 16px 0px" />
        <Input label="Peso:" placeholder="Peso" margin="0px 0px 16px 0px" />
        <Input label="Diametro:" placeholder="Diametro" margin="0px 0px 16px 0px" />
        <Select
          label="Categoria:"
          width={'100%'}
          margin={'0px 0px 16px 0px'}
          defaultValue="Selecione"
          onChange={handleChange}
          options={[
            {
              value: 'Selecione',
              label: 'Selecione',
              disabled: true,
            },
            ...listOptions,
          ]}
        />
        <Button type="primary">Inserir Produto</Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
