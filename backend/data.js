import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "alina",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "john",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "john",
      email: "user2@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      slug: " nikeshirt1",
      name: "nike shirt 1",
      category: "shirt",
      image: "/images/form10.jpg",
      price: "100",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      countInStock: 3,
    },
    {
      // _id: "2",
      slug: " nikeshirt2",
      name: "nike shirt 2",
      category: "shirt",
      image: "/images/form10.jpg",
      price: "100",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      countInStock: 5,
    },
    {
      // _id: "3",
      slug: " nikeshirt3",
      name: "nike shirt 3",
      category: "shirt",
      image: "/images/form10.jpg",
      price: "100",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      countInStock: 5,
    },
    {
      // _id: "4",
      slug: " nikeshirt4",
      name: "nike shirt 4",
      category: "shirt",
      image: "/images/form10.jpg",
      countInStock: 5,
      price: "100",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      countInStock: 5,
    },
    {
      // _id: "4",
      slug: " nikeshirt5",
      name: "nike shirt 5",
      category: "shirt",
      image: "/images/form10.jpg",
      countInStock: 5,
      price: "100",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      countInStock: 5,
    },
    {
      // _id: "4",
      slug: " nikeshirt6",
      name: "nike shirt 6",
      category: "shirt",
      image: "/images/form10.jpg",
      countInStock: 5,
      price: "100",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
      countInStock: 5,
    },
  ],
};

export default data;
