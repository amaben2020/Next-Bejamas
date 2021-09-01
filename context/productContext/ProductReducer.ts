import { useReducer } from 'react';
import { FEATURED_PRODUCT } from './types';

interface Action {
  type: string;
  payload: boolean;
}
interface IMyState {
  featuredProduct: any;
}

interface IFeaturedProduct {
  // _id: string;
  // name: string;
  // image: string;
  // price: number;
  // rating: number;
  // numReviews: number;
  // filter: (a: any) => void;
  _id: string;
  details: null;
  name: string;
  category: string;
  price: number;
  featured: boolean;
  bestseller: boolean;
  image: object;
  currency: string;
}

const ProductReducer = (
  state: IMyState,
  action: Action,
  cartItems: IFeaturedProduct
) => {
  switch (action.type) {
    case FEATURED_PRODUCT:
      return {
        ...state,
        featuredProduct: [...state.featuredProduct, action.payload],
      };

    default:
      state;
  }
};

export default ProductReducer;
