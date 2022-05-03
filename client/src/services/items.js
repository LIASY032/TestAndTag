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
    console.log(err);
  }
};