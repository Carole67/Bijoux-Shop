import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { LoadProducts, AddProductToCart, RemoveProductToCart } from '../actions/product-action';
import { ProductStateModel } from './product-state-model';
import { removeItem, patch } from '@ngxs/store/operators';
import { Product } from '../../models/product';

@State<ProductStateModel>({
  name: 'cart',
  defaults: {
    cart: []
  }
})

export class ProductState {

  @Selector()
  static getPanier(state: ProductStateModel) {
    return state.cart;
  }

  @Action(AddProductToCart)
  add({ getState, patchState }: StateContext<ProductStateModel>, { payload }: AddProductToCart) {
    const state = getState();
    patchState({
      cart: [...state.cart, payload]
    });
  }

  @Action(RemoveProductToCart)
  del(ctx: StateContext<ProductStateModel>, { payload }: RemoveProductToCart) {
    ctx.setState(
      patch({
        cart: removeItem<Product>(p => p === payload)
      })
    )
  }


}