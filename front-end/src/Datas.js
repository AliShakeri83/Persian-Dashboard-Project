const allProductsInShop = [
  {
    id: 1,
    title: "IPhone 13",
    price: 100,
    count: 103,
    img: "/img/iphone.jpeg",
    popularity: 89,
    sale: 0,
    colors: 2,
    description: "iphone is the best mobile",
    category: "mobile",
  },
  {
    id: 2,
    title: "Charger",
    price: 20,
    count: 120,
    img: "/img/charger.jpeg",
    popularity: 91,
    sale: 1600,
    colors: 12,
    description: "charger is the best mobile",
    category: "mobile",
  },
];

const allCommentsInShop = [
  {
    id: 1,
    body: "سلام. من از این محصول رضایت کاقی را ندارم",
    date: "1404-09-10",
    hour: "18:20",
    userID: 1,
    username: "علیرضا",
    productID: 1,
    productName: "IPhone 13",
  },
  {
    id: 2,
    body: "سلام و وقت بخیر خدمت شما. این محصول عالی است",
    date: "1404-09-07",
    hour: "20:00",
    userID: 3,
    username: "علی",
    productID: 2,
    productName: "Charger",
  },
];

export { allProductsInShop, allCommentsInShop };
