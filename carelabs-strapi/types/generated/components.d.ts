import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_features_feature_items';
  info: {
    displayName: 'featureItem';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface FeaturesServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_features_service_features';
  info: {
    displayName: 'serviceFeature';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface FooterFooterBottomlink extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_bottomlinks';
  info: {
    displayName: 'footer-bottomlink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'footer-menu';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.menu-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_menu_links';
  info: {
    displayName: 'menu-link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavbarNavbarItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_navbar_items';
  info: {
    displayName: 'navbar-item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    submenus: Schema.Attribute.Component<'submenus.service-item', true>;
  };
}

export interface NewNewItem extends Struct.ComponentSchema {
  collectionName: 'components_new_new_items';
  info: {
    displayName: 'new-item';
  };
  attributes: {
    btn_link: Schema.Attribute.String;
    btn_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicesBenefitSector extends Struct.ComponentSchema {
  collectionName: 'components_services_benefit_sectors';
  info: {
    displayName: 'sectorBenefits';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    list1: Schema.Attribute.Text;
    list2: Schema.Attribute.Text;
    list3: Schema.Attribute.Text;
  };
}

export interface ServicesMethodology extends Struct.ComponentSchema {
  collectionName: 'components_services_methodologies';
  info: {
    displayName: 'methodology';
  };
  attributes: {
    Order: Schema.Attribute.Integer;
    OrderSubtitleText: Schema.Attribute.Text;
    OrderTitleText: Schema.Attribute.String;
  };
}

export interface ServicesQuestions extends Struct.ComponentSchema {
  collectionName: 'components_services_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    questionAns: Schema.Attribute.Text;
    questionName: Schema.Attribute.Text;
  };
}

export interface ServicesRelatedServices extends Struct.ComponentSchema {
  collectionName: 'components_services_related_services';
  info: {
    displayName: 'relatedServices';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ServicesResultName extends Struct.ComponentSchema {
  collectionName: 'components_services_result_names';
  info: {
    displayName: 'resultName';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface ServicesResultsStat extends Struct.ComponentSchema {
  collectionName: 'components_services_results_stats';
  info: {
    displayName: 'resultsStat';
  };
  attributes: {
    description: Schema.Attribute.Text;
    percentage: Schema.Attribute.String;
  };
}

export interface ServicesServiceFeatures extends Struct.ComponentSchema {
  collectionName: 'components_services_service_features';
  info: {
    displayName: 'service-features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicesServicestats extends Struct.ComponentSchema {
  collectionName: 'components_services_servicestats';
  info: {
    displayName: 'servicestats';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface ServicesTechnicalItems extends Struct.ComponentSchema {
  collectionName: 'components_services_technical_items';
  info: {
    displayName: 'technicalItems';
  };
  attributes: {};
}

export interface ServicesWhatsIncludeFeatures extends Struct.ComponentSchema {
  collectionName: 'components_services_whats_include_features';
  info: {
    displayName: 'whats-include-features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    stat: Schema.Attribute.String;
  };
}

export interface ServicesWhyMatters extends Struct.ComponentSchema {
  collectionName: 'components_services_why_matters';
  info: {
    displayName: 'Why-Matters';
  };
  attributes: {
    ans1: Schema.Attribute.String;
    ans2: Schema.Attribute.String;
    ans3: Schema.Attribute.String;
    ans4: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String & Schema.Attribute.Required;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface StatsPerformanceMatrix extends Struct.ComponentSchema {
  collectionName: 'components_stats_performance_matrices';
  info: {
    displayName: 'performance-matrix';
  };
  attributes: {
    name: Schema.Attribute.String;
    stats: Schema.Attribute.String;
  };
}

export interface StatsProjectStat extends Struct.ComponentSchema {
  collectionName: 'components_stats_project_stats';
  info: {
    displayName: 'project-stat';
  };
  attributes: {
    count: Schema.Attribute.Integer;
    countryCount: Schema.Attribute.String;
    countryName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StatsStatBox extends Struct.ComponentSchema {
  collectionName: 'components_stats_stat_boxes';
  info: {
    displayName: 'stat-box';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface StatsSuccessStat extends Struct.ComponentSchema {
  collectionName: 'components_stats_success_stats';
  info: {
    displayName: 'success-stat';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SubmenusServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_submenus_service_items';
  info: {
    displayName: 'serviceItem';
  };
  attributes: {
    Button: Schema.Attribute.String;
    featureheading: Schema.Attribute.String;
    features: Schema.Attribute.Component<'features.feature-item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.feature-item': FeaturesFeatureItem;
      'features.service-feature': FeaturesServiceFeature;
      'footer.footer-bottomlink': FooterFooterBottomlink;
      'footer.footer-menu': FooterFooterMenu;
      'footer.menu-link': FooterMenuLink;
      'footer.social-link': FooterSocialLink;
      'navbar.navbar-item': NavbarNavbarItem;
      'new.new-item': NewNewItem;
      'services.benefit-sector': ServicesBenefitSector;
      'services.methodology': ServicesMethodology;
      'services.questions': ServicesQuestions;
      'services.related-services': ServicesRelatedServices;
      'services.result-name': ServicesResultName;
      'services.results-stat': ServicesResultsStat;
      'services.service-features': ServicesServiceFeatures;
      'services.servicestats': ServicesServicestats;
      'services.technical-items': ServicesTechnicalItems;
      'services.whats-include-features': ServicesWhatsIncludeFeatures;
      'services.why-matters': ServicesWhyMatters;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'stats.performance-matrix': StatsPerformanceMatrix;
      'stats.project-stat': StatsProjectStat;
      'stats.stat-box': StatsStatBox;
      'stats.success-stat': StatsSuccessStat;
      'submenus.service-item': SubmenusServiceItem;
    }
  }
}
