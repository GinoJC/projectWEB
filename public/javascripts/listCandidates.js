function updateData() {
    $.ajax({
        url: "/candidates",
        type: "GET",
        dataType: "html",
        success: function(resp) {
            var candlist = $(".candtable");
            candlist.html(resp);
        },
        error: function(err) {
            var candlist = $(".candtable");
            candlist.html();
        }
    })
};