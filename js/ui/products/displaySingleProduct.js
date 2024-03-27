import { addToCart } from "../../handlers/handleAddToCart.js";

export function displaySingleProduct(product) {
  const productPage = document.querySelector("#product");
  const productImage = document.querySelector("#product-image");
  const productBreadcrumb = document.querySelector("#product-breadcrumb");
  const genderBreadcrumb = document.querySelector("#gender-breadcrumb");
  const productTitle = document.querySelector("#product-title");
  const productPrice = document.querySelector("#product-price");
  const productDescription = document.querySelector("#product-description");
  const productSizeSelector = document.querySelector("#product-size-selector");
  const addToCartButton = document.querySelector("#add-to-cart");

  document.title = `${product.name} - RainyDays`;

  if (product.categories[0].name.toLowerCase() === "women") {
    const activeMenu = document.querySelector("#menu-women");
    activeMenu.classList.add("active");
    genderBreadcrumb.innerText = "Women";
    genderBreadcrumb.setAttribute("href", "../women/");
  } else {
    const activeMenu = document.querySelector("#menu-men");
    activeMenu.classList.add("active");
    genderBreadcrumb.innerText = "Men";
    genderBreadcrumb.setAttribute("href", "../men/");
  }

  productImage.setAttribute("src", product.images[0].src);
  productImage.setAttribute("alt", product.images[0].alt);
  productBreadcrumb.innerText = product.name;
  productTitle.innerText = product.name;
  productPrice.innerText = "$" + product.price;
  productDescription.innerHTML = product.description;

  product.attributes[0].options.forEach(createSizeBox);

  function createSizeBox(size) {
    const sizeOption = document.createElement("option");
    sizeOption.innerText = size;
    sizeOption.value = size;
    productSizeSelector.append(sizeOption);
  }

  addToCartButton.dataset.id = product.id;
  addToCartButton.dataset.title = product.name;
  addToCartButton.dataset.price = product.price;
  addToCartButton.dataset.image = product.images[0].src;

  addToCartButton.addEventListener("click", addToCart);

  productPage.classList.add("product-page");
  productPage.classList.remove("hidden");
}
