<template>
    <div class="a">
        <h1>VUE路由器跳转成功！！</h1>
        <leftNav/>
    </div>
    
</template>
<script>
import leftNav from '@/basicCompents/leftNav.vue';
export default {
        name: 'index',
        components:{leftNav},
        data(){
            return{
            }
          },
        methods: {
            routerevent(name,st){
            this.$router.push({
                path:name,
                query: {id:st }
            })
            }
        },
    }
</script>