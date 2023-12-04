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
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
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
        </div>
      </div>
    </div>
  );
};

export default Nav;
