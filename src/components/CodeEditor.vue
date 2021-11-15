<template>
  <div id="CodeEditor">
    <div class="codeEditBox">
      <editor
        v-model="code"
        @init="editorInit"
        @input="codeChange"
        lang="c_cpp"
        :options="editorOptions"
        theme="dracula"
      ></editor>
    </div>
  </div>
</template>

<script>
import Editor from "vue2-ace-editor";
export default {
  name: "CodeEditor",
  components: {
    Editor
  },
  data() {
    return {
      // 双向绑定的编辑器内容值属性
      code:
        '/*created at 2021.10.15*/\n#include<bits/stdc++.h>\nusing namespace std;\n\nint main(){\n\tcout<<"Hello world!^_^"<<endl;\n\tcout<<"Welcome to the online lexical editor created by Lang Wen Chong and Pan Yizhe"<<endl;\n\tcout<<"Simply enter the code here or choose to upload a txt file!"<<endl;\n\tcout<<"And then click the debugger button to instantly view the lexical analysis token sequence online!"<<endl;\n\tcout<<"Due to the limited level, please forgive me if there are any mistakes!(´･_･`)"<<endl;\n\treturn 0;\n}\n',
      editorOptions: {
        // 设置代码编辑器的样式
        enableBasicAutocompletion: true, //启用基本自动完成
        enableSnippets: true, // 启用代码段
        enableLiveAutocompletion: true, //启用实时自动完成
        tabSize: 2, //标签大小
        fontSize: 16, //设置字号
        showPrintMargin: false //去除编辑器里的竖线
      }
    };
  },
  methods: {
    // 编辑内容改变时触发
    codeChange(val) {
      val;
      // console.log(val);
      // alert(val);
      this.$emit("updateCode", val);
    },
    editorInit() {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/theme/monokai");
      require("brace/theme/github");
      require("brace/theme/chrome");
      require("brace/theme/dawn");
      require("brace/theme/vibrant_ink");
      require("brace/theme/pastel_on_dark");
      require("brace/theme/dracula");
      require("brace/mode/c_cpp");
      require("brace/snippets/c_cpp");
    }
  }
};
</script>

<style scoped>
#CodeEditor {
  width: 100%;
  /* background: pink; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 570px;
}
.codeEditBox {
  width: 90%;
  max-width: 1062px;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 55%) 0px 20px 68px;
}

</style>