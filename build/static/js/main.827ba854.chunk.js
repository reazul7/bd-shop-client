(this["webpackJsonpshareer-dokan"]=this["webpackJsonpshareer-dokan"]||[]).push([[0],{44:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(35),r=c.n(s),i=(c(44),c(3)),j=c(8),o=c(4);var l=c(1),d=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("".concat("https://calm-dawn-25588.herokuapp.com","/order")).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Your Orders"}),Object(l.jsx)("br",{}),0===c.length?Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("span",{children:"Loading..."})})}):Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Origin"}),Object(l.jsx)("th",{scope:"col",children:"Price"}),Object(l.jsx)("th",{scope:"col",children:"Time of Order"})]})}),Object(l.jsx)("tbody",{children:c&&c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.origin}),Object(l.jsx)("td",{children:e.price}),Object(l.jsx)("td",{children:e.time})]},e._id)}))})]})]})},b=c(36),h=c.n(b),O=c(38),u=function(){var e=Object(O.a)(),t=e.register,c=e.handleSubmit,a=Object(n.useState)(null),s=Object(i.a)(a,2),r=s[0],d=s[1],b=Object(o.g)();return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"btn-group",children:[Object(l.jsx)(j.b,{to:"/manage",className:"btn btn-primary",children:"Manage "}),Object(l.jsx)(j.b,{to:"/edit",className:"btn btn-primary",children:"Edit "})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:"Add a new Product here"}),Object(l.jsxs)("form",{onSubmit:c((function(e){var t={name:e.name,price:e.price,origin:e.origin,imageURL:r},c="".concat("https://calm-dawn-25588.herokuapp.com","/addProduct");fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log(e)})),console.log("productData",t),alert("Product added Successfully"),b.push("/admin")})),children:[Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"name",children:"Product Name"}),Object(l.jsx)("input",{className:"form-control",name:"name",ref:t}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"price",children:"Add price"}),Object(l.jsx)("input",{className:"form-control",name:"price",ref:t}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"price",children:"Origin"}),Object(l.jsx)("input",{className:"form-control",name:"origin",ref:t}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"file",onChange:function(e){var t=new FormData;t.set("key","9ef62d39af5551ceb76cc167e1d4a773"),t.append("image",e.target.files[0]),h.a.post("https://api.imgbb.com/1/upload",t).then((function(e){d(e.data.data.display_url)})).catch((function(e){console.log(e)}))}})," ",Object(l.jsx)("br",{})," ",Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"btn btn-success",type:"submit"})]})]})},m=function(e){var t=e.product,c=t._id,a=t.name,s=t.price,r=t.imageURL,j=Object(n.useContext)(I),d=Object(i.a)(j,2),b=(d[0],d[1]),h=Object(o.g)();return Object(l.jsx)("div",{className:"col-md-3",children:Object(l.jsxs)("div",{className:"card",style:{width:"16rem",marginTop:"25px"},children:[Object(l.jsx)("img",{style:{height:"300px"},src:r,className:"card-img-top",alt:"..."}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:a}),Object(l.jsxs)("p",{className:"card-text",children:["$",s]}),Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){h.push("/checkout/".concat(c)),b(e.product)},children:"Buy Now"})]})]})})},x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s="".concat("https://calm-dawn-25588.herokuapp.com","/product");return Object(n.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[0===c.length&&Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("span",{children:"Loading..."})})}),c.map((function(e){return Object(l.jsx)(m,{product:e},e._id)}))]})})},p=function(){var e=Object(n.useContext)(P),t=Object(i.a)(e,1)[0];return Object(l.jsxs)("div",{className:"header mb-4",children:[Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j.b,{to:"/",className:"navbar-brand",children:"BD Shop"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/home",className:"nav-link",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/orders",className:"nav-link",children:"Orders"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(j.b,{to:"/admin",className:"nav-link",children:"Admin"})})]})})]})}),t.name?Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"my-3",children:["Logged in as: ",t.name]})}):""]})},g=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("h1",{style:{fontSize:"7em"},children:"404"}),Object(l.jsx)("h3",{children:"Page Not found!"})]})})},f=c(20),v=c(17),N=(c(69),{apiKey:"AIzaSyDhtu0lYOJvZGEeczJYizhooNRh416yu_M",authDomain:"bd-shop-3f040.firebaseapp.com",projectId:"bd-shop-3f040",storageBucket:"bd-shop-3f040.appspot.com",messagingSenderId:"827336294312",appId:"1:827336294312:web:e414a7477a530cdd1be79d"}),y=function(){var e=Object(n.useState)({isSignedIn:!1,name:"",email:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useContext)(P),r=Object(i.a)(s,2),j=(r[0],r[1]),d=Object(o.g)(),b=(Object(o.h)().state||{from:{pathname:"/"}}).from;0===v.a.apps.length&&v.a.initializeApp(N);return Object(l.jsxs)("div",{style:{textAlign:"center",margin:"40px"},children:[Object(l.jsx)("h3",{children:"Log In with Your Google Account"}),c.isSignedIn?Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){v.a.auth().signOut().then((function(e){a({isSignedIn:!1,name:"",email:""}),console.log(e)})).catch((function(e){var t=e.message;console.log(t)}))},children:"Log Out "}):Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=new v.a.auth.GoogleAuthProvider;v.a.auth().signInWithPopup(e).then((function(e){var t=e.user,c=t.displayName,n=t.email,s=e.user,r={isSignedIn:!0,name:c,email:n,success:!0};console.log(s,c),a(r),j(r),d.replace(b)})).catch((function(e){var t=Object(f.a)({},c);t.error=e.message,t.success=!1,a(t)}))},children:"Login With Google "})]})},S=c(39),k=function(e){var t=e.children,c=Object(S.a)(e,["children"]),a=Object(n.useContext)(P),s=Object(i.a)(a,2),r=s[0];s[1];return Object(l.jsx)(o.b,Object(f.a)(Object(f.a)({},c),{},{render:function(e){var c=e.location;return r.email?t:Object(l.jsx)(o.a,{to:{pathname:"/login",state:{from:c}}})}}))},C=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s="https://calm-dawn-25588.herokuapp.com";Object(n.useEffect)((function(){fetch("".concat(s,"/manage")).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[c]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j.b,{to:"/admin",className:"btn btn-primary",children:"Back to Admin"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Origin"}),Object(l.jsx)("th",{scope:"col",children:"Price"}),Object(l.jsx)("th",{scope:"col",children:"Action"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.origin}),Object(l.jsx)("td",{children:e.price}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"btn-group",children:[Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e._id,void fetch("".concat(s,"/delete/").concat(t),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){}));var t},children:"Delete"}),Object(l.jsx)("button",{className:"btn btn-success",children:"Update"})]})})]},e._id)}))})]})]})},w=function(){var e=Object(o.i)()._id,t=Object(n.useState)({}),c=Object(i.a)(t,2),a=c[0],s=c[1],r="https://calm-dawn-25588.herokuapp.com";Object(n.useEffect)((function(){fetch("".concat(r,"/product/").concat(e)).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[e]);return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("img",{width:"100%",src:a.imageURL,alt:""})}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsxs)("p",{children:["Name: ",a.name]}),Object(l.jsxs)("p",{children:["Price: ",a.price," BDT"]}),Object(l.jsxs)("p",{children:["Origin: ",a.origin]}),Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){var e={name:a.name,price:a.price,origin:a.origin,time:new Date};fetch("".concat(r,"/addOrder"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e&&alert("Order Placed Successfully!")})),console.log("Clicked checkout")},children:"Checkout"})]})]})})},P=Object(n.createContext)(),I=Object(n.createContext)();var L=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),r=Object(i.a)(s,2),b=r[0],h=r[1];return Object(l.jsx)(P.Provider,{value:[c,a],children:Object(l.jsx)(I.Provider,{value:[b,h],children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(p,{}),Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/home",children:Object(l.jsx)(x,{})}),Object(l.jsx)(o.b,{path:"/login",children:Object(l.jsx)(y,{})}),Object(l.jsx)(k,{path:"/orders",children:Object(l.jsx)(d,{})}),Object(l.jsx)(k,{path:"/admin",children:Object(l.jsx)(u,{})}),Object(l.jsx)(o.b,{path:"/manage",children:Object(l.jsx)(C,{})}),Object(l.jsx)(k,{path:"/checkout/:_id",children:Object(l.jsx)(w,{})}),Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(x,{})}),Object(l.jsx)(o.b,{path:"/*",children:Object(l.jsx)(g,{})})]})]})})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),A()}},[[71,1,2]]]);
//# sourceMappingURL=main.827ba854.chunk.js.map