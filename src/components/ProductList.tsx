import store from "../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ProductList() {
  //   const Product = useSelector(ProductList);

  interface Item {
    productSlice: {
      loadingState: string;
      productList: any;
    };
  }
  const Itemlist = useSelector((state: Item) => state.productSlice.productList);
  const isLoading = useSelector(
    (state: Item) => state.productSlice.loadingState
  );

  const MensfashionList = Itemlist.filter(
    (i: any) => i.category === "men's clothing"
  );
  const accessoryList = Itemlist.filter((i: any) => i.category === "jewelery");
  const digitalList = Itemlist.filter((i: any) => i.id < 13 && i.id > 8);
  const Wrapper = styled.div`
    .card:hover {
      img {
        transform: scale(120%);
        transition: 0.2s;
      }
    }
  `;

  return isLoading === "loading" ? (
    <Loading />
  ) : (
    <>
      <div className="pt-12 pb-8 px-2">
        <h1 className="text-center text-4xl font-bold mb-8">패션</h1>
        <div className="flex justify-center">
          {MensfashionList.map((item: any) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <Wrapper>
                <div className="card w-80  border border-gray-300 rounded-md mr-4">
                  <figure className="px-10 pt-10 h-80 bg-white">
                    <img
                      src={item.image}
                      alt="fashion"
                      className="object-scale-down h-48 w-96"
                    />
                  </figure>
                  <div className="card-body h-52 px-12  bg-gray-100 dark:bg-gray-700">
                    <h2 className="card-title text-base ">{item.title}</h2>
                    <p className="absolute bottom-16">${item.price}</p>
                  </div>
                </div>
              </Wrapper>
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-12 pb-8 px-2">
        <h1 className="text-center text-4xl font-bold mb-8">악세서리</h1>
        <div className="flex justify-center">
          {accessoryList?.map((item: any) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <Wrapper>
                <div className="card w-80 h-full border border-gray-300 rounded-md mr-4 ">
                  <figure className="px-10 pt-10 h-80 bg-white">
                    <img
                      src={item.image}
                      alt="accessory"
                      className="object-scale-down h-48 w-96"
                    />
                  </figure>
                  <div className="card-body h-52 px-12 bg-gray-100 dark:bg-gray-700">
                    <h2 className="card-title text-base">{item.title}</h2>
                    <p className="absolute bottom-10">${item.price}</p>
                  </div>
                </div>
              </Wrapper>
            </Link>
          ))}
        </div>
      </div>
      <div className="pt-12 pb-8 px-2">
        <h1 className="text-center text-4xl font-bold mb-8">디지털</h1>
        <div className="flex justify-center">
          {digitalList?.map((item: any) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <Wrapper>
                <div className="card w-80 border border-gray-300 rounded-md mr-4">
                  <figure className="px-10 pt-10 h-80  bg-white">
                    <img
                      src={item.image}
                      alt="digital"
                      className="object-scale-down h-48 w-96 "
                    />
                  </figure>
                  <div className="card-body h-52 px-12 bg-gray-100">
                    <h2 className="card-title text-base">{item.title}</h2>
                    <p className="absolute bottom-10">${item.price}</p>
                  </div>
                </div>
              </Wrapper>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
