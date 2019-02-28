var target = 0

document.getElementById("searcher").addEventListener("keydown", function (e) {
    if (!e) {
        var e = window.event;
    }

    // Enter is pressed
    if (e.keyCode == 13) {
        console.log($("#searcher").val());
        finder($("#searcher").val(), "ai");
        finder($("#searcher").val(), "application-service");
        finder($("#searcher").val(), "bd-analytics");
        finder($("#searcher").val(), "compute");
        finder($("#searcher").val(), "db");
        finder($("#searcher").val(), "dev");
        finder($("#searcher").val(), "iot");
        finder($("#searcher").val(), "management");
        finder($("#searcher").val(), "migration");
        finder($("#searcher").val(), "mobile");
        finder($("#searcher").val(), "network-cd");
        finder($("#searcher").val(), "security");
        finder($("#searcher").val(), "storage");
        finder($("#searcher").val(), "other");
        target = 0;
    }
}, false);

document.getElementById("btn-searcher").addEventListener("click", function () {
    console.log($("#searcher").val());
    finder($("#searcher").val(), "ai");
    finder($("#searcher").val(), "application-service");
    finder($("#searcher").val(), "bd-analytics");
    finder($("#searcher").val(), "compute");
    finder($("#searcher").val(), "db");
    finder($("#searcher").val(), "dev");
    finder($("#searcher").val(), "iot");
    finder($("#searcher").val(), "management");
    finder($("#searcher").val(), "migration");
    finder($("#searcher").val(), "mobile");
    finder($("#searcher").val(), "network-cd");
    finder($("#searcher").val(), "security");
    finder($("#searcher").val(), "storage");
    finder($("#searcher").val(), "other");
    target = 0;
})

function finder(input, tableid) {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    filter = input.toUpperCase();
    table = document.getElementById(tableid);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        for (j = 0; j < 6; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td && target != 1) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1 && target != 1) {
                    document.getElementById('sec-' + tableid).scrollIntoView();
                    target = 1
                    console.log("achei");
                } else {
                    target = 0;
                    console.log("não achei");
                }
            }
        }
    }
}