// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = CardPageSlice;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

type HomepageDocumentDataSlicesSlice = CardSlice | HeroSlice | ButtonSlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * homePage field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: home
   * - **API ID Path**: homepage.homePage
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  homePage: prismic.KeyTextField;

  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type IdDocumentDataSlicesSlice = CardPageSlice;

/**
 * Content for card documents
 */
interface IdDocumentData {
  /**
   * Slice Zone field in *card*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: id.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<IdDocumentDataSlicesSlice>;
}

/**
 * card document from Prismic
 *
 * - **API ID**: `id`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IdDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<IdDocumentData>, "id", Lang>;

type ProductIdDocumentDataSlicesSlice = ProductCardSlice | HeroSlice;

/**
 * Content for product-page documents
 */
interface ProductIdDocumentData {
  /**
   * Slice Zone field in *product-page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: productID.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductIdDocumentDataSlicesSlice>;
}

/**
 * product-page document from Prismic
 *
 * - **API ID**: `productID`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductIdDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductIdDocumentData>,
    "productID",
    Lang
  >;

export type AllDocumentTypes =
  | BlogDocument
  | HomepageDocument
  | IdDocument
  | ProductIdDocument;

/**
 * Primary content in *Button → Default → Primary*
 */
export interface ButtonSliceDefaultPrimary {
  /**
   * button field in *Button → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: button
   * - **API ID Path**: button.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault;

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<"button", ButtonSliceVariation>;

/**
 * Primary content in *Card → Default → Primary*
 */
export interface CardSliceDefaultPrimary {
  /**
   * card_img field in *Card → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card.default.primary.card_img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  card_img: prismic.ImageField<never>;

  /**
   * title_card field in *Card → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: title card
   * - **API ID Path**: card.default.primary.title_card
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title_card: prismic.RichTextField;

  /**
   * card_descri field in *Card → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: card description
   * - **API ID Path**: card.default.primary.card_descri
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_descri: prismic.RichTextField;

  /**
   * card_link field in *Card → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: link to card
   * - **API ID Path**: card.default.primary.card_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  card_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for Card Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Card*
 */
type CardSliceVariation = CardSliceDefault;

/**
 * Card Shared Slice
 *
 * - **API ID**: `card`
 * - **Description**: Card
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlice = prismic.SharedSlice<"card", CardSliceVariation>;

/**
 * Primary content in *CardPage → Default → Primary*
 */
export interface CardPageSliceDefaultPrimary {
  /**
   * card title field in *CardPage → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: card_page.default.primary.card_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  card_title: prismic.TitleField;

  /**
   * description field in *CardPage → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_page.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * card_img field in *CardPage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card_page.default.primary.card_img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  card_img: prismic.ImageField<never>;
}

/**
 * Default variation for CardPage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardPageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardPageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CardPage*
 */
type CardPageSliceVariation = CardPageSliceDefault;

/**
 * CardPage Shared Slice
 *
 * - **API ID**: `card_page`
 * - **Description**: CardPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardPageSlice = prismic.SharedSlice<
  "card_page",
  CardPageSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * hero-img field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heroImg
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  heroImg: prismic.ImageField<never>;

  /**
   * title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: hero title
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * hero-decription field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**:  hero decription
   * - **API ID Path**: hero.default.primary.heroDecription
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heroDecription: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ProductCard → Default → Primary*
 */
export interface ProductCardSliceDefaultPrimary {
  /**
   * product_img field in *ProductCard → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.default.primary.product_img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  product_img: prismic.ImageField<never>;

  /**
   * product_name field in *ProductCard → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: product name
   * - **API ID Path**: product_card.default.primary.product_name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  product_name: prismic.RichTextField;

  /**
   * product_descri field in *ProductCard → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: description
   * - **API ID Path**: product_card.default.primary.product_descri
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  product_descri: prismic.RichTextField;

  /**
   * products_price field in *ProductCard → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: price
   * - **API ID Path**: product_card.default.primary.products_price
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  products_price: prismic.RichTextField;

  /**
   * product_link field in *ProductCard → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: see product
   * - **API ID Path**: product_card.default.primary.product_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  product_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;
}

/**
 * Default variation for ProductCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductCardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductCard*
 */
type ProductCardSliceVariation = ProductCardSliceDefault;

/**
 * ProductCard Shared Slice
 *
 * - **API ID**: `product_card`
 * - **Description**: ProductCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCardSlice = prismic.SharedSlice<
  "product_card",
  ProductCardSliceVariation
>;

/**
 * Default variation for SliceTest Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliceTestSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *SliceTest*
 */
type SliceTestSliceVariation = SliceTestSliceDefault;

/**
 * SliceTest Shared Slice
 *
 * - **API ID**: `slice_test`
 * - **Description**: SliceTest
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliceTestSlice = prismic.SharedSlice<
  "slice_test",
  SliceTestSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      IdDocument,
      IdDocumentData,
      IdDocumentDataSlicesSlice,
      ProductIdDocument,
      ProductIdDocumentData,
      ProductIdDocumentDataSlicesSlice,
      AllDocumentTypes,
      ButtonSlice,
      ButtonSliceDefaultPrimary,
      ButtonSliceVariation,
      ButtonSliceDefault,
      CardSlice,
      CardSliceDefaultPrimary,
      CardSliceVariation,
      CardSliceDefault,
      CardPageSlice,
      CardPageSliceDefaultPrimary,
      CardPageSliceVariation,
      CardPageSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      ProductCardSlice,
      ProductCardSliceDefaultPrimary,
      ProductCardSliceVariation,
      ProductCardSliceDefault,
      SliceTestSlice,
      SliceTestSliceVariation,
      SliceTestSliceDefault,
    };
  }
}
