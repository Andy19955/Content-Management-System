import { url, wooClientKey, wooClientSecret } from "../constants.js";
import { basicAuth } from "../helpers/basicAuth.js";

export async function fetchSingleProduct(id) {
  const auth = basicAuth(wooClientKey, wooClientSecret);

  const detailUrl = `${url}/${id}`;

  const response = await fetch(detailUrl, {
    headers: {
      Authorization: auth,
    },
  });

  if (response.ok) {
    const results = await response.json();
    return results;
  }

  throw new Error(`There was an error fetching the product with id: ${id}`);
}
