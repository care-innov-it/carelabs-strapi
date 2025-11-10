import type { Schema, Struct } from '@strapi/strapi';

export interface NavbarNavbarItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_items';
  info: {
    displayName: 'navbar-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navbar.navbar-item': NavbarNavbarItem;
    }
  }
}
