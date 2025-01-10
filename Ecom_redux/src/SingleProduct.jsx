import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "./slice";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => {
    return state.singleProduct;
  });
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);
  console.log(singleProduct);

  return (
    <>
      <div className="p-4 flex gap-4 items-center">
        <div className="w-1/4">
          <img src={singleProduct.image} alt="" />
        </div>
        <div className="w-3/4 pt-4">
          <h2 className="font-bold text-3xl">{singleProduct.title}</h2>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
