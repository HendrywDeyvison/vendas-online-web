import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '../../../shared/types/ProductType';
//import type { RootState } from '../../';

interface ProductState {
  products: ProductType[];
}

const initialState: ProductState = {
  products: [],
};

export const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsAction } = productReducer.actions;

export default productReducer.reducer;
