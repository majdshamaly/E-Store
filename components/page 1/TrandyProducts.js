import Product from "../general/Product";
import ProductComponent from "../general/ProductComponent";

const TrandyProducts = (props) => {
  const { ProductsOfAcatigory } = props;
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-lg-12 py-5 text-center fw-bolders">
          Trandy Products
        </h1>
        <div className="trandyProducts">
          {/* {ProductsOfAcatigory.map((product) => ( */}
          <Product
            title={"Electronic Soft Shoes"}
            price={"$225"}
            imgUrl={"https://api.lorem.space/image/fashion?w=640&h=480&r=7281"}
          />
          <Product
            title={"Electronic Soft Shoes"}
            price={"$225"}
            imgUrl={"https://api.lorem.space/image/fashion?w=640&h=480&r=7281"}
          />
          <Product
            title={"Electronic Soft Shoes"}
            price={"$225"}
            imgUrl={"https://api.lorem.space/image/fashion?w=640&h=480&r=7281"}
          />

          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default TrandyProducts;
