"use strict";(self["webpackChunkmy_vshop"]=self["webpackChunkmy_vshop"]||[]).push([[729],{5917:function(t,s,i){i.d(s,{Z:function(){return y}});var a=i(3396),e=i(7139),o=i(9242);const c={class:"wrapper"},r={class:"card"},n={class:"bottom"},d={class:"left"},l={class:"details"},u=["onClick"],p=(0,a._)("i",{class:"bi bi-cart-plus"},null,-1),h=[p],v={class:"insidecard"},g=(0,a._)("div",{class:"icon"},[(0,a._)("i",{class:"bi bi-bookmark-star"})],-1),b={class:"insidecontents"},f=(0,a._)("button",{class:"btn btn-sm btn-frame w-50",type:"button"},[(0,a._)("span",null,"詳細資訊")],-1);function _(t,s,i,p,_,m){const w=(0,a.up)("Loading"),k=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w,{active:_.isLoading},null,8,["active"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.products,(s=>((0,a.wg)(),(0,a.iD)("li",{class:"col-md-4 col-lg3 border-0 d-flex justify-content-center",key:s.id},[(0,a._)("div",c,[(0,a._)("div",r,[(0,a._)("div",{class:"top",style:(0,e.j5)({backgroundImage:"url("+s.imageUrl+")"})},null,4),(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("div",l,[(0,a.Wm)(k,{to:`/user/product/${s.id}`},{default:(0,a.w5)((()=>[(0,a._)("h5",null,(0,e.zw)(s.title),1)])),_:2},1032,["to"]),(0,a._)("p",null,"NT$ "+(0,e.zw)(t.$filters.currency(s.price)),1)]),(0,a._)("button",{type:"button",class:"btn buy",onClick:(0,o.iM)((t=>m.addToCart(s.id)),["stop"])},h,8,u)])])]),(0,a._)("div",v,[g,(0,a._)("div",b,[(0,a.Wm)(k,{to:`/user/product/${s.id}`},{default:(0,a.w5)((()=>[f])),_:2},1032,["to"])])])])])))),128))],64)}var m={data(){return{isLoading:!1,loadingStatus:{}}},props:["products"],methods:{addToCart(t){const s="https://vue3-course-api.hexschool.io/api/linbcshop-api/cart",i={product_id:t,qty:1};this.loadingStatus.loadingCart=t,this.isLoading=!0,this.$http.post(s,{data:i}).then((s=>{s.data.success&&(this.pushMessageState(s,"加入購物車"),this.emitter.emit("update-cart",t),this.isLoading=!1)})).catch((t=>{this.pushMessageState(t,"連線錯誤"),this.isLoading=!1}))}},inject:["emitter","pushMessageState"]},w=i(89);const k=(0,w.Z)(m,[["render",_]]);var y=k},1729:function(t,s,i){i.r(s),i.d(s,{default:function(){return m}});var a=i(3396);const e={class:"viewbody"},o={key:0,class:"p-5 text-center mt-5"},c=(0,a._)("p",{class:"fs-1 opacity-50 mt-5"},[(0,a._)("i",{class:"bi bi-file-earmark-text"}),(0,a._)("br"),(0,a.Uk)(" 尚未新增最愛商品! ")],-1),r=(0,a._)("i",{class:"bi bi-arrow-right"},null,-1),n=(0,a.Uk)(" 去逛逛 "),d={key:1,class:"favoriteProduct"},l=(0,a._)("h1",{class:"text-center mt-5"},"最愛產品",-1),u={class:"d-flex justify-content-center"},p={class:"col-9 mt-5"},h={class:"row"};function v(t,s,i,v,g,b){const f=(0,a.up)("Loading"),_=(0,a.up)("RouterLink"),m=(0,a.up)("Card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{active:g.isLoading},null,8,["active"]),(0,a._)("div",e,[0===g.favoriteProduct.length?((0,a.wg)(),(0,a.iD)("div",o,[c,(0,a.Wm)(_,{to:{path:"/user/productslist"},class:"btn btn-primary btn-lg mb-5"},{default:(0,a.w5)((()=>[r,n])),_:1})])):((0,a.wg)(),(0,a.iD)("div",d,[l,(0,a._)("div",u,[(0,a._)("div",p,[(0,a._)("ul",h,[(0,a.Wm)(m,{products:g.favoriteProduct},null,8,["products"])])])])]))])],64)}var g=i(5917),b={data(){return{favoriteList:JSON.parse(localStorage.getItem("favorite"))||[],isLoading:!1,favoriteProduct:[],products:[]}},components:{Card:g.Z},methods:{getProduct(){const t="https://vue3-course-api.hexschool.io/api/linbcshop-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.favoriteProduct=this.products.filter((t=>-1!==this.favoriteList.indexOf(t.id))))}))}},created(){this.getProduct()}},f=i(89);const _=(0,f.Z)(b,[["render",v]]);var m=_}}]);
//# sourceMappingURL=729.01cd874f.js.map