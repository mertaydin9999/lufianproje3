<template>
<lufian10 @submit="savePost($event)" :posts="urunList"/>
</template>

<script>
import Lufian10 from "~/components/Lufian10"
 import axios from "axios"
export default {
    components:{
       lufian10 : Lufian10
       
   },
    head(){
       return {
           title: 'Lufian | Üye Ol'
       }
    },
    computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
    },
    methods : {
            savePost(post){
                axios.post("https://lufianproje3-default-rtdb.firebaseio.com//posts.json",post)
                
            }

        }
        

}

</script>