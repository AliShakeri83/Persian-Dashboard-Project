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
    body: "سلام. من از این محصول رضایت کافی را ندارم",
    date: "1404-09-10",
    hour: "18:20",
    userID: 1,
    username: "علیرضا",
    productID: 1,
    productName: "IPhone 13",
    isAccept: false,
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
    isAccept: false,
  },
];

const allUsersInShop = [
  {
    id: 1,
    firstname: "ali",
    lastname: "shakeri",
    username: "alish",
    password: 1212,
    phone: 98912345678,
    city: "fasa",
    email: "ali@gmail.com",
    address: "fasa-88",
    score: 20,
    buy: 990,
  },
  {
    id: 2,
    firstname: "alireza",
    lastname: "sadatmand",
    username: "alireza",
    password: 12345678,
    phone: 98912345678898,
    city: "fasa",
    email: "ali@gmail.com",
    address: "fasa-820",
    score: 13,
    buy: 1200,
  },
];

const allOrdersInShop = [
  {
    id: 1,
    productID: "Charger",
    userID: "ali",
    date: "1404/09/18",
    hour: "20:30",
    price: 30000,
    off: 50,
    sale: 66000,
    count: 6,
    sale_count: 3,
    isActive: false,
  },
  {
    id: 2,
    productID: "IPhone 13",
    userID: "alireza",
    date: "1404/09/15",
    hour: "14:30",
    price: 500000,
    off: 10,
    sale: 450000,
    count: 2,
    sale_count: 1,
    isActive: true,
  },
];

const allOffInShop = [
  {
    id: 1,
    code: "test",
    precent: "50",
    productID: "IPhone",
    date: "1404/10/01",
    isActive: false,
  },
  {
    id: 2,
    code: "test2",
    precent: "100",
    productID: "Charger",
    date: "1404/12/15",
    isActive: true,
  },
];

export {
  allProductsInShop,
  allCommentsInShop,
  allUsersInShop,
  allOrdersInShop,
  allOffInShop,
};
