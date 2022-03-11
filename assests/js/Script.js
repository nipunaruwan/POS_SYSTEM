





/*document.getElementById("Customerpage").style.display="none";
document.getElementById("itempage").style.display="none";
//First Btn Func
document.getElementById("Home").addEventListener("click",function () {
    document.getElementById("Homepage").style.display="block";
    document.getElementById("Customerpage").style.display="none";
    document.getElementById("itempage").style.display="none";
});
//Sec Btn Func
document.getElementById("Customer").addEventListener("click",function () {
    document.getElementById("Customerpage").style.display="block";
    document.getElementById("itempage").style.display="none";
    document.getElementById("Homepage").style.display="none";
});

document.getElementById("item").addEventListener("click",function () {
    document.getElementById("Homepage").style.display="none";
    document.getElementById("itempage").style.display="block";
    document.getElementById("Customerpage").style.display="none";
});*/




$("#Customerpage").css("display","none");
$("#itempage").css("display","none");

$("#Home").click(function () {
    $("#Homepage").css("display","block");
    $("#Customerpage").css("display","none");
    $("#itempage").css("display","none");


});
$("#Customer").click(function () {
    $("#Homepage").css("display","none");
    $("#Customerpage").css("display","block");
    $("#itempage").css("display","none");
});
$("#item").click(function () {
    $("#Homepage").css("display","none");
    $("#Customerpage").css("display","none");
    $("#itempage").css("display","block");
});



$("#btnSave").click(function () {
    $("#custablebody>tr").off();


    let customerID = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtaddress").val();
    let customerContactNO = $("#txtcontact").val();


    let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerContactNO}</td></tr>`;

    $("#custablebody").append(row);


    $("#custablebody>tr").click(function () {
    let cusID = $(this).children(":eq(0)").text(); // select first td and get text
    let cusName = $(this).children(":eq(1)").text();
    let cusAddress = $(this).children(":eq(2)").text();
    let cusTP = $(this).children(":eq(3)").text();

    console.log(cusID, cusName, cusAddress, cusTP);

    // set values for the input fields
    $("#txtCusID").val(cusID);
    $("#txtCusName").val(cusName);
    $("#txtaddress").val(cusAddress);
    $("#txtcontact").val(cusTP);

});

});

$("#btnsave1").click(function () {
    $("#itemtablebody>tr").off();


    let itemcode = $("#txtitemcode").val();
    let itemName = $("#txtitemname").val();
    let itemprice = $("#txtitemprice").val();
    let itemQty = $("#txtitemqty").val();


    let row1 = `<tr><td>${itemcode}</td><td>${itemName}</td><td>${itemprice}</td><td>${itemQty}</td></tr>`;

    $("#itemtablebody").append(row1);


    $("#itemtablebody>tr").click(function () {
        let itemcode = $(this).children(":eq(0)").text(); // select first td and get text
        let itemName = $(this).children(":eq(1)").text();
        let itemprice = $(this).children(":eq(2)").text();
        let itemQty = $(this).children(":eq(3)").text();

        //console.log(cusID, cusName, cusAddress, cusTP);

        // set values for the input fields
        $("#txtitemcode").val(itemcode);
        $("#txtitemname").val(itemName);
        $("#txtitemprice").val(itemprice);
        $("#txtitemqty").val(itemQty);

    });
});



