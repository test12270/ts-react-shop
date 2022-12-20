import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import productSlice, { cartDispatcher } from "../store/store";
import { current } from "@reduxjs/toolkit";
import CartItem from "./CartItem";
export default function CartList() {
  const product = useSelector((state: any) => state.productSlice.productList);
  const cart = useSelector((state: any) => state.cartSlice.productlist);

  let zero = 0;
  let pricearr = cart.map((i: any) => i.totalPrice);
  let total = pricearr.reduce((a: number, b: number) => a + b, zero);
  // console.log(total);

  const dispatch = useDispatch();

  return (
    <>
      <div className="lg:flex justify-between mb-20">
        <div>
          <CartItem />
        </div>
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">총 : ${total.toFixed(2)}</span>

          <label
            htmlFor="confirm-modal"
            className="modal-button btn btn-primary ml-5"
          >
            구매하기
          </label>
        </div>
      </div>
      <div>
        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
            <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
            <div className="modal-action">
              <label
                htmlFor="confirm-modal"
                className="btn btn-primary"
                onClick={() =>
                  dispatch(cartDispatcher.Buying({ productlist: [] } as any))
                }
              >
                네
              </label>
              <label htmlFor="confirm-modal" className="btn btn-outline">
                아니오
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
