(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{516:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a(0),d=a(1),i=a.n(d),o=a(6),c=a(4),r=a(9),b=a.n(r),s=a(108);class l extends i.a.PureComponent{constructor(){super(...arguments),this.state={loading:!0,data:null}}componentDidMount(){const{start_at:e,end_at:t,frequency:a}=this.props;Object(o.a)().post("/api/v1/admin/retention",{start_at:e,end_at:t,frequency:a}).then((e=>{this.setState({loading:!1,data:e.data})})).catch((e=>{console.error(e)}))}render(){const{loading:e,data:t}=this.state,{frequency:a}=this.props;let d;d=e?Object(n.a)(c.b,{id:"loading_indicator.label",defaultMessage:"Loading..."}):Object(n.a)("table",{className:"retention__table"},void 0,Object(n.a)("thead",{},void 0,Object(n.a)("tr",{},void 0,Object(n.a)("th",{},void 0,Object(n.a)("div",{className:"retention__table__date retention__table__label"},void 0,Object(n.a)(c.b,{id:"admin.dashboard.retention.cohort",defaultMessage:"Sign-up month"}))),Object(n.a)("th",{},void 0,Object(n.a)("div",{className:"retention__table__number retention__table__label"},void 0,Object(n.a)(c.b,{id:"admin.dashboard.retention.cohort_size",defaultMessage:"New users"}))),t[0].data.slice(1).map(((e,t)=>Object(n.a)("th",{},e.date,Object(n.a)("div",{className:"retention__table__number retention__table__label"},void 0,t+1))))),Object(n.a)("tr",{},void 0,Object(n.a)("td",{},void 0,Object(n.a)("div",{className:"retention__table__date retention__table__average"},void 0,Object(n.a)(c.b,{id:"admin.dashboard.retention.average",defaultMessage:"Average"}))),Object(n.a)("td",{},void 0,Object(n.a)("div",{className:"retention__table__size"},void 0,Object(n.a)(c.c,{value:t.reduce(((e,t,a)=>e+(1*t.data[0].value-e)/(a+1)),0),maximumFractionDigits:0}))),t[0].data.slice(1).map(((e,a)=>{const d=t.reduce(((e,t,n)=>t.data[a+1]?e+(t.data[a+1].rate-e)/(n+1):e),0);return Object(n.a)("td",{},e.date,Object(n.a)("div",{className:b()("retention__table__box","retention__table__average","retention__table__box--"+Object(s.c)(100*d))},void 0,Object(n.a)(c.c,{value:d,style:"percent"})))})))),Object(n.a)("tbody",{},void 0,t.slice(0,-1).map((e=>Object(n.a)("tr",{},e.period,Object(n.a)("td",{},void 0,Object(n.a)("div",{className:"retention__table__date"},void 0,(e=>{switch(e.frequency){case"day":return Object(n.a)(c.a,{value:e.period,month:"long",day:"2-digit"});default:return Object(n.a)(c.a,{value:e.period,month:"long",year:"numeric"})}})(e))),Object(n.a)("td",{},void 0,Object(n.a)("div",{className:"retention__table__size"},void 0,Object(n.a)(c.c,{value:e.data[0].value}))),e.data.slice(1).map((e=>Object(n.a)("td",{},e.date,Object(n.a)("div",{className:b()("retention__table__box","retention__table__box--"+Object(s.c)(100*e.rate))},void 0,Object(n.a)(c.c,{value:e.rate,style:"percent"}))))))))));let i=null;switch(a){case"day":i=Object(n.a)(c.b,{id:"admin.dashboard.daily_retention",defaultMessage:"User retention rate by day after sign-up"});break;default:i=Object(n.a)(c.b,{id:"admin.dashboard.monthly_retention",defaultMessage:"User retention rate by month after sign-up"})}return Object(n.a)("div",{className:"retention"},void 0,Object(n.a)("h4",{},void 0,i),d)}}}}]);
//# sourceMappingURL=4-58f857600b86e8811420.chunk.js.map