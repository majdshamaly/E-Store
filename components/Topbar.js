const Topbar = () => {
  return (
    <div className="container-fluid">
      <div className="row topnav py-2">
        <div className="col-lg-6 d-none d-lg-block text-left px-5">
          <a href="#">FAQ | </a>
          <a href="#">HELP | </a>
          <a href="#">SUPPORT | </a>
        </div>
        <div className="col-lg-6 d-none d-lg-block text-end px-5 tobbar-icons">
          <a class="text-dark px-2" href="">
            <i class="bi bi-linkedin"></i>
          </a>
          <a class="text-dark px-2" href="">
            <i class="bi bi-whatsapp"></i>
          </a>
          <a class="text-dark px-2" href="">
            <i class="bi bi-youtube"></i>
          </a>
          <a class="text-dark px-2" href="">
            <i class="bi bi-facebook"></i>
          </a>
          <a class="text-dark px-2" href="">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
