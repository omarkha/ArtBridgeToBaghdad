import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";

const uri =
  process.env.NODE_ENV === "production"
    ? "https://artbridgetobaghdad.herokuapp.com"
    : "http://localhost:5000";

export default function useCheckout() {
  const { redirectToCheckout, cartDetails } = useShoppingCart();

  async function handleCheckout() {
    const session = await axios
      .post(`${uri}/api/checkout-sessions`, cartDetails)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        toast.error("Checkout Failed :(");
        console.log("error during checkout: ", err);
      });
    console.log(session.id);

    if (session) {
      redirectToCheckout(session.id);
    }
  }

  return handleCheckout;
}
