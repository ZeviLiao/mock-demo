import request from "@/utils/request";

export function getUser(id) {
  return request({
    url: `/todos/${id}`,
    method: "get"
  });
}

export function createData(data) {
  return request({
    url: `/todos`,
    method: "post",
    data
  });
}