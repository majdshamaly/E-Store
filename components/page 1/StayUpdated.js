const StayUpdated = () => {
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center my-2">
        <div class="card col-12 p-5" style={{backgroundColor:"#EDF1FF "}}>
          <div class="card-body">
            <h5 class="card-title fw-bolder text-center fs-2">Stay Updated</h5>
            {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <p class="card-text text-muted text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="input-group flex-nowrap w-sm-100 w-lg-50 d-flex m-auto">
              <input
                type="text"
                class="form-control p-2 p-lg-3"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <button class="btn stayUpdatedButton" id="addon-wrapping">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated;
