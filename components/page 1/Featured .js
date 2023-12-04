const Featured = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row featured">
        <div className="col-lg-3 justify-content-between border">
          <h1>Quality Product</h1>
          <span>
            <i class="bi bi-check-lg"></i>
          </span>
        </div>
        <div className="col-lg-3 col-sm-12 justify-content-between border">
          <h1>Free Shipping</h1>
          <span>
          <i class="bi bi-truck"></i>
          </span>
        </div>
        <div className="col-lg-3 col-sm-12 justify-content-between border">
          <h1>Quality Product</h1>
          <span>
            <i class="bi bi-check-lg"></i>
          </span>
        </div>
        <div className="col-lg-3 col-sm-12 justify-content-between border">
          <h1>Quality Product</h1>
          <span>
            <i class="bi bi-truck"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
