<template>
<div>  
        <lufian1 :posts="urunList" />
        <lufian8 />
        
</div> 
</template>

<script>
import Lufian1 from "~/components/Lufian1"
import Lufian8 from "~/components/Lufian8"

export default {

    
   components:{
       lufian1 : Lufian1,
       lufian8 : Lufian8
   },
   head(){
       return {
           title: 'Lufian | Ürün Detayı'
       }

   },
   computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
    }
   
}


</script>