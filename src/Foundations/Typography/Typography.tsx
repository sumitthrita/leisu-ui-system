import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Sizes, TypographyProps, Weight, pixelToSemanticMapper, SizeTypes, ColorTypes } from "./types";
import "./Typography.scss";
import { classNameBuilder } from "../../utils/classNameBuilder";
import { isValidColor } from "../../utils/colorUtils";

export const Typography: React.FC<TypographyProps> = (props) => {
  const {
    children,
    size = Sizes.b1,
    textColor = "#333",
    weight = Weight.regular,
    underline = false,
    capitalize = false,
    ellipsis = false,
    lineThrough = false,
    className = "",
    style,
    ...rest
  } = props;

  const heading = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const computedSize =
    typeof size === "number" ? pixelToSemanticMapper[size as keyof typeof pixelToSemanticMapper] || Sizes.b1 : size;

  const isSemanticSize = typeof size !== "number";

  const computedClassName = useMemo(() => {
    return classNameBuilder(
      "leisu-typography",
      weight && `${weight}`,
      (isSemanticSize && computedSize) ? `size-${computedSize}` : null,
      underline ? "underline" : null,
      capitalize ? "capitalize" : null,
      ellipsis ? "ellipsis" : null,
      lineThrough ? "lineThrough" : null
    );
  }, [weight, underline, capitalize, ellipsis, lineThrough, isSemanticSize, computedSize]);

  const getColor = (color: ColorTypes) => {
    return isValidColor(color) ? color : "#333";
  };

  const styleOverrides = {
    color: getColor(textColor),
    ...(isSemanticSize ? {} : {
      fontSize: `${size}px`,
      lineHeight: `${Number(size) * 1.5}px`,
    }),
    ...style,
  };

  if (heading.includes(computedSize)) {
    const HeadingTag = computedSize as keyof JSX.IntrinsicElements;
    return (
      // @ts-ignore
      <HeadingTag className={`${computedClassName} ${className}`} style={styleOverrides} {...rest}>
        {children}
      </HeadingTag>
    );
  }

  return (
    <p className={`${computedClassName} ${className}`} style={styleOverrides} {...rest}>
      {children}
    </p>
  );
};

Typography.propTypes = {
  weight: PropTypes.oneOf(Object.values(Weight)),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.values(Sizes)),
    PropTypes.number,
  ]) as PropTypes.Validator<SizeTypes>,
  textColor: PropTypes.string as PropTypes.Validator<ColorTypes>,
  underline: PropTypes.bool,
  capitalize: PropTypes.bool,
  ellipsis: PropTypes.bool,
  lineThrough: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Typography;
