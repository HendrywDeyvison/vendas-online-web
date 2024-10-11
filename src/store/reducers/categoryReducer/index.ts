import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType } from '../../../shared/types/CategoryType';

interface CategoryState {
  categories: CategoryType[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categoryReducer = createSlice({
  name: 'categoryReducer',
  initialState,
  reducers: {
    setCategoriesAction: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategoriesAction } = categoryReducer.actions;

export default categoryReducer.reducer;
