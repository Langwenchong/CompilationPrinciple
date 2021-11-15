<template>
  <div id="Homepage">
    <div class="container">
      <div class="box animate__animated animate__zoomIn" @click="open(0)">
        <h2>01</h2>
        <h3>Lexical analyzer</h3>
        <p>
          在云编辑器内编辑程序代码或者上传代码文件(txt)后，js语言编写的词法分析器将会实时分析并展示生成的词素和token序列(即输出用最左推导或规范规约产生语法树所用的产生式序列)，同时，还能自动识别简单的语法错误（比如非法变量、字符串双引号是否丢失、字符长度是否合法等)。
          识别类型包括：关键字，标识符，界符，运算符，整数，浮点数，单字符，字符串。
        </p>
      </div>
      <div class="box animate__animated animate__zoomIn" @click="open(1)">
        <h2>02</h2>
        <h3>Syntax Analyzer</h3>
        <p>
          语法分析器，支持在线输入文法和要归约的语句，js语言编写的语法分析器将会采用LL(1)算法自动进行分析，展示出中途使用的First集与Follow集，同时还会生成归约所需要的LL(1)预测表以及最终对待编译代码解析得到语法树
          或产生式的规约序列。文法可支持以下操作：①声明语句（变量声明）；
          ②表达式及赋值语句分支语句：if else； ③循环语句：for
          while；④算数表达式四则运算；⑤变量自增、自减运算。
        </p>
      </div>
      <div class="box animate__animated animate__zoomIn" @click="open(2)">
        <h2>03</h2>
        <h3>Principle&Thanks</h3>
        <p>
          词法分析器和语法分析器原理讲解，包含单词识别、token序列生成、First集合与Follow集合生成、预测表生成、归约序列生成的算法与核心代码讲解。同时包含两位开发者郎文翀与潘祎哲同学在开发过程中的反思与心得，最后简单介绍编译原理课程的收获与总结。
        </p>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Homepage",
  methods: {
    open(i) {
      if (i === 0) {
        this.$router.push({ name: "CodeEditor" });
      } else if (i === 1) {
        this.$router.push({ name: "GrammarEditor" });
      } else if (i === 2) {
        location.replace(
          "https://coolchong.cn/2021/11/15/CompilationPrinciple/"
        );
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#Homepage {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(#0f4675, #0f4675 50%, #fff 50%, #fff 100%);
}
.container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.container .box {
  position: relative;
  width: 320px;
  background: #fff;
  padding: 100px 40px 60px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.1);
}
.container .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ff226d;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s;
}
.container .box:hover:before {
  transform: scaleY(1);
  transform-origin: bottom;
  transition: transform 0.5s;
}
.container .box h2 {
  position: absolute;
  left: 40px;
  top: 60px;
  font-size: 4em;
  font-weight: 800;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
}
.container .box:hover h2 {
  opacity: 1;
  color: #fff;
  transform: translateY(-40px);
}
.container .box h3 {
  position: relative;
  font-size: 1.5em;
  z-index: 2;
  color: #333;
  transition: 0.5s;
}
.container .box p {
  position: relative;
  z-index: 2;
  color: #555;
  transition: 0.5s;
}
.container .box:hover h3,
.container .box:hover p {
  color: #fff;
}

@media screen and (max-width: 1000px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .container .box {
    margin: 20px;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.v-move {
  transition: all 1s ease;
}
.v-leave-active {
  position: absolute;
  width: 98%;
}
</style>