
$(function () {
    let location = window.location.href;
          $('.main_menu li a').toArray().forEach(function(el) {
              let link = $(el).prop('href');
              if (location === link) {
                  $(el).addClass('active2');
              }

  });

     
});

