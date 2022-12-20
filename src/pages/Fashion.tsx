import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
export default function Fashion() {
  const Itemlist = useSelector((state: any) => state.productSlice.productList);
  const isLoading = useSelector(
    (state: any) => state.productSlice.loadingState
  );
  const fashionType = Itemlist.filter(
    (i: any) =>
      i.category === "men's clothing" || i.category === "women's clothing"
  );

  return isLoading === "loading" ? (
    <Loading />
  ) : (
    <section className="main">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>패션</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            패션
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
            data-scroll="false"
          >
            {fashionType?.map((item: any) => {
              return (
                <Link to={`/products/${item.id}`}>
                  <div className="card shadow-xl m-2">
                    <figure className="h-72 bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[70%] sm:w-1/2 hover:scale-110 ease-linear duration-200"
                      />
                    </figure>
                    <div className="card-body h-52">
                      <h2 className="card-title text-base">{item.title}</h2>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </article>
      </section>
    </section>
  );
}
