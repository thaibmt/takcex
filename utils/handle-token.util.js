export const shortenToken = (token) => {
  return token.slice(0, 4) + "..." + token.slice(-4, -1) + token.slice(-1);
};

export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
