export const fetchProductsOfAcatigory = async (id) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );
  console.log(response);
  const data = response.json();
  return data;
};

export const fetchAllCatigories = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = response.json();
  return data;
};

export const fetchAcatigory = async (id) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  );
  const data = response.json();
  return data;
};
