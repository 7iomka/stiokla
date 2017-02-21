//
// function requireAll(r) { r.keys().forEach(r); }
// requireAll(
//   require.context('./components/', true, /\.js$/)
// );

/// import actions

  import siteGallery from './components/common/_site-gallery/site-gallery.js';

	import './components/common/accordion/accordion.js';
	import './components/common/base-slider/base-slider.js';
	import './components/common/button/button.js';
	import './components/common/calendar/calendar.js';
	import './components/common/gallery-slider/gallery-slider.js';
	import './components/common/goup/goup.js';
	import './components/common/news-list/news-list.js';
	import './components/common/product-group-item/product-group-item.js';
	import './components/common/responsive-table/responsive-table.js';
	import './components/common/spinner/spinner.js';
	import './components/common/video-review/video-review.js';
	import './components/global/navigation/navigation.js';





  import './components/common/accordion/accordion-init.js';



// init actions
domready(function () {
  const publicApi = {
    siteGallery: siteGallery.init()
  }

  exports.publicApi =  {
    ...publicApi
  };
})

  // var siteGalleryInit = siteGallery();

// var glob = require("glob")
// var path = require('path');
// var basePath = './components/';
//
// var mods = glob.sync(path.join(basePath, '**/*.js')).reduce(function (loaded, file) {
//   var mod = require(file);
//
//   // mod is a function with a name, so use it!
//   if (mod instanceof Function) {
//     loaded[mod.name] = mod;
//   } else {
//     Object.keys(mod).forEach(function (property) {
//       loaded[property] = mod.property;
//     });
//   }
//
//   return loaded;
// }, {});

// console.log(mods);
