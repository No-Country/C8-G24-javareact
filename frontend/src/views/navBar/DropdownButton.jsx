import { Link } from "react-router-dom";

const DropdownButton = ({ title, products, path }) => {
  return (
    <div className="group">
      <button className="uppercase p-5 group-hover:bg-teal-100">{title}</button>
      <div className="dropdown hidden absolute group-hover:block  bg-stone-400">
        {products.map((product, i) => (
          <Link
            to={`${path}/:${product}`}
            key={i}
            className="px-5 py-3 block hover:bg-stone-500"
          >
            {product}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownButton;
