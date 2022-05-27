import axios from "axios";

export const addNewItem = async ({
  email,
  ownership,
  name,
  building,
  floor,
  room,
  purchased_date,
  description,
}) => {
  try {
    const response = await axios.post("/items/add_new_item", {
      email,
      ownership,
      name,
      building,
      floor,
      room,
      purchased_date,
      description,
    });
    return response.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const updateItem = async (item) => {
  try {
    const response = await axios.put(`/items/${item._id}`, item);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const testOldItem = async (item) => {
  try {
    const response = await axios.get(`/items/test_old_item/${item}`);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
  }
};
