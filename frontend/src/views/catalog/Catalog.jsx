import records from "../records/ProductsLists/ProductLists.json";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const Catalogo = () => {
  return (
    <div>
      <ul className="bg-[#EADCDC] grid grid-cols-4 gap-4 text-center p-16">
        {records.map((record) => (
          <Link key={record.id} to={`/producto/:${record.id}`}>
            <Card imgSrc={record.img}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {`$${record.precio} c/u`}
              </h5>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;
