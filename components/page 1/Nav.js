import Link from "next/link";
import { catigories } from "../../helper/data";
const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 d-non d-lg-block">
          <div class="btn-group w-100">
            <button
              type="button"
              class="btn btn-lg catDropDown dropdown-toggle"
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
        </div>
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
                    <Link class="nav-link active" aria-current="page" href="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#catigories">
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

          <div
            id="carouselExampleControls"
            class="carousel slide h-20"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="img/carousel-1.jpg"
                  class="img-fluid"
                  style={({ height: "100px" }, { width: "100%" })}
                  alt="..."
                />
                <div class="p-3 carouselCaption">
                  <div className="contentContainer">
                    <h4 class="text-light text-uppercase font-weight-medium mb-3 text-center">
                      10% Off Your First Order
                    </h4>
                    <h3 class="display-4 text-white fw-bolder mb-4 text-center">
                      Reasonable Price
                    </h3>
                    <a href="" class="btn btn-light py-2 px-3 rounded-0">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="img/carousel-2.jpg"
                  class="img-fluid"
                  style={({ height: "100px" }, { width: "100%" })}
                  alt="..."
                />
                <div class="p-3 carouselCaption">
                  <div className="contentContainer">
                    <h4 class="text-light text-uppercase font-weight-medium mb-3 text-center">
                      10% Off Your First Order
                    </h4>
                    <h3 class="display-4 text-white font-weight-semi-bold mb-4 text-center">
                      Fashionable Dress
                    </h3>
                    <a href="" class="btn btn-light py-2 px-3 rounded-0 ">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
