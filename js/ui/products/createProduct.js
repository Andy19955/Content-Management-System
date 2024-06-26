export function createProduct(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImgContainer = document.createElement("div");
  productImgContainer.classList.add("product-img");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.images[0].src);
  productImg.setAttribute("alt", product.name);

  productImgContainer.append(productImg);

  const productName = document.createElement("span");
  productName.classList.add("product-name");
  productName.innerText = product.name;

  const productPrice = document.createElement("span");
  productPrice.classList.add("product-price");
  productPrice.innerText = "$ " + product.price;

  const link = document.createElement("a");
  link.href = `/product/?id=${product.id}`;

  productCard.append(productImgContainer);
  productCard.append(productName);
  productCard.append(productPrice);
  link.append(productCard);
  return link;
}
