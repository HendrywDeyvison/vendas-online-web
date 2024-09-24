import { createContext, useContext, useState } from 'react';

import { ProductType } from '../../modules/product/types/ProductType';

interface DataContext {
  products?: ProductType[];
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}

const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContext>({});

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setProducts = (products: ProductType[] | any) => {
    products = products?.data || products;

    setData({
      ...data,
      products,
    });
  };

  return {
    products: data?.products || [],
    setProducts,
  };
};
