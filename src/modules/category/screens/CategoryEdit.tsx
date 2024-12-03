import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screen/Screen';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limitedConteiner.style';
import { URL_CATEGORY } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useEditCategory } from '../hooks/useEditCategory';
import { CategoryRouteEnum } from '../routes';

const CategoryEdit = () => {
  const { categories, setCategories } = useCategoryReducer();
  const { request } = useRequests();
  const navigate = useNavigate();
  const { category, loading, disabledButton, onChangeInput, handleOnClickEdit } = useEditCategory();

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
      title: 'HOME',
    },
    {
      title: 'CATEGORIAS',
      navigateTo: CategoryRouteEnum.CATEGORY,
    },
    {
      title: 'EDITAR CATEGORIA',
    },
  ];

  const handleOnClickCancel = () => {
    navigate(CategoryRouteEnum.CATEGORY);
  };

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <DisplayFlexJustifyCenter>
        <LimitedContainer width="400px">
          <Input
            value={category?.name}
            label="Nome:"
            placeholder="Nome"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'name')}
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
                onClick={handleOnClickEdit}
              >
                Editar Categoria
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default CategoryEdit;
