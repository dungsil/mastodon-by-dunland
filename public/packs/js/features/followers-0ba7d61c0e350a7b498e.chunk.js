(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{794:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return A}));var a,s,c=o(0),n=o(29),d=o.n(n),i=(o(1),o(13)),r=o(16),u=o(2),l=o.n(u),p=o(15),b=o.n(p),h=o(96),m=o(10),g=o(4),j=o(757),O=o(753),I=o(767),f=o(198),w=o(195),y=o(759),M=o(771),_=o(772),L=o(35),v=o(199);const k=e=>{let{url:t}=e;return Object(c.a)(M.a,{url:t,resource:Object(c.a)(g.b,{id:"timeline_hint.resources.followers",defaultMessage:"Followers"})})};let A=Object(i.connect)(((e,t)=>{let{params:{acct:o,id:a}}=t;const s=a||e.getIn(["accounts_map",Object(v.b)(o)]);return s?{accountId:s,remote:!(e.getIn(["accounts",s,"acct"])===e.getIn(["accounts",s,"username"])),remoteUrl:e.getIn(["accounts",s,"url"]),isAccount:!!e.getIn(["accounts",s]),accountIds:e.getIn(["user_lists","followers",s,"items"]),hasMore:!!e.getIn(["user_lists","followers",s,"next"]),isLoading:e.getIn(["user_lists","followers",s,"isLoading"],!0),suspended:e.getIn(["accounts",s,"suspended"],!1),hidden:Object(L.b)(e,s),blockedBy:e.getIn(["relationships",s,"blocked_by"],!1)}:{isLoading:!0}}))(((s=class extends r.a{constructor(){super(...arguments),this.handleLoadMore=d()((()=>{this.props.dispatch(Object(m.L)(this.props.accountId))}),300,{leading:!0})}_load(){const{accountId:e,isAccount:t,dispatch:o}=this.props;t||o(Object(m.N)(e)),o(Object(m.P)(e))}componentDidMount(){const{params:{acct:e},accountId:t,dispatch:o}=this.props;t?this._load():o(Object(m.T)(e))}componentDidUpdate(e){const{params:{acct:t},accountId:o,dispatch:a}=this.props;e.accountId!==o&&o?this._load():e.params.acct!==t&&a(Object(m.T)(t))}render(){const{accountId:e,accountIds:t,hasMore:o,blockedBy:a,isAccount:s,multiColumn:n,isLoading:d,suspended:i,hidden:r,remote:u,remoteUrl:l}=this.props;if(!s)return Object(c.a)(O.a,{},void 0,Object(c.a)(y.a,{}));if(!t)return Object(c.a)(O.a,{},void 0,Object(c.a)(h.b,{}));let p;const b=a||i||r;p=i?Object(c.a)(g.b,{id:"empty_column.account_suspended",defaultMessage:"Account suspended"}):r?Object(c.a)(_.a,{accountId:e}):a?Object(c.a)(g.b,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"}):u&&t.isEmpty()?Object(c.a)(k,{url:l}):Object(c.a)(g.b,{id:"account.followers.empty",defaultMessage:"No one follows this user yet."});const m=u?Object(c.a)(k,{url:l}):null;return Object(c.a)(O.a,{},void 0,Object(c.a)(f.a,{multiColumn:n}),Object(c.a)(w.a,{scrollKey:"followers",hasMore:!b&&o,isLoading:d,onLoadMore:this.handleLoadMore,prepend:Object(c.a)(I.a,{accountId:this.props.accountId,hideTabs:!0}),alwaysPrepend:!0,append:m,emptyMessage:p,bindToDocument:!n},void 0,b?[]:t.map((e=>Object(c.a)(j.a,{id:e,withNote:!1},e)))))}}).propTypes={params:l.a.shape({acct:l.a.string,id:l.a.string}).isRequired,accountId:l.a.string,dispatch:l.a.func.isRequired,accountIds:b.a.list,hasMore:l.a.bool,isLoading:l.a.bool,blockedBy:l.a.bool,isAccount:l.a.bool,suspended:l.a.bool,hidden:l.a.bool,remote:l.a.bool,remoteUrl:l.a.string,multiColumn:l.a.bool},a=s))||a}}]);
//# sourceMappingURL=followers-0ba7d61c0e350a7b498e.chunk.js.map