import { formatCurrencyString } from "use-shopping-cart";

export default function formatProductPrice(product) {
  return formatCurrencyString({
    value: product.price * 100,
    currency: "USD",
    language: "English",
  });
}
