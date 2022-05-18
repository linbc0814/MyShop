"use strict";(self["webpackChunkmy_vshop"]=self["webpackChunkmy_vshop"]||[]).push([[550],{5784:function(t,s,i){i.d(s,{Z:function(){return L}});var a=i(3396),e=i(7139),c=i(9242);const o={class:"wrapper"},r={class:"card"},l={class:"bottom"},n={class:"left"},d={class:"details"},u=["onClick"],h=(0,a._)("i",{class:"bi bi-cart-plus"},null,-1),p=[h],g={class:"inside",id:"inside"},m=(0,a._)("div",{class:"icon"},[(0,a._)("i",{class:"bi bi-bookmark-star"})],-1),_={class:"insidecontents"},b=(0,a._)("button",{class:"btn btn-sm btn-frame w-50",type:"button"},[(0,a._)("span",null,"詳細資訊")],-1);function v(t,s,i,h,v,f){const y=(0,a.up)("Loading"),w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(y,{active:v.isLoading},null,8,["active"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.products,(s=>((0,a.wg)(),(0,a.iD)("li",{class:"col-md-4 col-lg3 border-0 d-flex justify-content-center",key:s.id},[(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("div",{class:"top",style:(0,e.j5)({backgroundImage:"url("+s.imageUrl+")"})},null,4),(0,a._)("div",l,[(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("h5",null,(0,e.zw)(s.title),1),(0,a._)("p",null,"NT$ "+(0,e.zw)(t.$filters.currency(s.price)),1)]),(0,a._)("button",{type:"button",class:"btn buy",onClick:(0,c.iM)((t=>f.addToCart(s.id)),["stop"])},p,8,u)])])]),(0,a._)("div",g,[m,(0,a._)("div",_,[(0,a.Wm)(w,{to:`/user/product/${s.id}`},{default:(0,a.w5)((()=>[b])),_:2},1032,["to"])])])])])))),128))],64)}var f={data(){return{isLoading:!1,loadingStatus:{}}},props:["products"],methods:{addToCart(t){const s="https://vue3-course-api.hexschool.io/api/linbcshop-api/cart",i={product_id:t,qty:1};this.loadingStatus.loadingCart=t,this.isLoading=!0,this.$http.post(s,{data:i}).then((s=>{s.data.success&&(this.pushMessageState(s,"加入購物車"),this.emitter.emit("update-cart",t),this.isLoading=!1)})).catch((t=>{this.pushMessageState(t,"連線錯誤"),this.isLoading=!1}))}},inject:["emitter","pushMessageState"]},y=i(89);const w=(0,y.Z)(f,[["render",v]]);var L=w},9550:function(t,s,i){i.r(s),i.d(s,{default:function(){return K}});var a=i(3396),e=i(7139),c=i(9242);const o={class:"viewbody"},r={class:"productBody"},l={class:"container"},n={class:"row mt-5"},d={class:"col-md-7 mb-5"},u={class:"productImg mb-4"},h=["src"],p={class:"col-md-5"},g={class:"productTitle"},m={class:"d-flex justify-content-between"},_={class:"productTag mb-3 mt-2"},b={key:0,class:"bi bi-heart text-strong fs-4"},v={key:1,class:"bi bi-heart-fill text-strong fs-4"},f={class:""},y=(0,a._)("div",{class:"line"},null,-1),w={class:"descript mt-4"},L=(0,a._)("h4",null,"【產品說明】",-1),k={class:""},C=(0,a._)("hr",null,null,-1),N={class:"mb-3"},x=(0,a._)("h4",null,"數量:",-1),S={class:"countNumber d-flex align-items-center"},$=(0,a._)("i",{class:"bi bi-dash"},null,-1),M=[$],P=(0,a._)("i",{class:"bi bi-plus"},null,-1),T=[P],j=(0,a._)("i",{class:"bi bi-cart4"},null,-1),z=(0,a.Uk)(" 加入購物車 "),D=[j,z],H={class:"hotProduct mt-5"},I=(0,a._)("h4",{class:"text-center"},"熱門產品",-1),O=(0,a._)("hr",null,null,-1),U={class:"d-flex justify-content-center"},W={class:"col-9 mt-5"},Z={class:"row"};function Q(t,s,i,$,P,j){const z=(0,a.up)("Loading"),Q=(0,a.up)("Card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(z,{active:P.isLoading},null,8,["active"]),(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("div",l,[(0,a._)("div",n,[(0,a._)("div",d,[(0,a._)("div",u,[(0,a._)("img",{src:P.product.imageUrl,class:"shadow",alt:""},null,8,h)])]),(0,a._)("div",p,[(0,a._)("div",g,[(0,a._)("div",m,[(0,a._)("h3",_,(0,e.zw)(P.product.category),1),(0,a._)("button",{type:"button",onClick:s[0]||(s[0]=(0,c.iM)((t=>j.favorite(P.product.id)),["prevent"])),class:"btn"},[-1===P.favoriteList.indexOf(P.product.id)?((0,a.wg)(),(0,a.iD)("i",b)):((0,a.wg)(),(0,a.iD)("i",v))])]),(0,a._)("h3",f,(0,e.zw)(P.product.title),1),y,(0,a._)("div",w,[L,(0,a._)("p",k,(0,e.zw)(P.product.description),1)]),C,(0,a._)("div",N,[(0,a._)("div",null,[(0,a._)("h2",null,"價格:NT"+(0,e.zw)(t.$filters.currency(P.product.price)),1)])]),x,(0,a._)("div",S,[(0,a._)("button",{class:"btn minus",onClick:s[1]||(s[1]=t=>j.changeQty(-1))},M),(0,a.wy)((0,a._)("input",{class:"productNumber",type:"number",max:"10",min:"1","onUpdate:modelValue":s[2]||(s[2]=t=>P.productNum=t),onChange:s[3]||(s[3]=t=>j.changeNumber(P.productNum))},null,544),[[c.nr,P.productNum]]),(0,a._)("button",{class:"btn add",onClick:s[4]||(s[4]=t=>j.changeQty(1))},T)]),(0,a._)("button",{class:"addCart btn myBtn mt-4 px-3",onClick:s[5]||(s[5]=t=>j.addToCart(this.id,P.productNum))},D)])])])]),(0,a._)("div",H,[I,O,(0,a._)("div",U,[(0,a._)("div",W,[(0,a._)("ul",Z,[(0,a.Wm)(Q,{products:P.hotProducts},null,8,["products"])])])])])])])],64)}var Y=i(5784),q={data(){return{product:{},products:[],id:"",hotProducts:[],arr:[],productNum:1,isLoading:!1,favoriteList:JSON.parse(localStorage.getItem("favorite"))||[]}},components:{Card:Y.Z},inject:["emitter","pushMessageState"],methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/linbcshop-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.product=t.data.product)}))},getHotProducts(){const t="https://vue3-course-api.hexschool.io/api/linbcshop-api/products/all";this.$http.get(t).then((t=>{if(this.products=t.data.products,this.products.map((t=>(t.id!==this.id&&this.arr.push(t),this.arr))),this.arr.length>3)for(let s=0;s<3;s++){let t=Math.random()*this.arr.length;t=Math.floor(t),this.hotProducts.push(this.arr[t])}}))},changeQty(t){const s=this.productNum+t;this.changeNumber(s)},changeNumber(t){t<1?(this.productNum=1,alert("數量不可低於1")):this.productNum=t},addToCart(t,s){const i="https://vue3-course-api.hexschool.io/api/linbcshop-api/cart",a={product_id:t,qty:s};this.isLoading=!0,this.$http.post(i,{data:a}).then((t=>{this.isLoading=!1,this.pushMessageState(t,"加入購物車")}))},favorite(t){const s=this.favoriteList.indexOf(t);-1===s?(this.favoriteList.push(t),this.pushMessageState({data:{success:!0,message:`已將 ${t.title} 加入收藏`}},"加入收藏")):(this.favoriteList.splice(s,1),this.pushMessageState({data:{success:!0,message:`已將 ${t.title} 取消收藏`}},"取消收藏")),localStorage.setItem("favorite",JSON.stringify(this.favoriteList))}},created(){this.id=this.$route.params.productId,this.getProduct(),this.getHotProducts()}},B=i(89);const J=(0,B.Z)(q,[["render",Q]]);var K=J}}]);
//# sourceMappingURL=550.e1c0e90b.js.map