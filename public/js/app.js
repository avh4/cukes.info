$(function () {
    $('.nav-tabs a:first').tab('show');
    if(window.localStorage.preferredTab) {
        $('.nav-tabs a:contains("' + window.localStorage.preferredTab + '")').tab('show');
    }

    $('a[data-toggle="tab"]').on('shown', function (e) {
        window.localStorage.preferredTab = e.target.innerText;
    })
});