import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentElementsLinks extends Schema.Component {
  collectionName: 'components_component_elements_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String;
  };
}

export interface ComponentElementsListElement extends Schema.Component {
  collectionName: 'components_component_elements_list_elements';
  info: {
    displayName: 'listElement';
    description: '';
  };
  attributes: {
    itemName: Attribute.String;
    itemDesc: Attribute.String;
  };
}

export interface ComponentElementsList extends Schema.Component {
  collectionName: 'components_component_elements_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    listTitle: Attribute.String;
    list: Attribute.Component<'component-elements.list-element', true>;
  };
}

export interface ComponentElementsTextBlock extends Schema.Component {
  collectionName: 'components_component_elements_text_blocks';
  info: {
    displayName: 'textBlock';
    description: '';
  };
  attributes: {
    paragraphTitle: Attribute.String;
    paragraphContent: Attribute.String;
  };
}

export interface ComponentsAbout extends Schema.Component {
  collectionName: 'components_components_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    identificator: Attribute.String;
    list: Attribute.Component<'component-elements.list', true>;
  };
}

export interface ComponentsDocuments extends Schema.Component {
  collectionName: 'components_components_documents';
  info: {
    displayName: 'documents';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    identificator: Attribute.String;
  };
}

export interface ComponentsFooter extends Schema.Component {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    title: Attribute.String;
    textBlock: Attribute.Component<'component-elements.text-block', true>;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    logo: Attribute.Media;
    backgroundImg: Attribute.Media;
    links: Attribute.Component<'component-elements.links', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component-elements.links': ComponentElementsLinks;
      'component-elements.list-element': ComponentElementsListElement;
      'component-elements.list': ComponentElementsList;
      'component-elements.text-block': ComponentElementsTextBlock;
      'components.about': ComponentsAbout;
      'components.documents': ComponentsDocuments;
      'components.footer': ComponentsFooter;
      'components.header': ComponentsHeader;
    }
  }
}
