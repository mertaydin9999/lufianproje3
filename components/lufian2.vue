<template>
<div id="div1">
		
	<h4 class="margin">Ürün Sepetinize Eklendi.</h4>
	<br>
	<table class="padding" border="1px solid gray" width="100%">
		<thead>
		<tr>
			<th>ÜRÜN</th>
			<th>ÜRÜN ADI</th>
			<th>MİKTAR</th>
			<th>BİRİM FİYAT</th>
			<th>TOPLAM TUTAR</th>
			<th>SİL</th>
		</tr>
		</thead>

		<tbody>
		<tr>
			<td >
				<img v-if="show"  :src="urunList.urunFoto"></td>
			<td > <p v-if="show"> {{ urunList.urunAd }}  {{ urunList.yeniBeden }}</p></td>
			<td>
				<button  v-if="urunList.urunMiktari > 1" v-on:click="urunList.urunMiktari--"> - </button>
				<a v-if="show" class="pMiktar">{{ urunList.urunMiktari }}</a>
                
				<button  v-on:click="urunList.urunMiktari++"> + </button>
			</td>
			<td v-if="show" > {{ urunList.urunFiyat }} TL</td>
			<td><p v-if="show"> {{ topTutar() }} TL</p> </td>
			<td>
				<button  @click="show= !show" >x</button>
			</td>
		</tr>
		</tbody>


	</table> 

		<p class="float-right font">Sepet Toplam: {{topTutar()}}  TL</p>
		<br><br>
        <p>
		<button class="btnleft font girisyap" >ALIŞVERİŞE DEVAM</button>

		<nuxt-link to="/satinal"  tag="a">
		<button class="btnright font girisyap">SEPETE GİT</button>
		</nuxt-link>

		</p>

</div>
</template>



<script>
export default {
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
    props : {
        posts: {
            required : true,
            type : Object
        }
    },
    methods:{
        topTutar:function () {
            return this.urunList.urunMiktari * this.urunList.urunFiyat
        },
        }
}
</script>

<style scope>
	

	.float-right{
		float:right;
	}

	td{
		height: auto;
		
	}

	td img{
		margin: 10px;
		width: 100px;
		margin-right:-27px ;
	}

	table{
		font-family: 'Jost', sans-serif;
		border-spacing: 0px;
        
	}
    .font{
        font-family: 'Jost', sans-serif;
    }
	.girisyap{
    padding-right: 120px;
    padding-left: 120px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    text-align: center;
    background-color: rgba(15, 15, 61, 0.973);
    color: white;
    font-size: 13px;
    color: #fff;
    font-family: "Jost", sans-serif;
    letter-spacing: 0px;
    font-weight: 400;
}

	div{
		margin-top: 15px;
	}
	button{
		padding: 5px;

	}
	.btnright{
		float: right;     
	}
	.btnleft{
		float: left;
		background-color: rgba(86, 86, 88, 0.973);
	}
    .pMiktar{
        padding: 5px;
        margin-left: 5px;
        margin-right: 5px;
    }

</style>