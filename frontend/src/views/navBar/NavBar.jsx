import DropdownButton from "./DropdownButton";

const petProducts = [
  "alimento húmedo",
  "alimento seco",
  "alimento balanceado",
  "higiene",
  "snacks"
];
const others = ["dieta", "necesidades especiales"];
const promotions = ["juguetes", "accesorios", "cachorro", "adulto"];
const services = ["servicios veterinarios"];

const NavBar = () => {
  return (
    <nav
      className="capitalize flex justify-between p-3 static w-screen max-w-full md:p-0 md:static md:flex bg-[#B4FFED] border-white px-8 sm:px-14"
      onClick={() => {
        // if (document.querySelector('.menu').classList.contains('-translate-x-[110%]')) {
        //   document.querySelector('.menu').classList.remove('-translate-x-[110%]');
        //   document.querySelector('.menu').classList.add('translate-x-[0]');
        // }
        const menu = document.querySelector(".bars");
        menu.classList.toggle("hidden");
        const menuBars = document.querySelector(".close");
        menuBars.classList.toggle("hidden");
        const nav = document.querySelector(".menu");
        nav.classList.toggle("hidden");
      }}
    >
      <div className="menu hidden flex-col justify-center absolute left-0 mt-9 md:m-0  w-full  z-10 bg-teal-200  md:bg-[#B4FFED] md:static md:h-full md:flex md:flex-row md:justify-around  py-0 px-8 sm:px-16">
        <DropdownButton title="perros" products={petProducts} path="/perros" />
        <DropdownButton title="gatos" products={petProducts} path="/gatos" />
        <DropdownButton title="otros" products={others} path="/otros" />
        <DropdownButton
          title="promociones"
          products={promotions}
          path="/promociones"
        />
        <DropdownButton
          title="servicios"
          products={services}
          path="/servicios"
        />
      </div>
      <div className="flex md:hidden ">
        <div className="bars">
          <i className="fas fa-bars text-2xl mr-2"></i>
        </div>
        <div className="close hidden">
          <i className="fas fa-close text-2xl mr-2"></i>
        </div>
        opciones
      </div>
    </nav>
  );
};

export default NavBar;
