<template>
    <!--메모 내용 화면 헤더-->
        <div class="content-header">
            <div class="content-back" @click="$emit('Back')">
                <p class="back-margin-left">Back</p>
            </div>
        </div>

        <!--메모 내용-->
        <div class="content">
            <div>
                <div class="title">Title</div>
                <div class="data">{{Data.date}}</div>
                <p class="content-title">{{Data.title}}</p>
            </div>
            <hr>

            <block>{{Data.content}}</block>
        </div>



        <!--메모 내용 화면 푸터-->
        <div class="content-footer">
            <!--메모 수정 버튼-->
            <div class="content-modify"
            @click="$emit('edit', Data.id);">
                <div>수정</div>
            </div>

            <!--메모 삭제 버튼-->
            <div class="content-modify"
            @click="$emit('remove', Data.id)">
                <div>삭제</div>
            </div>
        </div>
</template>

<script>

export default {
    data() {
        return {
            mouseoverRemove : false,
            mouseoverEdit : false,
        }
    },
    components : {

    },
    props : {
        Data : Array,
    },
    methods : {
        /*
        editContent(id) {
            console.log(id);
            this.memoData = this.Data[id];
        },
        removeContent(id) {
            this.Data[id].splice(id, 1);
        },
        */
    }
}
</script>

<style>
.content {
    padding: 10px 10px;
    height: 100%;
    background-color: white;
    margin-bottom: -10px;
    word-break: break-all;
}

.content-header {
    width: 100%;
    height: 40px;
    position: sticky;
    background-color: white;
    top: 0;
    border-bottom: 1px solid black;

    z-index: 99999;
}

.content-title {
    position: relative;
    top: 4px;
    font-size: 20px;
}

/* 이부분 수정!!!!! title 위치가 이상함 */
.title {
    position: relative;
    font-size: 28px;
    font-weight: bold;
}

.content-back {
    float: left;
    width: 100%;
    display: block;
    position: absolute;
    text-align: left;
    font-size: 25px;
    margin: 0 auto;

    cursor: pointer;
}

.back-margin-left {
    margin-left: 10px;
}

.content-footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid black;
  margin-top: 15px;
}

.content-modify {
    background-color: black;;
    color: white;
    width: 70px;
    height: 40px;
    border-radius: 10px 10px;
    float: right;

    text-align: center;
    vertical-align: middle;

    font-size: 25px;
    line-height: 40px;

    margin: 0px 5px;
    position: relative;

    top: 50%;
    transform: translateY(-50%);

    cursor: pointer;
}

</style>