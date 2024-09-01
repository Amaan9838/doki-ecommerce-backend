import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Schema.Component {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'OrderedItem';
  };
  attributes: {
    quantity: Attribute.Integer;
    price: Attribute.Decimal;
    product: Attribute.Relation<
      'ordered-item.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

export interface CartItemProductItemList extends Schema.Component {
  collectionName: 'components_cart_item_product_item_lists';
  info: {
    displayName: 'ProductItemList';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'cart-item.product-item-list',
      'oneToOne',
      'api::product.product'
    >;
    size: Attribute.Enumeration<['S', 'M', 'L', 'XL']>;
    quantity: Attribute.Integer;
  };
}

export interface CartItemCartItem extends Schema.Component {
  collectionName: 'components_cart_item_cart_items';
  info: {
    displayName: 'CartItem';
  };
  attributes: {
    products: Attribute.Relation<
      'cart-item.cart-item',
      'oneToMany',
      'api::product.product'
    >;
    size: Attribute.Enumeration<['S', 'M', 'L', 'XL']>;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
      'cart-item.product-item-list': CartItemProductItemList;
      'cart-item.cart-item': CartItemCartItem;
    }
  }
}
