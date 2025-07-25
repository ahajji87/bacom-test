const STYLES = ['/styles/styles.css'];
const CONFIG = {
  imsClientId: 'bacom',
  local: {
    pdfViewerClientId: '3b685312b5784de6943647df19f1f492',
    pdfViewerReportSuite: 'adbadobedxqa',
  },
  page: {
    pdfViewerClientId: 'c30e0765380b47219774251d8eb80005',
    pdfViewerReportSuite: 'adbadobedxqa',
  },
  live: {
    pdfViewerClientId: '5e5a5032800f4918844f13b344f58db6',
    pdfViewerReportSuite: 'adbadobedxqa',
  },
  stage: {
    edgeConfigId: '7d1ba912-10b6-4384-a8ff-4bfb1178e869',
    pdfViewerClientId: '1573324fdb644866b51580fbaa5b6465',
    pdfViewerReportSuite: 'adbadobedxqa',
  },
  prod: {
    edgeConfigId: '65acfd54-d9fe-405c-ba04-8342d6782ab0',
    pdfViewerClientId: '16769f4e1e7b4e3b94c1ed23eafb8870',
    pdfViewerReportSuite: 'adbadobenonacdcprod,adbadobedxprod,adbadobeprototype',
  },
  hlxPage: {
    pdfViewerClientId: '3b685312b5784de6943647df19f1f492',
    pdfViewerReportSuite: 'adbadobedxqa',
  },
  hlxLive: {
    pdfViewerClientId: '23bd4fff42fc4b4da38b3d89492a0abc',
    pdfViewerReportSuite: 'adbadobedxqa',
  },
  locales: {
    '': { ietf: 'en-US', tk: 'hah7vzn.css' },
    ae_ar: { ietf: 'ar', tk: 'qxw8hzm.css', dir: 'rtl' },
    ae_en: { ietf: 'en', tk: 'hah7vzn.css' },
    africa: { ietf: 'en', tk: 'hah7vzn.css' },
    ar: { ietf: 'es-AR', tk: 'hah7vzn.css', exl: 'es' },
    at: { ietf: 'de-AT', tk: 'hah7vzn.css', exl: 'de' },
    au: { ietf: 'en-AU', tk: 'hah7vzn.css' },
    be_en: { ietf: 'en-BE', tk: 'hah7vzn.css' },
    be_fr: { ietf: 'fr-BE', tk: 'hah7vzn.css', exl: 'fr' },
    be_nl: { ietf: 'nl-BE', tk: 'qxw8hzm.css', exl: 'nl' },
    bg: { ietf: 'bg-BG', tk: 'qxw8hzm.css' },
    br: { ietf: 'pt-BR', tk: 'hah7vzn.css', exl: 'pt-br' },
    ca_fr: { ietf: 'fr-CA', tk: 'hah7vzn.css', exl: 'fr' },
    ca: { ietf: 'en-CA', tk: 'hah7vzn.css' },
    ch_de: { ietf: 'de-CH', tk: 'hah7vzn.css', exl: 'de' },
    ch_fr: { ietf: 'fr-CH', tk: 'hah7vzn.css', exl: 'fr' },
    ch_it: { ietf: 'it-CH', tk: 'hah7vzn.css', exl: 'it' },
    cl: { ietf: 'es-CL', tk: 'hah7vzn.css', exl: 'es' },
    cn: { ietf: 'zh-CN', tk: 'qxw8hzm', exl: 'zh-hans' },
    co: { ietf: 'es-CO', tk: 'hah7vzn.css', exl: 'es' },
    cr: { ietf: 'es-419', tk: 'hah7vzn.css' },
    cy_en: { ietf: 'en-CY', tk: 'hah7vzn.css' },
    cz: { ietf: 'cs-CZ', tk: 'qxw8hzm.css' },
    de: { ietf: 'de-DE', tk: 'hah7vzn.css', exl: 'de' },
    dk: { ietf: 'da-DK', tk: 'qxw8hzm.css' },
    ec: { ietf: 'es-419', tk: 'hah7vzn.css' },
    ee: { ietf: 'et-EE', tk: 'qxw8hzm.css' },
    eg_ar: { ietf: 'ar', tk: 'qxw8hzm.css', dir: 'rtl' },
    eg_en: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    el: { ietf: 'el', tk: 'qxw8hzm.css' },
    es: { ietf: 'es-ES', tk: 'hah7vzn.css', exl: 'es' },
    fi: { ietf: 'fi-FI', tk: 'qxw8hzm.css' },
    fr: { ietf: 'fr-FR', tk: 'hah7vzn.css', exl: 'fr' },
    gr_el: { ietf: 'el', tk: 'qxw8hzm.css' },
    gr_en: { ietf: 'en-GR', tk: 'hah7vzn.css' },
    gt: { ietf: 'es-419', tk: 'hah7vzn.css' },
    hk_en: { ietf: 'en-HK', tk: 'hah7vzn.css' },
    hk_zh: { ietf: 'zh-HK', tk: 'jay0ecd', exl: 'zh-hant' },
    hu: { ietf: 'hu-HU', tk: 'qxw8hzm.css' },
    id_en: { ietf: 'en', tk: 'hah7vzn.css' },
    id_id: { ietf: 'id', tk: 'qxw8hzm.css' },
    ie: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    il_en: { ietf: 'en-IL', tk: 'hah7vzn.css' },
    il_he: { ietf: 'he', tk: 'qxw8hzm.css', dir: 'rtl' },
    in_hi: { ietf: 'hi', tk: 'qxw8hzm.css' },
    in: { ietf: 'en-IN', tk: 'hah7vzn.css' },
    it: { ietf: 'it-IT', tk: 'hah7vzn.css', exl: 'it' },
    jp: { ietf: 'ja-JP', tk: 'dvg6awq', exl: 'ja' },
    kr: { ietf: 'ko-KR', tk: 'qjs5sfm', exl: 'ko' },
    kw_ar: { ietf: 'ar', tk: 'qxw8hzm.css', dir: 'rtl' },
    kw_en: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    la: { ietf: 'es-LA', tk: 'hah7vzn.css', exl: 'es' },
    langstore: { ietf: 'en-US', tk: 'hah7vzn.css' },
    lt: { ietf: 'lt-LT', tk: 'qxw8hzm.css' },
    lu_de: { ietf: 'de-LU', tk: 'hah7vzn.css', exl: 'de' },
    lu_en: { ietf: 'en-LU', tk: 'hah7vzn.css' },
    lu_fr: { ietf: 'fr-LU', tk: 'hah7vzn.css', exl: 'fr' },
    lv: { ietf: 'lv-LV', tk: 'qxw8hzm.css' },
    mena_ar: { ietf: 'ar', tk: 'qxw8hzm.css', dir: 'rtl' },
    mena_en: { ietf: 'en', tk: 'hah7vzn.css' },
    mt: { ietf: 'en-MT', tk: 'hah7vzn.css' },
    mx: { ietf: 'es-MX', tk: 'hah7vzn.css', exl: 'es' },
    my_en: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    my_ms: { ietf: 'ms', tk: 'qxw8hzm.css' },
    ng: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    nl: { ietf: 'nl-NL', tk: 'qxw8hzm.css', exl: 'nl' },
    no: { ietf: 'no-NO', tk: 'qxw8hzm.css' },
    nz: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    pe: { ietf: 'es-PE', tk: 'hah7vzn.css', exl: 'es' },
    ph_en: { ietf: 'en', tk: 'hah7vzn.css' },
    ph_fil: { ietf: 'fil-PH', tk: 'qxw8hzm.css' },
    pl: { ietf: 'pl-PL', tk: 'qxw8hzm.css' },
    pr: { ietf: 'es-419', tk: 'hah7vzn.css' },
    pt: { ietf: 'pt-PT', tk: 'hah7vzn.css', exl: 'pt-br' },
    qa_ar: { ietf: 'ar', tk: 'qxw8hzm.css', dir: 'rtl' },
    qa_en: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    ro: { ietf: 'ro-RO', tk: 'qxw8hzm.css' },
    ru: { ietf: 'ru-RU', tk: 'qxw8hzm.css' },
    sa_ar: { ietf: 'ar', tk: 'qxw8hzm.css', dir: 'rtl' },
    sa_en: { ietf: 'en', tk: 'hah7vzn.css' },
    se: { ietf: 'sv-SE', tk: 'qxw8hzm.css', exl: 'sv' },
    sg: { ietf: 'en-SG', tk: 'hah7vzn.css' },
    si: { ietf: 'sl-SI', tk: 'qxw8hzm.css' },
    sk: { ietf: 'sk-SK', tk: 'qxw8hzm.css' },
    th_en: { ietf: 'en', tk: 'hah7vzn.css' },
    th_th: { ietf: 'th', tk: 'lqo2bst.css' },
    tr: { ietf: 'tr-TR', tk: 'qxw8hzm.css' },
    tw: { ietf: 'zh-TW', tk: 'jay0ecd', exl: 'zh-hant' },
    ua: { ietf: 'uk-UA', tk: 'qxw8hzm.css' },
    uk: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    vn_en: { ietf: 'en-GB', tk: 'hah7vzn.css' },
    vn_vi: { ietf: 'vi', tk: 'qxw8hzm.css' },
    za: { ietf: 'en-GB', tk: 'hah7vzn.css' },
  },
  geoRouting: 'on',
  productionDomain: 'business.adobe.com',
  prodDomains: ['business.adobe.com', 'www.adobe.com'],
  autoBlocks: [
    { iframe: 'https://adobe-ideacloud.forgedx.com' },
    { iframe: 'https://adobe.ideacloud.com' },
  ],
  htmlExclude: [
    /business\.adobe\.com\/(\w\w(_\w\w)?\/)?blog(\/.*)?/,
  ],
  useDotHtml: true,
  dynamicNavKey: 'bacom',
  stageDomainsMap: {
    'business.stage.adobe.com': { 'business.adobe.com': 'origin' },
    '.business-graybox.adobe.com': { 'business.adobe.com': 'origin' },
  },
  jarvis: {
    id: 'BACOMChat1-Worldwide',
    version: '1.0',
    onDemand: false,
  },
};

const eagerLoad = (img) => {
  img?.setAttribute('loading', 'eager');
  img?.setAttribute('fetchpriority', 'high');
};

const loadStyle = (path) => {
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', path);
  document.head.appendChild(link);
};

export const getLCPImages = (doc) => {
  const lcpSection = doc.querySelector('.marquee, .hero-marquee, .section-metadata img');
  if (!lcpSection) return [doc.querySelector('img')];
  if (lcpSection.nodeName === 'IMG') return [lcpSection];
  if (lcpSection.classList.contains('split')) return lcpSection.querySelectorAll('img');
  const marqueeDiv = lcpSection.firstElementChild;
  const foregroundImg = lcpSection.querySelector(':scope > div:last-child img');
  if (marqueeDiv.childElementCount > 1) {
    if (window.innerWidth < 600) return [marqueeDiv.querySelector(':scope > div:first-child img') || foregroundImg];
    if (window.innerWidth >= 600 && window.innerWidth < 1200) return [marqueeDiv.querySelector(':scope > div:nth-child(2) img') || foregroundImg];
    if (window.innerWidth >= 1200) return [marqueeDiv.querySelector(':scope > div:last-child img') || foregroundImg];
  }
  return [lcpSection.querySelector('img') || doc.querySelector('img')];
};

(async function loadLCPImage() {
  const lcpImages = getLCPImages(document);
  lcpImages?.forEach(eagerLoad);
}());

export function setLibs(location) {
  const { hostname, search } = location;
  if (!['.hlx.', '.aem.', '.stage.', 'local'].some((i) => hostname.includes(i))) return '/libs';
  const branch = new URLSearchParams(search).get('milolibs') || 'main';
  if (branch === 'local') return 'http://localhost:6456/libs';
  return branch.includes('--') ? `https://${branch}.aem.live/libs` : `https://${branch}--milo--adobecom.aem.live/libs`;
}

export const LIBS = setLibs(window.location);

(function loadStyles() {
  const paths = [`${LIBS}/styles/styles.css`];
  if (STYLES) {
    paths.push(...(Array.isArray(STYLES) ? STYLES : [STYLES]));
  }
  paths.forEach(loadStyle);
}());

export function transformExlLinks(locale) {
  if (locale.ietf === 'en-US' || !locale.exl) return;
  const exLinks = document.querySelectorAll('a[href*="experienceleague.adobe.com"]');
  exLinks.forEach((link) => {
    if (link.href.includes('#_dnt')) return;
    if (link.href.includes('.html?lang=en')) {
      link.href = link.href.replace('.html?lang=en', '').replace('https://experienceleague.adobe.com/', `https://experienceleague.adobe.com/${locale.exl}/`);
    }
    link.href = link.href.replace('/en/', `/${locale.exl}/`);
  });
}

(async function loadPage() {
  const {
    loadArea, loadLana, setConfig, createTag, getMetadata, getLocale,
  } = await import(`${LIBS}/utils/utils.js`);
  if (getMetadata('template') === '404') window.SAMPLE_PAGEVIEWS_AT_RATE = 'high';

  const metaCta = document.querySelector('meta[name="chat-cta"]');
  if (metaCta && !document.querySelector('.chat-cta')) {
    const isMetaCtaDisabled = metaCta?.content === 'off';
    if (!isMetaCtaDisabled) {
      const chatDiv = createTag('div', { class: 'chat-cta meta-cta', 'data-content': metaCta.content });
      const lastSection = document.body.querySelector('main > div:last-of-type');
      if (lastSection) lastSection.insertAdjacentElement('beforeend', chatDiv);
    }
  }

  const chatWidgetFrag = document.querySelector('meta[name="chat-widget"');
  if (chatWidgetFrag) {
    const a = createTag('a', { href: chatWidgetFrag.content }, chatWidgetFrag.content);
    const lastSection = document.body.querySelector('main > div:last-of-type');
    if (lastSection) lastSection.insertAdjacentElement('beforeend', a);
  }

  setConfig({ ...CONFIG, miloLibs: LIBS });
  loadLana({ clientId: 'bacom', tags: 'info', endpoint: 'https://business.adobe.com/lana/ll', endpointStage: 'https://business.stage.adobe.com/lana/ll' });
  transformExlLinks(getLocale(CONFIG.locales));
  await loadArea();

  if (document.querySelector('meta[name="aa-university"]')) {
    const { default: registerAAUniversity } = await import('./aa-university.js');
    window.addEventListener('mktoSubmit', registerAAUniversity);
  }
  if (document.querySelector('.faas')) {
    loadStyle('/styles/faas.css');
  }
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.responseStatus === 404) window.lana?.log(`The resource ${entry.name} returned a 404 status.`, { tags: 'resource-404' });
    });
  });
  observer.observe({ type: 'resource', buffered: true });
}());
