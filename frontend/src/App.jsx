import { useState, useEffect } from "react";
import Home from "./views/Pages/Home/Home";
import { Routes, Route, useParams } from "react-router-dom";

import YellowTop from "./views/YellowBar/YellowTop";
import { Onboarding } from "./views/Onboarding/Onboarding";
import Products from "./views/Pages/Categories/Products";
import Footers from "./views/Footer/Footer";
import NavBar from "./views/navBar/NavBar";
import SearchPage from "./views/Pages/SearchPage/SearchPage";
import ProductCard from "./views/catalog/ProductCard";
import FormPayment from "./views/FormPayment";

//Context
import { SearchProvider } from "./views/Context/SearchContext";
import { CartProvider } from "./views/Context/CartContext";
import { CardProvider } from "./views/Context/CardContext";
import { LocationProvider } from "./views/Context/LocationContext";

import { CartPage } from "./views/Pages/CartPage/CartPage";
import CheckoutForm from "./views/Pages/CheckoutForm/CheckoutForm";
import InformationUserCheckout from "./views/Pages/InformationUserCheckout/InformationUserCheckout";
import CheckoutPayments from "./views/Pages/CheckoutPayments/CheckoutPayments";
import Finish from "./views/Finish";
import FavouritesPage from "./views/Pages/FavouritesPage/FavouritesPage";
import UserPage from "./views/Pages/UserPage/UserPage";
import OrdersPage from "./views/Pages/OrdersPage/OrdersPage";
import Error404 from "./views/Pages/Error404/Error404";

import { Toaster } from "react-hot-toast";

function App() {
  // const [load, setLoad] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(false);
  //   }, 3550);
  // }, []);

  // if (load) {
  //    return <Onboarding />;
  //  } else {
  return (
    <div className="Container">
      <LocationProvider>
        <CartProvider>
          <CardProvider>
            <SearchProvider>
              <YellowTop />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/perros/:product"
                  element={<Products name="perros" />}
                ></Route>
                <Route
                  path="/gatos/:product"
                  element={<Products name="gatos" />}
                ></Route>
                <Route
                  path="/otros/:product"
                  element={<Products name="otros" />}
                ></Route>
                <Route
                  path="/promociones/:product"
                  element={<Products name="promociones" />}
                ></Route>
                <Route
                  path="/servicios/:product"
                  element={<Products name="servicios" />}
                ></Route>




                <Route path="/favourites" element={<FavouritesPage />}></Route>
                <Route path="/orders" element={<OrdersPage />}></Route>
                <Route path="/user" element={<UserPage />}></Route>
                <Route path="/producto/:id" element={<ProductCard />}></Route>
                <Route path="/search" element={<SearchPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/checkform" element={<CheckoutForm />}></Route>
                <Route
                  path="/checkform/confirmation"
                  element={<InformationUserCheckout />}
                ></Route>
                <Route
                  path="/checkform/payments"
                  element={<CheckoutPayments />}
                ></Route>
                <Route
                  path="/checkform/validation"
                  element={<FormPayment />}
                ></Route>
                <Route path="/checkform/finish" element={<Finish />}></Route>
                <Route exact path = '*' element={<Error404/>}></Route>
              </Routes>
              <Footers />
            </SearchProvider>
          </CardProvider>
        </CartProvider>
      </LocationProvider>
      <Toaster
        toastOptions={{ duration: 4000 }}
        reverseOrder={true}
        position="bottom-right"
      />
    </div>
  );
}
// }

export default App;
