type ClassName = string | undefined | null;

export const classNameBuilder = (...classes: ClassName[]) => {
  return classes
    .filter((className) => !!className)
    .map((className) => className && className.trim())
    .join(" ")
    .replace(/\s+/g, " ");
};
