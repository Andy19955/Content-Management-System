export function basicAuth(key, secret) {
  let hash = btoa(key + ":" + secret);
  return "Basic " + hash;
}
