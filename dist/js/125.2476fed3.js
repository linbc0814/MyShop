"use strict";(self["webpackChunkmy_vshop"]=self["webpackChunkmy_vshop"]||[]).push([[125],{3125:function(t,r,e){e.r(r),e.d(r,{default:function(){return G}});var s=e(3396),l=e(9242),o=e(7139);const d={class:"viewbody"},a={class:"container"},i=(0,s._)("h1",{class:"fs-2 text-center fw-bold"},"訂單查詢",-1),c={class:"row d-flex justify-content-center"},n={class:"col-md-8"},u={class:"input-group mt-5 mb-1"},_={key:0,class:"p-5 text-center"},b=(0,s._)("p",{class:"fs-1 opacity-50 mt-5"},[(0,s._)("i",{class:"bi bi-file-earmark-text"}),(0,s._)("br"),(0,s.Uk)(" 還沒有下單嗎? ")],-1),h=(0,s._)("i",{class:"bi bi-arrow-right"},null,-1),p=(0,s.Uk)(" 去逛逛 "),w={class:"row d-flex justify-content-center mt-5"},m={key:0,class:"col-lg-8 text-primary"},g={class:"h-100 d-flex flex-column"},f=(0,s._)("h3",{class:"h6 d-inline-block text-white rounded-top align-self-start px-3 py-2 mb-0 confirm-h3"}," 訂單資訊 ",-1),y={class:"table-responsive bg-white shadow-sm rounded-bottom divborder p-3"},v={class:"table"},k=(0,s._)("th",{scope:"row",class:"border-0"},"訂單編號",-1),x={class:"border-0"},z=(0,s._)("th",{scope:"row",class:"border-0"},"下單時間",-1),$={class:"border-0"},D=(0,s._)("th",{scope:"row",class:"border-0"},"姓名",-1),L={class:"border-0"},q=(0,s._)("th",{scope:"row",class:"border-0"},"電話",-1),I={class:"border-0"},U=(0,s._)("th",{scope:"row",class:"border-0"},"地址",-1),j={class:"border-0"},C=(0,s._)("th",{scope:"row",class:"border-0"},"Email",-1),H={class:"border-0"},O=(0,s._)("th",{scope:"row",class:"border-0"},"總金額",-1),Y={class:"border-0"},W={class:"table"},B=["src","alt"],E={class:"text-end"},K={class:"small text-muted"},M=(0,s._)("br",null,null,-1),R=(0,s._)("small",{class:"text-danger me-1"},"折扣價",-1),S={class:"text-danger fw-bold"};function V(t,r,e,V,Z,A){const F=(0,s.up)("Loading"),G=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(F,{active:Z.isLoading},null,8,["active"]),(0,s._)("div",d,[(0,s._)("div",a,[i,(0,s._)("div",c,[(0,s._)("div",n,[(0,s._)("div",u,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"輸入訂單編號","onUpdate:modelValue":r[0]||(r[0]=t=>Z.orderId=t)},null,512),[[l.nr,Z.orderId]]),(0,s._)("button",{class:"btn myBtn rounded-0",type:"button",onClick:r[1]||(r[1]=(...t)=>A.getOrder&&A.getOrder(...t))}," 送出 ")]),this.orderget?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",_,[b,(0,s.Wm)(G,{to:{path:"/user/productslist"},class:"btn btn-primary btn-lg mb-5"},{default:(0,s.w5)((()=>[h,p])),_:1})])),(0,s._)("div",w,[this.orderget?((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",g,[f,(0,s._)("div",y,[(0,s._)("table",v,[(0,s._)("tbody",null,[(0,s._)("tr",null,[k,(0,s._)("td",x,(0,o.zw)(this.order.id),1)]),(0,s._)("tr",null,[z,(0,s._)("td",$,(0,o.zw)(t.$filters.date(this.order.create_at)),1)]),(0,s._)("tr",null,[D,(0,s._)("td",L,(0,o.zw)(this.order.user.name),1)]),(0,s._)("tr",null,[q,(0,s._)("td",I,(0,o.zw)(this.order.user.tel),1)]),(0,s._)("tr",null,[U,(0,s._)("td",j,(0,o.zw)(this.order.user.address),1)]),(0,s._)("tr",null,[C,(0,s._)("td",H,(0,o.zw)(this.order.user.email),1)]),(0,s._)("tr",null,[O,(0,s._)("td",Y," $"+(0,o.zw)(t.$filters.currency(this.order.total)),1)])])]),(0,s._)("table",W,[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Z.order.products,(r=>((0,s.wg)(),(0,s.iD)("tr",{key:r.id},[(0,s._)("td",null,[(0,s._)("img",{src:r.product.imageUrl,alt:r.product.title,class:"confirm-img"},null,8,B)]),(0,s._)("td",null,(0,o.zw)(r.product.title),1),(0,s._)("td",null,"x "+(0,o.zw)(r.qty),1),(0,s._)("td",E,[r.final_total!==r.total?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("del",K,"$"+(0,o.zw)(t.$filters.currency(r.total)),1),M,R],64)):(0,s.kq)("",!0),(0,s._)("span",S," $"+(0,o.zw)(t.$filters.currency(r.final_total)),1)])])))),128))])])])])])):(0,s.kq)("",!0)])])])])])],64)}var Z={data(){return{isLoading:!1,orderget:!1,orderId:"",order:{user:{}}}},inject:["emitter","pushMessageState"],methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/linbcshop-api/order/${this.orderId}`;this.isLoading=!0,this.$http.get(t).then((t=>{this.order=t.data.order,this.orderget=!0,this.isLoading=!1}))}}},A=e(89);const F=(0,A.Z)(Z,[["render",V]]);var G=F}}]);
//# sourceMappingURL=125.2476fed3.js.map