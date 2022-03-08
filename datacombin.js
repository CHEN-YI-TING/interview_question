const userIds = ["U01", "U02", "U03"];
const orderIds = ["T01", "T02", "T03", "T04"];
const userData = { U01: "Tom", U02: "Sam", U03: "John" };

const orderData = {
  T01: { name: "A", price: 499 },
  T02: { name: "B", price: 599 },
  T03: { name: "C", price: 699 },
  T04: { name: "D", price: 799 },
};

const userOrders = [
  { userId: "U01", orderIds: ["T01", "T02"] },
  { userId: "U02", orderIds: [] },
  { userId: "U03", orderIds: ["T03"] },
];

const result = userOrders.map((obj) => {
  let userObj = {};
  let user = { id: obj.userId, name: userData[obj.userId] };
  let orders = obj.orderIds.map((orderId) => {
    let order = {
      id: orderId,
      ...orderData[orderId],
    };
    return order;
  });
  userObj = {
    user: user,
    orders: orders,
  };
  return userObj;
});
console.log(result);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
