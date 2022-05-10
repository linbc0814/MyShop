"use strict";(self["webpackChunkmy_vshop"]=self["webpackChunkmy_vshop"]||[]).push([[875],{5875:function(l,e,s){s.r(e),s.d(e,{default:function(){return el}});var t=s(3396),a=s(7139),r=s(9242);const i={class:"viewbody customerInfo"},o=(0,t.uE)('<div class="container mb-5 py-5 px-md-4 mt-5"><div class="row justify-content-center mt-5"><div class="col-md-10 mx-auto"><ol class="row progress-bar list-unstyled justify-content-between text-center"><li class="col-3 done">購物車</li><li class="col-3 active">填寫資料</li><li class="col-3">確認訂單</li><li class="col-3">完成</li></ol></div></div></div>',1),c={class:"container pt-5"},d={class:"row flex-lg-row-reverse gx-5 pb-5 mb-5"},n={class:"col-lg-4 mb-4"},u={class:"bg-white"},m=(0,t._)("h1",{class:"fs-4 d-none d-lg-block p-3"},[(0,t._)("i",{class:"bi bi-card-text"}),(0,t.Uk)(" 訂單明細 ")],-1),p={class:"fromTable table divborder"},_=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{scope:"col",width:"15%"},"編號"),(0,t._)("th",{scope:"col",width:"40%"},"商品名稱"),(0,t._)("th",{scope:"col",width:"15%"},"數量"),(0,t._)("th",{scope:"col",width:"20%"},"價格")])],-1),b={class:"d-flex"},h={class:"p-2 w-100"},f={class:"m-0 fs-5"},g=(0,t._)("td",null,"折扣",-1),v=(0,t._)("td",null,null,-1),y=(0,t._)("td",null,null,-1),w=(0,t._)("td",null,"合計",-1),x=(0,t._)("td",null,null,-1),k={class:"table-responsive bg-white p-3 divborder"},q={class:"table"},U=(0,t._)("th",{scope:"row",class:"border-0 align-middle"},"付款方式",-1),V={class:"border-0"},C=(0,t._)("th",{scope:"row",class:"border-0 align-middle"},"配送方式",-1),S={class:"border-0"},W={class:"col-lg-8"},$={class:"bg-white shadow rounded-3 py-5 px-3 px-md-5"},z=(0,t._)("h2",{class:"fs-4 mb-3"},[(0,t._)("i",{class:"bi bi-pen-fill"}),(0,t.Uk)(" 訂購人資訊 ")],-1),I=(0,t._)("p",{class:"text-danger"},"* 為必填欄位",-1),D={class:"mb-3"},E=(0,t._)("label",{for:"email",class:"form-label"},[(0,t.Uk)("Email "),(0,t._)("span",{class:"text-danger"},"*")],-1),L={class:"mb-3"},j=(0,t._)("label",{for:"name",class:"form-label"},[(0,t.Uk)("收件人姓名 "),(0,t._)("span",{class:"text-danger"},"*")],-1),T={class:"mb-3"},F=(0,t._)("label",{for:"tel",class:"form-label"},[(0,t.Uk)("收件人手機 "),(0,t._)("span",{class:"text-danger"},"*")],-1),J={class:"mb-3"},M=(0,t._)("label",{for:"address",class:"form-label"},[(0,t.Uk)("收件人地址 "),(0,t._)("span",{class:"text-danger"},"*")],-1),N={class:"mb-3"},O=(0,t._)("label",{for:"message",class:"form-label"},"留言",-1),P=(0,t._)("div",{class:"text-end"},[(0,t._)("p",{class:"text-danger text-end small"},[(0,t._)("i",{class:"bi bi-exclamation-circle"}),(0,t.Uk)(" 提醒：送出後即無法修改資料！ ")])],-1),H={class:"d-flex justify-content-between"},K=(0,t._)("i",{class:"bi bi-caret-left-fill"},null,-1),Y=(0,t.Uk)(" 上一步 "),Z=["disabled"],A=(0,t.Uk)(" 送出 "),B=(0,t._)("i",{class:"bi bi-caret-right-fill"},null,-1),G=[A,B];function Q(l,e,s,A,B,Q){const R=(0,t.up)("Field"),X=(0,t.up)("ErrorMessage"),ll=(0,t.up)("router-link"),el=(0,t.up)("Form");return(0,t.wg)(),(0,t.iD)("div",i,[o,(0,t._)("div",c,[(0,t._)("div",d,[(0,t._)("div",n,[(0,t._)("div",u,[m,(0,t._)("table",p,[_,(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(B.cart.carts,((e,s)=>((0,t.wg)(),(0,t.iD)("tr",{key:e.id},[(0,t._)("td",null,(0,a.zw)(s+1),1),(0,t._)("td",null,[(0,t._)("div",b,[(0,t._)("div",h,[(0,t._)("h4",f,(0,a.zw)(e.product.title),1)])])]),(0,t._)("td",null,(0,a.zw)(l.$filters.currency(e.qty)),1),(0,t._)("td",null,(0,a.zw)(l.$filters.currency(e.total)),1)])))),128))]),(0,t._)("tfoot",null,[(0,t._)("tr",null,[g,v,y,(0,t._)("td",null,(0,a.zw)(l.$filters.currency(this.subtotal)),1)]),(0,t._)("tr",null,[w,x,(0,t._)("td",null,(0,a.zw)(Q.qtyTotal),1),(0,t._)("td",null,(0,a.zw)(l.$filters.currency(B.cart.total)),1)])])])]),(0,t._)("div",k,[(0,t._)("table",q,[(0,t._)("tbody",null,[(0,t._)("tr",null,[U,(0,t._)("td",V,(0,a.zw)(this.$route.query.pays),1)]),(0,t._)("tr",null,[C,(0,t._)("td",S,(0,a.zw)(this.$route.query.shippings),1)])])])])]),(0,t._)("div",W,[(0,t._)("div",$,[z,(0,t.Wm)(el,{onSubmit:Q.goCustomerInfo},{default:(0,t.w5)((({errors:l,meta:s})=>[I,(0,t._)("div",D,[E,(0,t.Wm)(R,{id:"email",name:"email",type:"email",class:(0,a.C_)(["form-control",{"is-invalid":l["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:B.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=l=>B.form.user.email=l)},null,8,["class","modelValue"]),(0,t.Wm)(X,{name:"email",class:"invalid-feedback"})]),(0,t._)("div",L,[j,(0,t.Wm)(R,{id:"name",name:"姓名",type:"text",class:(0,a.C_)(["form-control",{"is-invalid":l["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:B.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=l=>B.form.user.name=l)},null,8,["class","modelValue"]),(0,t.Wm)(X,{name:"姓名",class:"invalid-feedback"})]),(0,t._)("div",T,[F,(0,t.Wm)(R,{id:"tel",name:"手機",type:"tel",class:(0,a.C_)(["form-control",{"is-invalid":l["手機"]}]),placeholder:"請輸入手機",rules:"required|numeric|min:10",modelValue:B.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=l=>B.form.user.tel=l)},null,8,["class","modelValue"]),(0,t.Wm)(X,{name:"手機",class:"invalid-feedback"})]),(0,t._)("div",J,[M,(0,t.Wm)(R,{id:"address",name:"地址",type:"text",class:(0,a.C_)(["form-control",{"is-invalid":l["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:B.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=l=>B.form.user.address=l)},null,8,["class","modelValue"]),(0,t.Wm)(X,{name:"地址",class:"invalid-feedback"})]),(0,t._)("div",N,[O,(0,t.wy)((0,t._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[4]||(e[4]=l=>B.form.message=l)},null,512),[[r.nr,B.form.message]])]),P,(0,t._)("div",H,[(0,t.Wm)(ll,{class:"btn btn-outline-primary",to:"/cart"},{default:(0,t.w5)((()=>[K,Y])),_:1}),(0,t._)("div",null,[(0,t._)("button",{class:"btn btn-danger",type:"submit",disabled:!s.valid},G,8,Z)])])])),_:1},8,["onSubmit"])])])])])])}var R={data(){return{products:[],product:{},cart:{},qtyList:[],pays:"",shippings:"",subtotal:"",coupon_code:"",status:{loadingItem:""},isEmpty:!0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},inject:["pushMessageState"],methods:{getCartProducts(){const l="https://vue3-course-api.hexschool.io/api/linbcshop-api/cart";this.isLoading=!0,this.$http.get(l).then((l=>{this.cart=l.data.data,this.subtotal=this.cart.total-this.cart.final_total,this.cart.carts.filter((l=>(this.qtyList.push(l.qty),this.qtyList))),this.isLoading=!1}))},goCustomerInfo(){const l=this.pays,e=this.shippings,s=localStorage.getItem("orderData"),t=JSON.stringify(this.form),a=JSON.stringify(this.cart);s&&(localStorage.removeItem("orderData"),localStorage.removeItem("cartData")),localStorage.setItem("orderData",t),localStorage.setItem("cartData",a),this.$router.push({path:"/cart/confirm",query:{pay:l,shipping:e}})}},computed:{qtyTotal(){let l=0;return this.qtyList.forEach((e=>{l+=e})),l}},created(){this.pays=this.$route.query.pays,this.shippings=this.$route.query.shippings,this.getCartProducts()}},X=s(89);const ll=(0,X.Z)(R,[["render",Q]]);var el=ll}}]);
//# sourceMappingURL=875.9c9d6a19.js.map