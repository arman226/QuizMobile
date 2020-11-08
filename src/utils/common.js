export const numberOfItemsDisplayText = (
  numberOfItems,
  singlarUnit = 'item',
  pluralUnit = 'items',
) => {
  return `${numberOfItems} ${numberOfItems > 1 ? pluralUnit : singlarUnit}`;
};
