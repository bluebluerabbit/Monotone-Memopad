<template>
    <div class="memo" @click="$emit('memoContent')">
        <!--메인 화면에 보이는 메모-->
        <div class="memo-body">
            <div>
                <h3 class="overflowTitle">{{Data.title}}</h3>
                <p>{{Data.date}}</p>
                <p class="overflowContent">{{Data.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    contents : {

    },
    props : {
        Data : Array,
    },
}
</script>

<style>
.memo {
    width: 100%;
}

.memo-body {
    height: 140px;
    background-position: center;
    background-size: cover;
    background-color: white;
    margin: 0px 10px 10px 10px;
    border-radius: 13px;
    padding: 10px 20px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break:break-all;

    cursor: pointer;
}

.overflowTitle {
    width: 100vw - 10px; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;

}

.overflowContent {
    white-space: nowrap;
    overflow: hidden;
    white-space: normal;
    line-height: 1;
    /* 3줄까지 보이게 함 */
    height: 41px;
}
</style>