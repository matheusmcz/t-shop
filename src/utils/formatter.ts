export const dateFormatter = new Intl.DateTimeFormat("pt-BR");
export const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const stringCapitalized = (string: string) => {
  const captalizedString =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return captalizedString;
};
