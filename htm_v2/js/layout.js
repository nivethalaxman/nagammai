// nav-toggle

    $('#sidebarCollapse').on('click', function (e) {
        $('.page').toggleClass('active');
    });

      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
      });


//Scroll

      $(document).ready(function () {
        $('.scroll').slimScroll({});
      });