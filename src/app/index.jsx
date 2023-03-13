import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalogue from "../components/header/Catalogue";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
// import Catalog from '../pages/Catalog.jsx'
// import ProductPage from '../pages/ProductPage'

const path = (import.meta.env.PROD)? '/shop-template' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}//`,
    element: (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/catalogue`,
    element: (
      <div>
        <Header />
        <Catalogue />
        <Footer />
      </div>
    )
  },
  // {
  //   path: `${path}/products/:id`,
  //   element: <ProductPage />
  // },
]);

export default router;