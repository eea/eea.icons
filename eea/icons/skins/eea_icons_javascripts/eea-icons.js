jQuery(document).ready(function ($) {

  $(".eea-icon-left-container").each(function (i, el) {
    var $i_tag = $("<span class='eea-icon eea-icon-left'></span>");
    $(el).prepend($i_tag);
  });

  $(".eea-icon-right-container").each(function (i, el) {
    var $i_tag = $("<span class='eea-icon eea-icon-right'></span>");
    $(el).append($i_tag);
  });

});
