(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{819:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return se}));var a=s(0),o=s(1),i=s.n(o),n=s(4),c=s(13),l=s(2),r=s.n(l),d=s(752),h=s(751),b=s(749),u=s(834),g=s(504),p=s(61),m=s(197),j=s(48),O=s(80),v=s(9),_=s.n(v);class x extends i.a.PureComponent{constructor(){super(...arguments),this.state={thumbnailLoaded:!1},this.handleImageLoad=()=>this.setState({thumbnailLoaded:!0})}render(){const{url:e,title:t,publisher:s,sharedTimes:o,thumbnail:n,blurhash:c}=this.props,{thumbnailLoaded:l}=this.state;return Object(a.a)("a",{className:"story",href:e,target:"blank",rel:"noopener"},void 0,Object(a.a)("div",{className:"story__details"},void 0,Object(a.a)("div",{className:"story__details__publisher"},void 0,s||Object(a.a)(O.a,{width:50})),Object(a.a)("div",{className:"story__details__title"},void 0,t||Object(a.a)(O.a,{})),Object(a.a)("div",{className:"story__details__shared"},void 0,"number"==typeof o?Object(a.a)(j.a,{value:o,renderer:m.b}):Object(a.a)(O.a,{width:100}))),Object(a.a)("div",{className:"story__thumbnail"},void 0,n?Object(a.a)(i.a.Fragment,{},void 0,Object(a.a)("div",{className:_()("story__thumbnail__preview",{"story__thumbnail__preview--hidden":l})},void 0,Object(a.a)(p.a,{hash:c})),Object(a.a)("img",{src:n,onLoad:this.handleImageLoad,alt:"",role:"presentation"})):Object(a.a)(O.a,{})))}}var f,M=s(96),k=s(49),y=s(764);let L=Object(c.connect)((e=>({links:e.getIn(["trends","links","items"]),isLoading:e.getIn(["trends","links","isLoading"])})))(f=class extends i.a.PureComponent{componentDidMount(){const{dispatch:e}=this.props;e(Object(k.o)())}render(){const{isLoading:e,links:t}=this.props,s=Object(a.a)(y.a,{id:"explore/links"},void 0,Object(a.a)(n.b,{id:"dismissable_banner.explore_links",defaultMessage:"These news stories are being talked about by people on this and other servers of the decentralized network right now."}));return!e&&t.isEmpty()?Object(a.a)("div",{className:"explore__links scrollable scrollable--flex"},void 0,s,Object(a.a)("div",{className:"empty-column-indicator"},void 0,Object(a.a)(n.b,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"}))):Object(a.a)("div",{className:"explore__links"},void 0,s,e?Object(a.a)(M.b,{}):t.map((e=>Object(a.a)(x,{url:e.get("url"),title:e.get("title"),publisher:e.get("provider_name"),sharedTimes:1*e.getIn(["history",0,"accounts"])+1*e.getIn(["history",1,"accounts"]),thumbnail:e.get("image"),blurhash:e.get("blurhash")},e.get("id")))))}})||f;var N;let w=Object(c.connect)((e=>({hashtags:e.getIn(["trends","tags","items"]),isLoadingHashtags:e.getIn(["trends","tags","isLoading"])})))(N=class extends i.a.PureComponent{componentDidMount(){const{dispatch:e}=this.props;e(Object(k.n)())}render(){const{isLoading:e,hashtags:t}=this.props,s=Object(a.a)(y.a,{id:"explore/tags"},void 0,Object(a.a)(n.b,{id:"dismissable_banner.explore_tags",defaultMessage:"These hashtags are gaining traction among people on this and other servers of the decentralized network right now."}));return!e&&t.isEmpty()?Object(a.a)("div",{className:"explore__links scrollable scrollable--flex"},void 0,s,Object(a.a)("div",{className:"empty-column-indicator"},void 0,Object(a.a)(n.b,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"}))):Object(a.a)("div",{className:"explore__links"},void 0,s,e?Object(a.a)(M.b,{}):t.map((e=>Object(a.a)(m.a,{hashtag:e},e.get("name")))))}})||N;var C,S=s(29),I=s.n(S),P=s(200);let H=Object(c.connect)((e=>({statusIds:e.getIn(["status_lists","trending","items"]),isLoading:e.getIn(["status_lists","trending","isLoading"],!0),hasMore:!!e.getIn(["status_lists","trending","next"])})))(C=class extends i.a.PureComponent{constructor(){super(...arguments),this.handleLoadMore=I()((()=>{const{dispatch:e}=this.props;e(Object(k.m)())}),300,{leading:!0})}componentDidMount(){const{dispatch:e}=this.props;e(Object(k.p)())}render(){const{isLoading:e,hasMore:t,statusIds:s,multiColumn:o}=this.props,c=Object(a.a)(n.b,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"});return i.a.createElement(i.a.Fragment,null,Object(a.a)(y.a,{id:"explore/statuses"},void 0,Object(a.a)(n.b,{id:"dismissable_banner.explore_statuses",defaultMessage:"These posts from this and other servers in the decentralized network are gaining traction on this server right now."})),Object(a.a)(P.a,{trackScroll:!0,statusIds:s,scrollKey:"explore-statuses",hasMore:t,isLoading:e,onLoadMore:this.handleLoadMore,emptyMessage:c,bindToDocument:!o,withCounters:!0}))}})||C;var T,A=s(783),D=s(123);let E=Object(c.connect)((e=>({suggestions:e.getIn(["suggestions","items"]),isLoading:e.getIn(["suggestions","isLoading"])})))(T=class extends i.a.PureComponent{componentDidMount(){const{dispatch:e}=this.props;e(Object(D.f)(!0))}render(){const{isLoading:e,suggestions:t}=this.props;return!e&&t.isEmpty()?Object(a.a)("div",{className:"explore__suggestions scrollable scrollable--flex"},void 0,Object(a.a)("div",{className:"empty-column-indicator"},void 0,Object(a.a)(n.b,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"}))):Object(a.a)("div",{className:"explore__suggestions"},void 0,e?Object(a.a)(M.b,{}):t.map((e=>Object(a.a)(A.a,{id:e.get("account")},e.get("account")))))}})||T;var z,F=s(774),q=s(58),R=s(757),J=s(170),K=s(3),B=s(201),G=s(95);const Q=Object(n.f)({title:{id:"search_results.title",defaultMessage:"Search for {q}"}}),U=(e,t,s)=>t.size>=5?t.push(Object(a.a)(B.a,{visible:!0,onClick:s},e+"-load-more")):t,V=(e,t)=>U("accounts",e.get("accounts",Object(K.List)()).map((e=>Object(a.a)(R.a,{id:e},"account-"+e))),t),W=(e,t)=>U("hashtags",e.get("hashtags",Object(K.List)()).map((e=>Object(a.a)(m.a,{hashtag:e},"tag-"+e.get("name")))),t),X=(e,t)=>U("statuses",e.get("statuses",Object(K.List)()).map((e=>Object(a.a)(J.a,{id:e},"status-"+e))),t);let Y=Object(c.connect)((e=>({isLoading:e.getIn(["search","isLoading"]),results:e.getIn(["search","results"]),q:e.getIn(["search","searchTerm"])})))(z=Object(n.g)(z=class extends i.a.PureComponent{constructor(){super(...arguments),this.state={type:"all"},this.handleSelectAll=()=>this.setState({type:"all"}),this.handleSelectAccounts=()=>this.setState({type:"accounts"}),this.handleSelectHashtags=()=>this.setState({type:"hashtags"}),this.handleSelectStatuses=()=>this.setState({type:"statuses"}),this.handleLoadMoreAccounts=()=>this.loadMore("accounts"),this.handleLoadMoreStatuses=()=>this.loadMore("statuses"),this.handleLoadMoreHashtags=()=>this.loadMore("hashtags")}loadMore(e){const{dispatch:t}=this.props;t(Object(q.j)(e))}render(){const{intl:e,isLoading:t,q:s,results:o}=this.props,{type:c}=this.state;let l=Object(K.List)();if(!t){switch(c){case"all":l=l.concat(V(o,this.handleLoadMoreAccounts),W(o,this.handleLoadMoreHashtags),X(o,this.handleLoadMoreStatuses));break;case"accounts":l=l.concat(V(o,this.handleLoadMoreAccounts));break;case"hashtags":l=l.concat(W(o,this.handleLoadMoreHashtags));break;case"statuses":l=l.concat(X(o,this.handleLoadMoreStatuses))}0===l.size&&(l=Object(a.a)("div",{className:"empty-column-indicator"},void 0,Object(a.a)(n.b,{id:"search_results.nothing_found",defaultMessage:"Could not find anything for these search terms"})))}return Object(a.a)(i.a.Fragment,{},void 0,Object(a.a)("div",{className:"account__section-headline"},void 0,Object(a.a)("button",{onClick:this.handleSelectAll,className:"all"===c&&"active"},void 0,Object(a.a)(n.b,{id:"search_results.all",defaultMessage:"All"})),Object(a.a)("button",{onClick:this.handleSelectAccounts,className:"accounts"===c&&"active"},void 0,Object(a.a)(n.b,{id:"search_results.accounts",defaultMessage:"People"})),Object(a.a)("button",{onClick:this.handleSelectHashtags,className:"hashtags"===c&&"active"},void 0,Object(a.a)(n.b,{id:"search_results.hashtags",defaultMessage:"Hashtags"})),Object(a.a)("button",{onClick:this.handleSelectStatuses,className:"statuses"===c&&"active"},void 0,Object(a.a)(n.b,{id:"search_results.statuses",defaultMessage:"Posts"}))),Object(a.a)("div",{className:"explore__search-results"},void 0,t?Object(a.a)(M.b,{}):l),Object(a.a)(G.a,{},void 0,Object(a.a)("title",{},void 0,e.formatMessage(Q.title,{q:s}))))}})||z)||z;var Z,$,ee=s(7);const te=Object(n.f)({title:{id:"explore.title",defaultMessage:"Explore"},searchResults:{id:"explore.search_results",defaultMessage:"Search results"}});let se=Object(c.connect)((e=>({layout:e.getIn(["meta","layout"]),isSearching:e.getIn(["search","submitted"])||!ee.u})))(Z=Object(n.g)((($=class extends i.a.PureComponent{constructor(){super(...arguments),this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e}}render(){const{intl:e,multiColumn:t,isSearching:s}=this.props,{signedIn:o}=this.context.identity;return i.a.createElement(d.a,{bindToDocument:!t,ref:this.setRef,label:e.formatMessage(te.title)},Object(a.a)(h.a,{icon:s?"search":"hashtag",title:e.formatMessage(s?te.searchResults:te.title),onClick:this.handleHeaderClick,multiColumn:t}),Object(a.a)("div",{className:"explore__search-header"},void 0,Object(a.a)(F.a,{})),Object(a.a)("div",{className:"scrollable scrollable--flex"},void 0,s?Object(a.a)(Y,{}):Object(a.a)(i.a.Fragment,{},void 0,Object(a.a)("div",{className:"account__section-headline"},void 0,Object(a.a)(b.a,{exact:!0,to:"/explore"},void 0,Object(a.a)(n.b,{id:"explore.trending_statuses",defaultMessage:"Posts"})),Object(a.a)(b.a,{exact:!0,to:"/explore/tags"},void 0,Object(a.a)(n.b,{id:"explore.trending_tags",defaultMessage:"Hashtags"})),Object(a.a)(b.a,{exact:!0,to:"/explore/links"},void 0,Object(a.a)(n.b,{id:"explore.trending_links",defaultMessage:"News"})),o&&Object(a.a)(b.a,{exact:!0,to:"/explore/suggestions"},void 0,Object(a.a)(n.b,{id:"explore.suggested_follows",defaultMessage:"For you"}))),Object(a.a)(u.a,{},void 0,Object(a.a)(g.a,{path:"/explore/tags",component:w}),Object(a.a)(g.a,{path:"/explore/links",component:L}),Object(a.a)(g.a,{path:"/explore/suggestions",component:E}),Object(a.a)(g.a,{exact:!0,path:["/explore","/explore/posts","/search"],component:H,componentParams:{multiColumn:t}})),Object(a.a)(G.a,{},void 0,Object(a.a)("title",{},void 0,e.formatMessage(te.title)),Object(a.a)("meta",{name:"robots",content:s?"noindex":"all"})))))}}).contextTypes={router:r.a.object,identity:r.a.object},Z=$))||Z)||Z}}]);
//# sourceMappingURL=explore-10504d99b808c3d9e758.chunk.js.map