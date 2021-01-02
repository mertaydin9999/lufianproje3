<template>
<lufian3 :posts="urunList"  />
</template>


<script>
import lufian3 from "~/components/Lufian3"
export default {
    components:{
        lufian3
    },
    computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
    },
    head(){
       return {
           title: 'Lufian | Sepet'
       }
    
   },
   methods:{
        topTutar:function () {
            return this.urunMiktari * this.urunFiyat
                
        
        },
    
    
}
}

</script>