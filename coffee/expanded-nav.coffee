navMenuButton = $('#rnSiteHeaderNavButton')
navMenu = $('#rnSiteHeaderNavMenu')
hasDropdown = $('.has-dropdown > a')

navMenuButton.on 'click', (e) ->
  navMenuButton.toggleClass 'is-active'
  navMenu.slideToggle()
  hasDropdown.on 'click', (e) ->
        $(this).next('.dropdown').slideToggle()
        return
  e.preventDefault()
  return


  