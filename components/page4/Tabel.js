import { useEffect, useRef, useState } from "react";

const Tabel = (props) => {
  const [cardProductsArray, setCardProductsArray] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const { pricePassHandler } = props;

  useEffect(() => {
    const localStorageData = JSON.parse(
      localStorage.getItem("cardProductsArray")
    );
    setCardProductsArray(localStorageData);
    console.log(cardProductsArray, typeof cardProductsArray);
  }, []);

  const price = cardProductsArray.map((product) => product.price);
  pricePassHandler(price);

  return (
    <table className="table border">
      <thead className="text-center">
        <tr>
          <th scope="col">products</th>
          <th scope="col">image</th>
          <th scope="col">title</th>
          <th scope="col">price</th>
          <th scope="col">total</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {cardProductsArray.map((product, value) => (
          <tr key={product.id}>
            <th scope="row">{value + 1}</th>
            <td>
              <img
                src={product.imgUrl}
                className="w-1"
                style={{ width: "40px" }}
              />
            </td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabel;
