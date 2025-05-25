const products = [
  { name: "Stylish Watch", price: 1200, category: "Watches", img: "https://i.imgur.com/abcd123.jpg", link: "https://your-affiliate-link.com" },
  { name: "Cool T-Shirt", price: 600, category: "T-Shirts", img: "https://i.imgur.com/wxyz456.jpg", link: "https://your-affiliate-link.com" }
];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>৳${p.price}</p>
        <a href="${p.link}" target="_blank">
          <button>Buy Now</button>
        </a>
      </div>
    `;
  });
}

function filterCategory(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function searchProducts() {
  const text = document.getElementById("searchBox").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(text));
  displayProducts(filtered);
}

window.onload = () => {
  displayProducts(products);
};