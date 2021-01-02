<template>
   <div class="gnldiv"> 
       
       <div>
 <br>
       <br>
       <br>
       
       BENZER ÜRÜNLER
       <br>
        <div class="gallery">
           
            <a  >
                <img  :src="foto.src1" >
            </a>
                <div class="desc">{{aciklama.acik1}}</div><a href="#" class="previous round">&#8249;</a>
        </div>

        <div class="gallery">
            <a  >
                <img  :src="foto.src2" >
            </a>
            <div class="desc">{{aciklama.acik2}}</div>
       </div>

        <div class="gallery">
                    <a  >
                        <img  :src="foto.src3" >
                    </a>
                <div class="desc">{{aciklama.acik3}}

                </div>
        </div>

        <div class="gallery">
            <a >
                <img  :src="foto.src4"  >
            </a>
            <div class="desc">{{aciklama.acik4}}
            </div>
            
                
        </div><a  href="#" class="next round hrr">&#8250;</a>

        </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            aciklama:{
                acik1:"Spey Spor Gömlek Slim Fit Yeşil",
                acik2:"Kinross Spor Gömlek Comfort Slim Fit Mavi",
                acik3:"Agento Smart Gömlek Slim Fit Mavi",
                acik4:"Andrews Smart Gömlek Slim Fit İndigo"
            },

            foto:{
                src1:"https://cdn.lufian.com/hansen-smart-gomlek-slim-fit-lacivert-gomlek-lufian-143451-35-K.jpg",
                src2:"https://cdn.lufian.com/brian-smart-gomlek-slim-fit-pembe-gomlek-lufian-147229-16-K.jpg",
                src3:"https://cdn.lufian.com/mull-smart-gomlek-slim-fit-saks-gomlek-lufian-147387-85-K.jpg",
                src4:"https://cdn.lufian.com/forfar-smart-gomlek-slim-fit-saks-gomlek-lufian-147340-84-K.jpg"
            }
            
        }
    }
}
</script>


<style scoped>
.gnldiv{
    width: 1350px;
    padding-left: 50px;
    padding-top: 20px;
}

div.gallery {
  margin: 5px;
  
  float: left;
  width: 308px;
  height: 463px;
}



div.gallery img {
  width: 100%;
  height: auto;
  
}

div.desc {
  padding: 15px;
  text-align: center;
    font-size: 15px;
    font-family: "Jost", sans-serif;
    
    font-weight: 400;
}
.previous {
  background-color: #232423;
  color: rgb(172, 172, 172);
  
}

.next {
  background-color: #232423;
  color: rgb(172, 172, 172);
}
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}
.hrr{
    text-align: right;
    float: right;
}
</style>