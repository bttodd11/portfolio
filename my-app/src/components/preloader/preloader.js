import React from "react";
import "./preloader.css";
import $ from "jquery";

let preloader = () => {
 
  $(window).on('load', function() {
    $('#preloader').css({
      "transform": "translateY(-100%)",
      "transition-delay": "0.6s"
    });
    $('.loader').css({
      "opacity": "0",
      "transform": "translate(-50%,-100%)",
      "transition-delay": "0.3s"
    });
  
    $('.loader_text_unit').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
  
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
  
      {
  
        duration: 300,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
  
  });

  return (
<div id="preloader">
  <div class="loader">
    <p class="loader_text" id="loader_text"><span class="loader_text_unit" data-count="100">0</span><span>%</span></p>
    <div class="loader_bar" id="loader_bar"></div>
  </div>
</div>

  );
};

export default preloader;
