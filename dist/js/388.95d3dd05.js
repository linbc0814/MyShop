"use strict";(self["webpackChunkmy_vshop"]=self["webpackChunkmy_vshop"]||[]).push([[388],{3776:function(t,s,i){i.d(s,{Z:function(){return C}});var a=i(3396),c=i(7139),o=i(9242);const r={class:"wrapper"},d={class:"card"},e={class:"bottom"},l={class:"left"},u={class:"details"},n=["onClick"],p=(0,a._)("i",{class:"bi bi-cart-plus"},null,-1),h=[p],m={class:"inside"},_=(0,a._)("div",{class:"icon"},[(0,a._)("i",{class:"bi bi-bookmark-star"})],-1),g={class:"insidecontents"},b=(0,a._)("button",{class:"btn btn-sm btn-frame w-50",type:"button"},[(0,a._)("span",null,"詳細資訊")],-1);function v(t,s,i,p,v,f){const y=(0,a.up)("Loading"),w=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(y,{active:v.isLoading},null,8,["active"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.products,(s=>((0,a.wg)(),(0,a.iD)("li",{class:"col-md-4 col-lg3 border-0 d-flex justify-content-center",key:s.id},[(0,a._)("div",r,[(0,a._)("div",d,[(0,a._)("div",{class:"top",style:(0,c.j5)({backgroundImage:"url("+s.imageUrl+")"})},null,4),(0,a._)("div",e,[(0,a._)("div",l,[(0,a._)("div",u,[(0,a._)("h5",null,(0,c.zw)(s.title),1),(0,a._)("p",null,"NT$ "+(0,c.zw)(t.$filters.currency(s.price)),1)]),(0,a._)("button",{type:"button",class:"btn buy",onClick:(0,o.iM)((t=>f.addToCart(s.id)),["stop"])},h,8,n)])])]),(0,a._)("div",m,[_,(0,a._)("div",g,[(0,a.Wm)(w,{to:`/user/product/${s.id}`},{default:(0,a.w5)((()=>[b])),_:2},1032,["to"])])])])])))),128))],64)}var f={data(){return{isLoading:!1,loadingStatus:{}}},props:["products"],methods:{addToCart(t){const s="https://vue3-course-api.hexschool.io/api/linbcshop-api/cart",i={product_id:t,qty:1};this.loadingStatus.loadingCart=t,this.isLoading=!0,this.$http.post(s,{data:i}).then((s=>{s.data.success&&(this.pushMessageState(s,"加入購物車"),this.emitter.emit("update-cart",t),this.isLoading=!1)})).catch((t=>{this.pushMessageState(t,"連線錯誤"),this.isLoading=!1}))}},inject:["emitter","pushMessageState"]},y=i(89);const w=(0,y.Z)(f,[["render",v]]);var C=w},1388:function(t,s,i){i.r(s),i.d(s,{default:function(){return B}});var a=i(3396),c=i(7139),o=i(9242);const r={class:"viewbody"},d={class:"productBody"},e={class:"container"},l={class:"row mt-5"},u={class:"col-md-7 mb-5"},n={class:"productImg mb-4"},p=["src"],h={class:"col-md-5"},m={class:"productTitle"},_={class:"productTag mb-3"},g={class:""},b=(0,a._)("div",{class:"line"},null,-1),v={class:"descript mt-4"},f=(0,a._)("h4",null,"【產品說明】",-1),y={class:""},w=(0,a._)("hr",null,null,-1),C={class:"mb-3"},k=(0,a._)("h4",{class:""},"數量:",-1),N={class:"countNumber d-flex align-items-center"},L=(0,a._)("i",{class:"bi bi-dash"},null,-1),x=[L],$=(0,a._)("i",{class:"bi bi-plus"},null,-1),M=[$],P=(0,a._)("i",{class:"bi bi-cart4"},null,-1),T=(0,a.Uk)(" 加入購物車 "),S=[P,T],z={class:"referPro mt-5"},j=(0,a._)("h4",{class:"text-center"},"熱門產品",-1),H=(0,a._)("hr",null,null,-1),D={class:"d-flex justify-content-center"},U={class:"col-9 mt-5"},W={class:"row"};function Z(t,s,i,L,$,P){const T=(0,a.up)("Loading"),Z=(0,a.up)("Card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(T,{active:t.isLoading},null,8,["active"]),(0,a._)("div",r,[(0,a._)("div",d,[(0,a._)("div",e,[(0,a._)("div",l,[(0,a._)("div",u,[(0,a._)("div",n,[(0,a._)("img",{src:$.product.imageUrl,class:"shadow",alt:""},null,8,p)])]),(0,a._)("div",h,[(0,a._)("div",m,[(0,a._)("div",_,(0,c.zw)($.product.category),1),(0,a._)("h3",g,(0,c.zw)($.product.title),1),b,(0,a._)("div",v,[f,(0,a._)("p",y,(0,c.zw)($.product.description),1)]),w,(0,a._)("div",C,[(0,a._)("div",null,"價格:NT"+(0,c.zw)(t.$filters.currency($.product.price)),1)]),k,(0,a._)("div",N,[(0,a._)("button",{class:"btn minus",onClick:s[0]||(s[0]=t=>P.changeQty(-1))},x),(0,a.wy)((0,a._)("input",{class:"productNumber",type:"number",max:"10",min:"1","onUpdate:modelValue":s[1]||(s[1]=t=>$.productNum=t),onChange:s[2]||(s[2]=t=>P.changeNumber($.productNum))},null,544),[[o.nr,$.productNum]]),(0,a._)("button",{class:"btn add",onClick:s[3]||(s[3]=t=>P.changeQty(1))},M)]),(0,a._)("button",{class:"addCart btn myBtn mt-4 px-3",onClick:s[4]||(s[4]=t=>P.addToCart(this.id,$.productNum))},S)])])])]),(0,a._)("div",z,[j,H,(0,a._)("div",D,[(0,a._)("div",U,[(0,a._)("ul",W,[(0,a.Wm)(Z,{products:$.hotProducts},null,8,["products"])])])])])])])],64)}var I=i(3776),Q={data(){return{product:{},products:[],id:"",hotProducts:[],arr:[],productNum:1}},components:{Card:I.Z},inject:["emitter","pushMessageState"],methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/linbcshop-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.product=t.data.product)}))},getHotProducts(){const t="https://vue3-course-api.hexschool.io/api/linbcshop-api/products/all";this.$http.get(t).then((t=>{if(this.products=t.data.products,this.products.map((t=>(t.id!==this.id&&this.arr.push(t),this.arr))),this.arr.length>3)for(let s=0;s<3;s++){let t=Math.random()*this.arr.length;t=Math.floor(t),this.hotProducts.push(this.arr[t])}}))},changeQty(t){const s=this.productNum+t;this.changeNumber(s)},changeNumber(t){t<1?(this.productNum=1,alert("數量不可低於1")):this.productNum=t},addToCart(t,s){const i="https://vue3-course-api.hexschool.io/api/linbcshop-api/cart",a={product_id:t,qty:s};this.isLoading=!0,this.$http.post(i,{data:a}).then((t=>{this.isLoading=!1,this.pushMessageState(t,"加入購物車")}))}},created(){this.id=this.$route.params.productId,this.getProduct(),this.getHotProducts()}},Y=i(89);const q=(0,Y.Z)(Q,[["render",Z]]);var B=q}}]);
//# sourceMappingURL=388.95d3dd05.js.map