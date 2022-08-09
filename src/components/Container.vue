<template>
</template>

<script>
import Memo from './Memo.vue';

export default {
    data(){
        return{

        }
    },
    components : {
        Memo : Memo,
    },
    props : {
        Data : Array,
    }
}
</script>

<style>
.list {
    padding: 10px 0px;
    height: 800px;
    background-color: black;
}

</style>