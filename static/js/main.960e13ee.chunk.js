(this["webpackJsonpfirst-website"]=this["webpackJsonpfirst-website"]||[]).push([[0],{10:function(e,c,a){},15:function(e,c,a){},26:function(e,c,a){},28:function(e,c,a){},34:function(e,c,a){},35:function(e,c,a){},36:function(e,c,a){},37:function(e,c,a){},38:function(e,c,a){},39:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a(18),i=a.n(t),n=(a(10),a(9)),r=a(4),o=(a(26),a(0)),l=["btn--primary","btn--outline"],j=["btn--medium","btn--large"],d=function(e){var c=e.children,a=e.type,s=e.onClick,t=e.buttonStyle,i=e.buttonSize,n=l.includes(t)?t:l[0],r=j.includes(i)?i:j[0];return Object(o.jsxs)("button",{className:"btn ".concat(n," ").concat(r),onClick:s,type:a,children:[c," "]})};a(28);var b=function(){var e=Object(s.useState)(!1),c=Object(n.a)(e,2),a=c[0],t=c[1],i=Object(s.useState)(!0),l=Object(n.a)(i,2),j=l[0],b=l[1],m=function(){return t(!1)},h=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(s.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsx)(r.b,{to:"/",className:"navbar-logo",onClick:m,children:Object(o.jsxs)("span",{children:[Object(o.jsx)("i",{className:"fa fa-om"})," ",Object(o.jsx)("div",{className:"navbar-text",children:" WARWICK HINDU SOCIETY "})," "]})}),Object(o.jsxs)("div",{className:"menu-icon",children:[" ",Object(o.jsx)("i",{onClick:function(){t(!a)},className:a?"fa fa-times":"fa fa-bars"})]}),Object(o.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[" ",Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/",className:"nav-links",onClick:m,children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/who-we-are",className:"nav-links",onClick:m,children:"Who We Are"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/events",className:"nav-links",onClick:m,children:"Our Events"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/join-us",className:"nav-links-mobile",onClick:m,children:"Join Us"})})]}),j&&Object(o.jsxs)(r.b,{to:"/join-us",children:[" ",Object(o.jsx)(d,{buttonStyle:"btn--outline",children:"JOIN US"})]})," "]})})})},m=a(21),h=(a(34),a.p+"static/media/hero-section-video-1.bbaa95a9.mp4");var x=function(){return Object(o.jsxs)("div",{className:"hero-container",children:[Object(o.jsx)("video",{src:h,autoPlay:!0,loop:!0,muted:!0}),Object(o.jsx)("h1",{children:"Namaste!"}),Object(o.jsx)("p",{children:"Welcome to your home away from home"}),Object(o.jsxs)("div",{className:"hero-btns",children:[Object(o.jsx)(r.b,{to:"/our-exec",children:Object(o.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"THE EXEC"})}),Object(o.jsx)(r.b,{to:"/events",children:Object(o.jsx)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:"EVENTS \ud83e\ude94"})})]})]})};var O=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("li",{className:"cards__item",children:Object(o.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(o.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:"Society Image",className:"cards__item__img"})}),Object(o.jsx)("div",{className:"cards__item__info",children:Object(o.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},u=(a(35),a.p+"static/media/image-1-logo.0ee9aea8.jpg"),g=a.p+"static/media/image-2-diyas.aee4064a.jpg",f=(a.p,a.p+"static/media/execMembers.c96950dc.jpeg"),p=a.p+"static/media/NHSF.31dc0ebe.jpg",v=a.p+"static/media/image-5-socials.2dd3d77c.jpg";var N=function(){return Object(o.jsxs)("div",{className:"cards",children:[Object(o.jsx)("h1",{children:"Who We Are and What We Do"}),Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsxs)("div",{className:"cards__wrapper",children:[Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(O,{src:u,text:"Discover the story behind our society",path:"/who-we-are"}),Object(o.jsx)(O,{src:g,text:"Our current and upcoming socials",path:"/events"})]}),Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(O,{src:f,text:"Meet our Hindu Soc exec team",path:"/our-exec"}),Object(o.jsx)(O,{src:p,text:"Find out about the NHSF",path:"/sponsors"}),Object(o.jsx)(O,{src:v,text:"Follow us on our social media",path:"/socials"})]})]})})]})};var w=function(){var e=Object(s.useState)(0),c=Object(n.a)(e,2),a=c[0],t=c[1],i=Object(s.useState)(0),r=Object(n.a)(i,2),l=r[0],j=r[1],d=Object(s.useState)(!1),b=Object(n.a)(d,2);return b[0],b[1],Object(s.useEffect)((function(){var e=document.querySelectorAll("img");t(e.length);var c,a=Object(m.a)(e);try{for(a.s();!(c=a.n()).done;){c.value.addEventListener("load",(function(){j(l+1),console.log("dada")}))}}catch(s){a.e(s)}finally{a.f()}}),[]),Object(s.useEffect)((function(){a===l&&console.log("done")}),[a,l]),Object(o.jsxs)("div",{children:[Object(o.jsx)(x,{}),Object(o.jsx)(N,{})]})},_=a(2);a(15);var y=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"exec__card",children:Object(o.jsxs)("div",{className:"exec__card__container",children:[Object(o.jsx)("div",{className:"exec__card__name",children:e.name}),Object(o.jsxs)("div",{className:"exec__card__info",children:[Object(o.jsx)("img",{src:e.execPhoto,className:"exec__card__photo"}),Object(o.jsx)("div",{className:"exec__card__desc",children:"Description Here frferiufjriuehgfiehfierjfuierujfierjfierujfierujferf erferf erferfrfnrnferhfiejdidjiewnfreifriejfreihfireufherf refnuierfuierfierhfiernfirbfierbfuibfirefuerfr fiojeowjqendejfrefjierjfrenfnfuiernfirenfirnfirnfirenfirew"})]})]})})})},S=a.p+"static/media/rangoli.bf6a37a1.png",k=a.p+"static/media/Niraali.ccb20fba.jpeg",C=a.p+"static/media/Riana.fa83e786.jpeg",E=a.p+"static/media/Ami.f265dc16.jpeg",H=a.p+"static/media/Raam.5f71526d.jpeg",P=a.p+"static/media/Shivani.0eb808b0.jpeg",F=a.p+"static/media/Vid.c7d8f94e.jpeg",W=a.p+"static/media/Rani.e4a887df.jpeg",A=a.p+"static/media/Nidhi.d4732556.jpeg",R=a.p+"static/media/Gaya.35217266.jpeg",T=a.p+"static/media/Rikhil.42109281.jpeg",I=a.p+"static/media/Keri.d3f88323.jpeg",L=a.p+"static/media/Liam.b3694cf8.jpeg";var M=function(){return Object(o.jsx)("div",{className:"exec__card__holder__container",children:Object(o.jsxs)("div",{className:"exec__card__holder",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(y,{name:"Co-President: Niraali",execPhoto:k})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)(y,{name:"Co-President: Riana",execPhoto:C})}),Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(y,{name:"Secretary: Ami",execPhoto:E})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)(y,{name:"Treasurer: Raam",execPhoto:H})}),Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(y,{name:"Learning Co-ordinator: Shivani",execPhoto:P})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)(y,{name:"Sewa Co-ordinator: Vid",execPhoto:F})}),Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(y,{name:"Event Co-ordinator: Liam",execPhoto:L})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)(y,{name:"Event Co-ordinator: Rani",execPhoto:W})}),Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(y,{name:"Media Co-ordinator: Nidhi",execPhoto:A})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)(y,{name:"Media Co-ordinator: Gaya",execPhoto:R})}),Object(o.jsx)("div",{className:"left",children:Object(o.jsx)(y,{name:"Sports Co-ordinator: Rikhil",execPhoto:T})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"rangoli-container",children:Object(o.jsx)("img",{src:S,alt:"rangoli drawing",className:"rangoli-design"})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)(y,{name:"Sports Co-ordinator: Keri",execPhoto:I})})]})})};var D=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"our-exec",children:"MEET THE EXEC"}),Object(o.jsx)(M,{})]})},U=(a(36),a.p+"static/media/garba.c2eb2e1f.jpg");var z=function(){return console.log("function called."),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"who-we-are",children:"OUR STORY"}),Object(o.jsxs)("div",{className:"our-story-container",children:[Object(o.jsx)("img",{src:U,alt:"Central Zone Navratri",className:"our-story-image"}),Object(o.jsx)("div",{className:"our-story-information",children:Object(o.jsxs)("p",{children:["The Warwick Hindu Society is one of x societies which make up the NHSF (National Hindu Students\u2019 Forum) - a safe space for Hindu university students across the UK to explore and identify with their religion and spirituality.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"From its creation through several London university students in 1991 to now (over 4000 active members later), the NHSF has established itself as a means of allowing students to participate in weekly Aartis (discussions on varied and meaningful topics), sewa (charity work) events, sports competitions and flagship cultural events. Its main aim is to \u2018Create a home away from home\u2019 - one which it regularly does through providing a space for students to relate, bond and cultivate lifelong friendships.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"As Warwick Hindu Society, we make sure we provide as much care and support to our students as possible - from our flagship Navratri and Holi events to regular discussions and fun socials (including laser tag, bowling, dinners and much more). Make sure to contact our exec members if you have any questions or suggestions for what more we could do for you in the future!",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})]})]})},J=(a(37),a.p+"static/media/coming-soon.23bc7588.png");var K=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"events",children:"EVENTS AND SOCIALS"}),Object(o.jsx)("div",{className:"image-container",children:Object(o.jsx)("img",{src:J,alt:"coming soon image",className:"coming-soon-img"})})]})};a(38);var V=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"footer-content",children:[Object(o.jsx)("h3",{children:"Warwick Hindu Society"}),Object(o.jsx)("p",{className:"description",children:"Cupcake ipsum dolor sit amet. I love jelly beans tart cupcake fruitcake sugar plum tart."}),Object(o.jsxs)("ul",{className:"social-media-container",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.facebook.com/nhsfwarwick",children:Object(o.jsx)("i",{className:"fab fa-facebook"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.instagram.com/nhsfwarwick/",children:Object(o.jsx)("i",{className:"fab fa-instagram"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.warwicksu.com/societies-sports/societies/hindu/",children:Object(o.jsx)("i",{className:"fa fa-globe"})})})]}),Object(o.jsx)("div",{className:"copyright",children:Object(o.jsxs)("p",{children:["Copyright \xa9 2021 Shivani yh this isnt on ",Object(o.jsx)("span",{children:"version control"})," lmao"]})})]})})})};function q(){var e=Object(_.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var G=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(r.a,{basename:"/HinduSocPage",children:[Object(o.jsx)(b,{}),Object(o.jsx)(q,{}),Object(o.jsxs)(_.c,{children:[Object(o.jsx)(_.a,{path:"/",exact:!0,component:w}),Object(o.jsx)(_.a,{path:"/our-exec",component:D}),Object(o.jsx)(_.a,{path:"/who-we-are",component:z}),Object(o.jsx)(_.a,{path:"/events",component:K}),Object(o.jsx)(_.a,{path:"/sponsors",component:function(){window.location.replace("https://www.nhsf.org.uk/")}}),Object(o.jsx)(_.a,{path:"/socials",component:function(){window.location.replace("https://www.instagram.com/nhsfwarwick/")}}),Object(o.jsx)(_.a,{path:"/join-us",component:function(){window.location.replace("https://www.warwicksu.com/societies-sports/societies/hindu/#org-join")}})]})]}),Object(o.jsx)(V,{})]})};i.a.render(Object(o.jsx)(G,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.960e13ee.chunk.js.map