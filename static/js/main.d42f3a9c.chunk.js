(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(60)},31:function(e,a,t){},35:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(22),c=t.n(r),m=(t(31),t(7),t(35),t(2)),s=function(){return n.a.createElement("div",null,n.a.createElement("nav",{class:"navbar navbar-expand-lg"},n.a.createElement("div",{class:"container-fluid"},n.a.createElement("a",{class:"navbar-brand mx-3",href:"#"},"Welcome !"),n.a.createElement("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler-icon"})),n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{class:"nav-item mx-3"},n.a.createElement("a",{class:"nav-link active","aria-current":"page",href:"#"},"About")),n.a.createElement("li",{class:"nav-item mx-3"},n.a.createElement("a",{class:"nav-link active","aria-current":"page",href:"#"},"Teams")),n.a.createElement("li",{class:"nav-item mx-3"},n.a.createElement("a",{class:"nav-link active","aria-current":"page",href:"#"},"Pricing")),n.a.createElement("li",{class:"nav-item dropdown mx-3"},n.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Social"),n.a.createElement("ul",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},n.a.createElement("li",null,n.a.createElement("a",{class:"dropdown-item",href:"#"},"Twitter")),n.a.createElement("li",null,n.a.createElement("a",{class:"dropdown-item",href:"#"},"Instagram")),n.a.createElement("li",null,n.a.createElement("hr",{class:"dropdown-divider"})),n.a.createElement("li",null,n.a.createElement("a",{class:"dropdown-item",href:"#"},"GitHub"))))),n.a.createElement("div",{class:"d-flex"},n.a.createElement(m.b,{to:"/login"},n.a.createElement("button",{className:"button-login",type:"submit"},"Login")))))),n.a.createElement("div",{className:"landing-wrapper"},n.a.createElement("div",{className:"left-side"},n.a.createElement("h1",{className:"greeting"},"Welcome to our web !"),n.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, vel minus? Delectus provident nemo obcaecati dolore iusto, alias non qui.")),n.a.createElement("div",{className:"right-side"},n.a.createElement("div",{className:"right-side-content"},n.a.createElement("p",null,"Want to discover more ? "),n.a.createElement(m.b,{to:"/signup"},n.a.createElement("button",{className:"learn-more",type:"submit"},"Learn more"))))),n.a.createElement("div",{className:"about"},n.a.createElement("h1",null,"About Us")," ",n.a.createElement("br",null),n.a.createElement("div",{className:"about-wrapper"},n.a.createElement("div",{className:"about-left-side"},n.a.createElement("h2",null,"We are Lorem Ipsum"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet voluptatibus veritatis neque voluptatum aliquam aspernatur assumenda vero ratione sed?")),n.a.createElement("div",{className:"about-right-side"},n.a.createElement("h2",null,"Find us on"),n.a.createElement("a",{href:"https://instagram.com"},n.a.createElement("img",{className:"logo-social",src:"img/instagram.png",alt:""})),n.a.createElement("a",{href:"https://twitter.com"},n.a.createElement("img",{className:"logo-social",src:"img/twitter.png",alt:""})),n.a.createElement("a",{href:"https://github.com"},n.a.createElement("img",{className:"logo-social",src:"img/github.png",alt:""}))))))},o=t(4),i=t(0),u=t(9),E=t.n(u),p=function(){var e=Object(l.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(""),s=Object(o.a)(c,2),u=s[0],p=s[1],d=Object(l.useState)(!1),g=Object(o.a)(d,2),b=g[0],h=g[1],v=Object(l.useState)(""),f=Object(o.a)(v,2),N=f[0],w=f[1];return n.a.createElement(l.Fragment,null,b&&n.a.createElement(i.a,{to:"/dashboard"}),n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"bubble"}),n.a.createElement("div",{className:"bubble2"}),n.a.createElement("div",{className:"main-form"},n.a.createElement("h2",null,"Hello ! "),N&&n.a.createElement("div",null,n.a.createElement("p",{className:"alert alert-danger"},N)),n.a.createElement("hr",null),n.a.createElement("label",null,"Username")," ",n.a.createElement("br",null),n.a.createElement("input",{className:"input-bar",type:"text",placeholder:"Enter your username",value:t,onChange:function(e){var a=e.target.value;r(a),w("")}})," ",n.a.createElement("br",null),n.a.createElement("label",null,"Password")," ",n.a.createElement("br",null),n.a.createElement("input",{className:"input-bar",type:"password",placeholder:"Enter your password",value:u,onChange:function(e){var a=e.target.value;p(a),w("")}}),n.a.createElement("p",{className:"prompt"},n.a.createElement("input",{type:"checkbox"})," Remember me"),n.a.createElement("button",{className:"btn-login",onClick:function(){var e={username:t,password:u};E.a.post("http://localhost:3001/login",e).then(function(e){e&&(localStorage.setItem("token",e.data.token),h(!0))}).catch(function(e){w(e.response.data.message)})}},"Login"),n.a.createElement("p",{className:"register-prompt"},"Don't have an account ?",n.a.createElement(m.b,{to:"/signup"},n.a.createElement("a",{href:"https://google.com"}," Create an account"))," ",n.a.createElement("br",null),n.a.createElement(m.b,{to:"/"},n.a.createElement("a",{href:"https://google.com"}," Cancel"))))))},d=function(){var e=Object(l.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(""),s=Object(o.a)(c,2),i=s[0],u=s[1],p=Object(l.useState)(""),d=Object(o.a)(p,2),g=d[0],b=d[1],h=Object(l.useState)(""),v=Object(o.a)(h,2),f=v[0],N=v[1],w=Object(l.useState)(""),S=Object(o.a)(w,2),y=S[0],j=S[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"main-form-register"},n.a.createElement("h2",null,"Welcome ! "),n.a.createElement("p",{className:"user-sctn"},"Please fill the form to make an account"),y&&n.a.createElement("div",null,n.a.createElement("p",{className:"alert alert-danger"},y)),f&&n.a.createElement("div",null,n.a.createElement("p",{className:"alert alert-primary"},f)),n.a.createElement("hr",null),n.a.createElement("label",null,"Username")," ",n.a.createElement("br",null),n.a.createElement("input",{className:"input-bar",type:"text",name:"",id:"",placeholder:"Enter your username",value:t,onChange:function(e){var a=e.target.value;r(a),j("")}})," ",n.a.createElement("br",null),n.a.createElement("label",null,"Email")," ",n.a.createElement("br",null),n.a.createElement("input",{className:"input-bar",type:"email",name:"",id:"",placeholder:"Enter your email",value:i,onChange:function(e){var a=e.target.value;u(a),j("")}})," ",n.a.createElement("br",null),n.a.createElement("label",null,"Password")," ",n.a.createElement("br",null),n.a.createElement("input",{className:"input-bar",type:"password",name:"",id:"",placeholder:"Enter your password",value:g,onChange:function(e){var a=e.target.value;b(a),j("")}}),n.a.createElement("br",null),n.a.createElement("p",{className:"prompt"},n.a.createElement("input",{type:"checkbox",name:"",id:""})," By signing up, you are agree with our ",n.a.createElement(m.b,{to:"/terms"},n.a.createElement("a",{href:"https://google.com"},"Terms and Services"))),n.a.createElement("button",{className:"btn-register",onClick:function(){var e={username:t,email:i,password:g};E.a.post("http://localhost:3001/register",e).then(function(e){e&&e.data&&(r(""),u(""),b(""),N(e.data.message),setTimeout(function(){N("")},7e3))}).catch(function(e){j(e.response.data.message),setTimeout(function(){j("")},7e3)})}},"Sign Up"),n.a.createElement("p",{className:"register-prompt"},"Aleady have an account ?",n.a.createElement(m.b,{to:"/login"},n.a.createElement("a",{href:"https://google.com"}," Login"))," ",n.a.createElement("br",null),n.a.createElement(m.b,{to:"/"},n.a.createElement("a",{href:"https://google.com"}," Cancel")))))},g=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"main-form"},n.a.createElement("h4",null,"Ehe..."),n.a.createElement("hr",null),n.a.createElement("p",null,"Actually, there's nothing here. Ehe~"),n.a.createElement("img",{className:"ehe",src:"img/ehe.png",alt:""}),n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("p",{className:"register-prompt"},n.a.createElement(m.b,{to:"/login"},n.a.createElement("a",{href:"https://google.com"}," Back to Login")))))},b=function(){if(!localStorage.getItem("token"))return n.a.createElement(i.a,{to:"/"});var e=new Date,a="".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear());return n.a.createElement("div",null,n.a.createElement("div",{className:"main-form"},n.a.createElement("h1",null,"Hello ! "),n.a.createElement("hr",null),n.a.createElement("p",null,n.a.createElement("p",null,a),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at ducimus modi. Sed veritatis nisi a libero reiciendis ullam? Maiores!"),n.a.createElement("hr",null),n.a.createElement("p",{className:"alert alert-danger"},"Still in development, ehe~"),n.a.createElement("p",{className:"alert alert-success"},"See our ",n.a.createElement(m.b,{to:"/terms"},n.a.createElement("a",{href:"https://google.com"}," Terms and Service"))),n.a.createElement("hr",null),n.a.createElement(m.b,{to:"/"},n.a.createElement("a",{href:"https://google.com"}," Logout "))))};var h=function(){return n.a.createElement("div",null,n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/",element:n.a.createElement(s,null)}),n.a.createElement(i.b,{exact:!0,path:"/login",element:n.a.createElement(p,null)}),n.a.createElement(i.b,{path:"/signup",element:n.a.createElement(d,null)}),n.a.createElement(i.b,{path:"/terms",element:n.a.createElement(g,null)}),n.a.createElement(i.b,{path:"/dashboard",element:n.a.createElement(b,null)})))},v=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,61)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m.a,null,n.a.createElement(h,null)))),v()},7:function(e,a,t){}},[[23,3,2]]]);
//# sourceMappingURL=main.d42f3a9c.chunk.js.map