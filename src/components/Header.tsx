import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <>
      <div className="navbar flex w-full xl:container  xl:mx-auto  ">
        <Link to="/">
          <div className="btn btn-ghost normal-case text-xl">React Shop</div>
        </Link>
        <div className="flex-none md:flex-1 m1-2" id="category">
          <ul className="menu menu-horizontal p-0 font-bold text-sm">
            <li>
              <Link to="/fashion">패션</Link>
            </li>
            <li>
              <Link to="/accessory">액세서리</Link>
            </li>
            <li>
              <Link to="/digital">디지털</Link>
            </li>
          </ul>
        </div>
        <Searchbar />
      </div>
    </>
  );
}
