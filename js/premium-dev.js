var navItemsClasses, pageBody, pageClass, urlPathname, urlSearch;

// navItemsClasses = function() {
//   $('#rnSiteHeaderNavMenu li').removeAttr('class');
//   $('#rnSiteHeaderNavMenu a').removeAttr('class');
//   $('#rnSiteHeaderNavMenu .submenu-list').attr('class', 'dropdown').parent('li').addClass('has-dropdown');
// };

urlPathname = window.location.pathname;

urlSearch = window.location.search;

pageBody = $('body');

pageClass = function() {
  var styleSheet;
  if (devPage == "home") {
    return pageBody.addClass('rn-home-page');
  } else if (devPage == "search") {
    pageBody.addClass('rn-search-page');
    styleSheet = $('link[rel=stylesheet][href*="app"]').attr('href');
    styleSheet = styleSheet.replace('app', 'search');
    return $('link[rel=stylesheet][href*="app"]').attr('href', styleSheet);
  } else if (devPage == "agent") {
    return pageBody.addClass('rn-agent-office-page');
  } else {
    return pageBody.addClass('rn-interior-page');
  }
};

//navItemsClasses();

pageClass();