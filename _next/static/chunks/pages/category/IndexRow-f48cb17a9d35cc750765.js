(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{6071:function(e,n,t){"use strict";var r=t(3038),a=t(862);n.default=void 0;var o=a(t(7294)),c=t(1689),l=t(2441),s=t(5749),i={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,l.useRouter)(),a=t&&t.asPath||"/",f=o.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],l=t[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):l||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=o.Children.only(v),w=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),E=r(g,2),N=E[0],L=E[1],k=o.default.useCallback((function(e){N(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,N]);(0,o.useEffect)((function(){var e=L&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,a=i[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(t,d,p,{locale:r})}),[p,d,L,b,n,t]);var M={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o,locale:s,scroll:l}))}(e,t,d,p,h,m,_,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var C="undefined"!==typeof b?b:t&&t.locale,I=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,C,t&&t.locales,t&&t.domainLocales);M.href=I||(0,c.addBasePath)((0,c.addLocale)(p,C,t&&t.defaultLocale))}return o.default.cloneElement(y,M)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=(0,a.useRef)(),i=(0,a.useState)(!1),u=r(i,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t(7294),o=t(8391),c="undefined"!==typeof IntersectionObserver;var l=new Map},8022:function(e,n,t){"use strict";t.r(n);var r=t(7294),a=t(1664),o=r.createElement;n.default=function(e){return o("div",{className:"col-sm-12 post_items_wrap"},o("div",{className:"div_news_rows"},o(a.default,{href:"/posts/".concat(e.id)},o("a",{target:"_blank"},o("h3",{className:"ml-10"}," ",e.title)))),o("div",null,o("ul",{className:"ul_time_box"},o("li",null,o("p",{className:"mb-0"},o("span",{className:"mr-2 time_icon_wrap"},o("i",{className:"far fa-calendar"})),e.date," , ID : ",e.id," ",o("br",null))))),o("hr",{className:"hr_ex1"}))}},5879:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/IndexRow",function(){return t(8022)}])},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[888,774,179],(function(){return n=5879,e(e.s=n);var n}));var n=e.O();_N_E=n}]);