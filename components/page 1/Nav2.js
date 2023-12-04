import Link from "next/link";

const Nav2 = () => {
  return (
    <>
      <div className="row align-items-center p-3">
        <div className="col-lg-3 text-start logo">
          <a href="/">
            <h1>
              <span className="border px-3 py-1">E</span>
              <span className=" logo border-0 fw-bolder mx-2">SHOPPER</span>
            </h1>
          </a>
        </div>
        {/* ------------------ */}
        <div className="col-lg-6">
          <div class="input-group flex-nowrap my-2 m-lg-0">
            <input
              type="text"
              class="form-control"
              placeholder="search"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
            <span class="input-group-text" id="addon-wrapping">
              @
            </span>
          </div>
        </div>
        <div className="col-lg-3 text-center my-2 m-lg-0">
          <a href="#" className="border p-2 mx-2 fw-bold">
            <i class="bi bi-suit-heart-fill p-1 "></i>
            <span className="p-1">0</span>
          </a>
          <Link
            href="/mycart"
            className=" btn border p-2"
          >
            <i class="bi bi-cart p-1"></i>
            <span className="p-1">0</span>
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Nav2;
