import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/urls';
import { connectionAPIPost } from '../../../shared/functions/connections/connectionAPI';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { CategoryRouteEnum } from '../routes';
import { InsertCategoryDto } from './../../../shared/dtos/insertCategory.dto';

export const useInsertCategory = () => {
  const navigate = useNavigate();
  const { setNotification } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [category, setCategory] = useState<InsertCategoryDto>({
    name: '',
  });

  useEffect(() => {
    if (category.name) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [category]);

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setCategory({
      ...category,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleOnClickInsert = async () => {
    setLoading(true);

    await connectionAPIPost(URL_CATEGORY, category).catch((error: Error) => {
      setNotification('error', 'Erro ao tentar inserir a nova categoria', error.message);
    });

    setLoading(false);

    setNotification('success', 'Sucesso!', 'Produto inserido com sucesso!');
    navigate(CategoryRouteEnum.CATEGORY);
  };

  return {
    category,
    loading,
    disabledButton,
    onChangeInput,
    handleOnClickInsert,
  };
};
