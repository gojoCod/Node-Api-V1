const axios = require("axios");

const newData = {
  name: "Keyboard",
  quantity: 1,
  price: 500,
  image:
    "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

async function fetchData() {
  try {
    const response = await axios.get("http://localhost:3000/products");
    console.log("response:", response.data);
  } catch (error) {
    console.error("Error fetching Data", error);
  }
}

async function createData(newData) {
  try {
    const options = {
      method: "POST",
      url: "http://localhost:3000/product",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/8.4.5",
      },
      data: newData,
    };
    const response = await axios.request(options);
    console.log("POST Response:", response.data);
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
}

// axios
//   .post("http://localhost:3000/product", newData)
//   .then((response) => {
//     console.log("POST Response:", response.data);
//   })
//   .catch((error) => {
//     console.error("POST Error:", error);
//   });
createData(newData);
fetchData();
