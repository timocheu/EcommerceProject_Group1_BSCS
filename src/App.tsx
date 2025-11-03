import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "@/pages/Login/LoginPage";
import { CheckoutPage } from "@/pages/Checkout/CheckoutPage";
import { SignupPage } from "@/pages/Signup/SignupPage";
import { ProductPage } from "@/pages/Product/ProductPage";
import { BrandPage } from "@/pages/Brand/BrandPage";
import { CartPage } from "@/pages/Cart/CartPage";
import { HomePage } from "@/pages/Home/Home";

import { Header } from "./components/header"
import { FooterSection } from "@/components/footer"
import { ScrollToTop } from "@/components/scrolltotop";
import { CartProvider } from "@/context/CartContext";

import NotFound from "@/pages/NotFound.tsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterSection />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
