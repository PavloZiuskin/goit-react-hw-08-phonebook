"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[395],{3395:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var i,r,a,o,s,l,d,c,u,x,p,m,f,b,h,Z,j=t(4554),g=t(890),y=t(6043),v=t(2791),C=t(9434),w=t(826),z=t(6916),S=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},A=function(n){return n.filter},I=(0,z.P1)([S,A],(function(n,e){var t=e.toLocaleLowerCase().trim();return n.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))})),P=(0,z.P1)([S,A],(function(n,e){var t=e.trim();return n.filter((function(n){return n.number.includes(t)}))})),_=t(5218),D=t(6382),E=t(168),F=t(6088),L=(F.Z.form(i||(i=(0,E.Z)(["\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  font-family: 'Segoe UI';\n  font-size: 18px;\n  border: 1px solid #1664e2;\n  border-radius: 8px;\n"]))),F.Z.form(r||(r=(0,E.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])))),M=(F.Z.div(a||(a=(0,E.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  padding: 3px;\n  width: 160px;\n  border: 1px solid red;\n  border-radius: 4px;\n  color: red;\n  font-size: 12px;\n"]))),t(7321)),N=t(6151),U=t(184),q=function(){var n=(0,C.I0)(),e=(0,C.v9)(S);return(0,U.jsxs)(L,{onSubmit:function(t){t.preventDefault();var i=t.currentTarget,r=i.elements.name.value,a=i.elements.number.value;if(e.some((function(n){return n.name===r})))return _.Am.success('"'.concat(r,'" is already in contacts.'));n((0,w.uK)({id:(0,D.x0)(),name:r,number:a})),i.reset()},autoComplete:"off",children:[(0,U.jsx)(M.Z,{id:"standard-basic",type:"text",name:"name",label:"Name",variant:"outlined",required:!0,inputProps:{inputMode:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},fullWidth:!0,sx:{mb:"1rem"}}),(0,U.jsx)(M.Z,{id:"standard-basic",type:"tel",name:"number",label:"Number",variant:"outlined",required:!0,inputProps:{inputMode:"text",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}"},fullWidth:!0,sx:{mb:"1rem"}}),(0,U.jsx)(N.Z,{type:"submit",variant:"contained",sx:{mt:"20px"},children:"Add contact"})]})},K=t(3433),O=t(9439),$=t(8617),B=t(828),T=(F.Z.li(o||(o=(0,E.Z)(["\n  min-width: 380px;\n  display: flex;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),F.Z.div(s||(s=(0,E.Z)(["\n  /* min-width: 380px; */\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"])))),W=F.Z.p(l||(l=(0,E.Z)(["\n  display: flex;\n  gap: 10px;\n  max-width: 245px;\n  font-family: 'Segoe UI';\n  font-size: 18px;\n  font-weight: 600;\n"]))),J=F.Z.p(d||(d=(0,E.Z)(["\n  display: flex;\n  gap: 10px;\n  max-width: 245px;\n  font-family: 'Segoe UI';\n  font-size: 16px;\n"]))),G=(F.Z.form(c||(c=(0,E.Z)(["\n  /* min-width: 380px; */\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),F.Z.input(u||(u=(0,E.Z)(["\n  border: 1px solid orangered;\n  border-radius: 4px;\n  outline: 1px solid orangered;\n"]))),F.Z.label(x||(x=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: 'Segoe UI';\n  font-size: 12px;\n"]))),F.Z.div(p||(p=(0,E.Z)(["\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n"])))),R=t(3400),V=t(7247),H=t(1286),Q=t(3329),X=function(n){var e=n.id,t=n.onDeleteContact,i=n.onEditContact;return(0,U.jsxs)(G,{children:[(0,U.jsx)(R.Z,{type:"button",size:"large",color:"primary","aria-label":"edit",onClick:i,children:(0,U.jsx)(H.Z,{})}),(0,U.jsx)(R.Z,{type:"button",size:"large",color:"primary","aria-label":"delete",onClick:function(){return t(e)},children:(0,U.jsx)(V.Z,{})})]})},Y=function(n){var e=n.id,t=n.onDeleteContact;return(0,U.jsxs)(G,{children:[(0,U.jsx)(R.Z,{type:"submit",size:"large",color:"primary","aria-label":"save",children:(0,U.jsx)(Q.Z,{})}),(0,U.jsx)(R.Z,{type:"button",size:"large",color:"primary","aria-label":"delete",onClick:function(){return t(e)},children:(0,U.jsx)(V.Z,{})})]})},nn=t(5705),en=t(6727),tn=(0,F.Z)(nn.l0)(m||(m=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),rn=F.Z.label(f||(f=(0,E.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: 'Segoe UI';\n  font-size: 14px;\n"]))),an=(0,F.Z)(nn.gN)(b||(b=(0,E.Z)(["\n  width: 180px;\n  border: 1px solid #1664e2;\n  border-radius: 4px;\n  outline: 1px solid #1664e2;\n"]))),on=F.Z.div(h||(h=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),sn=F.Z.div(Z||(Z=(0,E.Z)(["\n  position: absolute;\n  top: 0;\n  left: 100%;\n  padding: 3px;\n  width: 110px;\n  border: 1px solid red;\n  border-radius: 4px;\n  color: red;\n  font-size: 8px;\n"]))),ln=(0,en.Ry)({name:(0,en.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name is not valid!").required(),number:(0,en.Z_)().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number is not valid!").required()}),dn=function(n){var e=n.name,t=n.number,i=n.onEditContact,r=n.children;return(0,U.jsx)(nn.J9,{initialValues:{name:e,number:t},validationSchema:ln,onSubmit:function(n,e){var t=e.resetForm,r=n.name,a=n.number;i(r,a),t()},children:(0,U.jsxs)(tn,{autoComplete:"off",children:[(0,U.jsxs)(on,{children:[(0,U.jsxs)(rn,{children:[(0,U.jsx)($._K$,{fill:"#1664e2"}),(0,U.jsx)(an,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,U.jsx)(nn.Bc,{component:sn,name:"name"})]}),(0,U.jsxs)(rn,{children:[(0,U.jsx)(B.MdO,{fill:"#1664e2"}),(0,U.jsx)(an,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,U.jsx)(nn.Bc,{component:sn,name:"number"})]})]}),r]})})},cn=function(n){var e=n.name,t=n.number,i=n.id,r=(0,v.useState)(e),a=(0,O.Z)(r,2),o=a[0],s=a[1],l=(0,v.useState)(t),d=(0,O.Z)(l,2),c=d[0],u=d[1],x=(0,v.useState)(!1),p=(0,O.Z)(x,2),m=p[0],f=p[1],b=(0,C.I0)(),h=function(n){b((0,w.GK)(n))},Z=function(n,r){m?(s((function(e){return n||e})),u((function(n){return r||n})),f(!1),b((0,w.mP)({id:i,name:n||e,number:r||t}))):f(!0)};return(0,U.jsxs)(j.Z,{component:"li",sx:{display:"flex",justifyContent:"space-between",mb:"10px"},children:[!m&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(T,{children:[(0,U.jsxs)(W,{children:[(0,U.jsx)($._K$,{fill:"#1976d2"}),e,":"]}),(0,U.jsxs)(J,{children:[(0,U.jsx)(B.MdO,{fill:"#1976d2"}),t]})]}),(0,U.jsx)(X,{id:i,onDeleteContact:h,onEditContact:Z})]}),m&&(0,U.jsx)(dn,{name:o,number:c,onEditContact:Z,children:(0,U.jsx)(Y,{id:i,onDeleteContact:h})})]})};var un=function(){var n=(0,C.v9)(I),e=(0,C.v9)(P),t=[].concat((0,K.Z)(n),(0,K.Z)(e)).filter((function(n,e,t){return t.indexOf(n)===e}));return(0,U.jsx)("ul",{children:t.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,U.jsx)(cn,{name:t,number:i,id:e},e)}))})},xn=t(4808);var pn=function(){var n=(0,C.I0)();return(0,U.jsxs)(j.Z,{sx:{display:"flex",gap:"20px"},children:[(0,U.jsx)(M.Z,{id:"standard-basic",type:"text",label:"Find contacts by name",variant:"outlined",onChange:function(e){n((0,xn.xO)(e.currentTarget.value))},sx:{mb:"1rem"}}),(0,U.jsx)(M.Z,{id:"standard-basic",type:"text",label:"Find contacts by number",variant:"outlined",onChange:function(e){n((0,xn.nE)(e.currentTarget.value))},sx:{mb:"1rem"}})]})},mn=t(7892),fn=t(2216);var bn=function(){var n=(0,C.I0)(),e=(0,C.v9)(k),t=(0,C.v9)(S);return(0,v.useEffect)((function(){n((0,w.yF)())}),[n]),(0,U.jsxs)(j.Z,{sx:{pt:"20px",display:"flex",flexDirection:"column",gap:"15px"},children:[(0,U.jsx)("h1",{children:"Phonebook"}),(0,U.jsx)(q,{}),(0,U.jsxs)(g.Z,{variant:"h5",component:"h2",sx:{fontWeight:600,display:"flex",gap:"15px",alignItems:"center"},children:["Contacts"," ",(0,U.jsx)(y.Z,{color:"secondary",badgeContent:t.length,children:(0,U.jsx)(fn.Z,{})})]}),(0,U.jsx)(pn,{}),e&&(0,U.jsx)(mn.Z,{}),(0,U.jsx)(un,{})]})}}}]);
//# sourceMappingURL=395.9923f549.chunk.js.map