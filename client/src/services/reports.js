import axios from "axios";
export async function report({
  condition,
  reason,
  item_id,
  request_id,
  next_test_date,
  feedback,
}) {
  try {
    const response = await axios.put(
      `/reports/${condition}/${item_id}/${request_id}`,
      {
        next_test_date,
        reason,
        feedback,
      }
    );
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e.response.data);
  }
}
