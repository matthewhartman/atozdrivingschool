var wow=new WOW({boxClass:"animate-block",animateClass:"active",offset:1,mobile:!0,live:!0});wow.init(),WebFont.load({google:{families:["Open Sans:400,700","Montserrat:400, 700"]}}),$(document).ready(function(){$("a[href*=#]:not([href=#]):not(.terms-link):not(.modal-close)").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},500),!1}}),$(document).keyup(function(t){27==t.keyCode&&$(".modal").is(":visible")&&(window.location.href="#test-packages")}),$(".button-package").on("click",function(t){var e=$(this),o=e.attr("href");$splitLink=o.split("#"),$option=$splitLink[1],t.preventDefault,$('#package option[data-package="'+$option+'"]').prop("selected",!0),$("html, body").animate({scrollTop:$("#contact").offset().top},500)}),$(".contact-form").on("submit",function(t){var e=$(this),o=e.attr("action");t.preventDefault(),e.before('<span class="loading contact-form-loading">Submitting, please wait...</span>'),e.addClass("disabled");var a="Whoops. There was an issue sending your enquiry / booking - please fill out the form and try again.",n="Your enquiry / booking was successfully sent";$.ajax({type:"post",dataType:"json",url:o,data:e.serialize(),beforeSend:function(){e.prop("disabled",!0),e.find(".contact-submit").attr("value","Sending..."),e.find(".form-error").remove()},success:function(t){e.prop("disabled",!1),e.find(".contact-submit").attr("value","Submit Enquiry"),e.html('<div class="form-success text-center"><h2 class="heading-white heading-thank-you">'+n+"</h2><p>"+contactSuccessMessage+"</p></div>")},error:function(t){e.prop("disabled",!1),e.find(".contact-submit").attr("value","Submit Enquiry"),e.find("legend").after('<div class="form-error text-center">'+a+"</div>"),$("html,body").stop(!0,!0).animate({scrollTop:$("#contact").offset().top},500)},complete:function(){$(".contact-form-error").remove(),$(".contact-form-loading").remove(),e.removeClass("disabled")}})})});