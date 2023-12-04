import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Product = (props) => {
  const { title, price, imgUrl, passCartHandler } = props;
  console.log(title, price, imgUrl, passCartHandler, "kkkkkkkkkk");
  const clickCartHandle = (e) => {
    passCartHandler(title, price, imgUrl);
  };
  const myLoader = ({ src }) => {
    return `${imgUrl}`;
  };
  return (
    <div key={props.id} className="border">
      <Image loader={myLoader} src={`${imgUrl}`} width={400} height={200} />

      <div class="card-body">
        <h5 class="card-title">{props.title} </h5>

        <p class="card-text">
          {props.content}
          <span>{props.price}</span>
        </p>

        <a class="btn btn-primary" onClick={clickCartHandle}>
          Add To Cart
        </a>
      </div>
    </div>
  );
};

export default Product;
