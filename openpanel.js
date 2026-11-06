(function () {
  'use strict';

  function permitted() {
    var location = window.location;
    if (location.protocol !== 'https:' || !['soypoll.com', 'www.soypoll.com'].includes(location.hostname) ||
        !['/', '/index.html'].includes(location.pathname)) return false;
    if (navigator.globalPrivacyControl === true || [navigator.doNotTrack, window.doNotTrack, navigator.msDoNotTrack].some(function (value) {
      return value === '1' || value === 'yes';
    })) return false;
    try { return window.localStorage.getItem('asc-analytics-off') !== '1'; }
    catch (error) { return false; }
  }

  if (window.__soyOpenPanelInitialized || !permitted()) return;
  window.__soyOpenPanelInitialized = true;
  window.op = window.op || function () {
    var queue = [];
    return new Proxy(function () { if (arguments.length) queue.push([].slice.call(arguments)); }, {
      get: function (_target, key) { return key === 'q' ? queue : function () { queue.push([key].concat([].slice.call(arguments))); }; },
      has: function (_target, key) { return key === 'q'; }
    });
  }();
  window.op('init', {
    clientId: 'ede252ad-44e2-4e45-98d5-dab50a631fbc',
    trackScreenViews: true,
    trackOutgoingLinks: false,
    trackAttributes: false,
    filter: function (event) {
      if (!permitted() || event.type !== 'track' || event.payload.name !== 'screen_view' || !event.payload.properties) return false;
      event.payload.properties.__path = window.location.origin + window.location.pathname;
      event.payload.properties.__referrer = '';
      return true;
    }
  });
  var script = document.createElement('script');
  script.src = 'https://openpanel.dev/op1.js';
  script.async = true;
  script.referrerPolicy = 'no-referrer';
  document.head.appendChild(script);
}());
