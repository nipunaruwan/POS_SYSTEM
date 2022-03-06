/*...............item save...........................*/
$("#btnitemSave").click(function () {
 let alert=confirm("Do you want to save");
 if(alert){
additem();
loadallitem();
 }
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
$("#btnCustomerupdate").click(function () {
let itemcode =$("#txtitemcode").val();

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