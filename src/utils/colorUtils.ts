export function isValidColor(color: string): boolean {
  // Check if the color is a valid hex code
  if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    return true;
  }

  // Check if the color is a valid RGB or RGBA value
  if (
    /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.test(color) ||
    /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d*(?:\.\d+)?)\s*\)$/i.test(color)
  ) {
    return true;
  }

  // Check if the color is a valid HSL or HSLA value
  if (
    /^hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\s*\)$/i.test(color) ||
    /^hsla\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d*(?:\.\d+)?)\s*\)$/i.test(color)
  ) {
    return true;
  }

  // Check if the color is a valid named color
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
}
