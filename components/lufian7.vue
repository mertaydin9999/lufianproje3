<template>
    <div>
        <div id="kategori">
                <button id="btnKategori" > Kategoriler </button> <button @click="show = !show" class="ac">+</button>
                <div id="linkler">
                    <ul v-if="show">
                    <li   v-for="item in urunler" :key="item"><a class="kategorili"  >{{item}}</a></li>
                   
                    
                    
                   </ul> 
                </div>  

        </div>
             <hr width="20%">

             
    
    
    
    
    
    </div>


</template>


<script>
export default {
    data(){
        return{
            urunler:['Kazak','Ceket','Gomlek','Hirka','Klasik Yelek','Polo Yaka T-Shirt','Sweatshirt','Triko Yelek','T-Shirt'],
            show:true,
            showrenk:true,
            
            

        }
    }
    

    
}
</script>>


<style >

    #brown{
        border: 1px solid #734A12;
        border-radius: 100%;
        background-color:  #734A12;
    }
     #krem{
        border: 1px solid #FFFDD0;
        border-radius: 100%;
        background-color:  #FFFDD0;
    }
     #gray{
        border: 1px solid #DDDDDD;
        border-radius: 100%;
        background-color:  #DDDDDD;
    }
     #siyahimsi{
        border: 1px solid #293133;
        border-radius: 100%;
        background-color:  #293133;
    }
     #kirmizi{
        border: 1px solid #800000;
        border-radius: 100%;
        background-color:  #293133;
    }
     #acikkahverengi{
        border: 1px solid #963B00;
        border-radius: 100%;
        background-color:  #963B00;
    }
     #koyugray{
        border: 1px solid #A9A9A9;
        border-radius: 100%;
        background-color:  #A9A9A9;
    }
     #siyah{
        border: 1px solid #000000;
        border-radius: 100%;
        background-color:  #000000;
    }
    li{
        display: block;
        margin: 10px;
        padding: 10px;
        
    }

    #btnKategori{
        margin-left:7px ;
        padding: 10px;
        font-family: 'Jost',sans-serif;
        font-size: 20px;
        
    }

    #linkler{
         width: 200px;
         height: 400px;
         overflow: auto;

    }

    #renk{
        width: 20%;
    }

    .colorli{
        display: inline;
        margin-bottom: 4em;
    }
    #btndiv{
        margin-left:3em;
        margin-bottom: 1em;
        font-family: 'Jost',sans-serif;

    }

    .kategorili{
        text-decoration:none;
        font-family: 'Jost',sans-serif;
        text-align: left;
    }
    #renkbtn{
        display: inline;
        margin-right: 5em ;
    }
    hr{
        width: 200px;
    }
    .ac{
        margin-left: 10px;
    }

</style>