import { useEffect, useState } from "react";
import Tabel from "./Tabel";
import Link from "next/link";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const pricePassHandler = (zax) => {
    const getSum = (total, num) => {
      return total + num;
    };
    // const totalPrice = zax.reduce(getSum, 0);
    setTotalPrice(zax.reduce(getSum, 0));
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <Tabel pricePassHandler={pricePassHandler} />
        </div>
        <div class="col-lg-4">
          <form class="mb-5" action="">
            <div class="input-group coupon">
              <input
                type="text"
                class="form-control"
                placeholder="Coupon Code"
              />
              <div class="input-group-append couponBtn">
                <button class="btn">Apply Coupon</button>
              </div>
            </div>
          </form>
          <div class="border mb-5 cartSummary">
            <div class="card-header border-0">
              <h4 class="fw-bold m-0">Cart Summary</h4>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-3 pt-1">
                <h6 class="font-weight-medium">Subtotal</h6>
                <h6 class="font-weight-medium">${totalPrice}</h6>
              </div>
              <div class="d-flex justify-content-between">
                <h6 class="font-weight-medium">Shipping</h6>
                <h6 class="font-weight-medium">$10</h6>
              </div>
            </div>
            <div class="card-footer border-secondary bg-transparent">
              <div class="d-flex justify-content-between mt-2">
                <h5 class="fw-bold">Total</h5>
                <h5 class="font-weight-bold">${totalPrice + 10}</h5>
              </div>
              <button class="btn btn-block my-3 py-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">hh</div>
      </div>
    </div>
  );
};

export default Cart;
