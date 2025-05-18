import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SliceTest`.
 */
export type SliceTestProps = SliceComponentProps<Content.SliceTestSlice>;

/**
 * Component for "SliceTest" Slices.
 */
const SliceTest: FC<SliceTestProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for slice_test (variation: {slice.variation}) Slices
    </section>
  );
};

export default SliceTest;
