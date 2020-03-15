/* eslint-disable */
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);
mock.onGet(/\/todos\/1/).reply(200, {
  users: [
    { id: 1, name: "John Smith" },
    { id: 2, name: "John Doe" }
  ]
});

mock.onGet(/\/todos\/2/).reply(200, {
  users: [
    { id: 1, name: "John Smith 2" },
    { id: 2, name: "John Doe" }
  ]
});


export default mock;
