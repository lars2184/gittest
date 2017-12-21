var hasDropdown, navMenu, navMenuButton;

navMenuButton = $('#rnSiteHeaderNavButton');

navMenu = $('#rnSiteHeaderNavMenu');

hasDropdown = $('.has-dropdown > a');

navMenuButton.on('click', function(e) {
  navMenuButton.toggleClass('is-active');
  navMenu.slideToggle();
  hasDropdown.on('click', function(e) {
    $(this).next('.dropdown').slideToggle();
  });
  e.preventDefault();
});
