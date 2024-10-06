import {
  EyeOutlined,
  HomeOutlined,
  LaptopOutlined,
  PlusOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntd } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryRouteEnum } from '../../../modules/category/routes';
import { ProductRouteEnum } from '../../../modules/product/routes';
import { ContainerLogoName, ContainerMenu, LogoMenu, NameCompany } from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

const Menu = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('');

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Principal',
      icon: <HomeOutlined />,
    },
    {
      key: 'products',
      label: 'Produtos',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'products_view',
          label: 'Visualizar',
          onClick: () => navigate(ProductRouteEnum.PRODUCT),
          icon: <EyeOutlined />,
        },
        {
          key: 'products_insert',
          label: 'Inserir',
          onClick: () => navigate(ProductRouteEnum.PRODUCT_INSERT),
          icon: <PlusOutlined />,
        },
      ],
    },
    {
      key: 'categories',
      label: 'Categorias',
      icon: <ProfileOutlined />,
      children: [
        {
          key: 'categories_view',
          label: 'Visualizar',
          onClick: () => navigate(CategoryRouteEnum.CATEGORY),
          icon: <EyeOutlined />,
        },
        {
          key: 'categories_insert',
          label: 'Inserir',
          onClick: () => navigate(CategoryRouteEnum.CATEGORY_INSERT),
          icon: <PlusOutlined />,
        },
      ],
    },
    {
      key: 'order',
      label: 'Pedidos',
      icon: <SafetyCertificateOutlined />,
    },
    {
      key: 'user',
      label: 'Clientes',
      icon: <UserOutlined />,
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLogoName>
        <LogoMenu />
        <NameCompany>Vendas Online</NameCompany>
      </ContainerLogoName>
      <MenuAntd
        theme="dark"
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={['home']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
