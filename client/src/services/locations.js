import axios from "axios";
export async function getLocations() {
  try {
    const reponse = await axios.get("/locations", {
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    const data = await reponse.data;
    return data;
  } catch (e) {}
}
