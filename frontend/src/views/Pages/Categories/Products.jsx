import Filters from "../../CategoriesComponents/Filters/Filters";

function Products({ name }) {
  return (
    <div className="m-8 sm:m-11">
      <Filters name={name}/>
    </div>
  );
}

export default Products;
