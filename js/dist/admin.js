(()=>{var t={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},d:(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const r=flarum.core.compat.app;var a="tituspijean-auth-ldap.",s="tituspijean-auth-ldap.admin.settings.";t.n(r)().initializers.add("tituspijean-auth-ldap",(function(t){t.extensionData.for("tituspijean-auth-ldap").registerSetting({setting:a+"method_name",label:t.translator.trans(s+"method_name"),type:"text",placeholder:"YunoHost"}).registerSetting({setting:a+"hosts",label:t.translator.trans(s+"hosts"),type:"text",placeholder:"localhost"}).registerSetting({setting:a+"base_dn",label:t.translator.trans(s+"base_dn"),type:"text",placeholder:"ou=users,dc=yunohost,dc=org"}).registerSetting({setting:a+"filter",label:t.translator.trans(s+"filter"),type:"text",placeholder:"(&(objectClass=posixAccount)(permission=cn=flarum.main,ou=permission,dc=yunohost,dc=org)"}).registerSetting({setting:a+"port",label:t.translator.trans(s+"port"),type:"text",placeholder:"389"}).registerSetting({setting:a+"follow_referrals",label:t.translator.trans(s+"follow_referrals"),type:"boolean",default:!1}).registerSetting({setting:a+"use_ssl",label:t.translator.trans(s+"use_ssl"),type:"boolean",default:!0}).registerSetting({setting:a+"use_tls",label:t.translator.trans(s+"use_tls"),type:"boolean",default:!0}).registerSetting({setting:a+"admin_dn",label:t.translator.trans(s+"admin_dn"),type:"text",placeholder:"cn=admin,dc=yunohost,dc=org"}).registerSetting({setting:a+"admin_password",label:t.translator.trans(s+"admin_password"),type:"password",placeholder:"password"}).registerSetting({setting:a+"search_user_fields",label:t.translator.trans(s+"search_user_fields"),type:"text",placeholder:"uid,mail"}).registerSetting({setting:a+"user_mail",label:t.translator.trans(s+"user_mail"),type:"text",placeholder:"mail"}).registerSetting({setting:a+"user_username",label:t.translator.trans(s+"user_username"),type:"text",placeholder:"uid"}).registerSetting({setting:a+"onlyUse",label:t.translator.trans(s+"onlyUse"),type:"boolean",default:!1}).registerSetting({setting:a+"group",label:t.translator.trans(s+"group"),type:"text",default:!1})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map