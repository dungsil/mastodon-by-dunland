(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{801:function(e,o,s){"use strict";s.r(o),s.d(o,"default",(function(){return L}));var t,a,n=s(0),i=s(29),c=s.n(i),d=(s(1),s(13)),l=s(4),r=s(16),u=s(15),b=s.n(u),p=s(2),h=s.n(p),g=s(96),m=s(753),j=s(765),M=s(757),O=s(57),k=s(195);const f=Object(l.f)({heading:{id:"column.blocks",defaultMessage:"Blocked users"}});let L=Object(d.connect)((e=>({accountIds:e.getIn(["user_lists","blocks","items"]),hasMore:!!e.getIn(["user_lists","blocks","next"]),isLoading:e.getIn(["user_lists","blocks","isLoading"],!0)})))(t=Object(l.g)(((a=class extends r.a{constructor(){super(...arguments),this.handleLoadMore=c()((()=>{this.props.dispatch(Object(O.h)())}),300,{leading:!0})}componentWillMount(){this.props.dispatch(Object(O.i)())}render(){const{intl:e,accountIds:o,hasMore:s,multiColumn:t,isLoading:a}=this.props;if(!o)return Object(n.a)(m.a,{},void 0,Object(n.a)(g.b,{}));const i=Object(n.a)(l.b,{id:"empty_column.blocks",defaultMessage:"You haven't blocked any users yet."});return Object(n.a)(m.a,{bindToDocument:!t,icon:"ban",heading:e.formatMessage(f.heading)},void 0,Object(n.a)(j.a,{}),Object(n.a)(k.a,{scrollKey:"blocks",onLoadMore:this.handleLoadMore,hasMore:s,isLoading:a,emptyMessage:i,bindToDocument:!t},void 0,o.map((e=>Object(n.a)(M.a,{id:e,defaultAction:"block"},e)))))}}).propTypes={params:h.a.object.isRequired,dispatch:h.a.func.isRequired,accountIds:b.a.list,hasMore:h.a.bool,isLoading:h.a.bool,intl:h.a.object.isRequired,multiColumn:h.a.bool},t=a))||t)||t}}]);
//# sourceMappingURL=blocks-b548d49562eabdc6b9e7.chunk.js.map