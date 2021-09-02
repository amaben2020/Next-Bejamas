import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_SINGLE_ITEM_FROM_CART,
} from './Types';

interface Action {
  type: string;
  payload: boolean;
}
interface IMyState {
  cartItems: any;
  showCart: any;
  state: object;
  featuredProduct: any;
}

interface ICartItems {
  _id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  numReviews: number;
  filter: (a: any) => void;
}

const CartReducer = (
  state: IMyState,
  action: Action,
  cartItems: ICartItems
) => {
  switch (action.type) {
    case SHOW_HIDE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_FROM_CART: {
      return {
        cartItems: [],
      };
    }

    case REMOVE_SINGLE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: ICartItems) => cartItem._id !== cartItem._id
        ),
      };
    }

    default:
      state;
  }
};

export default CartReducer;
