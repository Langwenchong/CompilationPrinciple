<template>
  <div id="GrammarEditor">
    <div class="itemwrapper">
      <transition-group class="group" appear>
        <div class="item" v-for="(item, i) in arr" :key="i">
          <div class="main">
            {{ i + 1 }}.<el-input
              placeholder="请输入文法语句，一个文法语句类似于(A->B)的形式且不能为空！"
              v-model="arr[i]"
              clearable
              class="input"
            >
            </el-input>
          </div>
          <el-popconfirm
            confirm-button-text="删除"
            cancel-button-text="不用了"
            icon="el-icon-info"
            icon-color="red"
            title="确定删除这个文法语句吗？"
            @confirm="remove(i)"
          >
            <el-button slot="reference" style="transform: scale(0.8)"
              >删除</el-button
            >
          </el-popconfirm>
        </div>
      </transition-group>
      <el-button
        class="button"
        style="filter: brightness(0.9)"
        type="danger"
        @click="add"
        >添加文法语句</el-button
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "GrammarEditor",
  data() {
    return {
      arr: [
        "E->TG",

        "G->+TG|-TG",

        "G->ε",

        "T->FS",

        "S->*FS|/FS",

        "S->ε",

        "F->(E)",

        "F->i",
      ],
    };
  },
  methods: {
    add() {
      this.arr.push("");
    },
    remove(i) {
      this.arr.splice(i, 1);
    },
  },
  updated() {
    this.$emit("updateGrammar", this.arr);
  },
};
</script>


<style scoped>
#GrammarEditor {
  margin: 0 auto;
  width: 90%;
  margin-bottom: 30px;
}

#GrammarEditor .itemwrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  height: auto;
}
#GrammarEditor .itemwrapper .group {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#GrammarEditor .itemwrapper .button {
  margin-top: 20px;
}
#GrammarEditor .itemwrapper .item {
  width: 100%;
  height: 78px;
  border-radius: 8px;
  background: #f7f7f7 !important;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 10px 15px;
  margin-top: 15px;
  border: 1px solid transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  transition: 0.4s;
}
#GrammarEditor .itemwrapper .item:hover {
  border: 1.5px solid #425aef;
}
#GrammarEditor .itemwrapper .item .main {
  align-items: center;
  display: flex;
  height: 80%;
  width: 78%;
}
#GrammarEditor .itemwrapper .item .input {
  margin-left: 8px;
  height: 100%;
  width: 100%;
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
  width: 90%;
}
</style>