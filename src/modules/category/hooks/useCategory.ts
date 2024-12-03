import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connectionAPIDelete } from '../../../shared/functions/connections/connectionAPI';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryRouteEnum } from '../routes';
import { URL_CATEGORY, URL_CATEGORY_ID } from './../../../shared/constants/urls';

//! continuar e fazer a delete e edição da categoria, colocar um filtro para trazer somente as categorias ativas

export const useCategory = () => {
  const { setNotification } = useGlobalReducer();
  const { categories, setCategories } = useCategoryReducer();
  const [categoriesFiltered, setCategoriesFiltered] = useState<CategoryType[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryId, setCategoryId] = useState<number>();
  const [categoryName, setCategoryName] = useState('');
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setCategoriesFiltered(categories);
  }, [categories]);

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  const handleOnClickInsert = () => {
    navigate(CategoryRouteEnum.CATEGORY_INSERT);
  };

  useEffect(() => {
    if (categories?.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, [categories]);

  const onSearch: SearchProps['onSearch'] = (value: string) => {
    if (value.length) {
      setCategoriesFiltered(
        categories?.filter((category) => category.name.toLowerCase().includes(value.toLowerCase())),
      );
    } else {
      setCategoriesFiltered([...categories]);
    }
  };

  const handleOnClickEdit = (id: number) => {
    navigate(CategoryRouteEnum.CATEGORY_EDIT.replace(':categoryId', `${id}`));
  };

  const handleOnClickDelete = async () => {
    await connectionAPIDelete(URL_CATEGORY_ID.replace('{categoryId}', `${categoryId}`))
      .then(() => {
        setNotification('success', 'Sucesso!', 'Categoria deletada com sucesso!');
        navigate(CategoryRouteEnum.CATEGORY);
      })
      .catch((error: Error) => {
        setNotification('error', 'Erro ao tentar deletar a categoria', error.message);
      });

    setCategoryId(undefined);
    setIsModalOpen(false);

    /*  
    await request(URL_CATEGORY, MethodsEnum.GET, setCategories);

    setCategoryId(undefined);
    setIsModalOpen(false);

    setNotification('success', 'Sucesso!', 'Categoria deletada com sucesso!');*/
  };

  const showModal = (categoryId: number, categoryName: string) => {
    setCategoryId(categoryId);
    setCategoryName(categoryName);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleOnClickDelete();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    categories,
    categoriesFiltered,
    categoryName,
    handleOnClickInsert,
    handleOnClickDelete,
    handleOnClickEdit,
    onSearch,
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
  };
};
