(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{790:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var s,i,o=a(0),n=(a(1),a(752)),r=a(751),c=a(761),l=a(779),u=a(4),d=a(13),b=a(2),g=a.n(b),m=a(15),f=a.n(m),p=a(16),_=a(7),v=a(10),M=a(3),j=a(773),h=a(769),O=a(784),x=a(95);const k=Object(u.f)({home_timeline:{id:"tabs_bar.home",defaultMessage:"Home"},notifications:{id:"tabs_bar.notifications",defaultMessage:"Notifications"},public_timeline:{id:"navigation_bar.public_timeline",defaultMessage:"Federated timeline"},settings_subheading:{id:"column_subheading.settings",defaultMessage:"Settings"},community_timeline:{id:"navigation_bar.community_timeline",defaultMessage:"Local timeline"},explore:{id:"navigation_bar.explore",defaultMessage:"Explore"},direct:{id:"navigation_bar.direct",defaultMessage:"Direct messages"},bookmarks:{id:"navigation_bar.bookmarks",defaultMessage:"Bookmarks"},preferences:{id:"navigation_bar.preferences",defaultMessage:"Preferences"},follow_requests:{id:"navigation_bar.follow_requests",defaultMessage:"Follow requests"},favourites:{id:"navigation_bar.favourites",defaultMessage:"Favourites"},blocks:{id:"navigation_bar.blocks",defaultMessage:"Blocked users"},domain_blocks:{id:"navigation_bar.domain_blocks",defaultMessage:"Hidden domains"},mutes:{id:"navigation_bar.mutes",defaultMessage:"Muted users"},pins:{id:"navigation_bar.pins",defaultMessage:"Pinned posts"},lists:{id:"navigation_bar.lists",defaultMessage:"Lists"},discover:{id:"navigation_bar.discover",defaultMessage:"Discover"},personal:{id:"navigation_bar.personal",defaultMessage:"Personal"},security:{id:"navigation_bar.security",defaultMessage:"Security"},menu:{id:"getting_started.heading",defaultMessage:"Getting started"}});let w=Object(d.connect)((e=>({myAccount:e.getIn(["accounts",_.n]),unreadFollowRequests:e.getIn(["user_lists","follow_requests","items"],Object(M.List)()).size})),(e=>({fetchFollowRequests:()=>e(Object(v.O)())})))(s=Object(u.g)(((i=class extends p.a{componentDidMount(){const{fetchFollowRequests:e}=this.props,{signedIn:t}=this.context.identity;t&&e()}render(){const{intl:e,myAccount:t,multiColumn:a,unreadFollowRequests:s}=this.props,{signedIn:i}=this.context.identity,u=[];var d,b;return u.push(Object(o.a)(l.a,{text:e.formatMessage(k.discover)},"header-discover")),_.u&&u.push(Object(o.a)(c.a,{icon:"hashtag",text:e.formatMessage(k.explore),to:"/explore"},"explore")),u.push(Object(o.a)(c.a,{icon:"users",text:e.formatMessage(k.community_timeline),to:"/public/local"},"community_timeline"),Object(o.a)(c.a,{icon:"globe",text:e.formatMessage(k.public_timeline),to:"/public"},"public_timeline")),i&&(u.push(Object(o.a)(l.a,{text:e.formatMessage(k.personal)},"header-personal"),Object(o.a)(c.a,{icon:"home",text:e.formatMessage(k.home_timeline),to:"/home"},"home"),Object(o.a)(c.a,{icon:"at",text:e.formatMessage(k.direct),to:"/conversations"},"direct"),Object(o.a)(c.a,{icon:"bookmark",text:e.formatMessage(k.bookmarks),to:"/bookmarks"},"bookmark"),Object(o.a)(c.a,{icon:"star",text:e.formatMessage(k.favourites),to:"/favourites"},"favourites"),Object(o.a)(c.a,{icon:"list-ul",text:e.formatMessage(k.lists),to:"/lists"},"lists")),(t.get("locked")||s>0)&&u.push(Object(o.a)(c.a,{icon:"user-plus",text:e.formatMessage(k.follow_requests),badge:(d=s,b=40,0===d?void 0:b&&d>=b?b+"+":d),to:"/follow_requests"},"follow_requests")),u.push(Object(o.a)(l.a,{text:e.formatMessage(k.settings_subheading)},"header-settings"),Object(o.a)(c.a,{icon:"gears",text:e.formatMessage(k.preferences),href:"/settings/preferences"},"preferences"))),Object(o.a)(n.a,{},void 0,i&&!a?Object(o.a)(j.a,{}):Object(o.a)(r.a,{title:e.formatMessage(k.menu),icon:"bars",multiColumn:a}),Object(o.a)("div",{className:"getting-started scrollable scrollable--flex"},void 0,Object(o.a)("div",{className:"getting-started__wrapper"},void 0,u),!a&&Object(o.a)("div",{className:"flex-spacer"}),Object(o.a)(h.a,{})),a&&_.u&&Object(o.a)(O.a,{}),Object(o.a)(x.a,{},void 0,Object(o.a)("title",{},void 0,e.formatMessage(k.menu)),Object(o.a)("meta",{name:"robots",content:"noindex"})))}}).contextTypes={router:g.a.object.isRequired,identity:g.a.object},i.propTypes={intl:g.a.object.isRequired,myAccount:f.a.map,multiColumn:g.a.bool,fetchFollowRequests:g.a.func.isRequired,unreadFollowRequests:g.a.number,unreadNotifications:g.a.number},s=i))||s)||s}}]);
//# sourceMappingURL=getting_started-13ba1218fd1983326c8e.chunk.js.map