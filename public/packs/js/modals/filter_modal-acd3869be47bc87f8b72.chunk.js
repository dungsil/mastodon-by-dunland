(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{830:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var s,i=a(0),l=a(1),o=a.n(l),d=a(13),r=a(25),c=a(125),n=a(2),h=a.n(n),p=a(4),u=a(16),b=a(18),m=a(210),_=a(187),g=a(14),f=a(290),j=a.n(f);const O=Object(p.f)({search:{id:"filter_modal.select_filter.search",defaultMessage:"Search or create"},clear:{id:"emoji_button.clear",defaultMessage:"Clear"}});let w=Object(d.connect)(((e,t)=>{let{contextType:a}=t;return{filters:Array.from(e.get("filters").values()).map((e=>{var t;return[e.get("id"),e.get("title"),null==(t=e.get("keywords"))?void 0:t.map((e=>e.get("keyword"))).join("\n"),e.get("expires_at")&&e.get("expires_at")<new Date,a&&!e.get("context").includes(Object(m.a)(a))]}))}}))(s=Object(p.g)(s=class extends o.a.PureComponent{constructor(){super(...arguments),this.state={searchValue:""},this.renderItem=e=>{let t=null;return(e[3]||e[4])&&(t=Object(i.a)("span",{className:"language-dropdown__dropdown__results__item__common-name"},void 0,"(",e[3]&&Object(i.a)(p.b,{id:"filter_modal.select_filter.expired",defaultMessage:"expired"}),e[3]&&e[4]&&", ",e[4]&&Object(i.a)(p.b,{id:"filter_modal.select_filter.context_mismatch",defaultMessage:"does not apply to this context"}),")")),Object(i.a)("div",{role:"button",tabIndex:"0","data-index":e[0],className:"language-dropdown__dropdown__results__item",onClick:this.handleItemClick,onKeyDown:this.handleKeyDown},e[0],Object(i.a)("span",{className:"language-dropdown__dropdown__results__item__native-name"},void 0,e[1])," ",t)},this.handleSearchChange=e=>{let{target:t}=e;this.setState({searchValue:t.value})},this.setListRef=e=>{this.listNode=e},this.handleKeyDown=e=>{const t=Array.from(this.listNode.childNodes).findIndex((t=>t===e.currentTarget));let a=null;switch(e.key){case" ":case"Enter":e.currentTarget.click();break;case"ArrowDown":a=this.listNode.childNodes[t+1]||this.listNode.firstChild;break;case"ArrowUp":a=this.listNode.childNodes[t-1]||this.listNode.lastChild;break;case"Tab":a=e.shiftKey?this.listNode.childNodes[t-1]||this.listNode.lastChild:this.listNode.childNodes[t+1]||this.listNode.firstChild;break;case"Home":a=this.listNode.firstChild;break;case"End":a=this.listNode.lastChild}a&&(a.focus(),e.preventDefault(),e.stopPropagation())},this.handleSearchKeyDown=e=>{let t=null;switch(e.key){case"Tab":case"ArrowDown":t=this.listNode.firstChild,t&&(t.focus(),e.preventDefault(),e.stopPropagation())}},this.handleClear=()=>{this.setState({searchValue:""})},this.handleItemClick=e=>{const t=e.currentTarget.getAttribute("data-index");e.preventDefault(),this.props.onSelectFilter(t)},this.handleNewFilterClick=e=>{e.preventDefault(),this.props.onNewFilter(this.state.searchValue)}}search(){const{filters:e}=this.props,{searchValue:t}=this.state;return""===t?e:j.a.go(t,e,{keys:["1","2"],limit:5,threshold:-1e4}).map((e=>e.obj))}renderCreateNew(e){return Object(i.a)("div",{role:"button",tabIndex:"0",className:"language-dropdown__dropdown__results__item",onClick:this.handleNewFilterClick,onKeyDown:this.handleKeyDown},"add-new-filter",Object(i.a)(g.a,{id:"plus",fixedWidth:!0})," ",Object(i.a)(p.b,{id:"filter_modal.select_filter.prompt_new",defaultMessage:"New category: {name}",values:{name:e}}))}render(){const{intl:e}=this.props,{searchValue:t}=this.state,a=""!==t,s=this.search();return Object(i.a)(o.a.Fragment,{},void 0,Object(i.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(i.a)(p.b,{id:"filter_modal.select_filter.title",defaultMessage:"Filter this post"})),Object(i.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(i.a)(p.b,{id:"filter_modal.select_filter.subtitle",defaultMessage:"Use an existing category or create a new one"})),Object(i.a)("div",{className:"emoji-mart-search"},void 0,Object(i.a)("input",{type:"search",value:t,onChange:this.handleSearchChange,onKeyDown:this.handleSearchKeyDown,placeholder:e.formatMessage(O.search),autoFocus:!0}),Object(i.a)("button",{type:"button",className:"emoji-mart-search-icon",disabled:!a,"aria-label":e.formatMessage(O.clear),onClick:this.handleClear},void 0,a?_.a:_.b)),o.a.createElement("div",{className:"language-dropdown__dropdown__results emoji-mart-scroll",role:"listbox",ref:this.setListRef},s.map(this.renderItem),a&&this.renderCreateNew(t)))}})||s)||s;var v,N=a(28);let x=Object(d.connect)(((e,t)=>{let{filterId:a}=t;return{filter:e.getIn(["filters",a])}}))(v=class extends o.a.PureComponent{constructor(){super(...arguments),this.handleCloseClick=()=>{const{onClose:e}=this.props;e()}}render(){const{filter:e,contextType:t}=this.props;let a=null;e.get("expires_at")&&e.get("expires_at")<new Date&&(a=Object(i.a)(o.a.Fragment,{},void 0,Object(i.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.expired_title",defaultMessage:"Expired filter!"})),Object(i.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.expired_explanation",defaultMessage:"This filter category has expired, you will need to change the expiration date for it to apply."}))));let s=null;t&&!e.get("context").includes(Object(m.a)(t))&&(s=Object(i.a)(o.a.Fragment,{},void 0,Object(i.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.context_mismatch_title",defaultMessage:"Context mismatch!"})),Object(i.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.context_mismatch_explanation",defaultMessage:"This filter category does not apply to the context in which you have accessed this post. If you want the post to be filtered in this context too, you will have to edit the filter."}))));const l=Object(i.a)("a",{href:`/filters/${e.get("id")}/edit`},void 0,Object(i.a)(p.b,{id:"filter_modal.added.settings_link",defaultMessage:"settings page"}));return Object(i.a)(o.a.Fragment,{},void 0,Object(i.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.title",defaultMessage:"Filter added!"})),Object(i.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.short_explanation",defaultMessage:"This post has been added to the following filter category: {title}.",values:{title:e.get("title")}})),a,s,Object(i.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.review_and_configure_title",defaultMessage:"Filter settings"})),Object(i.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(i.a)(p.b,{id:"filter_modal.added.review_and_configure",defaultMessage:"To review and further configure this filter category, go to the {settings_link}.",values:{settings_link:l}})),Object(i.a)("div",{className:"flex-spacer"}),Object(i.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(i.a)(N.a,{onClick:this.handleCloseClick},void 0,Object(i.a)(p.b,{id:"report.close",defaultMessage:"Done"}))))}})||v;var y,C;const k=Object(p.f)({close:{id:"lightbox.close",defaultMessage:"Close"}});let S=Object(d.connect)(void 0)(y=Object(p.g)(((C=class extends u.a{constructor(){super(...arguments),this.state={step:"select",filterId:null,isSubmitting:!1,isSubmitted:!1},this.handleNewFilterSuccess=e=>{this.handleSelectFilter(e.id)},this.handleSuccess=()=>{const{dispatch:e,statusId:t}=this.props;e(Object(r.n)(t,!0)),this.setState({isSubmitting:!1,isSubmitted:!0,step:"submitted"})},this.handleFail=()=>{this.setState({isSubmitting:!1})},this.handleNextStep=e=>{this.setState({step:e})},this.handleSelectFilter=e=>{const{dispatch:t,statusId:a}=this.props;this.setState({isSubmitting:!0,filterId:e}),t(Object(c.d)({filter_id:e,status_id:a},this.handleSuccess,this.handleFail))},this.handleNewFilter=e=>{const{dispatch:t}=this.props;this.setState({isSubmitting:!0}),t(Object(c.c)({title:e,context:["home","notifications","public","thread","account"],action:"warn"},this.handleNewFilterSuccess,this.handleFail))}}componentDidMount(){const{dispatch:e}=this.props;e(Object(c.e)())}render(){const{intl:e,statusId:t,contextType:a,onClose:s}=this.props,{step:l,filterId:o}=this.state;let d;switch(l){case"select":d=Object(i.a)(w,{contextType:a,onSelectFilter:this.handleSelectFilter,onNewFilter:this.handleNewFilter});break;case"create":d=null;break;case"submitted":d=Object(i.a)(x,{contextType:a,filterId:o,statusId:t,onClose:s})}return Object(i.a)("div",{className:"modal-root__modal report-dialog-modal"},void 0,Object(i.a)("div",{className:"report-modal__target"},void 0,Object(i.a)(b.a,{className:"report-modal__close",title:e.formatMessage(k.close),icon:"times",onClick:s,size:20}),Object(i.a)(p.b,{id:"filter_modal.title.status",defaultMessage:"Filter a post"})),Object(i.a)("div",{className:"report-dialog-modal__container"},void 0,d))}}).propTypes={statusId:h.a.string.isRequired,contextType:h.a.string,dispatch:h.a.func.isRequired,intl:h.a.object.isRequired},y=C))||y)||y}}]);
//# sourceMappingURL=filter_modal-acd3869be47bc87f8b72.chunk.js.map