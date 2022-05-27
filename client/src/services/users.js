import axios from "axios";
export async function userLogin({ email, password }) {
  try {
    const response = await axios.put(`/users/${email}`, {
      password,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
}

export async function userRegister({ name, email, password }) {
  try {
    const response = await axios.post(`/users`, {
      name,
      email,
      password,
    });
    const data = await response.data;

    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (e) {}
}

export async function getTodo() {
  try {
    const response = await axios.get("/users/todo");
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
}
export async function doThis(id) {
  try {
    const response = await axios.get(`/users/do_task/${id}`);
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
}

export async function deleteAStaff(id) {
  try {
    const response = await axios.delete(
      `/users/delete_staff_in_task_list/${id}`
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
}

export async function checkAStaff(id) {
  try {
    const response = await axios.get(`/users/check_in_task_list/${id}`);
    return true;
  } catch (e) {
    console.log(e.response.data);
    return false;
  }
}
