import { handleNewProductsDisplay } from "./handlers/handleNewProductsDisplay.js";
import { handleProductsDisplay } from "./handlers/handleProductsDisplay.js";
import { handleSingleProductDisplay } from "./handlers/handleSingleProductDisplay.js";
import { handleContactForm } from "./handlers/handleContactForm.js";
import { handleCheckout } from "./handlers/handleCheckout.js";
import { renderItemCount } from "./ui/cart/renderItemCount.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
      handleNewProductsDisplay();
      break;
    case "/women/":
      handleProductsDisplay("women");
      break;
    case "/men/":
      handleProductsDisplay("men");
      break;
    case "/product/":
      handleSingleProductDisplay();
      break;
    case "/contact/":
      handleContactForm();
      break;
    case "/checkout/":
      handleCheckout();
      break;
  }
}

router();
renderItemCount();
