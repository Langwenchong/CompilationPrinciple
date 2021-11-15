<template>
  <div id="FileLoader">
    <div class="loaderWrapper">
      <el-upload
        class="upload-demo"
        :show-file-list="true"
        ref="upload"
        drag
        action="a"
        :multiple="false"
        :auto-upload="true"
        :limit="1"
        :on-exceed="warn"
        :before-upload="beforeUpload"
        accept=".txt"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传一个文件且不能超过30M！</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileLoader",
  methods: {
    warn() {
      this.$notify.error({
        title: "错误",
        message: "一次只允许上传一个文件📁！"
      });
    },
    beforeUpload(file) {
      // console.log(`hhh`);
      if (file != null) {
        if (file.size / 1024 / 1024 > 30) {
          this.$notify.error({
            title: "错误",
            message: "文件最大不能超过30M📁！"
          });
        }
        var reader = new FileReader();
        var code = "";
        var that = this;
        reader.onload = function(e) {
          code = e.target.result;
          // console.log(code);
          that.$router.push({ name: "LexecalResult", params: { code: code } });
        };
        reader.readAsText(file, "gb2312");
      }
    }
  }
};
</script>

<style scoped>
#FileLoader {
  width: 100%;
  /* background: pink; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 570px;
}
#FileLoader .loaderWrapper {
  width: 90%;
  max-width: 1062px;
  height: 100%;
  overflow: hidden;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  border-radius: 10px;
  /* background: #000; */
  /* box-shadow: rgb(0 0 0 / 55%) 0px 20px 68px; */
}
.upload-demo {
  margin-top: 200px;
  transform: scale(1.7);
  filter: brightness(80%);
}
/deep/ .el-upload-dragger {
  box-shadow: rgb(0 0 0 / 55%) 0px 20px 68px !important;
}


</style>