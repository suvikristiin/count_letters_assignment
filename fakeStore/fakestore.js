// This function uses the axios library to make a GET request to the "https://fakestoreapi.com/products" Endpoint
// When the response is received, it creates an unordered list element in the HTML body and adds each product as a list item
function searchProducts() {
  // Use axios to make a GET request to the Fake Store API
  axios.get("https://fakestoreapi.com/products").then((response) => {
    const products = response.data;
    const body = document.getElementById("body");
    const productList = document.createElement("ul");
    body.appendChild(productList);

    // Loop through each product and create a list item for each one
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      const listItem = document.createElement("li");
      listItem.innerHTML = `${product.title} $${product.price}`;
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "DELETE";

      // Add a click event listener to the delete button that sends a DELETE request to the API 
      // and removes the product from the list
      deleteButton.addEventListener("click", () => {
        axios.delete("https://fakestoreapi.com/products/" + product.id)
        .then(() => {
          productDiv.remove();
        })
        .catch((error) => {
          console.log(error);
        });
      });

      productList.appendChild(productDiv);
      productDiv.appendChild(listItem);
      productDiv.appendChild(deleteButton);
    });
  });
}
// Call the `searchProducts()` function when the window is loaded
window.onload = searchProducts;
