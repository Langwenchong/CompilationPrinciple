<template>
  <div id="SyntaxResult">
    <div id="main">
      <div id="note" class="animate__animated animate__flipInX">
        <div class="title">
          <strong>Tips：</strong>
        </div>
        <div class="content">
          下面是根据您上传的程序代码后智能分析出的First集与Follow集、预测分析表以及归约序列，如果您需要修改程序代码请点击下方按钮返回编辑页面重新编辑~
          <br />
          <div class="link-card" @click="backup">
            <a href="#">
              <div class="left">
                <img
                  src="https://cdn.jsdelivr.net/gh/volantis-x/cdn-org/logo/256/safari.png"
                />
              </div>
              <div class="right">
                <p class="text">返回编辑页面</p>
                <p class="url">
                  如果喜欢此网站，不妨
                  <kbd>Ctrl</kbd>+ <kbd>D</kbd>收藏一下😛！
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="Green" class="animate__animated animate__flipInX">
        <div class="title">
          <strong
            >经分析文法中产生的First集合如下，他采用了如下的生成算法：</strong
          >
        </div>
        <div class="content">
          ①如果X∈VT,则FIRST(X)={X}<br />
          ②如果X∈VN,且有产生式X->a,则把a加入到FIRST(X)中;若X->ε也是一个产生式,则把ε加入到FIRST(X)中<br />
          ③如果X->Y是一个产生式且Y∈VN,
          则把FIRST(Y)\{ε}加到FIRST(X)中;如果X->Y1Y2…Yk是一个产生式,
          Y1,...,Yi-1∈VN,而且对任何j, j∈[1, i-1], ε∈FIRST (Yj),
          (即Y1Y2…Yi-1=>*ε) , 则把FIRST(Yi )\{ε}加到FIRST(X)中; 特别是,
          若所有的FIRST(Yj )均含有ε,j=1,2,…,k, 则把ε加到FIRST(X)中
        </div>
      </div>
      <div id="table" class="animate__animated animate__fadeIn">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">文法符号</th>
                <th style="text-align: center">First集</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in FirstData" :key="i">
                <td style="text-align: center">{{ item.symbol }}</td>
                <td style="text-align: center">
                  <span>{</span>
                  <span v-for="(fir, j) in item.first" :key="j"
                    >{{ fir }},</span
                  >
                  <span>}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="Yellow" class="animate__animated animate__flipInX">
        <div class="title">
          <strong
            >经分析文法中产生的Follow集合如下，他采用了如下的生成算法：</strong
          >
        </div>
        <div class="content">
          ①对于文法的开始符号S, 置#于FOLLOW(S)中;<br />
          ②若A->αBβ是一个产生式, 则把FIRST(β)\{ε}加至FOLLOW(B)中;<br />
          ③若A->αB是一个产生式, 或A->αBβ是一个产生式而β => ε (即ε∈FIRST(β) ),
          则把FOLLOW(A)加至FOLLOW(B)中);
        </div>
      </div>
      <div id="table" class="animate__animated animate__fadeIn">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">文法符号</th>
                <th style="text-align: center">Follow集</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(el, k) in FollowData" :key="k">
                <td style="text-align: center">{{ el.symbol }}</td>
                <td style="text-align: center">
                  <span>{</span>
                  <span v-for="(fol, l) in el.follow" :key="l">{{ fol }},</span>
                  <span>}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="error" class="animate__animated animate__flipInX">
        <div class="title">
          <strong
            >根据上面生成的First集合Follow集生成如下LL(1)预测分析表，它采用了如下的生成算法：</strong
          >
        </div>
        <div class="content">
          ①对文法G的每个产生式A->α,执行第②和第③步;<br />
          ②对每个终结符a∈FIRST(α), 把A->α加入M[A, item]中;<br />
          ③若ε∈ FIRST(α), 则对任何b∈FOLLOW(A), 把A->ε加入M[A, b]中;<br />
          ④把所有无定义的M[A, item]标上“出错标志”;
        </div>
      </div>
      <div id="table" class="animate__animated animate__fadeIn">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th
                  v-for="(symbol, m) in LLTable[0]"
                  :key="m"
                  style="text-align: center"
                >
                  {{ symbol }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(grammars, n) in LLTable.slice(1)" :key="n">
                <td
                  v-for="(grammar, o) in grammars"
                  :key="o"
                  style="text-align: center"
                >
                  {{ grammar }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="Purple" class="animate__animated animate__flipInX">
        <div class="title">
          <strong
            >根据上面的预测分析表和文法语句可以自动生成要演示的归约步骤，其工作原理如下：</strong
          >
        </div>
        <div class="content">
          ①若X = a = ‘#’，则宣布分析成功，停止分析过程；<br />
          ②若X = a ≠‘#’，则把X从STACK栈顶弹出，让a指向下一个输入符号；<br />
          ③若X是一个非终结符，则查看分析表M。
          若M[X,a]中存放着关于X的一个产生式，那么，先把X
          弹出STACK栈顶，然后把产生式的右部符号串按反序
          一一推进STACK栈（若右部符号为ε，则意味着不推
          任何符号进栈)。在把产生式的右部符号推进栈的同
          时应该做这个产生式对应的语义动作（目前暂且不
          管）。若M[X,a]中存放着“出错标志”，则调用出错 诊断程序ERROR
        </div>
      </div>
      <div id="table" class="animate__animated animate__fadeIn">
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th style="text-align: center">步骤</th>
                <th style="text-align: center">符号栈</th>
                <th style="text-align: center">输入串</th>
                <th style="text-align: center">附注</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(act, p) in Token" :key="p">
                <td style="text-align: center">{{ p }}</td>
                <td style="text-align: center">{{ act.stack }}</td>
                <td style="text-align: center">{{ act.sentence }}</td>
                <td style="text-align: center">{{ act.action }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
var grammarStr = []; //相关文法
var production = new Map();
var FirstMap = new Map();
var StringFirstMap = new Map();
var FollowMap = new Map();
var VnSet = new Set(); //非终结符Vn集合
var VtSet = new Set(); //终结符Vt集合
var stack = []; //符号栈
var inStr = "";
var start = "";
var index = 0;
var action = "";
var table = []; //预测分析表
var token = [];

export default {
  created() {
    grammarStr = this.$route.params.grammarStr;
    start = this.$route.params.start;
    inStr = this.$route.params.inStr;
    // console.log(grammarStr);
    // console.log(start);
    // console.log(inStr);
    this.dividechar();
    // VnSet.forEach((el, item, VnSet) => {
    //   console.log(`VnSet：` + el);
    // });
    // VtSet.forEach((el, item, VtSet) => {
    //   console.log(`VtSet：` + el);
    // });
    this.First();
    VnSet.forEach((el, item, VnSet) => {
      var l = production.get(el);
      for (var s of l) {
        this.getFirstX(s);
      }
    });
    // FirstMap.forEach((value, key, map) => {
    //   for (var v of value) {
    //     console.log(`First:` + key + " " + v);
    //   }
    // });
    this.Follow();
    this.createTable();
    this.processLL1();
  },
  mounted() {
    //获取FirstData
    VnSet.forEach((el, item, VnSet) => {
      var set = FirstMap.get(el);
      let obj = {
        symbol: el,
        first: Array.from(set),
      };
      this.FirstData.push(obj);
    });
    //获取FollowData
    VnSet.forEach((el, item, VnSet) => {
      var set = FollowMap.get(el);
      console.log(set.size);
      let obj = {
        symbol: el,
        follow: Array.from(set),
      };
      this.FollowData.push(obj);
    });
    //获取预测分析表
    this.LLTable = table;
    //赋值最终的序列
    this.Token = token;
  },
  name: "SyntaxResult",
  data() {
    return {
      FirstData: [],
      FollowData: [],
      LLTable: [],
      Token: [],
    };
  },
  methods: {
    backup() {
      this.$router.push({ name: "GrammarEditor" });
      location.reload();
    },
    dividechar() {
      for (var str of grammarStr) {
        // 得到产生式右侧的符号
        // 并将 | 两侧符号分开
        // console.log(str);
        var strings = str.split("->")[1].split("|");
        // 产生式左侧的非终结符
        var Vch = str[0];
        // 查看是否已存在非终结符Vch
        var list = production.has(Vch) ? production.get(Vch) : [];
        // 将Vch所能推出的符号存在list种
        strings.forEach((S, key, strings) => {
          list.push(S);
        });
        // 将Vch和list组成的键值对存放在production中
        production.set(str[0], list);
        VnSet.add(Vch);
      }
      // 得到终结符
      VnSet.forEach((ch, i, VnSet) => {
        var p = production;
        for (let j = 0; j < p.get(ch).length; j++) {
          var str = p.get(ch)[j];
          for (let k = 0; k < str.length; k++) {
            var c = str[k];
            if (!VnSet.has(c)) {
              VtSet.add(c);
            }
          }
        }
      });
    },
    First() {
      // 遍历求非终结符的First集
      VnSet.forEach((vn, key, VnSet) => {
        this.getFirst(vn);
      });
    },
    getFirst(ch) {
      // 递归生成First集
      var ch_production = production.get(ch);
      var set = FirstMap.has(ch) ? FirstMap.get(ch) : new Set();
      // 当ch为终结符时
      if (VtSet.has(ch)) {
        set.add(ch);
        FirstMap.set(ch, set);
        return;
      }
      // 当ch为非终结符时
      for (let i = 0; i < ch_production.length; i++) {
        var str = ch_production[i];
        var j = 0;
        while (j < str.length) {
          var tn = str[j];
          this.getFirst(tn);
          var tvSet = FirstMap.get(tn);
          tvSet.forEach((tmp, key, tvSet) => {
            if (tmp != "ε") {
              set.add(tmp);
            }
          });
          if (tvSet.has("ε")) j++;
          else break;
        }
        if (j === str.length) set.add("ε");
      }
      FirstMap.set(ch, set);
    },
    getFirstX(s) {
      var set = StringFirstMap.has(s) ? StringFirstMap.get(s) : new Set();
      var i = 0;
      while (i < s.length) {
        var tn = s[i];
        if (!FirstMap.has(tn)) getFirst(tn);
        var tvSet = FirstMap.get(tn);
        tvSet.forEach((tmp, key, tvSet) => {
          if (tmp != "ε") set.add(tmp);
        });
        if (tvSet.has("ε")) i++;
        else break;
        if (i === s.length) set.add("ε");
      }
      StringFirstMap.set(s, set);
    },
    Follow() {
      //合理的做法是检测非终结符的follow集合是否有增加变化
      //但是这里采用了多次循环的简单方法实现
      for (let i = 0; i < 3; i++) {
        VnSet.forEach((ch, item, VnSet) => {
          this.getFollow(ch);
        });
      }
    },
    getFollow(c) {
      // console.log(c + " " + c.length);
      var list = production.get(c);
      var setA = FollowMap.has(c) ? FollowMap.get(c) : new Set();
      //如果是开始符号，那么要在follow集中添加#符号
      if (c === start) {
        // console.log(c);
        setA.add("#");
      }
      //查找输入的产生式，确定c后面的终结符
      VnSet.forEach((ch, item, VnSet) => {
        var l = production.get(ch);
        for (var s of l) {
          for (let i = 0; i < s.length; i++) {
            //先找到这个非终结符，然后确保他后面的是终结符，那么假如到他的follow集合
            if (s[i] === c && i + 1 < s.length && VtSet.has(s[i + 1])) {
              setA.add(s[i + 1]);
            }
          }
        }
      });
      FollowMap.set(c, setA);
      // console.log(FollowMap.get("E"));
      //然后处理c的每一个产生式
      for (var s of list) {
        var i = s.length - 1;
        while (i >= 0) {
          var tn = s[i];
          //只需要处理非终结符
          if (VnSet.has(tn)) {
            //A->aBβ形式处理
            //这里我们需要三种算法的步骤都进行一遍
            //如果β不存在，那么followA假如到followB中
            //如果β存在，则把β的first集合/ε假如到followB
            //如果β存在，并且first(β)存在且包含ε 那么followA假如到followB

            //首先我们写β存在的情况
            if (s.length - i - 1 > 0) {
              var right = s.substring(i + 1);
              //那么把right的first集/ε加入到followB
              var setF = null;
              if (right.length == 1) {
                //刚好他后面就是一个字符
                if (!FirstMap.has(right[0])) {
                  // console.log(right);
                  this.getFirst(right[0]);
                }
                setF = FirstMap.get(right[0]);
              } else {
                //后面是一个字符串，那么需要查找这个字符串的first集合
                if (!StringFirstMap.has(right)) {
                  // console.log(right);
                  this.getFirstX(right);
                }
                setF = StringFirstMap.get(right);
              }
              var setX = FollowMap.has(tn) ? FollowMap.get(tn) : new Set();
              setF.forEach((el, item, setF) => {
                if (el != "ε") {
                  setX.add(el);
                }
              });
              FollowMap.set(tn, setX);

              //如果first(β)包含空串ε，那么把followA加入到followB中
              if (setF.has("ε")) {
                //当前符号不是c才能操作
                if (tn != c) {
                  var setB = FollowMap.has(tn) ? FollowMap.get(tn) : new Set();
                  setA.forEach((el, item, setA) => {
                    setB.add(el);
                  });
                  FollowMap.set(tn, setB);
                }
              }
            } else {
              //β不存在
              //如果A和B相同则无需操作
              if (tn != c) {
                setB = FollowMap.has(tn) ? FollowMap.get(tn) : new Set();
                setA.forEach((el, item, setA) => {
                  setB.add(el);
                });
                FollowMap.set(tn, setB);
              }
            }
            i--;
          } else {
            //如果是终结符，那么往前看，如 A->aaaBCDaaaa  此时β为 CDaaaa
            i--;
          }
        }
      }
    },
    createTable() {
      var VtArray = Array.from(VtSet);
      var VnArray = Array.from(VnSet);
      //先把分析表初始化
      var tmp = [];
      tmp.push("Vn/Vt");
      for (let i = 0; i < VtArray.length; i++) {
        tmp.push(VtArray[i][0] === "ε" ? "#" : VtArray[i]);
      }
      table.push(tmp);
      for (let i = 0; i < VnArray.length; i++) {
        var tmp = [];
        tmp.push(VnArray[i]);
        for (let j = 0; j < VtArray.length; j++) {
          tmp.push("error");
        }
        table.push(tmp);
      }
      //插入生成式
      VnSet.forEach((A, item, VnSet) => {
        var l = production.get(A);
        for (var s of l) {
          var set = StringFirstMap.get(s);
          for (var a of set) {
            this.insert(A, a, s);
          }
          //有ε在first集时
          if (set.has("ε")) {
            var setFollow = FollowMap.get(A);
            if (setFollow.has("#")) {
              this.insert(A, "#", s);
            }
            for (var b of setFollow) {
              this.insert(A, b, s);
            }
          }
        }
      });
    },
    insert(X, a, s) {
      if (a === "ε") a = "#";
      for (let i = 0; i < VnSet.size + 1; i++) {
        // console.log(table[i][0] + " " + X);
        if (table[i][0] === X) {
          for (let j = 0; j < VtSet.size + 1; j++) {
            if (table[0][j] === a) {
              table[i][j] = s;
              return;
            }
          }
        }
      }
    },
    processLL1() {
      stack.push("#");
      stack.push(start);
      this.displayLL();
      var X = stack[stack.length - 1];
      while (X != "#") {
        var a = inStr[index];
        if (X === a) {
          action = `归约${X}`;
          stack.pop();
          index++;
        } else if (this.find(X, a) === "error") {
          var flag = false;
          if (FirstMap.get(X).has("ε")) {
            action = `${X}->ε`;
            stack.pop();
            flag = true;
          }
          if (!flag) {
            action = "error";
            this.displayLL();
            return;
          }
        } else if (this.find(X, a) === "ε") {
          stack.pop();
          action = `${X}->ε`;
        } else {
          // console.log(X + " " + a);
          var str = this.find(X, a);
          if (str != "") {
            action = `${X}->${str}`;
            stack.pop();
            var len = str.length;
            var pushStr = ``;
            for (let i = len - 1; i >= 0; i--) {
              stack.push(str[i]);
              pushStr += str[i];
            }
          } else {
            this.$notify.error({
              title: "错误",
              message: `在${inStr[index]}的${index}处出现归约错误`,
            });
            return;
          }
        }
        X = stack[stack.length - 1];
        this.displayLL();
      }
    },
    displayLL() {
      var obj = {};
      var s = [];
      Object.assign(s, stack);
      obj.stack = s;
      obj.sentence = inStr.substring(index);
      obj.action = action;
      token.push(obj);
    },
    find(X, a) {
      for (let i = 0; i < VnSet.size + 1; i++) {
        if (table[i][0] === X) {
          for (let j = 0; j < VtSet.size + 1; j++) {
            if (table[0][j] === a) {
              // console.log(table[i][j]);
              return table[i][j];
            }
          }
        }
      }
    },
  },
};
</script>


<style scoped>
#SyntaxResult {
  color: #d1d2d2;
  /* background: 0% 0% / auto repeat rgb(171, 184, 195)
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpiZGBg4GegAsBlCD8TqSYNQg2Mo6FEBAAIMACdPABtrSW/IQAAAABJRU5ErkJggg=="); */
  background: #313438;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#SyntaxResult #main {
  width: 80%;
  min-height: 200px;
  /* background: yellow; */
  margin: 40px auto;
}
#SyntaxResult #main #Green {
  box-sizing: border-box;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 6px;
  background: #455955;
  border: 1px solid #3ead51;
  min-height: 100px;
}
#SyntaxResult #main #Yellow {
  box-sizing: border-box;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 6px;
  background: #585851;
  border: 1px solid #daa633;
  min-height: 100px;
}
#SyntaxResult #main #Purple {
  box-sizing: border-box;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 6px;
  background: #4e495f;
  border: 1px solid #8a2e9e;
  min-height: 100px;
}
#SyntaxResult #main #note {
  box-sizing: border-box;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 6px;
  background: #425465;
  border: 1px solid #2887d3;
  min-height: 100px;
}
#SyntaxResult #main #note .link-card {
  margin-right: 1em;
  background: #3a3a3a;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  /* min-width: 361px; */
  max-width: 100%;
  box-shadow: 0 1px 2px 0px rgb(0 0 0 / 10%);
  color: #bbb;
  border-radius: 8px;
  margin-top: 10px;
  transition: 0.3s;
}
#SyntaxResult #main #note .link-card:hover {
  box-shadow: 0 4px 8px 0px rgb(0 0 0 / 10%), 0 2px 4px 0px rgb(0 0 0 / 10%),
    0 4px 8px 0px rgb(0 0 0 / 10%), 0 8px 16px 0px rgb(0 0 0 / 10%);
}
kbd {
  color: #444 !important;
  padding: 3px 5px !important;
  border-radius: 0.25em !important;
  box-shadow: inset 0 -2px 0 #d3d3d4, 0 1px 1px #000 !important;
  font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace !important;
  border-radius: 4px !important;
  border: 1px solid #d2d2d2 !important;
  border-bottom-width: 2px !important;
  background: #fafafa !important;
  padding-left: 4px !important;
  padding-right: 4px !important;
  letter-spacing: initial;
  margin-right: 5px;
}
#SyntaxResult #main #note .link-card a {
  align-items: center;
  text-decoration: none;
  color: #bbb;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
#SyntaxResult #main #note .link-card a .left {
  width: 54px;
  height: 54px;
  margin: 12px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}
#SyntaxResult #main #note .link-card a .right {
  overflow: hidden;
  margin-right: 16px;
  margin-left: 10px;
}
#SyntaxResult #main #note .link-card a .right p {
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 900;
  font-family: "STFangsong";
  text-align: left;
}
#SyntaxResult #main #note .link-card a .left img {
  display: block;
  position: absolute;
  /* border-radius: 8px/4; */
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#SyntaxResult #main .title {
  margin-top: 1rem;
  font-size: 1.2rem;
  line-height: 1.2;
}
#SyntaxResult #main .content {
  font-size: 1.015rem;
  line-height: 1.5;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.25rem;
}
#SyntaxResult #main #table {
  margin-top: 1rem;
  width: 100%;
}
#SyntaxResult #main #table .table-container {
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
}
#SyntaxResult #main #table .table-container table:not([class]) {
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  /* display: inline-block; */
  max-width: 100%;
  vertical-align: text-top;
}
#SyntaxResult #main #table .table-container table:not([class]) th {
  background-color: #393e44;
  filter: brightness(80%);
}
#SyntaxResult #main #table .table-container table:not([class]) td,
#SyntaxResult #main #table .table-container table:not([class]) th {
  padding: 8px 16px;
  border: 2px solid #464d56;
  line-height: 1.5;
  font-size: 90%;
}
#SyntaxResult #main #table .table-container table:not([class]) tr {
  word-break: keep-all;
  background-color: #393e44;
  transition: all 0.28s ease;
  -moz-transition: all 0.28s ease;
  -webkit-transition: all 0.28s ease;
  -o-transition: all 0.28s ease;
}
#SyntaxResult #main #table .table-container table:not([class]) tr:hover {
  opacity: 0.9;
  cursor: url("//cdn.jsdelivr.net/gh/pdone/static/img/cursor/link.cur"), pointer !important;
}
#SyntaxResult #main #table .table-container td,
#SyntaxResult #main #table .table-container th {
  padding: 0;
}
#SyntaxResult #main #error {
  box-sizing: border-box;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 6px;
  background: #574c52;
  border: 1px solid #d1453c;
  min-height: 100px;
}
</style>