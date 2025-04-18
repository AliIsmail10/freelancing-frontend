"use strict";

// Ensure jQuery is loaded
if (typeof jQuery === "undefined") {
  console.error("jQuery is not loaded");
} else {
  // Document ready handler
  jQuery(function ($) {
    /* MOBILE MENU */
    function collapseMenu() {
      $('.wt-navigation ul li.menu-item-has-children, .wt-navdashboard ul li.menu-item-has-children, .wt-navigation ul li.menu-item-has-mega-menu').prepend('<span class="wt-dropdowarrow"><i class="lnr lnr-chevron-right"></i></span>');
      $(document).on('click', '.wt-navigation ul li.menu-item-has-children span, .wt-navigation ul li.menu-item-has-mega-menu span', function () {
        $(this).parent('li').toggleClass('wt-open');
        $(this).next().next().slideToggle(300);
      });
      $(document).on('click', '.wt-navdashboard ul li.menu-item-has-children', function () {
        $(this).toggleClass('wt-open');
        $(this).find('.sub-menu').slideToggle(300);
      });
    }
    collapseMenu();

    /* PROGRESS BAR */
    if ($('#wt-ourskill').length && typeof $.fn.appear === 'function') {
      $('#wt-ourskill').appear(function () {
        $('.skill-holder').each(function () {
          $(this).find('.skill-bar').animate({
            width: $(this).attr('data-percent')
          }, 2500);
        });
      });
    }

    /* GOOGLE MAP */
    if ($('#wt-locationmap').length && typeof $.fn.gmap3 === 'function') {
      $('#wt-locationmap').gmap3({
        marker: {
          address: '1600 Elizabeth St, Melbourne, Victoria, Australia',
          options: {
            title: 'Robert Frost Elementary School'
          }
        },
        map: {
          options: {
            zoom: 16,
            scrollwheel: false,
            disableDoubleClickZoom: true
          }
        }
      });
    }

    /* LOGIN FORM TOGGLE */
    $(document).on('click', '#wt-loginbtn, .wt-loginheader a', function (event) {
      event.preventDefault();
      $('.wt-loginarea .wt-loginformhold').slideToggle();
    });

    /* DROPDOWN RADIO TOGGLE */
    $(document).on('click', '.wt-dropdown', function (event) {
      event.preventDefault();
      $('.wt-radioholder').slideToggle();
    });

    /* BANNER VIDEO */
    if (typeof $.fn.prettyPhoto === 'function') {
      $("a[data-rel]").each(function () {
        $(this).attr("rel", $(this).data("rel"));
      });
      $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        social_tools: false
      });
    }

    /* RADIO BUTTON CHANGE */
    $(document).on('change', 'input:radio[name="searchtype"]', function () {
      var _type = $(this).data('title');
      $('.selected-search-type').html(_type);
    });

    /* COUNTER */
    if ($('#wt-statistics').length && typeof $.fn.countTo === 'function') {
      $('#wt-statistics').appear(function () {
        $('.wt-statisticcontent h3').countTo({
          formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
          }
        });
      });
    }

    /* OUR PROFESSIONALS FILTERABLE */
    if ($('.wt-teamfilter').length && typeof $.fn.isotope === 'function') {
      var $container = $('.wt-teamfilter');
      var $optionSets = $('.option-set');
      var $optionLinks = $optionSets.find('a');

      function doIsotopeFilter() {
        var isotopeFilter = '';
        $optionLinks.each(function () {
          var selector = $(this).attr('data-filter');
          var link = window.location.href;
          var firstIndex = link.indexOf('filter=');
          if (firstIndex > 0) {
            var id = link.substring(firstIndex + 7, link.length);
            if ('.' + id === selector) {
              isotopeFilter = '.' + id;
            }
          }
        });
        $container.isotope({
          itemSelector: '.mb-project',
          filter: isotopeFilter
        });
        $optionLinks.each(function () {
          var $this = $(this);
          var selector = $this.attr('data-filter');
          if (selector === isotopeFilter) {
            if (!$this.hasClass('mb-active')) {
              var $optionSet = $this.parents('.option-set');
              $optionSet.find('.mb-active').removeClass('mb-active');
              $this.addClass('mb-active');
            }
          }
        });
        $(document).on('click', '.option-set a', function () {
          var $this = $(this);
          var selector = $this.attr('data-filter');
          $container.isotope({ filter: selector });
          if (!$this.hasClass('mb-active')) {
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.mb-active').removeClass('mb-active');
            $this.addClass('mb-active');
          }
          return false;
        });
      }
      setTimeout(doIsotopeFilter, 1000);
    }

    /* DIRECTION AWARE HOVER */
    if (typeof $.fn.hoverdir === 'function') {
      $('.wt-teamholder').each(function () {
        $(this).hoverdir();
      });
    }

    /* BRAND SLIDER */
    if ($('#wt-brandslider').length && typeof $.fn.owlCarousel === 'function') {
      $('#wt-brandslider').owlCarousel({
        items: 6,
        loop: false,
        nav: false,
        margin: 0,
        autoplay: false,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          481: { items: 2 },
          768: { items: 3 },
          991: { items: 4 },
          992: { items: 5 }
        }
      });
    }

    /* ACCORDION */
    if ($('#accordion').length) {
      $('#accordion').collapse({ toggle: false });
    }

    /* TEAM SLIDER */
    if ($('#wt-categoriesslider').length && typeof $.fn.owlCarousel === 'function') {
      $('#wt-categoriesslider').owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        margin: 0,
        autoplay: false,
        center: true,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          481: { items: 2 },
          768: { items: 3 },
          1440: { items: 4 },
          1760: { items: 6 }
        }
      });
    }

    /* THEME VERTICAL SCROLLBAR */
    if ($('.wt-verticalscrollbar').length && typeof $.fn.mCustomScrollbar === 'function') {
      $('.wt-verticalscrollbar').mCustomScrollbar({ axis: "y" });
    }
    if ($('.wt-horizontalthemescrollbar').length && typeof $.fn.mCustomScrollbar === 'function') {
      $('.wt-horizontalthemescrollbar').mCustomScrollbar({
        axis: "x",
        advanced: { autoExpandHorizontalScroll: true }
      });
    }

    /* TIPSO TOOLTIP */
    if (typeof $.fn.tipso === 'function') {
      $('.template-content').tipso({
        speed: 400,
        background: '#fff',
        titleBackground: '#3498db',
        color: '#999999',
        titleColor: '#ffffff',
        width: 105,
        tooltipHover: true,
        size: 50,
        offsetY: 0,
        position: 'top-right'
      });
      $('.hover-tipso-tooltip').tipso({ tooltipHover: true });
    }

    /* CONSULTATION FEE SLIDER */
    if ($('#wt-productrangeslider').length && typeof $.fn.slider === 'function') {
      $("#wt-productrangeslider").slider({
        range: true,
        min: 0,
        max: 150,
        values: [10, 110],
        slide: function (event, ui) {
          $("#wt-consultationfeeamount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
      });
      $("#wt-consultationfeeamount").val("$" + $("#wt-productrangeslider").slider("values", 0) + " - $" + $("#wt-productrangeslider").slider("values", 1));
    }

    /* SHORT DESCRIPTION */
    if ($('.wt-userdetails .wt-description').length && typeof $.fn.readmore === 'function') {
      $('.wt-userdetails .wt-description').readmore({
        speed: 500,
        collapsedHeight: 230,
        moreLink: '<a class="wt-btntext" href="#">Read More</a>',
        lessLink: '<a class="wt-btntext" href="#">Less</a>'
      });
    }

    /* PRELOADER */
    $(window).on('load', function () {
      $(".preloader-outer").delay(1000).fadeOut();
      $(".loader").delay(500).fadeOut("slow");
    });

    /* PROJECT DROPDOWN */
    $(document).on('click', '.wt-projectdropdown', function (event) {
      event.preventDefault();
      $('.wt-projectdropdown-option').slideToggle();
    });

    /* SIDEBAR DROPDOWN */
    $(document).on('click', '.wt-usersidebardown', function (event) {
      event.preventDefault();
      $('.wt-usersidebar').slideToggle();
    });

    /* LOST PASSWORD BOX */
    $(document).on('click', '.wt-forgot-password', function (e) {
      $('.do-login-form').addClass('wt-hide-form');
      $('.wt-loginheader span').html('Reset Password');
      $('.do-forgot-password-form').removeClass('wt-hide-form');
    });
    $(document).on('click', '.wt-show-login', function (e) {
      $('.do-login-form').removeClass('wt-hide-form');
      $('.wt-loginheader span').text('Login');
      $('.do-forgot-password-form').addClass('wt-hide-form');
    });

    /* SEARCH CHOSEN */
    if (typeof $.fn.chosen === 'function') {
      var config = {
        '.chosen-select': {},
        '.chosen-select-deselect': { allow_single_deselect: true },
        '.chosen-select-no-single': { disable_search_threshold: 10 },
        '.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
        '.chosen-select-width': { width: "95%" }
      };
      for (var selector in config) {
        $(selector).chosen(config[selector]);
      }
    }

    /* CHATBOX TOGGLE */
    $(document).on('click', '#wt-btnclosechat, #wt-getsupport', function () {
      $('.wt-chatbox').slideToggle();
    });

    /* DASHBOARD MENU */
    if ($('#wt-btnmenutoggle').length) {
      $(document).on('click', '#wt-btnmenutoggle', function (event) {
        event.preventDefault();
        $('#wt-wrapper').toggleClass('wt-openmenu');
        $('body').toggleClass('wt-noscroll');
        $('.wt-navdashboard ul.sub-menu').hide();
      });
    }

    /* FIXED SIDEBAR */
    function fixedNav() {
      $(window).on('scroll', function () {
        var $pscroll = $(window).scrollTop();
        if ($pscroll > 76) {
          $('.wt-sidebarwrapper').addClass('wt-fixednav');
        } else {
          $('.wt-sidebarwrapper').removeClass('wt-fixednav');
        }
      });
    }
    fixedNav();

    /* ADD CLASS */
    $(document).on('click', '.wt-myskills .wt-addinfo', function () {
      $(this).parents('li').addClass('wt-skillsaddinfo');
    });
    $(document).on('click', '.wt-myskills .wt-deleteinfo', function () {
      var $parentLi = $(this).parents('li');
      var $val = $parentLi.find('.skill-dynamic-field input').val();
      $parentLi.find('.skill-dynamic-html .skill-val').html($val);
      $parentLi.removeClass('wt-skillsaddinfo');
    });

    /* DASHBOARD SLIDER */
    if ($('#wt-postedsilder').length && typeof $.fn.owlCarousel === 'function') {
      $('#wt-postedsilder').owlCarousel({
        items: 6,
        loop: true,
        nav: true,
        margin: 10,
        autoplay: false,
        responsiveClass: true,
        navClass: ['wt-prev', 'wt-next'],
        navContainerClass: 'wt-slidernav',
        navText: ['<span class="lnr lnr-chevron-left"></span>', '<span class="lnr lnr-chevron-right"></span>'],
        responsive: {
          0: { items: 1 },
          720: { items: 2 }
        }
      });
    }

    /* TINYMCE WYSIWYG EDITOR */
    if ($('#wt-tinymceeditor').length && typeof tinymce !== 'undefined') {
      tinymce.init({
        selector: 'textarea#wt-tinymceeditor',
        height: 300,
        theme: 'modern',
        plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak'],
        menubar: false,
        statusbar: false,
        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify',
        image_advtab: true
      });
    }

    /* FOLLOW BUTTON */
    $(document).on('click', '.wt-savefollow', function (event) {
      event.preventDefault();
      $(this).parents('li').remove();
    });

    /* MESSAGES TOGGLE */
    if ($('.wt-ad').length) {
      $(document).on('click', '.wt-ad', function () {
        $(this).parents('.wt-messages-holder').addClass('wt-openmsg');
      });
      $(document).on('click', '.wt-back', function () {
        $(this).parents('.wt-messages-holder').removeClass('wt-openmsg');
      });
    }

    /* JRATE STARS */
    if (typeof $.fn.jRate === 'function') {
      $("#wt-jrate").jRate({
        rating: 5.0,
        strokeColor: '#dadadacc',
        precision: 1,
        startColor: "#fecb02",
        endColor: "#fecb02",
        backgroundColor: '#ddd',
        minSelected: 1,
        shapeGap: '10px',
        count: 5,
        onChange: function (rating) {
          $('.counter').text(rating + '');
        },
        onSet: function (rating) {
          console.log("OnSet: Rating: " + rating);
        }
      });
      $("#wt-jrateone").jRate({
        rating: 4.0,
        strokeColor: '#dadadacc',
        precision: 1,
        startColor: "#fecb02",
        endColor: "#fecb02",
        backgroundColor: '#ddd',
        minSelected: 1,
        shapeGap: '10px',
        count: 5,
        onChange: function (rating) {
          $('.counterone').text(rating + '');
        },
        onSet: function (rating) {
          console.log("OnSet: Rating: " + rating);
        }
      });
      $("#wt-jratetwo").jRate({
        rating: 3.0,
        strokeColor: '#dadadacc',
        precision: 1,
        startColor: "#fecb02",
        endColor: "#fecb02",
        backgroundColor: '#ddd',
        minSelected: 1,
        shapeGap: '10px',
        count: 5,
        onChange: function (rating) {
          $('.countertwo').text(rating + '');
        },
        onSet: function (rating) {
          console.log("OnSet: Rating: " + rating);
        }
      });
      $("#wt-jratethree").jRate({
        rating: 2.0,
        strokeColor: '#dadadacc',
        precision: 1,
        startColor: "#fecb02",
        endColor: "#fecb02",
        backgroundColor: '#ddd',
        minSelected: 1,
        shapeGap: '10px',
        count: 5,
        onChange: function (rating) {
          $('.counterthree').text(rating + '');
        },
        onSet: function (rating) {
          console.log("OnSet: Rating: " + rating);
        }
      });
    }
  });
}