import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Card`.
 */
export type CardProps = SliceComponentProps<Content.CardSlice>;

/**
 * Component for "Card" Slices.
 */
const Card: FC<CardProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="card-component"
    >
      <PrismicRichText field={slice.primary.title_card} />
      <PrismicRichText field={slice.primary.card_descri} />
      <PrismicNextImage field={slice.primary.card_img} />
      <PrismicNextLink field={slice.primary.card_link} />
    </section>
  );
};

export default Card;
