<template>
    <div class="hello">

        <button @click="onSubmit">click me</button>

    </div>
</template>

<script>
    import axios from 'axios'
    import './mock'

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            onSubmit() {
                axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
                    // eslint-disable-next-line
                    console.log(res.data);
                })
            }
        }
    }
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
