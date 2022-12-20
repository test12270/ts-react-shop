import { useSelector } from "react-redux";
import CartList from "../components/CartList";
import EmptyCart from "../components/EmptyCart";
export default function Cart() {
  const cartCount = useSelector((state: any) => state.cartSlice.countState);

  console.log(cartCount);

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto ">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      <div>{cartCount === 0 ? <EmptyCart /> : <CartList />}</div>
      {/* <CartList /> */}
    </section>
  );
}
