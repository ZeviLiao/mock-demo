<template>
  <div class="hello">
    <button @click="onSubmit">click mockjs</button>
    <br />
    <button @click="createData">create Data</button>
  </div>
</template>

<script>
/* eslint-disable */

import "./mock-ax";
import { getUser, createData } from "@/api/message";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    onSubmit() {
      getUser(2).then(res => {
        console.log(res);
      });
      //   axios.get("https://jsonplaceholder.typicode.com/todos/2").then(res => {
      //     console.log(res.data);
      //   });
    },
    createData() {
      let data = {
        id: "2",
        name: "abc",
        age: 1
      };
      createData(data).then(res => {
        console.log(res);
      });
      //   axios.get("https://jsonplaceholder.typicode.com/todos/2").then(res => {
      //     console.log(res.data);
      //   });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
