//Table Rendering
$(document).ready(function () {
    $('.comparetable').stickyTableHeaders();
    rendertable("ai");
    rendertable("application-service");
    rendertable("bd-analytics");
    rendertable("compute");
    rendertable("db");
    rendertable("dev");
    rendertable("iot");
    rendertable("management");
    rendertable("migration");
    rendertable("mobile");
    rendertable("network-cd");
    rendertable("other");
    rendertable("security");
    rendertable("storage");
});

function rendertable(id) {
    var trHTML = '';
    $.getJSON('../data/' + id + '.json', function (Json) {
        $.each(Json, function (key, value) {
            trHTML += '<tr>';
            trHTML += '<td style="background-color: whitesmoke; color: black"><b>' + value.service.name + '</b></td>';
            trHTML += dataprocessor(value.aws, 'aws');
            trHTML += dataprocessor(value.azure, 'azure');
            trHTML += dataprocessor(value.google, 'gcp');
            trHTML += dataprocessor(value.ibm, 'ibm');
            trHTML += dataprocessor(value.oracle, 'oracle');
            trHTML += dataprocessor(value.alibaba, 'alibaba');
        });
        var $table = $('#' + id);
        $table.append(trHTML);
        $('body').css("display", "block");
        // $table.floatThead();
        // RemoveEmptyAHref();
    });
}

function dataprocessor(input, type) {
    var trHTML = '';
    if (input.length > 1) {
        trHTML += '<td><ul>';
        for (var i in input) {
            trHTML += '<li style="margin-bottom: 15px"><a style="color: white" href="' + input[i].ref + '">' + input[i].name +' </a><i class="fas fa-map-marked-alt" style="color: dodgerblue"></i></li>';
        }
        trHTML += '</ul></td>';
    } else {
        if (input[0].name === "") {
            trHTML += '<td>' + '<i class="fas fa-ban" style="color: red; font-size: 24px; text-align: center !important"></i>' + '</td>'
        } else {
            trHTML += '<td><a style="color: white" href="' + input[0].ref + '">' + input[0].name + ' </a><i class="fas fa-map-marked-alt" style="color: dodgerblue"></i></td>';
        }
    }
    return trHTML;
}

// function RemoveEmptyAHref() {
//     $("a").each(function () {
//         var href = $(this).attr("href");
//         if (href == 'https://#' || href == '' || href == 'http://#' || href == '#') { // or anything else you want to remove...
//             $(this).remove();
//         }
//     });
// }

// function imgError(image) {
//     image.onerror = "";
//     image.src = "https://ilyas-it83.github.io/CloudComparer/img/cloudproviders/gcp/none.png";
//     return true;
// }