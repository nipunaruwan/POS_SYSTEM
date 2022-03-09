

/*...............item save...........................*/
$("#btnitemSave").click(function () {
 let alert=confirm("Do you want to save");
 if(alert){
additem();
loadallitem();
 }
 genItemcode();
});
function additem() {

    let ItemCode=$("#txtitemcode").val();
    let ItemName=$("#txtitemname").val();
    let ItemPrice=$("#txtitemprice").val();
    let ItemQuantity=$("#txtitemqty").val();

    var item = new itemDTO(ItemCode,ItemName,ItemPrice,ItemQuantity);
    itemDB.push(item);
}
function loadallitem() {
    $("#itemtablebody").empty();
    for (var i =0; i<itemDB.length;i++){
        let row =`<tr><td>${itemDB[i].getCode()}</td><td>${itemDB[i].getName()}</td><td>${itemDB[i].getprice()}</td><td>${itemDB[i].getQTY()}</td></tr>`;
        $("#itemtablebody").append(row);
    }

}
/*....................update customer.................................*/
$("#btnitemupdate").click(function () {
let itemcode =$("#txtitemcode").val();
    let mg = confirm("Do you want update");
if (mg) {
    updateitem(itemcode);
}
genItemcode();
});
function updateitem(itemcode) {
    let code = $("#txtitemcode").val();
    let Name = $("#txtitemname").val();
    let price = $("#txtitemprice").val();
    let Qty = $("#txtitemqty").val();


    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode() == itemcode) {
            itemDB[i].setCode(code);
            itemDB[i].setName(Name);
            itemDB[i].setprice(price);
            itemDB[i].setQTY(Qty);

            loadallitem();
        }
    }
}
/*...........................delete item......................*/
$("#btnitemdelete").click(function () {
    let alert5=confirm("Do you want to Delete");
    if (alert5) {
        Deleteitem();
    }

});
function Deleteitem() {
    var searchitem=$("#txtitemcode").val();
    for(var i=0; i<itemDB.length;i++){
        if (itemDB[i].getCode()==searchitem){
            itemDB.splice(i,1);
            loadallitem();
            genItemcode();

        }
    }

}

/*......................search item.................................*/
$("#btnitemSearch").click(function () {
var itemcode=$("#txtitemcode").val();
Searchitem(itemcode);

});
function Searchitem(code) {
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getCode() == code) {
            $("#txtitemcode").val(itemDB[i].getCode());
            $("#txtitemname").val(itemDB[i].getName());
            $("#txtitemprice").val(itemDB[i].getprice());
            $("#txtitemqty").val(itemDB[i].getQTY());
        }

    }
}
/*...........................other method......................*/
function genItemcode() {
    if (itemDB.length == 0) {
        $("#txtitemcode").val("I00-0001");
    } else if (itemDB.length > 0) {
        var code = itemDB[itemDB.length - 1].getCode().split("-")[1];
        var tempCode = parseInt(code);
        tempCode = tempCode + 1;
        if (tempCode <= 9) {
            $("#txtitemcode").val("I00-000" + tempCode);
        } else if (tempCode <= 99) {
            $("#txtitemcode").val("I00-00" + tempCode);
        } else if (tempCode <= 999) {
            $("#txtitemcode").val("I00-0" + tempCode);
        } else if (tempCode <= 9999) {
            $("#txtitemcode").val("I00-" + tempCode);
        }
    }

}
$("#itempage").click(function () {
    genItemcode();
});


