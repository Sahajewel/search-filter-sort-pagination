const products = [
  { id: 1, name: "Laptop", price: 80000, category: "Electronics" },
  { id: 2, name: "Phone", price: 50000, category: "Electronics" },
  { id: 3, name: "Watch", price: 5000, category: "Fashion" },
  { id: 4, name: "Shirt", price: 2000, category: "Fashion" },
  { id: 5, name: "Monitor", price: 15000, category: "Electronics" },
];

// //   ১. Searching (খুঁজে বের করা)
// const searchProducts = (searchTerm) => {
//   const list = products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   console.log(list);
// };
// searchProducts("pho");

// // ২. Filtering (ছেঁকে নেওয়া)

// const electronics = products.filter(
//   (product) => product.category === "Fashion"
// );
// console.log(electronics);

// // ৩. Sorting

// const lowPrice = [...products].sort((a, b) => b.price - a.price);
// console.log(lowPrice);
// console.log(products);

// ৪. Pagination (অল্প অল্প করে দেখানো)
// 0,1,2,3,4
const page = 1;
const limit = 2;
const start = (page - 1) * limit;
const end = start + limit;

const paginationProducts = products.slice(start, end);
console.log(paginationProducts);
