import "../assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LazyLoad from "../components/shared/lazyLoad";
import Navbar from "../components/shared/navbar";

// Store
import { store } from "../store";
import { Provider } from "react-redux";

// lazy loaded components
const MyJugTour = LazyLoad(() => import("../containers/myJugTour"));
const Cart = LazyLoad(() => import("../containers/cart"));
const Notfound = LazyLoad(() => import("../components/notFound"));

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<MyJugTour />} />
            <Route path="/tour" element={<MyJugTour />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
