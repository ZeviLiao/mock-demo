import request from "@/utils/request";

export function getUser(id) {
  return request({
    url: `/todos/${id}`,
    method: "get"
  });
}
