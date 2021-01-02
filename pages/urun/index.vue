<template>
<div>
    
    <lufian7 />
    <lufian6 :posts="urunList" />
</div>
</template>

<script>
import Lufian6 from "~/components/Lufian6"
import Lufian7 from "~/components/Lufian7"
export default {
   components:{
     lufian6 : Lufian6,
     lufian7 : Lufian7
   },
   head(){
       return {
           title: 'Lufian | Ürün '
       }

   },
    computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
    },
    
  
    
}
</script>

<style scoped>
div{
    float: left;
}
</style>