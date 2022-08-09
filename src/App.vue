<template>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--<router-view></router-view>-->
  
  <!--메인 화면-->
  <div v-if="state == 0">
    <!--메인 화면 헤더-->
      <div class="header">
        <div class="header-title">MEMO</div>
      </div>

    <!--메모 목록 컴포넌트-->
      <div class="list">
          <Memo v-for="(a,i) in Data" :key="i" :Data="Data[i]"
          @memoContent="state = 2; nowMemo = i"/>
      </div>

    <!--<Container v-if="state == 0" :Data="Data" :state="state"/>-->

    <!--메인 화면 푸터-->
      <div class="footer">
        <!--<div class="plus-circle" @click="$router.push('/write')">-->

    <!--작성화면으로 넘어가는 버튼-->
        <div class="write-button" 
        @click="state = 1">
            <div>Write</div>
        </div>
      </div>
  </div>

  <!--메모 내용 화면 컴포넌트 : state == 2 -->
  <MemoContent v-if="state == 2" :Data="Data[nowMemo]"
            @Back="state = 0"
            @edit="edit"
            @remove="remove"/>

  <!--작성 화면 컴포넌트 : state == 1 -->
  <MemoWrite v-if="state == 1" :state="state" 
            @WriteBack="WriteBack"
            @WriteAndBack="state = 0" 
            @titleData="title = $event"
            @contentData="content = $event"
            @upload="upload"/>

  <!--수정 화면 컴포넌트 : state == 3 -->
  <MemoEdit v-if="state == 3" :nowEdit="Data[nowEdit]"
            @EditBack="EditBack"
            @EditAndBack="state = 0"
            @titleEditData="editTitle($event)"
            @contentEditData="editContent($event)"
            @EditAndUpload="EditAndUpload"/>

</template>

<script>

//import Container from './components/Container.vue';
import Data from './assets/data.js';
import MemoWrite from './components/MemoWrite.vue';
import Memo from './components/Memo.vue';
import MemoContent from './components/MemoContent.vue';
import MemoEdit from './components/MemoEdit.vue';

export default {
  name: 'App',
  data() {
    return {
      Data : Data,
      /*
      메인화면 : 0,
      작성화면 : 1,
      메모내용화면 : 2,
      수정화면 : 3,
      */
      state : 0,
      id: 2,
      title : '',
      date : '',
      content : '',

      tmp : {
        id: 0,
        title: '',
        date: '',
        content: '',
      },

      nowMemo : 0,
      nowEdit : 0,
      EditState : false,
      canLeaveSite : false,
    }
  },
  components: {
    //Container : Container,
    MemoWrite : MemoWrite,
    Memo : Memo,
    MemoContent : MemoContent,
    MemoEdit : MemoEdit,
  },
  methods: {
    upload() {
        var currentTime = new Date();
        currentTime = currentTime.toLocaleString();
        
        if(this.title == '') {
          this.title = "제목없음";
        }
        
        var write = {
            id: this.Data.length + 1,
            title: this.title,
            date: currentTime,
            content: this.content
        };

        // 데이터 추가
        this.Data.unshift(write);
        // 로컬 스토리지에 데이터를 저장해둠
        localStorage.setItem('Data', JSON.stringify(this.Data));

        this.title = '';
        this.content = '';
    },

    WriteBack() {
      if(confirm('작성을 취소하시겠습니까?')){
          this.state = 0;
      }
    },


    EditBack(back) {
      this.EditState = back;

      if(confirm('수정을 취소하시겠습니까?')){
          this.state = 0;
      }
    },

    EditAndUpload() {
        this.Data[this.nowEdit].title = this.tmp.title;
        this.Data[this.nowEdit].content = this.tmp.content;
        localStorage.setItem('Data', JSON.stringify(this.Data));
    },

    editTitle(params) {
      if(params != '') {
        //this.Data[this.nowEdit].title = params;
        this.tmp.title = params;
      }
      else {
        //this.Data[this.nowEdit].title = "제목없음";
        this.tmp.title = "제목없음";
      }
    },

    editContent(params) {
      if(params != '') {
        //this.Data[this.nowEdit].content = params;
        this.tmp.content = params;
      }
    },

    edit(params) {
      this.state = 3;
      for(var i in this.Data) {
        if(this.Data[i].id == params) {
          this.nowEdit = i;
          break;
        }
      }
    },
    
    remove(params) {
      if(confirm('메모를 삭제하시겠습니까?')){
        for (var i in this.Data) {
          if (this.Data[i].id === params) { // 값이 같은 배열 인덱스 확인
              this.Data.splice(i, 1);
              break;
          }
        }

        localStorage.setItem('Data', JSON.stringify(this.Data));
        this.state = 0;
      }
    },
    
    unLoadEvent: function (e) {
      if (this.canLeaveSite) return;

      e.preventDefault();
      e.returnValue = '';
    },
   
  },
  created: function() {

    var memo = localStorage.getItem('Data');
    
    // 로컬 스토리지에 저장된 메모 데이터가 있으면 불러옴
    if(memo) {
      this.Data = JSON.parse(memo);
    }

  },
  mounted() {
    window.addEventListener('beforeunload', this.unLoadEvent);
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.unLoadEvent);
  },
}
</script>

<style>
#app {
  box-sizing: border-box;
  
  font-family: 'Arita-buri-SemiBold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-buri-SemiBold.woff') format('woff');
  font-weight: normal;
  font-style: normal;

  margin-top: 60px;
  width: 100vw;
  max-width: 1024px;
  margin: auto;
  position: relative;
  max-height: 100%;
  margin: auto;
  position: relative;
  overflow: visible;
  -ms-overflow-style: none;
}

@font-face {
    font-family: 'Arita-buri-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-buri-SemiBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

::-webkit-scrollbar {
  display: none;
}



body {
  margin: 0;
}

.list {
    padding: 10px 0px;
    min-height: calc(100vh - 90px);
    max-height: 99999vh;
    background-color: black;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  position: sticky;
  top: 0;
  border-bottom: 1px solid black;
  -ms-overflow-style: none;  
}

.header-title {
  width: 100%;
  margin: 0 auto;
  display: block;
  position: absolute;
  text-align: center;
  font-size: 25px;

}

.header::-webkit-scrollbar { display: none; }

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  height: 50px;
  background-color: white;
  border-top: 1px solid black;
}


.write-button {
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
</style>