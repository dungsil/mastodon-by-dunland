(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{818:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var s,o=a(0),i=a(1),l=a.n(i),c=a(13),r=a(130),d=a(19),n=a(68),u=a(2),h=a.n(u),p=a(15),g=a.n(p),b=a(35),m=a(4),O=a(3),j=a(16),v=a(18),_=a(28),f=a(768);const k=Object(m.f)({dislike:{id:"report.reasons.dislike",defaultMessage:"I don't like it"},dislike_description:{id:"report.reasons.dislike_description",defaultMessage:"It is not something you want to see"},spam:{id:"report.reasons.spam",defaultMessage:"It's spam"},spam_description:{id:"report.reasons.spam_description",defaultMessage:"Malicious links, fake engagement, or repetitive replies"},violation:{id:"report.reasons.violation",defaultMessage:"It violates server rules"},violation_description:{id:"report.reasons.violation_description",defaultMessage:"You are aware that it breaks specific rules"},other:{id:"report.reasons.other",defaultMessage:"It's something else"},other_description:{id:"report.reasons.other_description",defaultMessage:"The issue does not fit into other categories"},status:{id:"report.category.title_status",defaultMessage:"post"},account:{id:"report.category.title_account",defaultMessage:"profile"}});let C=Object(c.connect)((e=>({rules:e.getIn(["server","server","rules"],Object(O.List)())})))(s=Object(m.g)(s=class extends l.a.PureComponent{constructor(){super(...arguments),this.handleNextClick=()=>{const{onNextStep:e,category:t}=this.props;switch(t){case"dislike":e("thanks");break;case"violation":e("rules");break;default:e("statuses")}},this.handleCategoryToggle=(e,t)=>{const{onChangeCategory:a}=this.props;t&&a(e)}}render(){const{category:e,startedFrom:t,rules:a,intl:s}=this.props,i=a.size>0?["dislike","spam","violation","other"]:["dislike","spam","other"];return Object(o.a)(l.a.Fragment,{},void 0,Object(o.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(o.a)(m.b,{id:"report.category.title",defaultMessage:"Tell us what's going on with this {type}",values:{type:s.formatMessage(k[t])}})),Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(o.a)(m.b,{id:"report.category.subtitle",defaultMessage:"Choose the best match"})),Object(o.a)("div",{},void 0,i.map((t=>Object(o.a)(f.a,{name:"category",value:t,checked:e===t,onToggle:this.handleCategoryToggle,label:s.formatMessage(k[t]),description:s.formatMessage(k[t+"_description"])},t)))),Object(o.a)("div",{className:"flex-spacer"}),Object(o.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(o.a)(_.a,{onClick:this.handleNextClick,disabled:null===e},void 0,Object(o.a)(m.b,{id:"report.next",defaultMessage:"Next"}))))}})||s)||s;var y,M=a(131),w=a(34),S=a(50),N=a(72),x=a(782),I=a(14);const T=Object(m.f)({public_short:{id:"privacy.public.short",defaultMessage:"Public"},unlisted_short:{id:"privacy.unlisted.short",defaultMessage:"Unlisted"},private_short:{id:"privacy.private.short",defaultMessage:"Followers-only"},direct_short:{id:"privacy.direct.short",defaultMessage:"Mentioned people only"}});let R=Object(m.g)(y=class extends l.a.PureComponent{constructor(){super(...arguments),this.handleStatusesToggle=(e,t)=>{const{onToggle:a}=this.props;a(e,t)}}render(){const{status:e,checked:t,intl:a}=this.props;if(e.get("reblog"))return null;const s={public:{icon:"globe",text:a.formatMessage(T.public_short)},unlisted:{icon:"unlock",text:a.formatMessage(T.unlisted_short)},private:{icon:"lock",text:a.formatMessage(T.private_short)},direct:{icon:"at",text:a.formatMessage(T.direct_short)}}[e.get("visibility")],i=Object(o.a)("div",{className:"status-check-box__status poll__option__text"},void 0,Object(o.a)("div",{className:"detailed-status__display-name"},void 0,Object(o.a)("div",{className:"detailed-status__display-avatar"},void 0,Object(o.a)(w.a,{account:e.get("account"),size:46})),Object(o.a)("div",{},void 0,Object(o.a)(S.a,{account:e.get("account")})," · ",Object(o.a)("span",{className:"status__visibility-icon"},void 0,Object(o.a)(I.a,{id:s.icon,title:s.text}))," ",Object(o.a)(N.default,{timestamp:e.get("created_at")}))),Object(o.a)(M.a,{status:e}),Object(o.a)(x.a,{status:e}));return Object(o.a)(f.a,{name:"status_ids",value:e.get("id"),checked:t,onToggle:this.handleStatusesToggle,label:e.get("search_index"),labelComponent:i,multiple:!0})}})||y;var F,P=Object(c.connect)((()=>{const e=Object(b.h)();return(t,a)=>{let{id:s}=a;return{status:e(t,{id:s})}}}))(R),D=a(96);let U=Object(c.connect)(((e,t)=>{let{accountId:a}=t;return{availableStatusIds:Object(O.OrderedSet)(e.getIn(["timelines",`account:${a}:with_replies`,"items"])),isLoading:e.getIn(["timelines",`account:${a}:with_replies`,"isLoading"])}}))(F=class extends l.a.PureComponent{constructor(){super(...arguments),this.handleNextClick=()=>{const{onNextStep:e}=this.props;e("comment")}}render(){const{availableStatusIds:e,selectedStatusIds:t,onToggle:a,isLoading:s}=this.props;return Object(o.a)(l.a.Fragment,{},void 0,Object(o.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(o.a)(m.b,{id:"report.statuses.title",defaultMessage:"Are there any posts that back up this report?"})),Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(o.a)(m.b,{id:"report.statuses.subtitle",defaultMessage:"Select all that apply"})),Object(o.a)("div",{className:"report-dialog-modal__statuses"},void 0,s?Object(o.a)(D.b,{}):e.union(t).map((e=>Object(o.a)(P,{id:e,checked:t.includes(e),onToggle:a},e)))),Object(o.a)("div",{className:"flex-spacer"}),Object(o.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(o.a)(_.a,{onClick:this.handleNextClick},void 0,Object(o.a)(m.b,{id:"report.next",defaultMessage:"Next"}))))}})||F;var z;let B=Object(c.connect)((e=>({rules:e.getIn(["server","server","rules"])})))(z=class extends l.a.PureComponent{constructor(){super(...arguments),this.handleNextClick=()=>{const{onNextStep:e}=this.props;e("statuses")},this.handleRulesToggle=(e,t)=>{const{onToggle:a}=this.props;a(e,t)}}render(){const{rules:e,selectedRuleIds:t}=this.props;return Object(o.a)(l.a.Fragment,{},void 0,Object(o.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(o.a)(m.b,{id:"report.rules.title",defaultMessage:"Which rules are being violated?"})),Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(o.a)(m.b,{id:"report.rules.subtitle",defaultMessage:"Select all that apply"})),Object(o.a)("div",{},void 0,e.map((e=>Object(o.a)(f.a,{name:"rule_ids",value:e.get("id"),checked:t.includes(e.get("id")),onToggle:this.handleRulesToggle,label:e.get("text"),multiple:!0},e.get("id"))))),Object(o.a)("div",{className:"flex-spacer"}),Object(o.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(o.a)(_.a,{onClick:this.handleNextClick,disabled:t.size<1},void 0,Object(o.a)(m.b,{id:"report.next",defaultMessage:"Next"}))))}})||z;var K,q=a(205),L=a.n(q);const Y=Object(m.f)({placeholder:{id:"report.placeholder",defaultMessage:"Type or paste additional comments"}});let A=Object(m.g)(K=class extends l.a.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{const{onSubmit:e}=this.props;e()},this.handleChange=e=>{const{onChangeComment:t}=this.props;t(e.target.value)},this.handleKeyDown=e=>{13===e.keyCode&&(e.ctrlKey||e.metaKey)&&this.handleClick()},this.handleForwardChange=e=>{const{onChangeForward:t}=this.props;t(e.target.checked)}}render(){const{comment:e,isRemote:t,forward:a,domain:s,isSubmitting:i,intl:c}=this.props;return Object(o.a)(l.a.Fragment,{},void 0,Object(o.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(o.a)(m.b,{id:"report.comment.title",defaultMessage:"Is there anything else you think we should know?"})),Object(o.a)("textarea",{className:"report-dialog-modal__textarea",placeholder:c.formatMessage(Y.placeholder),value:e,onChange:this.handleChange,onKeyDown:this.handleKeyDown,disabled:i}),t&&Object(o.a)(l.a.Fragment,{},void 0,Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(o.a)(m.b,{id:"report.forward_hint",defaultMessage:"The account is from another server. Send an anonymized copy of the report there as well?"})),Object(o.a)("label",{className:"report-dialog-modal__toggle"},void 0,Object(o.a)(L.a,{checked:a,disabled:i,onChange:this.handleForwardChange}),Object(o.a)(m.b,{id:"report.forward",defaultMessage:"Forward to {target}",values:{target:s}}))),Object(o.a)("div",{className:"flex-spacer"}),Object(o.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(o.a)(_.a,{onClick:this.handleClick,disabled:i},void 0,Object(o.a)(m.b,{id:"report.submit",defaultMessage:"Submit report"}))))}})||K;var J,W=a(10);let $=Object(c.connect)((()=>({})))(J=class extends l.a.PureComponent{constructor(){super(...arguments),this.handleCloseClick=()=>{const{onClose:e}=this.props;e()},this.handleUnfollowClick=()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(W.Z)(t.get("id"))),a()},this.handleMuteClick=()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(W.U)(t.get("id"))),a()},this.handleBlockClick=()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(W.J)(t.get("id"))),a()}}render(){const{account:e,submitted:t}=this.props;return Object(o.a)(l.a.Fragment,{},void 0,Object(o.a)("h3",{className:"report-dialog-modal__title"},void 0,t?Object(o.a)(m.b,{id:"report.thanks.title_actionable",defaultMessage:"Thanks for reporting, we'll look into this."}):Object(o.a)(m.b,{id:"report.thanks.title",defaultMessage:"Don't want to see this?"})),Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,t?Object(o.a)(m.b,{id:"report.thanks.take_action_actionable",defaultMessage:"While we review this, you can take action against @{name}:",values:{name:e.get("username")}}):Object(o.a)(m.b,{id:"report.thanks.take_action",defaultMessage:"Here are your options for controlling what you see on Mastodon:"})),e.getIn(["relationship","following"])&&Object(o.a)(l.a.Fragment,{},void 0,Object(o.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(o.a)(m.b,{id:"report.unfollow",defaultMessage:"Unfollow @{name}",values:{name:e.get("username")}})),Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(o.a)(m.b,{id:"report.unfollow_explanation",defaultMessage:"You are following this account. To not see their posts in your home feed anymore, unfollow them."})),Object(o.a)(_.a,{secondary:!0,onClick:this.handleUnfollowClick},void 0,Object(o.a)(m.b,{id:"account.unfollow",defaultMessage:"Unfollow"})),Object(o.a)("hr",{})),Object(o.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(o.a)(m.b,{id:"account.mute",defaultMessage:"Mute @{name}",values:{name:e.get("username")}})),Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(o.a)(m.b,{id:"report.mute_explanation",defaultMessage:"You will not see their posts. They can still follow you and see your posts and will not know that they are muted."})),Object(o.a)(_.a,{secondary:!0,onClick:this.handleMuteClick},void 0,e.getIn(["relationship","muting"])?Object(o.a)(m.b,{id:"account.muted",defaultMessage:"Muted"}):Object(o.a)(m.b,{id:"report.mute",defaultMessage:"Mute"})),Object(o.a)("hr",{}),Object(o.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(o.a)(m.b,{id:"account.block",defaultMessage:"Block @{name}",values:{name:e.get("username")}})),Object(o.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(o.a)(m.b,{id:"report.block_explanation",defaultMessage:"You will not see their posts. They will not be able to see your posts or follow you. They will be able to tell that they are blocked."})),Object(o.a)(_.a,{secondary:!0,onClick:this.handleBlockClick},void 0,e.getIn(["relationship","blocking"])?Object(o.a)(m.b,{id:"account.blocked",defaultMessage:"Blocked"}):Object(o.a)(m.b,{id:"report.block",defaultMessage:"Block"})),Object(o.a)("div",{className:"flex-spacer"}),Object(o.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(o.a)(_.a,{onClick:this.handleCloseClick},void 0,Object(o.a)(m.b,{id:"report.close",defaultMessage:"Done"}))))}})||J;var H,Z;const E=Object(m.f)({close:{id:"lightbox.close",defaultMessage:"Close"}});let G=Object(c.connect)((()=>{const e=Object(b.d)();return(t,a)=>{let{accountId:s}=a;return{account:e(t,s)}}}))(H=Object(m.g)(((Z=class extends j.a{constructor(){super(...arguments),this.state={step:"category",selectedStatusIds:Object(O.OrderedSet)(this.props.statusId?[this.props.statusId]:[]),comment:"",category:null,selectedRuleIds:Object(O.OrderedSet)(),forward:!0,isSubmitting:!1,isSubmitted:!1},this.handleSubmit=()=>{const{dispatch:e,accountId:t}=this.props,{selectedStatusIds:a,comment:s,category:o,selectedRuleIds:i,forward:l}=this.state;this.setState({isSubmitting:!0}),e(Object(r.b)({account_id:t,status_ids:a.toArray(),comment:s,forward:l,category:o,rule_ids:i.toArray()},this.handleSuccess,this.handleFail))},this.handleSuccess=()=>{this.setState({isSubmitting:!1,isSubmitted:!0,step:"thanks"})},this.handleFail=()=>{this.setState({isSubmitting:!1})},this.handleStatusToggle=(e,t)=>{const{selectedStatusIds:a}=this.state;t?this.setState({selectedStatusIds:a.add(e)}):this.setState({selectedStatusIds:a.remove(e)})},this.handleRuleToggle=(e,t)=>{const{selectedRuleIds:a}=this.state;t?this.setState({selectedRuleIds:a.add(e)}):this.setState({selectedRuleIds:a.remove(e)})},this.handleChangeCategory=e=>{this.setState({category:e})},this.handleChangeComment=e=>{this.setState({comment:e})},this.handleChangeForward=e=>{this.setState({forward:e})},this.handleNextStep=e=>{this.setState({step:e})}}componentDidMount(){const{dispatch:e,accountId:t}=this.props;e(Object(d.r)(t,{withReplies:!0})),e(Object(n.l)())}render(){const{accountId:e,account:t,intl:a,onClose:s}=this.props;if(!t)return null;const{step:i,selectedStatusIds:l,selectedRuleIds:c,comment:r,forward:d,category:n,isSubmitting:u,isSubmitted:h}=this.state,p=t.get("acct").split("@")[1],g=!!p;let b;switch(i){case"category":b=Object(o.a)(C,{onNextStep:this.handleNextStep,startedFrom:this.props.statusId?"status":"account",category:n,onChangeCategory:this.handleChangeCategory});break;case"rules":b=Object(o.a)(B,{onNextStep:this.handleNextStep,selectedRuleIds:c,onToggle:this.handleRuleToggle});break;case"statuses":b=Object(o.a)(U,{onNextStep:this.handleNextStep,accountId:e,selectedStatusIds:l,onToggle:this.handleStatusToggle});break;case"comment":b=Object(o.a)(A,{onSubmit:this.handleSubmit,isSubmitting:u,isRemote:g,comment:r,forward:d,domain:p,onChangeComment:this.handleChangeComment,onChangeForward:this.handleChangeForward});break;case"thanks":b=Object(o.a)($,{submitted:h,account:t,onClose:s})}return Object(o.a)("div",{className:"modal-root__modal report-dialog-modal"},void 0,Object(o.a)("div",{className:"report-modal__target"},void 0,Object(o.a)(v.a,{className:"report-modal__close",title:a.formatMessage(E.close),icon:"times",onClick:s,size:20}),Object(o.a)(m.b,{id:"report.target",defaultMessage:"Report {target}",values:{target:Object(o.a)("strong",{},void 0,t.get("acct"))}})),Object(o.a)("div",{className:"report-dialog-modal__container"},void 0,b))}}).propTypes={accountId:h.a.string.isRequired,statusId:h.a.string,dispatch:h.a.func.isRequired,intl:h.a.object.isRequired,account:g.a.map.isRequired},H=Z))||H)||H}}]);
//# sourceMappingURL=report_modal-b8393e5db91ae6ea7e5c.chunk.js.map