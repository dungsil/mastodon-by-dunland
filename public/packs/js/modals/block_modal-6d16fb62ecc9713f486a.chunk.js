(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{804:function(o,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return m}));var c,n=t(0),a=t(1),s=t.n(a),i=t(13),l=t(4),d=t(35),r=t(28),b=t(17),u=t(10),p=t(130);let m=Object(i.connect)((()=>{const o=Object(d.d)();return e=>({account:o(e,e.getIn(["blocks","new","account_id"]))})}),(o=>({onConfirm(e){o(Object(u.J)(e.get("id")))},onBlockAndReport(e){o(Object(u.J)(e.get("id"))),o(Object(p.a)(e))},onClose(){o(Object(b.c)())}})))(c=Object(l.g)(c=class extends s.a.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClose(),this.props.onConfirm(this.props.account)},this.handleSecondary=()=>{this.props.onClose(),this.props.onBlockAndReport(this.props.account)},this.handleCancel=()=>{this.props.onClose()},this.setRef=o=>{this.button=o}}componentDidMount(){this.button.focus()}render(){const{account:o}=this.props;return Object(n.a)("div",{className:"modal-root__modal block-modal"},void 0,Object(n.a)("div",{className:"block-modal__container"},void 0,Object(n.a)("p",{},void 0,Object(n.a)(l.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:Object(n.a)("strong",{},void 0,"@",o.get("acct"))}}))),Object(n.a)("div",{className:"block-modal__action-bar"},void 0,Object(n.a)(r.a,{onClick:this.handleCancel,className:"block-modal__cancel-button"},void 0,Object(n.a)(l.b,{id:"confirmation_modal.cancel",defaultMessage:"Cancel"})),Object(n.a)(r.a,{onClick:this.handleSecondary,className:"confirmation-modal__secondary-button"},void 0,Object(n.a)(l.b,{id:"confirmations.block.block_and_report",defaultMessage:"Block & Report"})),s.a.createElement(r.a,{onClick:this.handleClick,ref:this.setRef},Object(n.a)(l.b,{id:"confirmations.block.confirm",defaultMessage:"Block"}))))}})||c)||c}}]);
//# sourceMappingURL=block_modal-6d16fb62ecc9713f486a.chunk.js.map