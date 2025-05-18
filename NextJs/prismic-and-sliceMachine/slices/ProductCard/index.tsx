import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ProductCard`.
 */
export type ProductCardProps = SliceComponentProps<Content.ProductCardSlice>;

/**
 * Component for "ProductCard" Slices.
 */
const ProductCard: FC<ProductCardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.product_name} />
      <PrismicRichText field={slice.primary.product_descri} />
      <PrismicRichText field={slice.primary.products_price} />
      <PrismicNextImage field={slice.primary.product_img} />
      <PrismicLink href={slice.primary.product_link.link_type} >
        <button>  {slice.primary.product_link.text} </button>
      </PrismicLink>
    </section>
  );
};

export default ProductCard;
