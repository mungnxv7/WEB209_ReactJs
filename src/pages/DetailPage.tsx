import DetailProducts from "../components/DetailProducts";
import { useParams } from "react-router-dom";
import productService from "../services/product";
import { useContext, useEffect, useState } from "react";
import { Product } from "../types/product";
import { spinnerCT } from "../App";

const DetailPage = () => {
  const param = useParams();
  const [dispatch] = useContext(spinnerCT);
  const id = Number(param.id);
  const [product, setProdcut] = useState<Product | null>(null);

  useEffect(() => {
    dispatch({ type: "show" });
    productService.getDetail(id).then((response) => {
      setProdcut(response.data);
      dispatch({ type: "colse" });
    });
  }, []);

  return (
    <div className="mt-[70px]">
      <DetailProducts product={product} />
      <div className="mt-20">
        <h1 className="text-5xl font-bold">Other Products</h1>
        <div className="grid grid-cols-4 gap-8 mt-8"></div>
      </div>
    </div>
  );
};

export default DetailPage;
