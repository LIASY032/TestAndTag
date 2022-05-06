import axios from "axios";
export async function userLogin({ email, password }) {
  try {
    const response = await axios.put(`/users/${email}`, {
      password,
    });
    const data = await response.data;
    return data;
  } catch (e) {}
}

export async function userRegister({ name, email, password }) {
  try {
    const response = await axios.post(`/users`, {
      name,
      email,
      password,
    });
    const data = await response.data;
    return data;
  } catch (e) {}
}
