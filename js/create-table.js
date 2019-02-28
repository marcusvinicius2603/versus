function tableCreate(name, id) {
    var main = document.getElementById("create-table");
    var sec = document.createElement("section");
    sec.setAttribute("class", "page-section");
    sec.setAttribute("id", "sec-" + id);

    var cont = document.createElement("div");
    cont.setAttribute("class", "container");

    var h2 = document.createElement("h2");
    h2.setAttribute("class", "text-center mt-0 serv-title");
    h2.innerText = name;

    var divider = document.createElement("hr");
    divider.setAttribute("class", "divider my-4");

    var cont2 = document.createElement("div");
    cont2.setAttribute("class", "table-container");

    var table = document.createElement("table");
    table.setAttribute("class", "comparetable table-bordered table-striped table table-dark");
    table.setAttribute("id", id);
    table.setAttribute("style", "max-height: 30px !important");

    var head = document.createElement("thead");
    head.setAttribute("style", "background-color: #b8cee2;");

    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    var b = document.createElement("b");
    th1.innerText = "Service";

    var th2 = document.createElement("th");
    var img1 = document.createElement("img");
    img1.setAttribute("src", "img/logos/aws.png");
    img1.setAttribute("alt", "icon");
    img1.setAttribute("style", "height: 50%; width: 80%;");

    var th3 = document.createElement("th");
    var img2 = document.createElement("img");
    img2.setAttribute("src", "img/logos/msazure.png");
    img2.setAttribute("alt", "icon");
    img2.setAttribute("style", "height: 40%; width: 80%;");

    var th4 = document.createElement("th");
    var img3 = document.createElement("img");
    img3.setAttribute("src", "img/logos/google.png");
    img3.setAttribute("alt", "icon");
    img3.setAttribute("style", "height: 50%; width: 100%;");

    var th5 = document.createElement("th");
    var img4 = document.createElement("img");
    img4.setAttribute("src", "img/logos/IBM-Cloud.png");
    img4.setAttribute("alt", "icon");
    img4.setAttribute("style", "height: 35%; width: 100%;");

    var th6 = document.createElement("th");
    var img5 = document.createElement("img");
    img5.setAttribute("src", "img/logos/oracle.png");
    img5.setAttribute("alt", "icon");
    img5.setAttribute("style", "height: 60%; width: 80%;");

    var th7 = document.createElement("th");
    var img6 = document.createElement("img");
    img6.setAttribute("src", "img/logos/alibaba.png");
    img6.setAttribute("alt", "icon");
    img6.setAttribute("style", "height: 40%; width: 80%;");

    th7.appendChild(img6);
    th6.appendChild(img5);
    th5.appendChild(img4);
    th4.appendChild(img3);
    th3.appendChild(img2);
    th2.appendChild(img1);
    th1.appendChild(b);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    tr.appendChild(th7);
    head.appendChild(tr);
    table.appendChild(head);
    cont2.appendChild(table);
    cont.appendChild(h2);
    cont.appendChild(divider);
    cont.appendChild(cont2);
    sec.appendChild(cont);
    main.appendChild(sec);

}

// /* <section class="page-section">
// <div class="container">
//     <h2 class="text-center mt-0 serv-title">Artificial Intelligence</h2>
//     <hr class="divider my-4">
//     <div class="table-container">
//         <table id="ai" class="comparetable table-bordered table-striped table table-dark" style="max-height: 30px !important">
//             <thead style="background-color: #b8cee2;">
//                 <tr>
//                     <th><b>Service</b></th>
//                     <th>
//                         <img src='img/logos/aws.png' alt='icon' style="height: 50%; width: 80%;" />
//                     </th>
//                     <th>
//                         <img src='img/logos/msazure.png' alt='icon' style="height: 40%; width: 80%;" />
//                     </th>
//                     <th>
//                         <img src='img/logos/google.png' alt='icon' style="height: 50%; width: 100%;" />
//                     </th>
//                     <th>
//                         <img src='img/logos/IBM-Cloud.png' alt='icon' style="height: 35%; width: 100%;" />
//                     </th>
//                     <th>
//                         <img src='img/logos/oracle.png' alt='icon' style="height: 60%; width: 80%;" />
//                     </th>
//                     <th>
//                         <img src='img/logos/alibaba.png' alt='icon' style="height: 40%; width: 80%;" />
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//             </tbody>
//         </table>
//     </div>
// </div>
// </section> */







