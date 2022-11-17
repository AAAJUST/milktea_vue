<template>
    <div class="a">
        <h1>VUE路由器跳转成功！！</h1>
        <leftNav/>
    </div>
    
</template>
<script>
import leftNav from '@/components/leftNav.vue';
export default {
        name: 'index',
        components:{leftNav},
        data(){
            return{

            }
          },
        methods: {
            routerevent(name,nav,st){
            this.$store.commit('setname',nav)
            this.$router.push({
                path:name,
                query: {id:st },
            })
            },
            routerevent2(name,nav,st){
            this.$store.commit('Changegoback',nav)
            this.$router.push({
                path:name,
                query: {id:st },
            })
            }
        },
    }
</script>