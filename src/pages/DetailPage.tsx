import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartDispatcher } from "../store/store";
export default function DetailPage() {
  const dispatch = useDispatch();

  const params = useParams();
  const Id = Number(params.id);
  const Itemlist = useSelector((state: any) => state.productSlice.productList);

  const data = Itemlist.filter((i: any) => i.id === Id);
  console.log(Itemlist);
  console.log(data);
  // console.log(data);
  // const addToCart = () => {
  //   dispatch(cartDispatcher.addToCart({ id: Id, title: data.title } as any));
  // };

  return data.map((i: any) => (
    <>
      <section key={i.id} className="xl:container lg:pt-5 lg:pb-8  mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>{i.category}</li>
            <li>{i.title}</li>
          </ul>
        </div>

        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-none rounded-2xl overflow-hidden px-4 py-4 bg-white">
            <img src={i.image} alt={i.title} className="w-full h-72" />
          </figure>

          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {i.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>

            <span>{i.description}</span>
            <div className="flex items-center mt-3">
              <div>
                평점: {i.rating.rate} / {i.rating.count}명 참여
              </div>
            </div>
            <p className="mt-2 mb-4 text-3xl">${i.price}</p>
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch(
                    cartDispatcher.addToCart({
                      id: i.id,
                      title: i.title,
                      price: i.price,
                      image: i.image,
                    } as any)
                  )
                }
              >
                장바구니에 담기
              </button>
              <Link className="btn btn-outline" to={"/cart"}>
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </section>
      )
    </>
  ));
}
