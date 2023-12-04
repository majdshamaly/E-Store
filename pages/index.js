import Head from "next/head";
import Topbar from "@/components/Topbar";
import Nav2 from "@/components/page 1/Nav2";
import Nav from "@/components/page 1/Nav";
import Featured from "@/components/page 1/Featured ";
import Categories from "@/components/page 1/Categories";
import TrandyProducts from "@/components/page 1/TrandyProducts";
import StayUpdated from "@/components/page 1/StayUpdated";
import Footer from "@/components/general/Footer";




function Home(props) {
  const { ProductsOfAcatigory, AllCatigories } = props;
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Topbar />
      <Nav2 />
      <Nav />
      <Featured />
      <Categories AllCatigories={AllCatigories} />
      <TrandyProducts />
      <StayUpdated />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
 
  return {
    props: {
      
    },
  };
};

export default Home;
