import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        
        mutations : {
            setPosts(state, posts){
                state.urunList = posts
            },
            
        },
        actions : {
            nuxtServerInit(vuexContext, posts){
                vuexContext.commit("setPosts",

                    {
                        ad:null,
                        soyad:null,
                        sifre:null,
                        email:null,
                        cepTel:null,
                        sifreYeniden:null,
                        urunAd: "Lommel Spor Blazer Ceket Slim Fit Deve Tüyü", 
                        urunKod:112140117100440 ,
                        urunFiyat:1299,
                        sepetToplam:1299,
                        toplamTutar:1299,
                        urunFoto:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145831-36-B.jpg",
                        urunTaksitliFiyat:119.71 + "TL'den baslayan taksitlerle",
                        renkler:["Lacivert","Sari","Mavi"],
                        bedenNo:[46,48,50,52,54,56],
                        yeniBeden:46,
                        urunMiktari:1,
                        uyelikGiris:"https://www.lufian.com/uye-girisi-sayfasi",
                        aciklama:[
                               'Ürün Özellikleri','Ödeme Seçenekleri ','İade Değişim ','Kumaş Bakımı ','Yorumlar (0)'
                                 ],
                        kaynak1:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145831-36-B.jpg",
                        kaynak2:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145832-36-B.jpg",
                        kaynak3:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145833-36-B.jpg",
                        kaynak4:"https://cdn.lufian.com/molea-spor-blazer-ceket-slim-fit-lacivert-ceket-lufian-145834-36-B.jpg",

                        items: [
                            {
                              src: '//www.lufian.com/Data/EditorFiles/banner/banner4.jpeg'
                            },
                            {
                              src: '//www.lufian.com/Data/EditorFiles/banner/Banner1.jpeg'
                            },
                            {
                              src: '//www.lufian.com/Data/EditorFiles/banner/banner2.jpeg'
                            },
                            {
                              src: '//www.lufian.com/Data/EditorFiles/banner/banner3.jpeg'
                            },
                          ], 
                                       
                               
                   }
                )
            },

            setPosts(vuexContext,posts){
                vuexContext.commit("setPosts",posts)
            }
        },
        getters : {
            getPosts(state){
                return state.urunList
            }

        },
    })
}

export default createStore