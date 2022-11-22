<!-- <template>
    <el-container>
        <el-header><headNav/></el-header>
        <el-main><mainIndex/></el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
import headNav from '@/components/front/headNav.vue';
import mainIndex from '@/components/front/main/index.vue';
export default {
    components:{headNav,mainIndex},
}
</script>

<style>

</style> -->

<template>
    <div>
        <header>
            <a href="#" class="logo">Logo</a>
                <div class="search-box">
                    <input class="search-txt" type="text" placeholder="动态搜索框">
                    <a class="search-btn">
                        <svg class="icon" viewBox="0 0 1024 1024" width="30px"><path d="M424.024 766.098c-91.619 0-177.754-35.679-242.538-100.464-133.735-133.737-133.735-351.344 0-485.078 64.784-64.784 150.919-100.462 242.538-100.462s177.754 35.677 242.539 100.462c133.733 133.735 133.735 351.34 0 485.078-64.785 64.783-150.922 100.464-242.539 100.464zM424.024 196.085c-60.637 0-117.643 23.613-160.523 66.489-88.512 88.51-88.51 232.53 0 321.040 42.876 42.876 99.885 66.491 160.523 66.491s117.643-23.614 160.523-66.491c88.51-88.51 88.51-232.53 0-321.040-42.876-42.876-99.885-66.489-160.523-66.489z" fill="#e94118" p-id="1176"></path><path d="M886.838 943.904c-14.842 0-29.684-5.663-41.010-16.986l-261.286-261.285c-22.647-22.649-22.647-59.369 0-82.018 22.647-22.647 59.37-22.647 82.018 0l261.286 261.286c22.647 22.649 22.647 59.369 0 82.018-11.325 11.322-26.167 16.985-41.010 16.985z" fill="#e94118" p-id="1177"></path></svg>
                    </a>
                </div>
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
  <section>
    <img src="../imge/img/stars.png" id="stars">
    <img src="../imge/img/moon.png" id="moon">
    <img src="../imge/img/mountains_behind.png" id="mountains_behind">
    <h2 id="text">Moon Light</h2>
    <a href="#sec" id="btn">Explore</a>
    <img src="../imge/img/mountains_front.png" id="mountains_front">
  </section>
  <div class="sec" id="sec">
    <div class="cards">
        <div class="card">
            <div class="imgBx">
            <img src="../imge/img/img.png">
            </div>
            <div class="content">
                <div class="details">
                    <h2>Alina Smith<br><span>Senior UX/UI Designer</span></h2>
                    <div class="data">
                    <h3>342<br><span>Posts</span></h3>
                    <h3>120k<br><span>Followers</span></h3>
                    <h3>285<br><span>Following</span></h3>
                    </div>
                    <div class="actionBtn">
                    <button>Follow</button>
                    <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
            <img src="../imge/img/img.png">
            </div>
            <div class="content">
                <div class="details">
                    <h2>Alina Smith<br><span>Senior UX/UI Designer</span></h2>
                    <div class="data">
                    <h3>342<br><span>Posts</span></h3>
                    <h3>120k<br><span>Followers</span></h3>
                    <h3>285<br><span>Following</span></h3>
                    </div>
                    <div class="actionBtn">
                    <button>Follow</button>
                    <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
            <img src="../imge/img/img.png">
            </div>
            <div class="content">
                <div class="details">
                    <h2>Alina Smith<br><span>Senior UX/UI Designer</span></h2>
                    <div class="data">
                    <h3>342<br><span>Posts</span></h3>
                    <h3>120k<br><span>Followers</span></h3>
                    <h3>285<br><span>Following</span></h3>
                    </div>
                    <div class="actionBtn">
                    <button>Follow</button>
                    <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
            <img src="../imge/img/img.png">
            </div>
            <div class="content">
                <div class="details">
                    <h2>Alina Smith<br><span>Senior UX/UI Designer</span></h2>
                    <div class="data">
                    <h3>342<br><span>Posts</span></h3>
                    <h3>120k<br><span>Followers</span></h3>
                    <h3>285<br><span>Following</span></h3>
                    </div>
                    <div class="actionBtn">
                    <button>Follow</button>
                    <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
  </div>
  
  
    </div>

</template>


<script>
export default {
mounted(){
    let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + 'px'
  moon.style.top = value * 1.05 + 'px'
  mountains_behind.style.top = value * 0.5 + 'px'
  mountains_front.style.top = value * 0 + 'px'
  text.style.marginRight = value * 4 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  btn.style.marginTop = value * 1.5 + 'px'
  header.style.top = value * 0.5 + 'px'
})
}
}
</script>

<style>
@import url(./style.css);
@import url(./stylecard.css);
@import url(./stylesou.css);

.cards{
    margin: 300px 0;
    padding: 100px 0;
    overflow: hidden;
    background-color: #836389;
}
</style>