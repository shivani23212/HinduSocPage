(this["webpackJsonpfirst-website"]=this["webpackJsonpfirst-website"]||[]).push([[0],[,,,,,,,,function(e,c,a){},,,,,,,function(e,c,a){},,,,,,,,,,,function(e,c,a){},,function(e,c,a){},,,,,,function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){},function(e,c,a){"use strict";a.r(c);var s=a(1),i=a(18),n=a.n(i),t=(a(8),a(10)),r=a(4),l=(a(26),a(0)),o=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],d=function(e){var c=e.children,a=e.type,s=e.onClick,i=e.buttonStyle,n=e.buttonSize,t=o.includes(i)?i:o[0],r=j.includes(n)?n:j[0];return Object(l.jsxs)("button",{className:"btn ".concat(t," ").concat(r),onClick:s,type:a,children:[c," "]})};a(28);var b=function(){var e=Object(s.useState)(!1),c=Object(t.a)(e,2),a=c[0],i=c[1],n=Object(s.useState)(!0),o=Object(t.a)(n,2),j=o[0],b=o[1],m=function(){return i(!1)},g=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(s.useEffect)((function(){g()}),[]),window.addEventListener("resize",g),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)(r.b,{to:"/",className:"navbar-logo",onClick:m,children:Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"fa fa-om"})," WARWICK HINDU SOCIETY"]})}),Object(l.jsxs)("div",{className:"menu-icon",children:[" ",Object(l.jsx)("i",{onClick:function(){i(!a)},className:a?"fa fa-times":"fa fa-bars"})]}),Object(l.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[" ",Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/",className:"nav-links",onClick:m,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/who-we-are",className:"nav-links",onClick:m,children:"Who We Are"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/events",className:"nav-links",onClick:m,children:"Our Events"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/join-us",className:"nav-links-mobile",onClick:m,children:"Join Us"})})]}),j&&Object(l.jsxs)(r.b,{to:"/join-us",children:[" ",Object(l.jsx)(d,{buttonStyle:"btn--outline",children:"JOIN US"})]})," "]})})})},m=a(21);a(34);var g=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("video",{src:"/videos/hero-section-video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(l.jsx)("h1",{children:"Namaste!"}),Object(l.jsx)("p",{children:"Welcome to a home away from home"}),Object(l.jsxs)("div",{className:"hero-btns",children:[Object(l.jsx)(r.b,{to:"/our-exec",children:Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"THE EXEC"})}),Object(l.jsx)(r.b,{to:"/events",children:Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:"EVENTS \ud83e\ude94"})})]})]})};var h=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{src:e.src,alt:"Society Image",className:"cards__item__img"})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};a(35);var O=function(){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"Who We Are and What We Do"}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsxs)("div",{className:"cards__wrapper",children:[Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(h,{src:"images/image-1-logo.jpg",text:"Discover the story behind our society",path:"/who-we-are"}),Object(l.jsx)(h,{src:"images/image-2-diyas.jpg",text:"Our current and upcoming socials",path:"/events"})]}),Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(h,{src:"images/image-3-exec.PNG",text:"Meet our Hindu Soc exec team",path:"/our-exec"}),Object(l.jsx)(h,{src:"images/NHSF.jpg",text:"Find out about the NHSF",path:"/sponsors"}),Object(l.jsx)(h,{src:"images/image-5-socials.jpg",text:"Follow us on our social media",path:"/socials"})]})]})})]})};var x=function(){var e=Object(s.useState)(0),c=Object(t.a)(e,2),a=c[0],i=c[1],n=Object(s.useState)(0),r=Object(t.a)(n,2),o=r[0],j=r[1],d=Object(s.useState)(!1),b=Object(t.a)(d,2);return b[0],b[1],Object(s.useEffect)((function(){var e=document.querySelectorAll("img");i(e.length);var c,a=Object(m.a)(e);try{for(a.s();!(c=a.n()).done;){c.value.addEventListener("load",(function(){j(o+1),console.log("dada")}))}}catch(s){a.e(s)}finally{a.f()}}),[]),Object(s.useEffect)((function(){a===o&&console.log("done")}),[a,o]),Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(O,{})]})},u=a(2);a(15);var f=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"exec__card",children:Object(l.jsxs)("div",{className:"exec__card__container",children:[Object(l.jsx)("div",{className:"exec__card__name",children:e.name}),Object(l.jsxs)("div",{className:"exec__card__info",children:[Object(l.jsx)("img",{src:"images/image-1-logo.jpg",className:"exec__card__photo"}),Object(l.jsx)("div",{className:"exec__card__desc",children:"Description Here frferiufjriuehgfiehfierjfuierujfierjfierujfierujferf erferf erferfrfnrnferhfiejdidjiewnfreifriejfreihfireufherf refnuierfuierfierhfiernfirbfierbfuibfirefuerfr fiojeowjqendejfrefjierjfrenfnfuiernfirenfirnfirnfirenfirew"})]})]})})})};var v=function(){return Object(l.jsx)("div",{className:"exec__card__holder__container",children:Object(l.jsxs)("div",{className:"exec__card__holder",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(f,{name:"Co-President: Niraali"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(f,{name:"Co-President: Riana"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(f,{name:"Secretary: Ami"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(f,{name:"Treasurer: Raam"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(f,{name:"Learning Co-ordinator: Shivani"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(f,{name:"Sewa Co-ordinator: Vid"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(f,{name:"Event Co-ordinator: Liam"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(f,{name:"Event Co-ordinator: Rani"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(f,{name:"Media Co-ordinator: Nidhi"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(f,{name:"Media Co-ordinator: Gaya"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(f,{name:"Sports Co-ordinator: Rikhil"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:"images/rangoli.png",alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(f,{name:"Sports Co-ordinator: Keri"})})]})})};var N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"our-exec",children:"MEET THE EXEC"}),Object(l.jsx)(v,{})]})};a(36);var p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"who-we-are",children:"OUR STORY"}),Object(l.jsxs)("div",{className:"our-story-container",children:[Object(l.jsx)("img",{src:"images/garba.jpg",alt:"",className:"our-story-image"}),Object(l.jsx)("div",{className:"our-story-information",children:Object(l.jsxs)("p",{children:["Chocolate cake drag\xe9e chocolate muffin I love cupcake I love. Bonbon bear claw cupcake liquorice sweet. Tootsie roll shortbread carrot cake icing I love. Macaroon gummies muffin candy canes candy canes I love sugar plum. Chocolate cake caramels cheesecake powder liquorice shortbread liquorice gummi bears oat cake. Candy tart ice cream wafer carrot cake souffl\xe9. Tiramisu cheesecake carrot cake fruitcake liquorice cake pudding. I love cheesecake marshmallow icing macaroon sweet roll gingerbread gingerbread bear claw. Chocolate cake chocolate jujubes drag\xe9e lemon drops candy canes.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Biscuit bear claw gingerbread bonbon topping sweet roll. Carrot cake tart jelly beans cheesecake jelly-o biscuit jelly beans lemon drops. Icing halvah ice cream shortbread muffin jelly beans. Apple pie gummies jelly-o sesame snaps icing liquorice I love I love. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})})]})]})};a(37);var w=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"events",children:"EVENTS AND SOCIALS"}),Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:"images/coming-soon.png",alt:"coming soon image",className:"coming-soon-img"})})]})};a(38);a(39);var _=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"footer-content",children:[Object(l.jsx)("h3",{children:"Warwick Hindu Society"}),Object(l.jsx)("p",{className:"description",children:"Cupcake ipsum dolor sit amet. I love jelly beans tart cupcake fruitcake sugar plum tart."}),Object(l.jsxs)("ul",{className:"social-media-container",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.facebook.com/nhsfwarwick",children:Object(l.jsx)("i",{className:"fab fa-facebook"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.instagram.com/nhsfwarwick/",children:Object(l.jsx)("i",{className:"fab fa-instagram"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.warwicksu.com/societies-sports/societies/hindu/",children:Object(l.jsx)("i",{className:"fa fa-globe"})})})]}),Object(l.jsx)("div",{className:"copyright",children:Object(l.jsxs)("p",{children:["Copyright \xa9 2021 Shivani yh this isnt on ",Object(l.jsx)("span",{children:"version control"})," lmao"]})})]})})})};function k(){var e=Object(u.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(r.a,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(k,{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",exact:!0,component:x}),Object(l.jsx)(u.a,{path:"/our-exec",component:N}),Object(l.jsx)(u.a,{path:"/who-we-are",component:p}),Object(l.jsx)(u.a,{path:"/events",component:w}),Object(l.jsx)(u.a,{path:"/sponsors",component:function(){window.location.replace("https://www.nhsf.org.uk/")}}),Object(l.jsx)(u.a,{path:"/socials",component:function(){window.location.replace("https://www.instagram.com/nhsfwarwick/")}}),Object(l.jsx)(u.a,{path:"/join-us",component:function(){window.location.replace("https://www.warwicksu.com/societies-sports/societies/hindu/#org-join")}})]})]}),Object(l.jsx)(_,{})]})};n.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.cebe2f44.chunk.js.map