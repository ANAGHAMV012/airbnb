"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20179],{501490:function(e,n,t){t.d(n,{e:function(){return d},f:function(){return a}});var o=t(419393),i=t(898744),s=t(69689),r=t(621535);let l=i.createContext({isStaticPosition:!1,isEnabled:!1,showBoxShadow:!0,addressSuggestions:[],queryCalled:!1,shouldRenderAddressSuggestions:!1,showErrorMessage:!1,showSuggestionsList:!1,showNearByTitleWithLoading:!1,showGetCurrentLocationButton:!1,isLoading:!1,shouldStartFetchingAddress:!1,providerExistsAsParent:!1,fetchGeoLocationAddresses:()=>{},requestGeoLocationPermissionOnLoad:!1}),a=()=>{var e;let n=i.useContext(l);return(null==r?void 0:null===(e=r.env)||void 0===e?void 0:"production")!=="development"||(null==n?void 0:n.providerExistsAsParent)||console.error("useGeoLocationSuggestionsContext must be used within a GeoLocationSuggestionsProvider"),n},d=e=>{let{isEnabled:n=!1,isStaticPosition:t,showBoxShadow:r,children:a,showSuggestionOnInputFocus:d=!1,requestGeoLocationPermissionOnLoad:u=!1}=e,{fetchGeoLocationAddresses:c,addressList:g,loading:_,geoError:p,addressFetchError:f,geoLocationPermission:v,queryCalled:h,addressExistsOnSessionStorage:m}=(0,s.T)(),P=n&&(null==v?void 0:v.state)!==(null===s.m||void 0===s.m?void 0:s.m.DENIED)&&!p&&!((null==v?void 0:v.state)===(null===s.m||void 0===s.m?void 0:s.m.PROMPT)&&u),E=!!f&&!_,S=h&&!g.length&&!_&&!E,x=!(null==g?void 0:g.length)&&(null==v?void 0:v.state)===(null===s.m||void 0===s.m?void 0:s.m.PROMPT)&&!u,y=_&&!(null==g?void 0:g.length),L=f||S,C=!!(null==g?void 0:g.length)&&!L,w=(null==v?void 0:v.state)===(null===s.m||void 0===s.m?void 0:s.m.GRANTED)&&y&&!m,O=n&&((null==v?void 0:v.state)===(null===s.m||void 0===s.m?void 0:s.m.GRANTED)&&!m||u);i.useEffect(()=>{O&&c()},[O]);let T=i.useMemo(()=>({isEnabled:n,isStaticPosition:t,showBoxShadow:r,addressSuggestions:g,queryCalled:h,shouldRenderAddressSuggestions:P,showErrorMessage:L,showSuggestionsList:C,showNearByTitleWithLoading:w,showGetCurrentLocationButton:x,isLoading:y,shouldStartFetchingAddress:O,showSuggestionOnInputFocus:d,providerExistsAsParent:!0,fetchGeoLocationAddresses:c,requestGeoLocationPermissionOnLoad:u}),[n,t,r,g.length,h,P,L,C,x,w,y,null==v?void 0:v.state,O,d,c,u]);return(0,o.jsx)(l.Provider,{value:T,children:a})}},69689:function(e,n,t){t.d(n,{m:function(){return i},T:function(){return S}});var o,i,s=t(898744),r=t(847881),l=t(755928),a=t(845941);function d(){let e=(0,r._)(["\n  query getAddressByPoint($lat: Float!, $lng: Float!) {\n    getAddressByPoint(lat: $lat, lng: $lng) {\n      addressesList {\n        city\n        street\n        city\n        zipCode\n        state\n        countryShortname\n        printableAddress\n        lat\n        lng\n        id\n      }\n    }\n  }\n"]);return d=function(){return e},e}let u=(0,l.gql)(d());var c=()=>{var e,n;let[t,{loading:o,error:i,data:r,called:l}]=(0,a.t)(u,{fetchPolicy:"network-only",errorPolicy:"all"}),d=s.useMemo(()=>{var e,n;return(null==r?void 0:null===(n=r.getAddressByPoint)||void 0===n?void 0:null===(e=n.addressesList)||void 0===e?void 0:e.filter(e=>e.city&&e.street&&e.zipCode).map(e=>{let{id:n,...t}=e;return{...t,googlePlaceId:n,shortname:e.street}}))||[]},[null==r?void 0:null===(e=r.getAddressByPoint)||void 0===e?void 0:e.addressesList]);return{getAddressQuery:t,loading:o,called:l,error:i||(null==r?void 0:null===(n=r.getAddressByPoint)||void 0===n?void 0:n.addressesList)===null,data:d}},g=t(213763),_=t(644026),p=t(970484),f=t(737702);let v="dd-geo-location-user-addresses",h=e=>36e5*e,m=e=>{let{fetchedAddressList:n=[],isEnabled:t=!0,storageTtlInHour:o=4}=e,[i,r]=(0,s.useState)([]),[l,a]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let{timeCreated:e,addressList:n}=f.N1.get(v)||{};Date.now()<e+h(o)?a(n):(f.N1.delete(v),a([]))},[]),(0,s.useEffect)(()=>{t&&(l.length&&!n.length?r(l):n.length&&(f.N1.set(v,{timeCreated:Date.now(),addressList:n}),r(n)))},[n.length,t,l.length]),{addressExistsOnSessionStorage:!!l.length,addressList:i}};var P=t(426080);(o=i||(i={})).PROMPT="prompt",o.GRANTED="granted",o.DENIED="denied";let E={state:null,GRANTED:"granted",PROMPT:"prompt",DENIED:"denied"},S=function(){var e,n;let{useSessionStorage:t=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[o,i]=(0,s.useState)(null),{getAddressQuery:r,loading:l,data:a,error:d,called:u}=c(),{addressExistsOnSessionStorage:f,addressList:v}=m({fetchedAddressList:a,isEnabled:t&&"granted"===o}),h=v.length?v:a,S=(0,P.s)(),{error:x,updateCurrentPosition:y,loading:L,position:C,grantedGeolocationPermission:w,hasAskedForGeolocationPermission:O}=(0,g.Z)({usePermissionsApi:!1,isServerSide:S});(0,p.ZP)(()=>{(null==h?void 0:h.length)&&(0,_.ZP)("cx_use_geo_location_address_suggestions_fetch_success",{addressList:h})},[h]),(0,s.useEffect)(()=>{var e,n;null===(n=navigator)||void 0===n||null===(e=n.permissions)||void 0===e||e.query({name:"geolocation"}).then(e=>{"prompt"===o&&"granted"===e.state?(0,_.ZP)("cx_use_geo_location_address_permission_granted"):"prompt"===o&&"denied"===e.state&&(0,_.ZP)("cx_use_geo_location_address_permission_denied"),i(e.state),e.onchange=function(){i(e.state)}})},[x,null==C?void 0:null===(e=C.coords)||void 0===e?void 0:e.latitude,null==C?void 0:null===(n=C.coords)||void 0===n?void 0:n.longitude]),(0,s.useEffect)(()=>{navigator.permissions||(O&&!w?i("denied"):O&&w?i("granted"):i("prompt"))},[O,w]);let T=(0,s.useCallback)(async()=>{if(!x&&!L){var e,n,t,o;try{let o=await y();r({variables:{lat:(null==o?void 0:null===(e=o.coords)||void 0===e?void 0:e.latitude)||0,lng:(null==o?void 0:null===(n=o.coords)||void 0===n?void 0:n.longitude)||0}}),(null===(t=navigator)||void 0===t?void 0:t.permissions)||O||w||(0,_.ZP)("cx_use_geo_location_address_permission_granted")}catch(e){(null==e?void 0:e.code)===(null==e?void 0:e.PERMISSION_DENIED)?(null===(o=navigator)||void 0===o?void 0:o.permissions)||(0,_.ZP)("cx_use_geo_location_address_permission_denied"):d?(0,_.ZP)("cx_use_geo_location_address_suggestions_fetch_error",{error:d}):(0,_.ZP)("cx_use_geo_location_address_permission_error",e)}}},[]);return{addressList:h.length?h:[],fetchGeoLocationAddresses:T,geoLocationPermission:{...E,state:o},loading:L||l,geoError:!!x,addressFetchError:!!d,queryCalled:u,addressExistsOnSessionStorage:f}}},213763:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(898744),i=t(737702),s=t(332780);let r=e=>(null==e?void 0:e.state)==="granted",l=e=>(null==e?void 0:e.state)==="denied",a=e=>(null==e?void 0:e.state)==="prompt",d=e=>{var n,t;let{isServerSide:i,permissionName:d,onChange:u,skip:c=!1}=e,[g,_]=(0,o.useState)(!c),[p,f]=(0,o.useState)(null),[v,h]=(0,o.useState)(""),m=!!(!i&&(null===(n=navigator)||void 0===n?void 0:n.permissions));return(0,o.useEffect)(()=>{let e=!1,n=n=>{e||f(n)},t=async()=>{_(!0);try{let t=await navigator.permissions.query({name:d});t.onchange=function(){e||(n(this),null==u||u({isGranted:r(this),isDenied:l(this),isPrompt:a(this)}))},e||n(t)}catch(e){h(e),(0,s.Tb)(Error("[Permissions API] ".concat(e.message)))}finally{_(!1)}};return c||(m?t():(_(!1),h("Browser does not support Permissions API"))),()=>{e=!0}},[m,d,c,u]),{error:v,isLoading:g,permissionState:null!==(t=null==p?void 0:p.state)&&void 0!==t?t:null,isGranted:r(p),isDenied:l(p),isPrompt:a(p)}},u="ddweb-geolocation-permission",c={enableHighAccuracy:!1,timeout:15e3,maximumAge:0};var g=function(){var e;let{overrides:n,track:t,isServerSide:r=!1,usePermissionsApi:l=!1,skip:a=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},g={...c,...n},_=(0,i.XR)(),p=_.get(u),{isGranted:f,isPrompt:v,isLoading:h,error:m}=d({isServerSide:r,permissionName:"geolocation",onChange:(0,o.useCallback)(e=>{e&&(e.isGranted?_.set(u,"true"):e.isDenied?_.set(u,"false"):e.isPrompt&&_.delete(u))},[_]),skip:a||!l}),P=!l||h||m?p:f,E=l&&!h?!v:null!==P,[S,x]=(0,o.useState)(null),[y,L]=(0,o.useState)(null),[C,w]=(0,o.useState)(!a&&l&&E&&P),O=e=>{_.set(u,"true"),null==t||t.success(e),x(e),w(!1),L(null)},T=e=>{1===e.code&&(_.set(u,"false"),null==t||t.error(e)),L(e),w(!1),3===e.code&&(0,s.Tb)(Error("[Geolocation API] ".concat(e.message)))};return r||(null===(e=navigator)||void 0===e?void 0:e.geolocation)||T({message:"Geolocation is not supported"}),{position:S,error:y,loading:C||l&&h,hasAskedForGeolocationPermission:!!S||E,updateCurrentPosition:()=>(w(!0),new Promise((e,n)=>navigator.geolocation.getCurrentPosition(n=>{O(n),e(n)},e=>{T(e),n(e||Error("Geolocation error, getCurrentPosition failed with no exception"))},g))),grantedGeolocationPermission:!!S||!!P}}},704150:function(e,n,t){var o=t(419393),i=t(238077),s=t(898744),r=t(335900);let l=s.forwardRef(function(e,n){return(0,o.jsx)(i.Z,{...e,ref:n})});n.Z=e=>(0,o.jsx)(r.r,{"data-anchor-id":e["data-anchor-id"]||"",href:e.href,children:(0,o.jsx)(l,{...e})})},850015:function(e,n,t){t.d(n,{I:function(){return i},f:function(){return o}});let o=(e,n)=>{let t=Math.max(e.x,n.x),o=Math.min(e.x+e.width,n.x+n.width),i=Math.max(e.y,n.y);return{x:t,y:i,width:o-t,height:Math.min(e.y+e.height,n.y+n.height)-i}},i=e=>{let n=Math.abs(e.width*e.height);return e.width<0||e.height<0?-n:n}},723460:function(e,n,t){var o=t(847881),i=t(755928),s=t(11351);function r(){let e=(0,o._)(["\n  query getConsentsByUserTypeAndId($uidType: UidType!) {\n    getConsentsByUserTypeAndId(uidType: $uidType) {\n      consentsList {\n        policy\n        optOut\n        uid\n      }\n      userId\n    }\n  }\n"]);return r=function(){return e},e}let l=(0,i.gql)(r());n.Z=(e,n)=>{let{data:t,loading:o,error:i}=(0,s.a)(l,{skip:n,variables:{uidType:e},fetchPolicy:"cache-and-network"});return{data:t,loading:o,error:i}}},471554:function(e,n,t){t.d(n,{ZP:function(){return B}});var o,i,s,r,l=t(419393),a=t(554840),d=t(898744),u=t(488455),c=t(507661),g=t(636958),_=t(704150),p=t(847881),f=t(755928),v=t(11351);function h(){let e=(0,p._)(["\n  query postLoginQuery($action: String!, $code: String!) {\n    postLogin(action: $action, code: $code) {\n      status\n      isLoggedInPriorToTokenExchange\n      nextUrl\n    }\n  }\n"]);return h=function(){return e},e}let m=(0,f.gql)(h());(o=s||(s={})).SOCIAL="social",o.EXIT="exit",o.SUCCESS_POST_LOGIN="successPostLogin",o.SUCCESS_POST_SIGNUP="successPostSignup",o.SUCCESS="success",o.HEIGHT="height",o.FAILED="failed",o.FAILED_POST_LOGIN="failedPostLogin";var P=(e,n)=>(0,v.a)(m,{variables:{action:e,code:n},fetchPolicy:"network-only",notifyOnNetworkStatusChange:!0}),E=t(598029),S=t(136372);let x=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S.ZP.home;return e&&"none"!==e?e:n};var y=t(469302),L=t(737702),C=t(992440);let w=e=>{let{delayMs:n=300,fadeDurationMs:t=300,...o}=e;return(0,l.jsx)(O,{delayMs:n,fadeDurationMs:t,...o})},O=u.default.div.withConfig({componentId:"sc-9f971c8d-0"})(["@keyframes wait{0%{opacity:0;}100%{opacity:0;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}",""],e=>{let{delayMs:n,fadeDurationMs:t}=e;return"animation: wait ".concat(n,"ms, fade-in ").concat(t,"ms ").concat(n,"ms;")});var T=t(500057),A=t(921976),I=t(421695),k=t(226399),N=t(723460),R=t(954980),G=t(168666),D=t(666109),M=t(163198),b=t(971558),U=t(972567);(i=r||(r={})).Signup="Signup",i.Login="Login",i.Unknown="Unknown";let Z=u.default.div.withConfig({componentId:"sc-9b8946d2-0"})(["min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),j=e=>{var n,t,o,i,r,u,g,p,f,v,h,m;let{action:E,code:O,nextUrl:Z,loginMethod:j,loginAction:B,impersonatorCode:H}=e,{isCaviar:F}=(0,U.useExperience)(),{error:q,data:z,loading:$}=P(E,O),{data:Y,loading:V}=(0,N.Z)(F?k.zj6.UID_TYPE_CONSUMER_CAVIAR:k.zj6.UID_TYPE_CONSUMER,$),W=(null==z?void 0:z.postLogin)&&"success"===z.postLogin.status,X=((null==Y?void 0:null===(n=Y.getConsentsByUserTypeAndId)||void 0===n?void 0:n.consentsList)||[]).find(e=>(null==e?void 0:e.policy)===k.E0M.CONSENT_POLICY_DO_NOT_SELL),K=!X||!X.optOut;X&&!V&&(0,L.pC)(A.E.dd_non_essential_opt_in,K?"true":"false",31536e3,!0),d.useEffect(()=>{$||((0,L.pC)("dd_last_login_method",j,31536e3),(0,L.pC)("dd_last_login_action",B,31536e3)),V||(0,L.pC)(A.E.dd_non_essential_opt_in,K?"true":"false",31536e3,!0)},[$,V,K,Z,B,j]),d.useEffect(()=>{H&&L.N1.set(A.E.dd_loginas_cx,"true")},[H]);let Q=(0,I.qr)(e=>e.clientCookies);if($)return(0,l.jsx)(w,{children:(0,l.jsxs)(R.Z,{size:G.$f.large,children:[(0,l.jsx)(a.g,{}),(0,l.jsx)(D.x,{textAlign:M.H.center,children:T.ZP.t("postLogin_doNotRefresh")})]})});let J=!!(null==z?void 0:null===(t=z.postLogin)||void 0===t?void 0:t.isLoggedInPriorToTokenExchange);if(!$){let e=(null===(h=window)||void 0===h?void 0:h.opener)&&window.opener!==window?"popup":(null===(m=window)||void 0===m?void 0:m.parent)&&window.parent!==window?"iframe":"",n=W?"Signup"===E?s.SUCCESS_POST_SIGNUP:s.SUCCESS_POST_LOGIN:s.FAILED_POST_LOGIN;"popup"===e?null===(r=window)||void 0===r||null===(i=r.opener)||void 0===i||null===(o=i.postMessage)||void 0===o||o.call(i,{action:n,mode:e}):"iframe"===e&&(null===(p=window)||void 0===p||null===(g=p.parent)||void 0===g||null===(u=g.postMessage)||void 0===u||u.call(g,{action:n,mode:e},"*"))}if(q||!J&&!W)return(0,l.jsx)(c.Z,{showHeader:!0,code:"400",origin:"post-login",error:q,internalMessage:y.D.PostLoginError,type:y.N.Authorization});if(!$||J){let e=x(null!==(v=null==z?void 0:null===(f=z.postLogin)||void 0===f?void 0:f.nextUrl)&&void 0!==v?v:"none",Q.get(A.E.new_user_signup)?S.ZP.loggedOutHome:S.ZP.loggedInHome);(0,L.pC)("dd_cx_logged_in","true",31536e3),window.location.assign(e)}return(0,l.jsx)(w,{delayMs:1e3,children:(0,l.jsxs)(R.Z,{size:G.Uo.xLarge,children:[(0,l.jsx)(a.g,{}),(0,l.jsx)(D.x,{textAlign:M.H.center,children:T.ZP.t("postLogin_beingRedirected")}),(0,l.jsx)(w,{delayMs:6e3,children:(0,l.jsxs)(R.Z,{size:G.Uo.xxxSmall,children:[(0,l.jsx)(D.x,{textAlign:M.H.center,size:b.yH.small,children:T.ZP.t("postLogin_ifNotRedirected")}),(0,l.jsx)(_.Z,{type:C.L$.flatPrimary,href:Z,children:T.ZP.t("postLogin_clickHere")})]})})]})})};var B=()=>{let{location:{searchParams:e}}=(0,g.yj)(),{action:n,code:t,nextUrl:o,loginMethod:i,loginAction:s,impersonatorCode:r}={action:(0,E.Ru)(e.action)||"Unknown",code:(0,E.Ru)(e.code),impersonatorCode:(0,E.Ru)(e.impersonator_code),loginMethod:(0,E.Ru)(e.method)||"unknown",loginAction:(0,E.Ru)(e.action)||"unknown",nextUrl:e.state&&"none"!==e.state?(0,E.Ru)(e.state):S.ZP.home};return t?(0,l.jsx)(Z,{children:(0,l.jsx)(j,{action:n,code:t,impersonatorCode:r,nextUrl:o,loginAction:s,loginMethod:i})}):(0,l.jsx)(c.Z,{code:"401",origin:"post-login",internalMessage:y.D.PostLoginMissingCode,type:y.N.MissingParameter})}},384205:function(e,n,t){t.d(n,{G:function(){return o},T:function(){return i}});let o={FOOD:"food",RESTAURANTS:"restaurants",GROCERY:"grocery",ALCOHOL:"alcohol",CUISINE:"cuisine",DISH:"dish"},i=["tex-mex","black-owned","convenience-exclusive"]},992468:function(e,n,t){t.d(n,{Ae:function(){return E},D7:function(){return x},DZ:function(){return d},Fb:function(){return _},Gu:function(){return l},L8:function(){return y},MD:function(){return c},O8:function(){return A},Oe:function(){return r},Qu:function(){return L},RE:function(){return S},Ut:function(){return w},Wy:function(){return u},dw:function(){return g},ek:function(){return p},gj:function(){return s},hT:function(){return P},iH:function(){return m},jf:function(){return f},pw:function(){return a},to:function(){return v},w$:function(){return h},xC:function(){return O},xO:function(){return C},yS:function(){return I},z:function(){return k},zH:function(){return T}});var o=t(355974),i=t(384205);let s="landing_seo_page_load",r="package_pickup_seo_page_load",l="business_sitemap_page_load",a="seo_action_confirm_address";i.G.FOOD,i.G.RESTAURANTS,i.G.CUISINE,i.G.DISH,i.G.ALCOHOL,i.G.GROCERY;let d="seo_home_page_address_complete",u="seo_home_page_signin_click",c="seo_home_page_signup_click",g="seo_home_page_dasher_cta_click",_="seo_home_page_merchant_cta_click",p="seo_home_page_cta_click",f="seo_landing_page_no_offers_fallback",v="seo_home_page_app_download_cta_click",h="seo_home_page_v3_sign_in_click",m={EMAIL:"email",GOOGLE:o.i8.GOOGLE,FACEBOOK:o.i8.FACEBOOK,APPLE:o.i8.APPLE},P="seo_home_page_v3_toggle_entry",E={NEAR_BY:"near_by",IDENTITY:"identity"},S="seo_breadcrumb_click",x="seo_auto_quick_add_success",y="seo_auto_quick_add_failure",L="seo_internal_link_tab_click",C="seo_internal_link_click",w="seo_cookie_banner_display",O="seo_cookie_banner_click",T="seo_transition_home_page_address_modal_view",A="seo_transition_address_complete",I="seo_discovery_page_popular_items_button_click",k="seo_discovery_page_popular_items_card_click"},904650:function(e,n,t){t.d(n,{vU:function(){return c},hJ:function(){return a},u0:function(){return g},Ih:function(){return _}});var o,i,s,r,l,a,d=t(966262),u=t(858714);t(421695),t(921976),t(471554),u.P.seoBreadcrumbsConfig,u.P.seoBizPageRedesignV0,u.P.seoBizPageRedesignV1,u.P.seoContentfulLoggedOutHomePage,(o=r||(r={})).CONTROL="control",o.TREATMENT="treatment",(i=l||(l={})).CONTROL="control",i.TREATMENT_SCROLL="treatment_scroll",i.TREATMENT_SWITCH="treatment_switch",(s=a||(a={})).NUX_OFFER="nux-offer",s.SLOT_ANIMATION="slot-animation",s.CONTROL="control";let c=["nux-offer","slot-animation"],g=()=>({isCookieBannerEnabled:(0,d.useDVSBoolean)(u.P.enableCookieBanner,!1)}),_=()=>({isSEOInpFixesEnabled:(0,d.useDVSBoolean)(u.P.seoInpFixes,!1)})}}]);