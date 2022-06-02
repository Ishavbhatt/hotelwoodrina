$(document).ready(function () {
  // menu js

  jQuery(".navbar-toggler").click(function () {
    jQuery(this).toggleClass("toggle_btn");
    jQuery("#navbarNav").toggleClass("show_menu");
  });
});

// Cache selectors
var lastId,
  topMenu = jQuery("#sidebar"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = jQuery(jQuery(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = jQuery(this).attr("href"),
    offsetTop =
      href === "#" ? 0 : jQuery(href).offset().top - topMenuHeight + 1;
  jQuery("html, body").stop().animate(
    {
      scrollTop: offsetTop,
    },
    300
  );
  e.preventDefault();
});

// Bind to scroll
jQuery(window).scroll(function () {
  // Get container scroll position
  var fromTop = jQuery(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if (jQuery(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  }
});

jQuery(function () {
  var top =
    jQuery(".room_suit_left").offset().top -
    parseFloat(jQuery(".room_suit_left").css("marginTop").replace(/auto/, 0));
  var footTop =
    jQuery(".empty_div").offset().top -
    parseFloat(jQuery(".empty_div").css("marginTop").replace(/auto/, 0));

  var maxY = footTop - jQuery(".room_suit_left").outerHeight();

  jQuery(window).scroll(function (evt) {
    var y = jQuery(this).scrollTop();
    if (y >= top - jQuery("#fixedHeader").height()) {
      if (y < maxY) {
        jQuery(".room_suit_left").addClass("fixed").removeAttr("style");
      } else {
        jQuery(".room_suit_left")
          .removeClass("fixed")
          .css({
            position: "absolute",
            top: maxY - top + "px",
          });
      }
    } else {
      jQuery(".room_suit_left").removeClass("fixed");
    }
  });
});
