import { useEffect, useState } from "react";
import Product from "../general/Product";
import ProductComponent from "../general/ProductComponent";
import Link from "next/link";
import { catigories } from "../../helper/data";
const Nav = (props) => {
  const [filteredArray, setFilteredArray] = useState([]);
  const ProductsOfAcatigory = props.ProductsOfAcatigory;
  // const [title, setTitle] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  // const [price, setPrice] = useState(2);
  const [cardProductsobj, setCardProductsobj] = useState({});

  const radioFilterHandel = (e) => {
    const filterFunc = (product) => {
      return product.price <= e.target.value;
    };
    const filteredProducts = ProductsOfAcatigory.filter(filterFunc);
    console.log(filteredProducts, "21211");
    setFilteredArray(filteredProducts);
  };
  // const [addToCard, setAddToCard] = useState(false);
  const [cardProductsArray, setCardProductsArray] = useState([]);
  const passCartHandler = (title, price, imgUrl) => {
    setCardProductsobj({
      title: title,
      price: price,
      imgUrl: imgUrl,
    });
  };

  // useEffect(() => {
  //   if (localStorage.getItem("cardProductsArray") === null) {
  //     localStorage.setItem("cardProductsArray", cardProductsArray);
  //   } else {
  //     const localStorageData = JSON.parse(
  //       localStorage.getItem("cardProductsArray")
  //     );
  //     // localStorage.setItem(
  //     //   "cardProductsArray",
  //     //   JSON.stringify(localStorageData)
  //     // );
  //     setCardProductsArray([...localStorageData, cardProductsobj]);
  //   }
  // }, [cardProductsobj]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 d-non d-lg-block">
          <div class="btn-group w-100">
            <button
              type="button"
              class="btn btn-lg btnCatigory dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Catigories
            </button>
            <ul class="dropdown-menu  w-100">
              {catigories.map((catigorie) => (
                <li key={catigorie.id}>
                  <Link class="dropdown-item" href={`/${catigorie.id}`}>
                    {catigorie.title}
                  </Link>
                  <hr class="dropdown-divider" />
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------ */}
          <div className="border my-5 pb-5">
            <h1 className="h3 text-center m-2 text-danger">Filter By Price</h1>
            <div class="form-check px-0 py-2">
              <input
                class="form-check-input mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={100}
                onChange={radioFilterHandel}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" <  $100"}
              </label>
            </div>
            <div class="form-checkd-flex px-0 py-2">
              <input
                class="form-check-input mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={300}
                onChange={radioFilterHandel}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {`<  $300`}
              </label>
            </div>
            <div class="form-check px-0 py-2">
              <input
                class="form-check-input mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={600}
                onChange={radioFilterHandel}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {`<  $600`}
              </label>
            </div>
            <div class="form-check px-0 py-2">
              <input
                class="form-check-input mx-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value={[1000]}
                onChange={radioFilterHandel}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {"<  $1000"}
              </label>
            </div>
          </div>
        </div>

        {/* -------------------------------------- */}
        <div className="col-lg-9">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="/#catigories">
                      Catigories
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" href="/contact" tabindex="-1">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div class="d-flex">
                  <Link href="/login" className="px-2">
                    Log in
                  </Link>
                  <Link href="/logout">Log Out</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* ----------------- */}

          <div class="card text-center">
            <div class="card-header">{"catigoryDetails.name"}</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <div className="categories">
                {filteredArray.length === 0 &&
                  ProductsOfAcatigory.map((product) => (
                    <Product
                      id={product.id}
                      title={product.title}
                      imgUrl={product.images[0]}
                      price={product.price}
                      passCartHandler={passCartHandler}
                    />
                  ))}
                {filteredArray.length > 0 &&
                  filteredArray.map((product) => (
                    <Product
                      id={product.id}
                      title={product.title}
                      imgUrl={product.images[0]}
                      price={product.price}
                      passCartHandler={passCartHandler}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
