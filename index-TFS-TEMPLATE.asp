
<!DOCTYPE html>

<html lang="en" dir="ltr" class="no-js">

    <head>

        <meta http-equiv="X-UA-Compatible" content="IE=edge">    
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

        <title></title>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="no" />
            
        <script>

            var accountId = '';
            var companyAbbr = '';
            var companyId = '';
            var randomNumber = Math.floor(Math.random()*11);

            var homeHeroPhotos = ["img/home-photo-1.jpg",
                                    "img/home-photo-2.jpg",
                                    "img/home-photo-3.jpg",
                                    "img/home-photo-4.jpg",
                                    "img/home-photo-5.jpg"];

            var homeHeroMobile = "img/home-photo-mobile.jpg";

        </script>

        <script type="text/javascript"> 
    
            $(document).ready(function(){

                //var ShowClientInfo2 = '<%=request.Cookies("sessionclientid") %>'; 

                var ShowClientInfo2 = '42314576'; // on
                //var ShowClientInfo2 = ''; // off
            
                if(ShowClientInfo2.length > 0){
                    
                    $("body").addClass("rn-site-logged-in");
                    
                }else{
                    
                    $("body").addClass("rn-site-logged-out");
                }

            });

        </script>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="http://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css">
        <link rel="stylesheet" href="css/app.css">
            
    </head>

    <body class="rn-home-page" role="document"><!--<![endif]-->

        <header class="rn-site-header">
            
            <div class="rn-container">

                <div class="rn-site-header-property-watch">

                    <!-- #include virtual="modules/internet/extranet/extranetclientnav_tablefree.inc"-->
                    
                </div>

                <div class="rn-site-header-logo">
                    <a href="/" title="Click here for our Home Page">
                      <img class="rn-home-logo" src="img/logo.png" alt="[X]">
                    </a>
                </div>

                <nav class="rn-site-header-nav" role="navigation">

                    <% Response.Write ( PagesToUse.Item([COMPANY-NAV-ID]) ) %>

                    <!-- <ul id="rnSiteHeaderNavMenu" class="rn-site-header-nav-menu">

                        <li><a href="">Home</a></li>

                        <li class="has-dropdown"><a href="#">Search</a>
                            <ul class="dropdown">
                                <li><a href="/[COMPANY-ABR]/?p=findahome.asp">Search</a></li>
                            </ul>
                        </li>
                        
                    </ul> -->

                    <a href="#" class="rn-site-header-nav-button rn-site-navigation-toggle" id="rnSiteHeaderNavButton"><span class="rn-site-header-nav-burger"></span><span class="text">Menu</span></a>
                    <a href="/[X]/?p=findahome.asp&page=extranet&selected=dashboard" class="rn-site-header-nav-button rn-search-user-toggle rn-show-logged-out rn-logged-in"><i class="rn-icon-user"></i></a>
                    <a href="/[X]/?p=findahome.asp&page=extranet&selected=dashboard" class="rn-site-header-nav-button rn-search-user-toggle rn-show-logged-in rn-logged-out"><i class="rn-icon-user-solid"></i></a>
                    <a href="#" class="rn-site-header-nav-button rn-search-criteria-toggle" id="rnSearchCriteriaButton"><i class="rn-icon-search"></i></a>

                </nav>

            </div>
            
        </header>

        <section class="rn-site-content">
            <div class="rn-site-interior">

            </div>
        </section>

        <section class="rn-home">
            <div class="rn-home-hero-container">
                <div id="rnHomePhotos" class="rn-home-hero">
                    <!-- images loaded here from js -->
                </div>
            </div>
        </section>
            
        <footer class="rn-site-footer">

            <div class="rn-container">

                <div class="rn-site-footer-seo-links">
                    <ul class="rn-list-reset">
                        <li><a href=""></a></li>
                    </ul>
                </div>
              
                <div class="rn-site-footer-disclaimer">
                
                    <!-- #include file="copyright.inc"-->

                    <!-- <span class="disclaimer">
                            &copy; 2001 - 2016 <a href="http://www.reliancenetwork.com" target="_blank" title="Click here for Reliance Network">Reliance Network</a> and Intracoastal Realty. All rights reserved. U.S. Reg. Copyright TX-5-910-991, TX-5-910-992, TX-5-910-993, and TX-5-910-994. Equal Housing Opportunity. 
                    </span>  -->

                </div>


                <div class="rn-site-footer-reliance-links">
                    <a href="http://www.reliancenetwork.com" target="_blank" role="link" title="Click here to learn more about Reliance Network"><img src="img/rn-logo-black.png" alt=""></a>
                    <a href="<%=application('intraneturl')%>" target="_top" onmouseover="self.status='Agents Only'; return true" onmouseout="self.status=''; return true" role="link" title="Agent only Access"><span>Agent Access</span></a>
                </div>
            </div>

        </footer>
        
        <script src="js/slick.min.js" type="text/javascript"></script>
        <script src="js/app.js"></script>
        <script src="js/home.js"></script>
        
    </body>

</html>