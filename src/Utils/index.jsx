export const simplifiedString = (str) => {
  return str.trim().split(" ").join("").toUpperCase();
};

export const truncateString = (str, maxStrLength) => {
  if (str.length > maxStrLength) {
    return str.slice(0, maxStrLength) + "...";
  }
};
