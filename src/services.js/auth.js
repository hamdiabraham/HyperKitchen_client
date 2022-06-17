import { callAPI } from "../callAPI";

const ROOT_API = "http://localhost:7000";
const API_VERSION = "api/v1";

export async function setSignUp(data) {
  const url = `${ROOT_API}/${API_VERSION}/users/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function setLogin(data) {
  const url = `${ROOT_API}/${API_VERSION}/users/login`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
