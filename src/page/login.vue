<template>
    <div id="root" >
        <div id="loginandregister">
        <!-- 用户登录标单 -->
        <div id="login" >
          <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    appear
            >
             <div id="title" v-show="isShow" >
                LOGIN
            </div>
            </transition>
           
        <el-form :model="UserForm"  style="width: 300px;">
  <el-form-item label="账号" prop="username">
    <el-input type="text" v-model="UserForm.username" placeholder="请输入用户名" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="Pass">
    <el-input type="password" v-model="UserForm.password" placeholder="请输入密码" ></el-input>
  </el-form-item>
   <el-button type="primary" @click="userlogin()">登录</el-button>
   <el-button @click="resetForm()">重置</el-button>
</el-form>
       
</div>
    <!-- 注册表单 -->
    <div id="register">
      <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    appear
            >
            <div id="title1" v-show="!isShow" >
                REGISTER
            </div>
          </transition>

   <el-form :model="RegisterForm" status-icon :rules="rules" style="width: 300px;">
    <el-form-item label="账号" prop="username" >
    <el-input type="text" v-model="RegisterForm.username" placeholder="请输入用户名" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="RegisterForm.pass" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
</el-form>
</div>
 <!-- 移动滑块 -->
<div id="aaa" :style="{
borderTopLeftRadious:styleObj.borderTopLeftRadious,
borderTopRightRadious:styleObj.borderTopRightRadious,
borderBottomLeftRadious:styleObj.borderBottomLeftRadious,
borderBottomRightRadious:styleObj.borderBottomRightRadious,
right:styleObj.right,
}" >
<div id="aa" v-show="isShow" style="display:flex;align-items: center;justify-content: center;flex-direction: column;height: 200px;">
    没有账户？加入我们！
    <div id="a" style="flex:2;display:flex;align-items: center;justify-content: center;">
      <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__rubberBand"
                    leave-active-class="animate__rubberBand"
                    appear
            >
    <el-button type="primary" round @click="ChangToMan()">用户注册</el-button>
    </transition>
    </div>
</div>
<div id="a1" v-show="!isShow" style="display:flex;align-items: center;justify-content: center;flex-direction: column;height: 200px;">
    用户请登录
    <div id="a2" style="flex:2;display:flex;align-items: center;justify-content: center;">
    <el-button type="primary" round @click="ChangToUser()">用户登录</el-button>
    </div>
    </div>
  </div>
 </div>
</div>
</template>
<script>
import 'animate.css'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return { 
        UserForm:{
            username:'',
            password:''
        },
        RegisterForm: {
          username:'',
          pass: '',
          checkPass: '',
        },
        styleObj:{
            borderBottomLeftRadious: '0px',
            borderBottomRightRadious:'15px',
            borderTopLeftRadious:'0px',
            borderTopRightRadious:'15px',
            right: '0px'
            
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        isShow:true
      };
    },
    methods: {

        ChangToUser(){
            this.styleObj.borderBottomLeftRadious= '0px',
            this.styleObj.borderBottomRightRadious='15px',
            this.styleObj.borderTopLeftRadious='0px',
            this.styleObj.borderTopRightRadious='15px',
            this.styleObj.right= '0px',
            this.isShow=!this.isShow
        },
        ChangToMan(){
            this.styleObj.borderBottomLeftRadious= '15px',
            this.styleObj.borderBottomRightRadious='0px',
            this.styleObj.borderTopLeftRadious='15px',
            this.styleObj.borderTopRightRadious='0px',
            this.styleObj.right= '50%',
            this.isShow=!this.isShow
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      async userlogin(){
        let res= await userloginApi(this.UserForm).then(res=>{
          
            localStorage.setItem("user",JSON.stringify(res.data))
            this.$message.success("登陆成功！")
         
        })

         } 
        }
      }
</script>
<style>
#root{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

}
#loginandregister{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    overflow: hidden;
}
#login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#register{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#title{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 25px;
  font-weight: bold;

}
#title1{
 display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 25px;
  font-weight: bold;
}
#aaa{
    width: 300px;
    height: 400px;
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    right:0;
    top:0;
}

</style>
