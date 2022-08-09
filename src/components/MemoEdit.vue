<template>
    <div>
        <div class="edit-header">
            <!--<div class="write-back" @click="$router.push('/main')">-->
            <div class="edit-back" @click="//title=''; content='';
                                            $emit('EditBack', EditBackState)">
                <p class="back-margin-left">Back</p>
            </div>
        </div>

        <div class="edit">
            <div class="edit-title">
                Title
                <input class="edit-title-input"
                v-model="title"
                @input="$emit('titleEditData',$event.target.value)"
                />
            </div>

            <hr>
            
            <textarea class="edit-area"
            v-model="content"
            @input="$emit('contentEditData',$event.target.value)"></textarea>
        </div>

        <div class="edit-footer">
            <div class="edit-upload" @click="$emit('EditAndBack'); $emit('EditAndUpload');">
                <div>Upload</div>
            </div>
        </div>
     </div>

</template>

<script>

export default {
    name : 'MemoEdit.vue',
    data() {
        return {
            size: 100,
            id : '',
            title : '',
            date : '',
            content : '',

            EditBackState : false,
        }
    },
    watch : {
        title(str) {
            if(str != this.nowEdit.title) {
                this.EditBackState = true;
            }
        },
        content(str) {
            if(str != this.nowEdit.content) {
                this.EditBackState = true;
            }
        }
    },
    props : {
        state: Number,
        nowEdit : Array,
    },
    methods: {

    },
    mounted () {
        this.id = this.nowEdit.id;
        this.title = this.nowEdit.title;
        this.date = this.nowEdit.date;
        this.content = this.nowEdit.content;
    }

}
</script>

<style>
body {
    -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}
.edit {
    padding: 10px 10px 0px 10px;
    background-color: white;
}

.edit-header {
    width: 100%;
    height: 40px;
    position: sticky;
    background-color: white;
    top: 0;
    border-bottom: 1px solid black;

    z-index: 99999;
}

.edit-back {
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

.edit-footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid black;
}

.edit-title {
    position: relative;
    top: 4px;
    font-size: 20px;
}

.edit-upload {
    background-color: black;;
    color: white;
    width: 110px;
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

.edit-area {
    width: 100%;
    font-size: 16px;
    border-color: white;
    outline: none;
    resize: none;
    height: calc(100vh - 224px);
    /*overflow: visible;*/
}

.edit-title-input {
    width: 100%;
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    resize: none;
    overflow: visible;
    margin: 5px 0px 0px 0px;
    border-color: 1px solid black;
}

</style>