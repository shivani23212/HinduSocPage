(this["webpackJsonpfirst-website"]=this["webpackJsonpfirst-website"]||[]).push([[0],{10:function(e,c,a){},15:function(e,c,a){},26:function(e,c,a){},28:function(e,c,a){},34:function(e,c,a){},35:function(e,c,a){},36:function(e,c,a){},37:function(e,c,a){},38:function(e,c,a){},39:function(e,c,a){"use strict";a.r(c);var s=a(1),i=a(18),t=a.n(i),n=(a(10),a(9)),r=a(4),l=(a(26),a(0)),o=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],d=function(e){var c=e.children,a=e.type,s=e.onClick,i=e.buttonStyle,t=e.buttonSize,n=o.includes(i)?i:o[0],r=j.includes(t)?t:j[0];return Object(l.jsxs)("button",{className:"btn ".concat(n," ").concat(r),onClick:s,type:a,children:[c," "]})};a(28);var b=function(){var e=Object(s.useState)(!1),c=Object(n.a)(e,2),a=c[0],i=c[1],t=Object(s.useState)(!0),o=Object(n.a)(t,2),j=o[0],b=o[1],m=function(){return i(!1)},h=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(s.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsx)(r.b,{to:"/",className:"navbar-logo",onClick:m,children:Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"fa fa-om"})," WARWICK HINDU SOCIETY"]})}),Object(l.jsxs)("div",{className:"menu-icon",children:[" ",Object(l.jsx)("i",{onClick:function(){i(!a)},className:a?"fa fa-times":"fa fa-bars"})]}),Object(l.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[" ",Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/",className:"nav-links",onClick:m,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/who-we-are",className:"nav-links",onClick:m,children:"Who We Are"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/events",className:"nav-links",onClick:m,children:"Our Events"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/join-us",className:"nav-links-mobile",onClick:m,children:"Join Us"})})]}),j&&Object(l.jsxs)(r.b,{to:"/join-us",children:[" ",Object(l.jsx)(d,{buttonStyle:"btn--outline",children:"JOIN US"})]})," "]})})})},m=a(21),h=(a(34),a.p+"static/media/hero-section-video-1.bbaa95a9.mp4");var O=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("video",{src:h,autoPlay:!0,loop:!0,muted:!0}),Object(l.jsx)("h1",{children:"Namaste!"}),Object(l.jsx)("p",{children:"Welcome to your home away from home"}),Object(l.jsxs)("div",{className:"hero-btns",children:[Object(l.jsx)(r.b,{to:"/our-exec",children:Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"THE EXEC"})}),Object(l.jsx)(r.b,{to:"/events",children:Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:"EVENTS \ud83e\ude94"})})]})]})};var x=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{src:e.src,alt:"Society Image",className:"cards__item__img"})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},u=(a(35),a.p+"static/media/image-1-logo.0ee9aea8.jpg"),g=a.p+"static/media/image-2-diyas.aee4064a.jpg",f=(a.p,a.p+"static/media/execMembers.c96950dc.jpeg"),v=a.p+"static/media/NHSF.31dc0ebe.jpg",N=a.p+"static/media/image-5-socials.2dd3d77c.jpg";var p=function(){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"Who We Are and What We Do"}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsxs)("div",{className:"cards__wrapper",children:[Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(x,{src:u,text:"Discover the story behind our society",path:"/who-we-are"}),Object(l.jsx)(x,{src:g,text:"Our current and upcoming socials",path:"/events"})]}),Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(x,{src:f,text:"Meet our Hindu Soc exec team",path:"/our-exec"}),Object(l.jsx)(x,{src:v,text:"Find out about the NHSF",path:"/sponsors"}),Object(l.jsx)(x,{src:N,text:"Follow us on our social media",path:"/socials"})]})]})})]})};var w=function(){var e=Object(s.useState)(0),c=Object(n.a)(e,2),a=c[0],i=c[1],t=Object(s.useState)(0),r=Object(n.a)(t,2),o=r[0],j=r[1],d=Object(s.useState)(!1),b=Object(n.a)(d,2);return b[0],b[1],Object(s.useEffect)((function(){var e=document.querySelectorAll("img");i(e.length);var c,a=Object(m.a)(e);try{for(a.s();!(c=a.n()).done;){c.value.addEventListener("load",(function(){j(o+1),console.log("dada")}))}}catch(s){a.e(s)}finally{a.f()}}),[]),Object(s.useEffect)((function(){a===o&&console.log("done")}),[a,o]),Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{}),Object(l.jsx)(p,{})]})},_=a(2);a(15);var k=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"exec__card",children:Object(l.jsxs)("div",{className:"exec__card__container",children:[Object(l.jsx)("div",{className:"exec__card__name",children:e.name}),Object(l.jsxs)("div",{className:"exec__card__info",children:[Object(l.jsx)("img",{src:u,className:"exec__card__photo"}),Object(l.jsx)("div",{className:"exec__card__desc",children:"Description Here frferiufjriuehgfiehfierjfuierujfierjfierujfierujferf erferf erferfrfnrnferhfiejdidjiewnfreifriejfreihfireufherf refnuierfuierfierhfiernfirbfierbfuibfirefuerfr fiojeowjqendejfrefjierjfrenfnfuiernfirenfirnfirnfirenfirew"})]})]})})})},y=a.p+"static/media/rangoli.bf6a37a1.png";var S=function(){return Object(l.jsx)("div",{className:"exec__card__holder__container",children:Object(l.jsxs)("div",{className:"exec__card__holder",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(k,{name:"Co-President: Niraali"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(k,{name:"Co-President: Riana"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(k,{name:"Secretary: Ami"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(k,{name:"Treasurer: Raam"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(k,{name:"Learning Co-ordinator: Shivani"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(k,{name:"Sewa Co-ordinator: Vid"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(k,{name:"Event Co-ordinator: Liam"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(k,{name:"Event Co-ordinator: Rani"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(k,{name:"Media Co-ordinator: Nidhi"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(k,{name:"Media Co-ordinator: Gaya"})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(k,{name:"Sports Co-ordinator: Rikhil"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"rangoli-container",children:Object(l.jsx)("img",{src:y,alt:"rangoli drawing",className:"rangoli-design"})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)(k,{name:"Sports Co-ordinator: Keri"})})]})})};var C=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"our-exec",children:"MEET THE EXEC"}),Object(l.jsx)(S,{})]})},E=(a(36),a.p+"static/media/garba.c2eb2e1f.jpg");var I=function(){return console.log("function called."),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"who-we-are",children:"OUR STORY"}),Object(l.jsxs)("div",{className:"our-story-container",children:[Object(l.jsx)("img",{src:E,alt:"Central Zone Navratri",className:"our-story-image"}),Object(l.jsx)("div",{className:"our-story-information",children:Object(l.jsxs)("p",{children:["Chocolate cake drag\xe9e chocolate muffin I love cupcake I love. Bonbon bear claw cupcake liquorice sweet. Tootsie roll shortbread carrot cake icing I love. Macaroon gummies muffin candy canes candy canes I love sugar plum. Chocolate cake caramels cheesecake powder liquorice shortbread liquorice gummi bears oat cake. Candy tart ice cream wafer carrot cake souffl\xe9. Tiramisu cheesecake carrot cake fruitcake liquorice cake pudding. I love cheesecake marshmallow icing macaroon sweet roll gingerbread gingerbread bear claw. Chocolate cake chocolate jujubes drag\xe9e lemon drops candy canes.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Biscuit bear claw gingerbread bonbon topping sweet roll. Carrot cake tart jelly beans cheesecake jelly-o biscuit jelly beans lemon drops. Icing halvah ice cream shortbread muffin jelly beans. Apple pie gummies jelly-o sesame snaps icing liquorice I love I love. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})})]})]})},F=(a(37),a.p+"static/media/coming-soon.23bc7588.png");var T=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"events",children:"EVENTS AND SOCIALS"}),Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:F,alt:"coming soon image",className:"coming-soon-img"})})]})};a(38);var W=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"footer-content",children:[Object(l.jsx)("h3",{children:"Warwick Hindu Society"}),Object(l.jsx)("p",{className:"description",children:"Cupcake ipsum dolor sit amet. I love jelly beans tart cupcake fruitcake sugar plum tart."}),Object(l.jsxs)("ul",{className:"social-media-container",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.facebook.com/nhsfwarwick",children:Object(l.jsx)("i",{className:"fab fa-facebook"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.instagram.com/nhsfwarwick/",children:Object(l.jsx)("i",{className:"fab fa-instagram"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.warwicksu.com/societies-sports/societies/hindu/",children:Object(l.jsx)("i",{className:"fa fa-globe"})})})]}),Object(l.jsx)("div",{className:"copyright",children:Object(l.jsxs)("p",{children:["Copyright \xa9 2021 Shivani yh this isnt on ",Object(l.jsx)("span",{children:"version control"})," lmao"]})})]})})})};function H(){var e=Object(_.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var A=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(r.a,{basename:"/HinduSocPage",children:[Object(l.jsx)(b,{}),Object(l.jsx)(H,{}),Object(l.jsxs)(_.c,{children:[Object(l.jsx)(_.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(_.a,{path:"/our-exec",component:C}),Object(l.jsx)(_.a,{path:"/who-we-are",component:I}),Object(l.jsx)(_.a,{path:"/events",component:T}),Object(l.jsx)(_.a,{path:"/sponsors",component:function(){window.location.replace("https://www.nhsf.org.uk/")}}),Object(l.jsx)(_.a,{path:"/socials",component:function(){window.location.replace("https://www.instagram.com/nhsfwarwick/")}}),Object(l.jsx)(_.a,{path:"/join-us",component:function(){window.location.replace("https://www.warwicksu.com/societies-sports/societies/hindu/#org-join")}})]})]}),Object(l.jsx)(W,{})]})};t.a.render(Object(l.jsx)(A,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e5140134.chunk.js.map