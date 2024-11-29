import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_am83Uo3U.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_BpQ5X7e2.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/callumfallows/repos/tradingwizard/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BScVxmeO.js"}],"styles":[{"type":"external","src":"/_astro/index.CDs2g_jC.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact-form","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact-form\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact-form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact-form.ts","pathname":"/api/contact-form","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DxtuMXT5.js"}],"styles":[{"type":"external","src":"/_astro/index.CDs2g_jC.css"},{"type":"inline","content":".background-wrapper[data-astro-cid-jahph4uu]{position:relative;width:100%;height:100%;overflow:hidden}.background-overlay[data-astro-cid-jahph4uu]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--overlayColor);z-index:1}img[data-astro-cid-jahph4uu]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.content[data-astro-cid-jahph4uu]{position:relative;z-index:2}.invalid-feedback[data-astro-cid-nf3sa6l5],.empty-feedback[data-astro-cid-nf3sa6l5]{display:none}.was-validated[data-astro-cid-nf3sa6l5] :-moz-placeholder-shown:invalid[data-astro-cid-nf3sa6l5]~.empty-feedback[data-astro-cid-nf3sa6l5]{display:block}.was-validated[data-astro-cid-nf3sa6l5] :placeholder-shown:invalid[data-astro-cid-nf3sa6l5]~.empty-feedback[data-astro-cid-nf3sa6l5]{display:block}.was-validated[data-astro-cid-nf3sa6l5] :not(:-moz-placeholder-shown):invalid[data-astro-cid-nf3sa6l5]~.invalid-feedback[data-astro-cid-nf3sa6l5]{display:block}.was-validated[data-astro-cid-nf3sa6l5] :not(:placeholder-shown):invalid[data-astro-cid-nf3sa6l5]~.invalid-feedback[data-astro-cid-nf3sa6l5]{display:block}.is-invalid[data-astro-cid-nf3sa6l5],.was-validated[data-astro-cid-nf3sa6l5] :invalid[data-astro-cid-nf3sa6l5]{border-color:#dc3545}.time-block[data-astro-cid-5ichiwjl]{display:flex;flex-direction:column;align-items:center;padding:1rem;background:#fff;border-radius:.5rem;min-width:80px;box-shadow:0 2px 4px #0000001a}@keyframes slideInFromLeft{0%{transform:translate(-100%);opacity:0}to{transform:translate(0);opacity:1}}.animate-item-1[data-astro-cid-zi4ldr3x],.animate-item-2[data-astro-cid-zi4ldr3x],.animate-item-3[data-astro-cid-zi4ldr3x]{opacity:0;animation:slideInFromLeft .5s ease-out forwards}.animate-item-1[data-astro-cid-zi4ldr3x]{animation-delay:0s}.animate-item-2[data-astro-cid-zi4ldr3x]{animation-delay:1s}.animate-item-3[data-astro-cid-zi4ldr3x]{animation-delay:1.6s}.animate-item-4[data-astro-cid-zi4ldr3x]{animation-delay:1.9s}.contact-form[data-astro-cid-zi4ldr3x]{box-shadow:0 0 15px 3px #2986aecc;border-style:solid;border-width:10px 10px 10px 10px;border-color:#11536f}.bg-gradient-custom[data-astro-cid-zi4ldr3x]{background:linear-gradient(147deg,#16192c 42%,#327ab4)}@keyframes slideIn{0%{opacity:0;transform:translate(-20px)}to{opacity:1;transform:translate(0)}}@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-point[data-astro-cid-zi4ldr3x]{opacity:0;animation:slideIn .8s ease-out forwards}.contact-form[data-astro-cid-zi4ldr3x]{animation:fadeIn 1s ease-out forwards}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}.card[data-astro-cid-dd5txfcy]{box-shadow:0 0 5px 2px #2986aecc}.hero-section[data-astro-cid-hxrq4k5a]{background-size:cover;background-position:bottom;background-position:left}.bg-gradient-custom[data-astro-cid-u4btoyjk]{background:linear-gradient(147deg,#16192c 42%,#327ab4)}.hero-section[data-astro-cid-4khl2bf4]{background-size:cover;background-position:bottom;background-position:left}.star-icon[data-astro-cid-koa6grap]{transition:transform .5s ease}.bg-gradient-custom[data-astro-cid-fleeheb5],.bg-gradient-custom[data-astro-cid-ewn3ylzv]{background:linear-gradient(147deg,#16192c 42%,#327ab4)}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://tradingwizard.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/callumfallows/repos/tradingwizard/src/components/hero.astro",{"propagation":"in-tree","containsHead":false}],["/Users/callumfallows/repos/tradingwizard/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/callumfallows/repos/tradingwizard/src/components/ui/Card.astro",{"propagation":"in-tree","containsHead":false}],["/Users/callumfallows/repos/tradingwizard/src/components/about.astro",{"propagation":"in-tree","containsHead":false}],["/Users/callumfallows/repos/tradingwizard/src/components/intro.astro",{"propagation":"in-tree","containsHead":false}],["/Users/callumfallows/repos/tradingwizard/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact-form@_@ts":"pages/api/contact-form.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/callumfallows/repos/tradingwizard/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/callumfallows/repos/tradingwizard/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_Bj5qZmqO.mjs","\u0000@astrojs-manifest":"manifest_BDebWZy1.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DxtuMXT5.js","/astro/hoisted.js?q=1":"_astro/hoisted.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.CVs5ScIt.png","/_astro/mulish-cyrillic-ext-wght-normal.CAYBFnPz.woff2","/_astro/mulish-vietnamese-wght-normal.DIaBEqcE.woff2","/_astro/mulish-cyrillic-wght-normal.BBXUw45Z.woff2","/_astro/mulish-latin-ext-wght-normal.DFSbZYTr.woff2","/_astro/mulish-latin-wght-normal.D4u9DX0e.woff2","/_astro/index.CDs2g_jC.css","/bg-alternative.jpg","/favicon.svg","/hero-bg.jpg","/jonathan-girard.jpg","/logo.png","/opengraph.jpg","/robots.txt","/_astro/hoisted.BScVxmeO.js","/_astro/hoisted.DxtuMXT5.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"mtauCYZjZS3li5Y6T2gY+COT+xZyBxugJq+TzbJ5quk=","experimentalEnvGetSecretEnabled":false});

export { manifest };
