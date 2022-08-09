<template>
    <div>
        <div class="write-header">
            <!--<div class="write-back" @click="$router.push('/main')">-->
            <div class="write-back" @click="$emit('WriteBack')">
                <p class="back-margin-left">Back</p>
            </div>
        </div>

        <div class="write">
            <div class="write-title">
                Title
                <input class="write-title-input" @input="$emit('titleData',$event.target.value)"/>
            </div>

            <hr>
            
            <textarea class="write-area"
            @input="$emit('contentData',$event.target.value)"></textarea>
        </div>

        <div class="write-footer">
            <div class="write-upload" @click="$emit('WriteAndBack'); $emit('upload');">
                <div>Upload</div>
            </div>
        </div>
     </div>

</template>

<script>

export default {
    name : 'MemoWrite.vue',
    data() {
        return {
            size: 100,
        }
    },
    components : {

    },
    props : {
        state: Number,
    },
    methods: {
        
    },
    computed : {

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
.write {
    padding: 10px 10px 0px 10px;
    height: 100vh + 90px;
    background-color: white;
}

.write-header {
    width: 100%;
    height: 40px;
    position: sticky;
    background-color: white;
    top: 0;
    border-bottom: 1px solid black;

    z-index: 99999;
}

.write-back {
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

.write-footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid black;
}

.write-title {
    position: relative;
    top: 4px;
    font-size: 20px;
}

.write-upload {
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

.write-area {
    width: 100%;
    font-size: 16px;
    border-color: white;
    outline: none;
    resize: none;
    height: calc(100vh - 224px);
    /*overflow: visible;*/
}


.write-title-input {
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