$(function () {
    $('table').addClass('table').addClass('table-condensed').addClass('table-striped');
    $('.nav-tabs').find('a:first').tab('show');
    
    // Select preferred tabs
    var preferredTabs;
    try {
        preferredTabs = JSON.parse(window.localStorage.getItem('preferredTabs'));
    } catch(e) {
        preferredTabs = {};
    }
    for(var preferredTab in preferredTabs) {
        $('.nav-tabs a:contains("' + preferredTab + '")').tab('show');
    }

    $('a[data-toggle="tab"]').on('shown', function (e) {
        $(this).parent().siblings().find('a').each(function(_, a) {
            var unpreferred = a.innerText;
            delete preferredTabs[unpreferred];
        });
        preferredTabs[e.target.innerText] = e.target.innerText;
        window.localStorage.setItem('preferredTabs', JSON.stringify(preferredTabs));
    });
});