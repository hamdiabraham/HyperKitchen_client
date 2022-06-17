import { callAPI } from "../callAPI";

const ROOT_API = "http://localhost:7000";
const API_VERSION = "api/v1";

export async function getProductDetail(id) {
  const url = `${ROOT_API}/${API_VERSION}/products/${id}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
