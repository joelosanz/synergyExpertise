import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsFaq extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface ElementsItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_items';
  info: {
    description: '';
    displayName: 'item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    description: '';
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsNosotros extends Struct.ComponentSchema {
  collectionName: 'components_elements_nosotros';
  info: {
    description: '';
    displayName: 'nosotros';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface LayoutBeneficios extends Struct.ComponentSchema {
  collectionName: 'components_layout_beneficios';
  info: {
    description: '';
    displayName: 'content-items';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    imageRight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    item: Schema.Attribute.Component<'elements.item', true>;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutCarrusel extends Struct.ComponentSchema {
  collectionName: 'components_layout_carrusels';
  info: {
    displayName: 'carrusel';
  };
  attributes: {
    images: Schema.Attribute.Component<'layout.images', true>;
  };
}

export interface LayoutFaq extends Struct.ComponentSchema {
  collectionName: 'components_layout_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq', true>;
  };
}

export interface LayoutImages extends Struct.ComponentSchema {
  collectionName: 'components_layout_images';
  info: {
    description: '';
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    description: '';
    displayName: 'Top Nav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.faq': ElementsFaq;
      'elements.item': ElementsItem;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'elements.nosotros': ElementsNosotros;
      'layout.beneficios': LayoutBeneficios;
      'layout.carrusel': LayoutCarrusel;
      'layout.faq': LayoutFaq;
      'layout.images': LayoutImages;
      'layout.top-nav': LayoutTopNav;
    }
  }
}
