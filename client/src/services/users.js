import axios from "axios";
export async function userLogin({ email, password }) {
  try {
    const reponse = await axios.put(`/users/${email}`, {
      password,
    });
    const data = await reponse.data;
    return data;
  } catch (e) {}
}
