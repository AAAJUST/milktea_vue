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
             <div id="title" v-show="isShow" style="color:#310c71" >
                LOGIN
            </div>
            </transition>
            <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    appear
            >
  <el-form  :model="UserForm" status-icon :rules="rules" style="width: 300px;">
  <el-form-item   prop="username" ><div style="flex: 1;display: flex;align-items: center"><svg t="1670146441405" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2704" width="20px" height="20px"><path d="M508.3136 21.9136C233.6768 21.9136 11.0592 244.5312 11.0592 519.168s222.6176 497.2544 497.2544 497.2544S1005.568 793.8048 1005.568 519.168 782.9504 21.9136 508.3136 21.9136zM508.3136 997.9904c-124.3136 0-237.9776-47.7184-325.0176-123.0848 8.8064-162.2016 136.3968-290.816 297.1648-304.3328-83.968-13.312-148.2752-86.2208-148.2752-173.8752 0-97.28 78.848-176.128 176.128-176.128 97.28 0 176.128 78.848 176.128 176.128 0 87.8592-64.1024 160.5632-148.2752 173.8752 160.768 13.5168 288.3584 141.9264 297.1648 304.128C746.2912 950.0672 632.6272 997.9904 508.3136 997.9904z" p-id="2705" fill="#360e6f"></path></svg>&nbsp;用&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;名:</div>
    <el-input type="text" v-model="UserForm.username"  placeholder="请输入用户名"></el-input>
  </el-form-item>
  <el-form-item  prop="password"><div style="flex: 1;display: flex;align-items: center"><svg t="1670147351268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3948" width="20" height="20"><path d="M511.970836 499.271094c-67.470671 0-124.724653 53.072753-130.051985 119.469975-0.358157 1.096984-0.775666 2.648316-0.775666 4.466732l0 31.441083c0 7.708566 6.224772 13.96199 13.876032 13.96199l31.203676 0c7.65126 0 13.931291-6.252401 13.931291-13.96199l-0.116657-9.052167c-0.535189-2.594081-0.35918-5.598508-0.11768-8.724709 0.11768-1.935072 0.234337-3.840468 0.234337-5.808286 0-39.924291 32.185027-72.467475 71.816652-72.467475 39.627533 0 71.870888 32.544207 71.870888 72.467475 0 31.771611-20.661575 59.697637-50.166563 69.136613l0-45.552475c0-7.68503-6.251378-13.96506-13.902638-13.96506l-31.174 0c-7.65433 0-13.906731 6.281053-13.906731 13.96506l0 94.259804c0 7.68503 6.252401 13.96506 13.906731 13.96506l31.174 0c1.279133 0 2.52859-0.208754 3.839445-0.596588 66.899666-5.985318 119.213126-63.475683 119.241778-131.214461C642.853745 558.38647 584.141552 499.271094 511.970836 499.271094" p-id="3949" fill="#310c71"></path><path d="M806.553061 336.037383l-76.131935-0.090051 0-55.245232c0-104.908328-83.48439-190.268438-186.147584-190.268438L508.27977 90.433662c-101.113909 0-184.302563 83.84357-185.969529 187.18624l-0.177032 1.533936c0 1.057075 0.118704 1.696642 0 1.548262l0.357134 6.104021 0.952698 0c3.393283 12.400425 14.736633 21.497617 27.868721 21.497617 13.219069 0 24.473391-9.097192 27.836999-21.497617l0.983397 0 0.23843-5.819542c3.333932-74.213235 59.962673-132.331911 128.97956-132.331911l33.853016 0c71.311139 0 129.308041 62.390979 129.308041 139.030473l0 48.352241L375.188566 336.037383l0.089028-0.090051-157.800979 0.090051c-48.680722 0-88.307232 40.46255-88.307232 90.124624l0 417.338037c0 49.665143 39.627533 90.066295 88.307232 90.066295L806.553061 933.566338c48.708352 0 88.277556-40.400129 88.277556-90.066295L894.830617 426.162006C894.829594 376.499933 855.260389 336.037383 806.553061 336.037383M839.364351 430.584736l0 408.480298c0 21.019733-16.645099 38.081317-37.128619 38.081317L221.764268 877.146351c-20.484543 0-37.157271-17.061584-37.157271-38.081317L184.606996 430.584736c0-20.976754 16.672728-38.081317 37.157271-38.081317l580.471464 0C822.719252 392.503419 839.364351 409.609005 839.364351 430.584736" p-id="3950" fill="#310c71"></path></svg>&nbsp;密&nbsp;&nbsp;&nbsp;码:</div>
    <el-input type="password" v-model="UserForm.password" placeholder="请输入密码" ></el-input>
  </el-form-item >
  <el-form-item style="flex: 1;display: flex;justify-content: center;align-items: center">
   <el-button type="primary" @click="userlogin()">登录</el-button>
   <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
</el-form>
            </transition> 
</div>
    <!-- 注册表单 -->
    <div id="register">
      <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    appear
            >
            <div id="title1" v-show="!isShow" style="color:#310c71">
                REGISTER
            </div>
          </transition>
          <transition
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeIn"
                    leave-active-class="animate__fadeOut"
                    appear
            >
   <el-form  :model="RegisterForm" status-icon :rules="rules" style="width: 300px;">
    <el-form-item  prop="registername" ><div style="flex: 1;display: flex;align-items: center"><svg t="1670146441405" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2704" width="20px" height="20px"><path d="M508.3136 21.9136C233.6768 21.9136 11.0592 244.5312 11.0592 519.168s222.6176 497.2544 497.2544 497.2544S1005.568 793.8048 1005.568 519.168 782.9504 21.9136 508.3136 21.9136zM508.3136 997.9904c-124.3136 0-237.9776-47.7184-325.0176-123.0848 8.8064-162.2016 136.3968-290.816 297.1648-304.3328-83.968-13.312-148.2752-86.2208-148.2752-173.8752 0-97.28 78.848-176.128 176.128-176.128 97.28 0 176.128 78.848 176.128 176.128 0 87.8592-64.1024 160.5632-148.2752 173.8752 160.768 13.5168 288.3584 141.9264 297.1648 304.128C746.2912 950.0672 632.6272 997.9904 508.3136 997.9904z" p-id="2705" fill="#360e6f"></path></svg>&nbsp;用&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;名:</div>
    <el-input type="text" v-model="RegisterForm.registername" placeholder="请输入用户名" ></el-input>
  </el-form-item>
  <el-form-item  prop="pass"><div style="flex: 1;display: flex;align-items: center"><svg t="1670147351268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3948" width="20" height="20"><path d="M511.970836 499.271094c-67.470671 0-124.724653 53.072753-130.051985 119.469975-0.358157 1.096984-0.775666 2.648316-0.775666 4.466732l0 31.441083c0 7.708566 6.224772 13.96199 13.876032 13.96199l31.203676 0c7.65126 0 13.931291-6.252401 13.931291-13.96199l-0.116657-9.052167c-0.535189-2.594081-0.35918-5.598508-0.11768-8.724709 0.11768-1.935072 0.234337-3.840468 0.234337-5.808286 0-39.924291 32.185027-72.467475 71.816652-72.467475 39.627533 0 71.870888 32.544207 71.870888 72.467475 0 31.771611-20.661575 59.697637-50.166563 69.136613l0-45.552475c0-7.68503-6.251378-13.96506-13.902638-13.96506l-31.174 0c-7.65433 0-13.906731 6.281053-13.906731 13.96506l0 94.259804c0 7.68503 6.252401 13.96506 13.906731 13.96506l31.174 0c1.279133 0 2.52859-0.208754 3.839445-0.596588 66.899666-5.985318 119.213126-63.475683 119.241778-131.214461C642.853745 558.38647 584.141552 499.271094 511.970836 499.271094" p-id="3949" fill="#310c71"></path><path d="M806.553061 336.037383l-76.131935-0.090051 0-55.245232c0-104.908328-83.48439-190.268438-186.147584-190.268438L508.27977 90.433662c-101.113909 0-184.302563 83.84357-185.969529 187.18624l-0.177032 1.533936c0 1.057075 0.118704 1.696642 0 1.548262l0.357134 6.104021 0.952698 0c3.393283 12.400425 14.736633 21.497617 27.868721 21.497617 13.219069 0 24.473391-9.097192 27.836999-21.497617l0.983397 0 0.23843-5.819542c3.333932-74.213235 59.962673-132.331911 128.97956-132.331911l33.853016 0c71.311139 0 129.308041 62.390979 129.308041 139.030473l0 48.352241L375.188566 336.037383l0.089028-0.090051-157.800979 0.090051c-48.680722 0-88.307232 40.46255-88.307232 90.124624l0 417.338037c0 49.665143 39.627533 90.066295 88.307232 90.066295L806.553061 933.566338c48.708352 0 88.277556-40.400129 88.277556-90.066295L894.830617 426.162006C894.829594 376.499933 855.260389 336.037383 806.553061 336.037383M839.364351 430.584736l0 408.480298c0 21.019733-16.645099 38.081317-37.128619 38.081317L221.764268 877.146351c-20.484543 0-37.157271-17.061584-37.157271-38.081317L184.606996 430.584736c0-20.976754 16.672728-38.081317 37.157271-38.081317l580.471464 0C822.719252 392.503419 839.364351 409.609005 839.364351 430.584736" p-id="3950" fill="#310c71"></path></svg>&nbsp;密&nbsp;&nbsp;&nbsp;码:</div>
    <el-input type="password" v-model="RegisterForm.pass" placeholder="请输入密码"></el-input>
  </el-form-item>
   <el-form-item  prop="checkPass"><div style="flex: 1;display: flex;align-items: center"><svg t="1670147351268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3948" width="20" height="20"><path d="M511.970836 499.271094c-67.470671 0-124.724653 53.072753-130.051985 119.469975-0.358157 1.096984-0.775666 2.648316-0.775666 4.466732l0 31.441083c0 7.708566 6.224772 13.96199 13.876032 13.96199l31.203676 0c7.65126 0 13.931291-6.252401 13.931291-13.96199l-0.116657-9.052167c-0.535189-2.594081-0.35918-5.598508-0.11768-8.724709 0.11768-1.935072 0.234337-3.840468 0.234337-5.808286 0-39.924291 32.185027-72.467475 71.816652-72.467475 39.627533 0 71.870888 32.544207 71.870888 72.467475 0 31.771611-20.661575 59.697637-50.166563 69.136613l0-45.552475c0-7.68503-6.251378-13.96506-13.902638-13.96506l-31.174 0c-7.65433 0-13.906731 6.281053-13.906731 13.96506l0 94.259804c0 7.68503 6.252401 13.96506 13.906731 13.96506l31.174 0c1.279133 0 2.52859-0.208754 3.839445-0.596588 66.899666-5.985318 119.213126-63.475683 119.241778-131.214461C642.853745 558.38647 584.141552 499.271094 511.970836 499.271094" p-id="3949" fill="#310c71"></path><path d="M806.553061 336.037383l-76.131935-0.090051 0-55.245232c0-104.908328-83.48439-190.268438-186.147584-190.268438L508.27977 90.433662c-101.113909 0-184.302563 83.84357-185.969529 187.18624l-0.177032 1.533936c0 1.057075 0.118704 1.696642 0 1.548262l0.357134 6.104021 0.952698 0c3.393283 12.400425 14.736633 21.497617 27.868721 21.497617 13.219069 0 24.473391-9.097192 27.836999-21.497617l0.983397 0 0.23843-5.819542c3.333932-74.213235 59.962673-132.331911 128.97956-132.331911l33.853016 0c71.311139 0 129.308041 62.390979 129.308041 139.030473l0 48.352241L375.188566 336.037383l0.089028-0.090051-157.800979 0.090051c-48.680722 0-88.307232 40.46255-88.307232 90.124624l0 417.338037c0 49.665143 39.627533 90.066295 88.307232 90.066295L806.553061 933.566338c48.708352 0 88.277556-40.400129 88.277556-90.066295L894.830617 426.162006C894.829594 376.499933 855.260389 336.037383 806.553061 336.037383M839.364351 430.584736l0 408.480298c0 21.019733-16.645099 38.081317-37.128619 38.081317L221.764268 877.146351c-20.484543 0-37.157271-17.061584-37.157271-38.081317L184.606996 430.584736c0-20.976754 16.672728-38.081317 37.157271-38.081317l580.471464 0C822.719252 392.503419 839.364351 409.609005 839.364351 430.584736" p-id="3950" fill="#310c71"></path></svg>&nbsp;确认密码:</div>
    <el-input type="password" v-model="RegisterForm.checkPass" placeholder="请确认密码"></el-input>
  </el-form-item>
  <el-form-item style="flex: 1;display: flex;justify-content: center;align-items: center">
    <el-button type="primary" @click="submitForm()">提交</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form-item>
</el-form>
    </transition>
</div>
 <!-- 移动滑块 -->
<div class="aaaa" id="aaa" :style="{
borderTopLeftRadious:styleObj.borderTopLeftRadious,
borderTopRightRadious:styleObj.borderTopRightRadious,
borderBottomLeftRadious:styleObj.borderBottomLeftRadious,
borderBottomRightRadious:styleObj.borderBottomRightRadious,
right:styleObj.right,
}" >

<transition
                     name="animate__animated animate__bounce"
                     enter-active-class="animate__fadeInUp"
                     leave-active-class="animate__zoomOutLeft"
                     appear
             >
<div id="aa" v-show="isShow" style="flex: 2;display:flex;align-items: center;justify-content: center;flex-direction: column;height: 200px;font-size: 18px;">
    没有账户？加入我们！
    <div id="a" style="flex:2;display:flex;align-items: center;justify-content: center;">
    <el-button type="primary" round @click="ChangToMan()">用户注册</el-button>
    </div>
</div>
</transition>


<transition
                     name="animate__animated animate__bounce"
                     enter-active-class="animate__fadeInUp"
                     leave-active-class="animate__zoomOutRight"
                     appear
             >
<div id="a1" v-show="!isShow" style="flex: 2;display:flex;align-items: center;justify-content: center;flex-direction: column;height: 200px;font-size: 18px;">
    用户请登录
    <div id="a2" style="flex:2;display:flex;align-items: center;justify-content: center;">
    <el-button type="primary" round @click="ChangToUser()">用户登录</el-button>
    </div>
    </div>
  </transition>
  </div>

 </div>
</div>
</template>
<script>

import 'animate.css'
import {userloginApi}  from '@/api/login.js'
import {userReigsiterApi} from '@/api/login.js'
  export default {
    data() {
      var validate=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请在此输入密码'));
        } else if(value !==this.RegisterForm.Pass){
          callback(new Error('请输入相同的密码'))
        }else{
          callback()
        }
      }
      return { 
      rules:{
        username:[
          {required:true,message:'请输入账号',trigger:'blur'},
          {min:3,message:'账号长度最小值为3',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:6,message:'密码长度最小为6位',trigger:'blur'}
        ],
        registername:[
          {required:true,message:'请输入您喜欢的用户名',trigger:'blur'},
          {min:3,max:5,message:'长度应该在3到5位',trigger:'blur'}
        ],
        pass:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:6,message:'密码长度最小为6位',trigger:'blur'}
        ],
        checkPass:[
          { validator:validate,trigger:'blur'}
        ]
      },
        UserForm:{
            username:'',
            password:''
        },
        RegisterForm: {
          registername:'',
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
     async submitForm() {
        let user={};
        user.username=this.RegisterForm.registername
        user.password=this.RegisterForm.pass
        await userReigsiterApi(user).then(res=>{
          if(res.code=="1"){
            this.resetForm={
              registernameL:'',
              pass:''
            }
            this.$message.success("注册成功！")
            this.changeToLogin()
          }else{
            this.$message.error(r.msg)
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      async userlogin(){
         await userloginApi(this.UserForm).then(res=>{
            // this.$route.push("/index")
            if(res.code=="1"){
            localStorage.setItem("user",JSON.stringify(res.data))
            this.$message.success("登陆成功！")
            this.$router.push("/frontindex")
            }else{
              this.$message.error(res.msg)
            }
        })

         } 
        }
      }
</script>
<style>
#root{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

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
.aaaa{
  transition: all 0.3s linear;
}
</style>
