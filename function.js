$(document).ready(function () {

    //$("#sidebar").mCustomScrollbar({
    //    theme: "minimal"
    //});

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

        var content = document.getElementById('content')

        content.style.width = $('#sidebar').hasClass('active') ? '100%' : 'calc(100% - 250px)';
    });

});