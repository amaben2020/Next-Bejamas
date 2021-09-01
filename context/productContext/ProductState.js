import { useContext, useReducer } from 'react';
import { FEATURED_PRODUCT } from './types';

import ProductReducer from './ProductReducer';
import ProductContext from './ProductContext';

const ProductState = ({ children }) => {
  const initialState = {
    featuredProduct: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const featured = (item) => {
    return dispatch({ type: FEATURED_PRODUCT, payload: item });
  };

  return (
    <ProductContext.Provider
      value={{
        featuredProduct: state.featuredProduct,
        featured,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
