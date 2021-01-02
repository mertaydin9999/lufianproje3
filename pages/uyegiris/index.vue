<template>
    <lufian4 :posts="urunList"/>
</template>
 
<script>
import Lufian4 from "~/components/Lufian4"
export default {
    components:{
        lufian4:Lufian4
    },
    head(){
       return {
           title: 'Lufian | Üye Girişi'
       }
 
   },
   computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
    }
    
    
}
</script>