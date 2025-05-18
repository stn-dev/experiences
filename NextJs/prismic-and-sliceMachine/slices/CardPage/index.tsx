import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CardPage`.
 */
export type CardPageProps = SliceComponentProps<Content.CardPageSlice>;

/**
 * Component for "CardPage" Slices.
 */
const CardPage: FC<CardPageProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.card_title} />
      <p> {slice.primary.description} </p>
      <PrismicNextImage field={slice.primary.card_img} />
    </section>
  );
};

export default CardPage;
