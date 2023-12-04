import Link from "next/link";
import { catigories } from "../../helper/data";
import Image from "next/image";
const ProductComponent = (props) => {
  return (
    <>
      {catigories.map((catigory) => (
        <div key={catigory.id} >
          <Image src={`/${catigory.imgUrl}`} class="card-img-top" width={346} height={230} alt="..." />{" "}
          <div class="card-body productComponent">
            <h5 class="card-title fw-bold text-center">{catigory.title} </h5>

            {/* <p class="card-text">
              {catigory.content}
            </p> */}

            <Link href={`/${catigory.id}`} class="btn text-center">
              Discover Products
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductComponent;
