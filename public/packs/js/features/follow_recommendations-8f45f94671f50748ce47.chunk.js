(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{832:function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return R}));var a,s,c=t(0),n=t(1),i=t.n(n),l=t(2),d=t.n(l),r=t(16),u=t(15),p=t.n(u),b=t(13),m=t(4),g=t(123),j=t(44),f=t(32),O=t(19),h=t(753),w=t(35),v=t(34),_=t(50),y=t(86),k=t(18),N=t(10);const M=Object(m.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"}});let x=Object(b.connect)((()=>{const e=Object(w.d)();return(o,t)=>({account:e(o,t.id)})}))(a=Object(m.g)(((s=class extends r.a{constructor(){super(...arguments),this.handleFollow=()=>{const{account:e,dispatch:o}=this.props;e.getIn(["relationship","following"])||e.getIn(["relationship","requested"])?o(Object(N.Z)(e.get("id"))):o(Object(N.S)(e.get("id")))}}render(){const{account:e,intl:o}=this.props;let t;return t=e.getIn(["relationship","following"])?Object(c.a)(k.a,{icon:"check",title:o.formatMessage(M.unfollow),active:!0,onClick:this.handleFollow}):Object(c.a)(k.a,{icon:"plus",title:o.formatMessage(M.follow),onClick:this.handleFollow}),Object(c.a)("div",{className:"account follow-recommendations-account"},void 0,Object(c.a)("div",{className:"account__wrapper"},void 0,Object(c.a)(y.a,{className:"account__display-name account__display-name--with-note",title:e.get("acct"),to:"/@"+e.get("acct")},void 0,Object(c.a)("div",{className:"account__avatar-wrapper"},void 0,Object(c.a)(v.a,{account:e,size:36})),Object(c.a)(_.a,{account:e}),Object(c.a)("div",{className:"account__note"},void 0,e.get("note_plain").split(/(([\.\?!]+\s)|[．。？！\n•])/)[0])),Object(c.a)("div",{className:"account__relationship"},void 0,t)))}}).propTypes={account:p.a.map.isRequired,intl:d.a.object.isRequired,dispatch:d.a.func.isRequired},a=s))||a)||a;var q,F,D=t(207),I=t(28),L=t(95);let R=Object(b.connect)((e=>({suggestions:e.getIn(["suggestions","items"]),isLoading:e.getIn(["suggestions","isLoading"])})))(((F=class extends r.a{constructor(){super(...arguments),this.handleDone=()=>{const{dispatch:e}=this.props,{router:o}=this.context;e(Object(f.s)((o=>{"granted"===o&&(e(Object(j.c)(["notifications","alerts","follow"],!0)),e(Object(j.c)(["notifications","alerts","favourite"],!0)),e(Object(j.c)(["notifications","alerts","reblog"],!0)),e(Object(j.c)(["notifications","alerts","mention"],!0)),e(Object(j.c)(["notifications","alerts","poll"],!0)),e(Object(j.c)(["notifications","alerts","status"],!0)),e(Object(j.d)()))}))),o.history.push("/home")}}componentDidMount(){const{dispatch:e,suggestions:o}=this.props;0===o.size&&e(Object(g.f)(!0))}componentWillUnmount(){const{dispatch:e}=this.props;e(Object(O.C)("home"))}render(){const{suggestions:e,isLoading:o}=this.props;return Object(c.a)(h.a,{},void 0,Object(c.a)("div",{className:"scrollable follow-recommendations-container"},void 0,Object(c.a)("div",{className:"column-title"},void 0,Object(c.a)("svg",{viewBox:"0 0 79 79",className:"logo"},void 0,Object(c.a)("use",{xlinkHref:"#logo-symbol-icon"})),Object(c.a)("h3",{},void 0,Object(c.a)(m.b,{id:"follow_recommendations.heading",defaultMessage:"Follow people you'd like to see posts from! Here are some suggestions."})),Object(c.a)("p",{},void 0,Object(c.a)(m.b,{id:"follow_recommendations.lead",defaultMessage:"Posts from people you follow will show up in chronological order on your home feed. Don't be afraid to make mistakes, you can unfollow people just as easily any time!"}))),!o&&Object(c.a)(i.a.Fragment,{},void 0,Object(c.a)("div",{className:"column-list"},void 0,e.size>0?e.map((e=>Object(c.a)(x,{id:e.get("account")},e.get("account")))):Object(c.a)("div",{className:"column-list__empty-message"},void 0,Object(c.a)(m.b,{id:"empty_column.follow_recommendations",defaultMessage:"Looks like no suggestions could be generated for you. You can try using search to look for people you might know or explore trending hashtags."}))),Object(c.a)("div",{className:"column-actions"},void 0,Object(c.a)("img",{src:D.default,alt:"",className:"column-actions__background"}),Object(c.a)(I.a,{onClick:this.handleDone},void 0,Object(c.a)(m.b,{id:"follow_recommendations.done",defaultMessage:"Done"}))))),Object(c.a)(L.a,{},void 0,Object(c.a)("meta",{name:"robots",content:"noindex"})))}}).contextTypes={router:d.a.object.isRequired},F.propTypes={dispatch:d.a.func.isRequired,suggestions:p.a.list,isLoading:d.a.bool},q=F))||q}}]);
//# sourceMappingURL=follow_recommendations-8f45f94671f50748ce47.chunk.js.map