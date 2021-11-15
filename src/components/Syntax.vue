<template>
  <div id="Homepage">
    <div class="title animate__animated animate__fadeInDown">
      Online web code syntax analyser by Lang Wenchong 🕵️‍♂️ and Pan Yizhe 💩！
    </div>
    <div class="title animate__animated animate__fadeInDown">
      Enter the grammar and click on the assessment to see the syntax analysis
      online 🍻!
    </div>
    <div id="nav" class="animate__animated animate__fadeInUp">
      <div class="container">
        <div class="item" @click="backup">
          <svg
            t="1636800838763"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="21102"
            width="28"
            height="28"
          >
            <path
              d="M413.1 847.58c16.8 12.9 13.8 39-5.5 47.7l-169.8 59.1c-19.4 8.5-42.3 4.6-57.2-10.5-11.4-11.5-18.2-27.6-17.4-45l12.9-173.9c1.1-24.1 28.8-37 48-22.3l189 144.9z"
              fill="#EDB74B"
              opacity=".42"
              p-id="21103"
            ></path>
            <path
              d="M397.7 851.38c15.4 11.8 13.4 34.7-3.6 41.9l-150.6 47.3c-17.2 6.9-37.8 2.9-51.5-10.8-10.5-10.5-17-24.8-16.8-40.1l6.7-152.9c0.3-21.2 24.8-31.8 42.4-18.4l173.4 133z"
              fill="#EDB74B"
              p-id="21104"
            ></path>
            <path
              d="M388 843.38c13.6 10.4 12.5 30-2.1 35.6l-129.4 36.7c-14.7 5.5-32.7 1.5-44.9-10.5-9.4-9.2-15.4-21.6-15.6-34.7l2.1-130.3c-0.3-18.1 20.7-26.6 36.3-14.6L388 843.38z"
              fill="#FF9A2C"
              opacity=".71"
              p-id="21105"
            ></path>
            <path
              d="M266.8 703.98l-158.6-121.3c-0.4-0.3-0.9-0.7-1.3-1-25.3-20.8-20.2-61.1 9.2-75.7l134.6-67.1s20 63 16.1 265.1M401.1 811.98l158.6 121.3c11.2 8.5 24.9 11.5 37.9 9.2 16.9-2.9 30-16.3 33.3-33.1l30.2-151.3s-66-2.9-260 53.9"
              fill="#5A6EFF"
              p-id="21106"
            ></path>
            <path
              d="M820.8 120.68c-35.8-27.4-348.8-35-486.7 145.3-91.1 119.1-130.5 266.7-109.1 382 11 59.3 183.1 190.9 243.2 185.9 116.9-9.6 248.9-86.4 340-205.5 137.9-180.3 43.1-484.5 12.6-507.7z"
              fill="#5A6EFF"
              p-id="21107"
            ></path>
            <path
              d="M880.7 404.28c6.3-34.4-18.4-257.4-59.9-283.6-18.6-11.7-100.8-22-197.6-6.4 0 0 231.3 433.3 257.5 290z"
              fill="#BBC6FC"
              opacity=".16"
              p-id="21108"
            ></path>
            <path
              d="M681.1 565.58L424 369.08c-12.9-9.9-15.4-28.6-5.5-41.5l31.3-40.9c42.6-55.7 123-66.5 178.8-23.9l96.5 73.8c58.4 44.7 69.6 129.2 24.9 187.7l-27.4 35.8c-9.8 12.9-28.5 15.4-41.5 5.5z"
              fill="#445EE0"
              p-id="21109"
            ></path>
            <path
              d="M671.3 540.48l-216.4-165.4c-12.9-9.9-15.4-28.6-5.5-41.5l14.3-18.7c42.6-55.7 123-66.5 178.8-23.9l55.7 42.6c58.5 44.7 69.8 129.2 25.1 187.7l-10.4 13.6c-10 13-28.7 15.5-41.6 5.6z"
              fill="#E6EBFC"
              p-id="21110"
            ></path>
            <path
              d="M613.9 709.48c-82.1 42.2-176 50-246.6 4.4-62.5-56.2-79.6-148.9-60.4-239.2 34.3-161.4 29.6-211.8 29.6-211.8-91.1 119.1-130.7 266.5-109.5 381.7 5.5 29.8 51.5 77.7 103.6 117.3 52 39.9 110.3 71.8 140.5 69.2 116.6-9.8 248.5-86.7 339.6-205.8-0.1 0.1-50 8.7-196.8 84.2z"
              fill="#B1BEFC"
              opacity=".12"
              p-id="21111"
            ></path>
            <path
              d="M669.6 499.08l-172.4-131.8c-10.3-7.9-15.9-18-12.5-22.5l5-6.5c14.8-19.4 63.2-7.5 107.6 26.5l44.4 33.9c46.6 35.6 72 81.4 56.5 101.8l-3.6 4.7c-3.5 4.6-14.7 1.8-25-6.1z"
              fill="#B1BEFC"
              opacity=".7"
              p-id="21112"
            ></path></svg
          >返回首页
        </div>
        <div class="item" @click="submit">
          <svg
            t="1634368416808"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8560"
            width="28"
            height="28"
          >
            <path
              d="M285.92128 53.95456a40.96 40.96 0 0 0-59.84256 55.93088l9.1136 9.75872c149.76 160.23552 403.8656 160.23552 553.61536 0l9.1136-9.75872a40.96 40.96 0 0 0-59.84256-55.93088l-9.1136 9.75872c-117.38112 125.58336-316.54912 125.58336-433.92 0l-9.1136-9.75872zM81.67424 333.02528a40.96 40.96 0 0 0-40.46848 71.22944l15.5136 8.8064a920.84224 920.84224 0 0 0 271.104 101.74464 675.81952 675.81952 0 0 0-66.82624 22.76352l-225.01376 90.0096a40.96 40.96 0 0 0 30.43328 76.05248l225.00352-90.0096a593.92 593.92 0 0 1 441.15968 0l225.01376 90.0096a40.96 40.96 0 1 0 30.4128-76.06272l-225.00352-90.0096a676.16768 676.16768 0 0 0-66.82624-22.75328 920.832 920.832 0 0 0 271.104-101.7344l15.5136-8.81664a40.96 40.96 0 0 0-40.46848-71.22944l-15.5136 8.81664a839.68 839.68 0 0 1-829.62432 0l-15.5136-8.8064z m441.7024 426.3424a40.96 40.96 0 0 0-22.75328 0l-368.64 106.5984a40.96 40.96 0 1 0 22.75328 78.6944L512 841.35936l357.26336 103.30112a40.96 40.96 0 1 0 22.75328-78.6944l-368.64-106.5984z"
              fill="#08979C"
              p-id="8561"
            />
            <path
              d="M122.88 563.2a450.56 389.12 90 1 0 778.24 0 450.56 389.12 90 1 0-778.24 0Z"
              fill="#36CFC9"
              p-id="8562"
            />
            <path
              d="M471.04 1011.3024V399.36h81.92v611.9424a340.30592 340.30592 0 0 1-81.92 0z"
              fill="#B5F5EC"
              p-id="8563"
            />
            <path
              d="M166.11328 362.12736C230.79936 213.93408 361.41056 112.64 512 112.64c152.20736 0 284.0064 103.49568 347.9552 254.30016C769.71008 418.85696 649.3184 450.56 517.12 450.56c-136.2432 0-259.92192-33.65888-351.00672-88.43264z"
              fill="#08979C"
              p-id="8564"
            />
            <path
              d="M389.12 276.48m-71.68 0a71.68 71.68 0 1 0 143.36 0 71.68 71.68 0 1 0-143.36 0Z"
              fill="#B5F5EC"
              p-id="8565"
            />
            <path
              d="M624.64 266.24m-71.68 0a71.68 71.68 0 1 0 143.36 0 71.68 71.68 0 1 0-143.36 0Z"
              fill="#B5F5EC"
              p-id="8566"
            /></svg
          >语法分析
        </div>
      </div>
      <div class="settings">
        <el-input
          style="transform: scale(0.9)"
          placeholder="请输入起始符号(如A)"
          v-model="start"
        >
          <template slot="prepend">文法起始符号</template>
        </el-input>
        <el-input
          style="transform: scale(0.9)"
          placeholder="请输入归于式(如a+b*c#)"
          v-model="sen"
        >
          <template slot="prepend">归约语句</template>
        </el-input>
      </div>
    </div>
    <div class="wrapper animate__animated animate__fadeIn">
      <transition mode="out-in">
        <router-view @updateGrammar="updateGrammar"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Syntax",
  data() {
    return {
      start: "E",
      sen: "i+i*i#",
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
    backup() {
      this.$router.push({ name: "Homepage" });
    },
    check() {
      if (this.arr.length <= 0) {
        this.$notify.error({
          title: "错误",
          message: "请确保文法不为空！",
        });
        return false;
      }
      for (let i = 0; i < this.arr.length; i++) {
        if (
          this.arr[i].value === `` ||
          this.arr.indexOf(this.arr[i]) != i ||
          this.arr.length <= 0
        ) {
          this.$notify.error({
            title: "错误",
            message: "请确保文法语句无重复且都不为空！",
          });
          return false;
        }
      }
      if (this.start === `` || this.sen === ``) {
        this.$notify.error({
          title: "错误",
          message: "请确保文法起始符号和归约式不为空！",
        });
        return false;
      }
      return true;
    },
    submit() {
      // alert(this.$refs["codeEditor"].code);
      var v = this.check();
      if (v) {
        this.$router.push({
          name: "SyntaxResult",
          params: { grammarStr: this.arr, start: this.start, inStr: this.sen },
        });
      }
    },
    updateGrammar(arr) {
      // alert(code);
      this.arr = arr;
    },
  },
};
</script>

<style scoped>
#Homepage {
  background: 0% 0% / auto repeat rgb(171, 184, 195)
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpiZGBg4GegAsBlCD8TqSYNQg2Mo6FEBAAIMACdPABtrSW/IQAAAABJRU5ErkJggg==");
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#Homepage #nav {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: yellow; */
  width: 80%;
  max-width: 1062px;
}
#Homepage #nav .settings {
  padding-top: 8px;
  display: flex;
  align-items: center;
}
#Homepage #nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#Homepage #nav .container .item {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}
#Homepage #nav .container .item:last-child {
  margin-left: 15px;
}
#Homepage #nav .container .item:hover svg {
  /* box-shadow: 0 0 4px 1.5px #222; */
  animation: shake 1s ease-in-out infinite;
}
@keyframes shake {
  0% {
    transform: scale(1);
  }

  10%,
  20% {
    transform: scale(0.9) rotate(3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale(1.1) rotate(-3deg);
  }

  40%,
  60%,
  80% {
    transform: scale(1.1) rotate(3deg);
  }

  100% {
    transform: scale(1);
  }
}
#Homepage .title {
  margin-top: 10px;
  width: 80%;
  text-align: center;
  /* font-family: "Dancing Script", cursive; */
  font-family: "Architects Daughter", cursive;
  font-weight: 700;
  font-size: 30px;
}
#Homepage .wrapper {
  width: 80%;
}
.v-leave-to,
.v-enter {
  opacity: 0;
  transform: translateY(30px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

@media screen and (max-width: 1100px) {
  #Homepage .title {
    width: 90%;
    font-size: 20px;
  }
  #Homepage #nav {
    width: 90%;
  }
  #Homepage .wrapper {
    width: 100%;
  }
  #nav {
    height: auto !important;
    flex-wrap: wrap;
  }
  #nav .container {
    width: 100%;
    justify-content: space-between;
  }
}
@media screen and (max-width: 500px) {
  #Homepage .title {
    font-size: 16px;
  }
  #Homepage #nav .analyze {
    font-size: 14px;
  }
  #Homepage .wrapper {
    width: 100%;
  }
  #Homepage #nav {
    font-size: 14px;
  }
  #Homepage #nav i {
    display: none;
  }
}
</style>