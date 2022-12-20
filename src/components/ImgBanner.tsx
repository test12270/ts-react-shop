import { Link } from "react-router-dom";
import fashionImage from "../img/fashion.jpeg";
import digitalImage from "../img/digital.jpeg";
import freshImgae from "../img/fresh.jpeg";

interface ImgContent {
  turn: string;
  prev: string;
  next: string;
  image: string;
  title: string;
  content: string;
  link: string;
}

function Img({ image, title, content, link, turn, prev, next }: ImgContent) {
  return (
    <div
      id={turn}
      className="carousel-item relative w-full  axis-horizontal h-screen"
    >
      <img src={image} className="w-full" />
      <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={prev} className="btn btn-ghost text-slate-300">
          ❮
        </a>
        <div className="flex w-full ml-8 mb-20">
          <h2 className="text-2xl lg:text-4xl absolute  font-bold text-white ">
            {title}
          </h2>
          <p className="my-2 text-white absolute  mt-12">{content}</p>
          <button className="btn absolute   mt-24">
            <Link to={link}>바로가기 →</Link>
          </button>
        </div>
        <a href={next} className="btn btn-ghost text-slate-300">
          ❯
        </a>
      </div>
    </div>
  );
}
function ImgBanner() {
  return (
    <div className="carousel w-full">
      <Img
        turn={"slide1"}
        image={fashionImage}
        title={"물빠진 청바지!"}
        content={"이제 막 도착한 패션 청바지를 구경해 보세요."}
        link={"/fashion"}
        next={"#slide2"}
        prev={"#slide3"}
      />
      <Img
        turn={"slide2"}
        image={digitalImage}
        title={"신속한 업무처리!"}
        content={"다양한 디지털 상품을 둘러보세요."}
        link={"/digital"}
        next={"#slide3"}
        prev={"#slide1"}
      />
      <Img
        turn={"slide3"}
        image={freshImgae}
        title={"신선한 식품!"}
        content={"농장 직배송으로 더욱 신선한 식료품을 만나보세요."}
        link={"/fresh"}
        next={"#slide1"}
        prev={"#slide2"}
      />
    </div>
  );
}

export default ImgBanner;
