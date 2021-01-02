<template>
<lufian2 :posts="urunList" />
</template>



<script>
import Lufian2 from "~/components/Lufian2"
export default {
	components:{
		lufian2: Lufian2
	},
	head(){
       return {
           title: 'Lufian | Sepete Ekle'
       }

   },
    data(){
        return{ 
          show:true
        }
	},
	computed : {
        urunList(){
           return this.$store.getters.getPosts
       }
    },
    methods:{
        topTutar:function () {
            return this.urunList.urunMiktari * this.urunList.urunFiyat
                
        
        },    
        }      
}
</script>