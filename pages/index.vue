<template>
   
       <lufian9 :posts="urunList"/> 
    
</template>

<script>
 import Lufian9 from "~/components/Lufian9"

    export default { 
        components : {   
            lufian9 : Lufian9    
        },
        head(){
       return {
           title: 'Lufian | Ana Sayfa'
       }
       },
       computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
                 }
        
        
    }
</script>