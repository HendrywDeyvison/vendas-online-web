import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { URL_CATEGORY_ID } from '../../../shared/constants/urls';
import { InsertCategoryDto } from '../../../shared/dtos/insertCategory.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connectionAPIPut } from '../../../shared/functions/connections/connectionAPI';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryRouteEnum } from '../routes';

export const useEditCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { setNotification } = useGlobalReducer();
  const { request, loading: loadingRequest } = useRequests();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const { category: categoryReducer, setCategory: setCategoryAction } = useCategoryReducer();
  const [category, setCategory] = useState<InsertCategoryDto>();

  useEffect(() => {
    setDisabledButton(true);

    request(
      URL_CATEGORY_ID.replace('{categoryId}', `${categoryId}`),
      MethodsEnum.GET,
      setCategoryAction,
    );
  }, [categoryId]);

  useEffect(() => {
    if (categoryReducer) {
      setCategory(categoryReducer);
    }
  }, [categoryReducer]);

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    if (category?.name) {
      setDisabledButton(false);

      setCategory({
        ...category,
        [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
      });
    }
  };

  const handleOnClickEdit = async () => {
    setLoading(true);

    await connectionAPIPut(URL_CATEGORY_ID.replace('{categoryId}', `${categoryId}`), category)
      .then(() => {
        setLoading(false);

        setNotification('success', 'Sucesso!', 'Categoria editada com sucesso!');
        navigate(CategoryRouteEnum.CATEGORY);
      })
      .catch((error: Error) => {
        setLoading(false);
        setNotification('error', 'Erro ao tentar editar a categoria', error.message);
      });
  };

  return {
    category,
    loading,
    loadingRequest,
    disabledButton,
    onChangeInput,
    handleOnClickEdit,
  };
};
