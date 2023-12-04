import ProductComponent from "../general/ProductComponent";
import { fetchAllCatigories } from "../../helper/fetchApi";

const Categories = () => {
  return (
    <div className="container categories border p-2" id="catigories">
      <h1 className="lead text-center fw-bolder fs-5 py-2">Categories</h1>

      <ProductComponent
      // id={1}
      // title="Shirts"
      // content=""
      // imgUrl="img/cat-shoes.jpg"
      />
    </div>
  );
};

export default Categories;
