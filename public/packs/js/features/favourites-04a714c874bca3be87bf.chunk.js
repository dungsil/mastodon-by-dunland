(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{797:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return y}));var a,o,r=s(0),n=s(2),i=s.n(n),c=(s(1),s(16)),u=s(15),p=s.n(u),d=s(4),h=s(13),l=s(751),b=s(14),m=s(23),f=s(96),j=s(195),O=s(757),I=s(753),v=s(95);const w=Object(d.f)({refresh:{id:"refresh",defaultMessage:"Refresh"}});let y=Object(h.connect)(((t,e)=>({accountIds:t.getIn(["user_lists","favourited_by",e.params.statusId])})))(a=Object(d.g)(((o=class extends c.a{constructor(){super(...arguments),this.handleRefresh=()=>{this.props.dispatch(Object(m.q)(this.props.params.statusId))}}componentWillMount(){this.props.accountIds||this.props.dispatch(Object(m.q)(this.props.params.statusId))}componentWillReceiveProps(t){t.params.statusId!==this.props.params.statusId&&t.params.statusId&&this.props.dispatch(Object(m.q)(t.params.statusId))}render(){const{intl:t,accountIds:e,multiColumn:s}=this.props;if(!e)return Object(r.a)(I.a,{},void 0,Object(r.a)(f.b,{}));const a=Object(r.a)(d.b,{id:"empty_column.favourites",defaultMessage:"No one has favourited this post yet. When someone does, they will show up here."});return Object(r.a)(I.a,{bindToDocument:!s},void 0,Object(r.a)(l.a,{showBackButton:!0,multiColumn:s,extraButton:Object(r.a)("button",{type:"button",className:"column-header__button",title:t.formatMessage(w.refresh),"aria-label":t.formatMessage(w.refresh),onClick:this.handleRefresh},void 0,Object(r.a)(b.a,{id:"refresh"}))}),Object(r.a)(j.a,{scrollKey:"favourites",emptyMessage:a,bindToDocument:!s},void 0,e.map((t=>Object(r.a)(O.a,{id:t,withNote:!1},t)))),Object(r.a)(v.a,{},void 0,Object(r.a)("meta",{name:"robots",content:"noindex"})))}}).propTypes={params:i.a.object.isRequired,dispatch:i.a.func.isRequired,accountIds:p.a.list,multiColumn:i.a.bool,intl:i.a.object.isRequired},a=o))||a)||a}}]);
//# sourceMappingURL=favourites-04a714c874bca3be87bf.chunk.js.map