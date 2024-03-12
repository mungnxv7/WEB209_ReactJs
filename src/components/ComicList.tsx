import { Pagination } from "antd";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Comic } from "../types/comic";
import { useEffect, useState } from "react";
import comicService from "../services/comic";
import ProductsItem from "./ProductsItem";
const ComicList = () => {
  const [page, setPage] = useState(1);
  const [totalComic, setTotalComic] = useState();
  const [comics, setComics] = useState<Comic[]>([]);
  const limit = 30;
  useEffect(() => {
    fetchComics();
  }, [page]);
  const fetchComics = async () => {
    const response = await comicService.getListComic(page, limit);
    setComics(response.data);
    setTotalComic(response.headers["x-total-count"]);
  };
  return (
    <div className="container mt-5">
      <div className="flex items-center gap-2 text-white font">
        <FaCloudDownloadAlt fontSize={28} />
        <h2 className="font-bold text-xl">Truyện Mới Cập Nhật</h2>
      </div>
      <div className="grid grid-cols-6 gap-x-3 gap-y-5 mt-3">
        {comics.map((comic, index) => (
          <ProductsItem key={index} comic={comic} />
        ))}
      </div>
      {/* <div className="">
        <Pagination
          defaultCurrent={page}
          total={totalComic}
          defaultPageSize={limit}
        />
      </div> */}
    </div>
  );
};

export default ComicList;
