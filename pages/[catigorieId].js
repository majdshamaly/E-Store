import ProductComponent from "@/components/general/ProductComponent";
import Nav from "@/components/page 2/Nav";
import Nav2 from "@/components/page 1/Nav2";
import Topbar from "@/components/Topbar";
import { useRouter } from "next/router";
import { fetchProductsOfAcatigory } from "../helper/fetchApi";
import Footer from "@/components/general/Footer";

const ProductsById = (props) => {
  const { ProductsOfAcatigory } = props;
  if (!ProductsOfAcatigory) {
    return (
      <div class="d-flex justify-content-center align-items-center vh-100 fs-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Topbar />
      <Nav2 />
      <Nav ProductsOfAcatigory={ProductsOfAcatigory} />
      <Footer />
    </>
  );
};
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { catigorieId: "1" } },
      { params: { catigorieId: "2" } },
      { params: { catigorieId: "3" } },
      { params: { catigorieId: "4" } },
      { params: { catigorieId: '5' } },
      { params: { catigorieId: "6" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const id = params.catigorieId;
  const ProductsOfAcatigory = await fetchProductsOfAcatigory(id);
  return {
    props: {
      ProductsOfAcatigory,
    },
  };
};

export default ProductsById;
