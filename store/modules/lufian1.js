const state = {
    urunList : {}
  }
  
const mutations = {
    updateUrunList(state, posts){
        state.urunList = posts
    }
    }

const actions = {
  nuxtServerInit(vuexContext, posts){
      vuexContext.commit("setPosts",

          {
              urunAd: "Lommel Spor Blazer Ceket Slim Fit Deve Tüyü", 
              urunKod:112140117100440 ,
              urunFiyat:1.299,
              urunTaksitliFiyat:119.71 + "TL'den baslayan taksitlerle",
              renkler:["Lacivert","Sari","Mavi"],
              bedenNo:[46,48,50,52,54,56],
              yeniBeden:46,
              uyelikGiris:"https://www.lufian.com/uye-girisi-sayfasi",
              aciklama:[
                     'Ürün Özellikleri','Ödeme Seçenekleri ','İade Değişim ','Kumaş Bakımı ','Yorumlar (0)'
                       ],
              kaynak1:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145831-36-B.jpg",
              kaynak2:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145832-36-B.jpg",
              kaynak3:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145833-36-B.jpg",
              kaynak4:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145834-36-B.jpg"
                             
                     
         }
      )
  },

  setPosts(vuexContext,posts){
      vuexContext.commit("setPosts",posts)
  }
}

const getters = {
      getUrunList(state){
      return state.urunList
  }

}
 
export default {
    state,
    getters,
    mutations,
    actions
}