import { get, post } from "./API";

export function fetchMajors() {
  return get("/api/major/list/");
}
