import { url, wooClientKey, wooClientSecret } from "../constants.js";
import { basicAuth } from "../helpers/basicAuth.js";

export async function fetchProducts() {
  const auth = basicAuth(wooClientKey, wooClientSecret);

  const response = await fetch(url, {
    headers: {
      Authorization: auth,
    },
  });

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error("There was an error fetching the products.");
}
