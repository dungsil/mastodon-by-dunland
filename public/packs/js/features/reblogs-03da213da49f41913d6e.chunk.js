(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{796:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return y}));var a,o,r=s(0),n=(s(1),s(13)),c=s(16),i=s(2),p=s.n(i),u=s(15),d=s.n(u),b=s(96),l=s(23),h=s(4),m=s(757),j=s(753),f=s(195),O=s(14),I=s(751),g=s(95);const w=Object(h.f)({refresh:{id:"refresh",defaultMessage:"Refresh"}});let y=Object(n.connect)(((t,e)=>({accountIds:t.getIn(["user_lists","reblogged_by",e.params.statusId])})))(a=Object(h.g)(((o=class extends c.a{constructor(){super(...arguments),this.handleRefresh=()=>{this.props.dispatch(Object(l.r)(this.props.params.statusId))}}componentWillMount(){this.props.accountIds||this.props.dispatch(Object(l.r)(this.props.params.statusId))}componentWillReceiveProps(t){t.params.statusId!==this.props.params.statusId&&t.params.statusId&&this.props.dispatch(Object(l.r)(t.params.statusId))}render(){const{intl:t,accountIds:e,multiColumn:s}=this.props;if(!e)return Object(r.a)(j.a,{},void 0,Object(r.a)(b.b,{}));const a=Object(r.a)(h.b,{id:"status.reblogs.empty",defaultMessage:"No one has boosted this post yet. When someone does, they will show up here."});return Object(r.a)(j.a,{bindToDocument:!s},void 0,Object(r.a)(I.a,{showBackButton:!0,multiColumn:s,extraButton:Object(r.a)("button",{type:"button",className:"column-header__button",title:t.formatMessage(w.refresh),"aria-label":t.formatMessage(w.refresh),onClick:this.handleRefresh},void 0,Object(r.a)(O.a,{id:"refresh"}))}),Object(r.a)(f.a,{scrollKey:"reblogs",emptyMessage:a,bindToDocument:!s},void 0,e.map((t=>Object(r.a)(m.a,{id:t,withNote:!1},t)))),Object(r.a)(g.a,{},void 0,Object(r.a)("meta",{name:"robots",content:"noindex"})))}}).propTypes={params:p.a.object.isRequired,dispatch:p.a.func.isRequired,accountIds:d.a.list,multiColumn:p.a.bool,intl:p.a.object.isRequired},a=o))||a)||a}}]);
//# sourceMappingURL=reblogs-03da213da49f41913d6e.chunk.js.map