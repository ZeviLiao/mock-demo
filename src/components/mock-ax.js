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

mock.onGet(/\/todos\/2/).reply(config => {
  console.log(config.url);
  return [
    200,
    {
      users: [
        { id: 1, name: "John Smith 2" },
        { id: 2, name: "John Doe" }
      ]
    }
  ];
});

mock.onPost(/\/todos/).reply(config => {
  console.log(config);
  let data = JSON.parse(config.data);
  let users = [
    { id: 1, name: "John Smith 2" },
    { id: 2, name: "John Doe" }
  ];

  let user = users.find(user => {
    user.id === data.id;
  });

  return [200, user];
});

// mock.restore();

export default mock;
