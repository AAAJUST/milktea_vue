<template>
    <header>
        <nav>
            <a href="#" class="brand">
                <span>9</span>
                GRIDS.
            </a>
            <div class="toggle">
                <i class="far fa-moon" round @click="changeDrake()"><img src="@/imge/danpinimg/light.png"/></i>
            </div>
        </nav>
    <div class="header-body">
        <div>
            <h1>
                <span class="toggle-text">
                    衔尾蛇
                </span><br/>
                耶梦加得
            </h1>
        </div>
        <!-- 显示数据库的图片 -->
        <div class="main-img" >
            <div class="img_view" style="width: 1200px;">
        <el-carousel :interval="4000" type="card" height="400px" width="1200px"  style="top: 262px;right:50%;">
            <el-carousel-item  >
                <h3 class="medium"><img :src="getImage(form.img)"/></h3>
         </el-carousel-item>
         <!-- <el-carousel-item  >
                <h3 class="medium"><img :src="getImage(form.img)"/></h3>
         </el-carousel-item>
         <el-carousel-item  >
                <h3 class="medium"><img :src="getImage(form.img)"/></h3>
         </el-carousel-item> -->
         </el-carousel> 
        </div>
            <!-- <img src="@/imge/danpinimg/cup-dark.png" v-show="userShow" alt="Blvck"/>
            <img src="@/imge/danpinimg/cup-light.png" v-show="!userShow"> -->
        </div>
        <!-- 文本 -->
        <div class="text">
            <div class="text-left">
                <div>
                    <h3><span class="toggle-text" style="font-weight: bold;">
                        商品名称：{{form.name}}</span>
                    </h3>
                    <p> 商品简介：
                        {{form.message}}
                    </p>
                </div>
            </div>
            <div class="right">
                <div class="text-right">
                    <div>
                        <h3>商品价格：{{form.price}}</h3>
                        <p> 商品数量：
                            {{form.number}}
                        </p>
                    </div>
                </div>
                <div class="play-btn">
                    <div></div>
                </div>
            </div>
        </div>
        
        <!-- 购买 -->
        <div class="links">
            <a href="#" class="main-link">
                <span>加入购物车！！</span>
            </a>
        </div>
           <!-- 图片预览框 -->
    <div class="img_view" >
        <!-- <el-carousel :interval="4000" type="card" height="200px" >
            <el-carousel-item  >
                <h3 class="medium"><img :src="getImage(form.img)"/></h3>
         </el-carousel-item>
         <el-carousel-item  >
                <h3 class="medium"><img :src="getImage(form.img)"/></h3>
         </el-carousel-item>
         <el-carousel-item  >
                <h3 class="medium"><img :src="getImage(form.img)"/></h3>
         </el-carousel-item>
         </el-carousel>  -->
        </div>
    </div>
    
    <h1 class="background-text">
        <span class="toggle-text">
            衔尾蛇
        </span><br/>
        耶梦加得
    </h1>
    </header>
    
</template>
<script>
import {getGoodsById} from '@/api/goods'
export default{
    data(){
        return{
            id:'',
            userShow:true,
            form:{
                id:'',
                name: '',
                price:'',
                number:'',
                img:'',
            typeId: '',
            message: '',
            },
            dialogImageUrl: '',
            
            
            
        }
    },
    created(){
        this.id=this.$route.query.id
        this.init()
    },
    // 改变图片和文本
    methods:{
        async init(){
            await getGoodsById(this.id).then(res=>{
                if(String(res.code === '1')){
                    this.form = {...res.data}
                    console.log(this.form)
                    console.log(this.form.img)
                }else{
                    this.$message.error(res.msg || '操作失败')
                }
                }).catch(err=>{
                    this.$message.error('请求出错了：' + err)
                })
        },
        changeDrake(){
            this.userShow=!this.userShow
            document.body.classList.toggle('light-theme');
        },
        getImage(image){
            return  `http://localhost:8080/common/download?name=${image}`
        },
    //     handlePictureCardPreview(res,file, fileList) {
    //     console.log(file, fileList);
    //     this.dialogImageUrl = file.url;
    //     this.form.img = res.data;
    //   }
}
}
</script>
<style>
:root{
    --accent:#fe662a;
    --primary: #ae95b3;
    --secondary: #836389;
    --text-primary: #fff;
    --text-secondary: #ccc;
    --text-bg:#252932;
}
.light-theme{
    --accent:#fe8c2c;
    --primary: #ffffff;
    --secondary: #eff1f3;
    --text-primary: #0f161d;
    --text-secondary: #a5a8aa;
    --text-bg:#eee;
}
body{
    margin:0;
    font-family: 'Roboto',sans-serif;
}
*{  


    /* 学习 */
    box-sizing: border-box;
}
h3{
    font-weight: 300;
}
a{
    text-decoration: none;
    color: var(--text-primary);
}
p{
    font-size:0.7em;
    color:var(--text-secondary);
    max-width: 25em;
    line-height:21px;
}
header{
    min-height: 100vh;



    
    /* 学习 网页分成两半黑色与浅灰*/
    background: linear-gradient(
        90deg,
        var(--secondary)0%,
        var(--secondary)50%,
        var(--primary)50%,
        var(--primary)100%
    );
    /* 字体为白色 */
    color: var(--text-primary);
    overflow: hidden;
    position:relative;

}
.header-body{
    min-height: 100vh;
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    z-index: 1;
}
.main-img{
    position: relative;
    margin: 0 auto;
}
.main-img img{
    height: 75vh;
    min-height: 30em;
    position: relative;
    z-index: 1;
}


/* 学习类选择器与橙色的圈 */
.main-img::before,
.main-img::after{
    content: '';
    position:absolute;
    border-radius: 50%;
}

.main-img::before{
    width:10em;
    height: 10em;
    border:1em var(--accent) solid;
    right: -5em;
    top:10%
}


/* 饮料的影子 */
.main-img::after{
    bottom:0em;
    left:-3em;
    width: 100%;
    height: 3em;
    background: rgba(0,0,0,0.3);
}

nav{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    padding: 2em 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}
.brand span{
    color: var(--accent);
}

/* 学习文本 */
.toggle{
    font-size: 1.5em;
    cursor:pointer;
}
/* 上面文本内容 */
.header-body h1{
    font-size: 3.5em;
    letter-spacing: 2px;
}
/* 下表文本内容 */
.text,.links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin: 2em 0;
}
/* 右边文本 kuang*/
.right{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.text-right{
    margin: 0 0 2em 0;
}

/* 按钮样式动画 */
.play-btn{
    border:1px var(--text-primary) solid;
    width:2.5em;
    height: 2.5em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition:0.3s
}
/* 按钮到位置会变白 */
.play-btn:hover{
    background: var(--text-primary);
}

/* 按钮橙色过渡动画 */
.play-btn div{
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-left: 12px solid var(--accent);
    border-bottom: 6px solid transparent;
}

/* 超链接字体 */
.links a{
    font-size: 0.8em;
    text-transform: uppercase;
}

/* 两侧文本居中加文本居中 */
@media screen and (max-width:1000px) {
.text,.right{
    flex-direction: column;
    text-align: center;

}
.text>div{
    margin:2em 0;
}
.main-link{
    padding:0.5em 1em;
    background: var(--accent);
}
.background-text{
    display:none;
}
}

 @media screen and (min-width:1500px) {
    html{
        font-size: 19px;
    }
 }
  @media screen  and (min-width:1150px){
    .header-body h1{
        margin-left: 10vw;
    }
    .text-left, .main-link{
        margin-left : 5vw;
    }
    .text-right{
        margin-right:5vw ;
    }
  }

  /* 文字图片分层后提取绝对站位 */
  @media screen and (min-width:1000px) {
    .main-img{
        position: absolute;
        top:50%;
        left:50%;
        transform:
        translate(-50%,-50%);
    }
    .text-right{
        margin: 0 2em 0 0;
    }
    .text-left,.text-right,
    .text-left div,.text-right div,
    .play-btn, .main-link,
    .main-link span{
        position:relative;
    }

    /* 学习组件之间的设置 */
    .text-left::before,.text-right::before{
        content:'';
        position: absolute;
        transform: translateY(-20%);
        height: 10em;
        width:35em;
        z-index: 0;
    }
    /* 灰色底边 */
    .text-left::before{
        background: var(--primary);
        right:50%
    }
    /* 黑色底边 */
    .text-right::before{
        background: var(--secondary);
        left:30%;
    }
    /* 橙色 */
    .main-link::before{
        content:'';
        background: var(--accent);
        position: absolute;
        top:50%;
        right:50%;
        transform: translateY(-50%);
        height: 2em;
        width:25em;
        transition: 0.4s;
    }
    /* 动画效果 */
    .main-link:hover:before{
        right: -1em;
    }
    /* 背景文字 */
    .background-text{
        margin: 0;
        font-size:10vw;
        color:var(--text-bg);
        line-height: 1em;
        opacity: 0.5;
        position: absolute;
        top:0;
        left:50%;
        letter-spacing: 20px;
    }
  }
  /* 图片预览框 */
    .img_view{
        width:500px;
        position: absolute;
        bottom: 0%;
        left:60%;

}
</style>
