/*...............order save...........................*/

$("#btnAdditem").click(function () {
    let alert=confirm("Do you want to add item");
    if (alert){

    }

});


function Addorder() {
    let item=$("#txtorderItem").val();
    let itemordercode=$("#txtorderItem").val();
    let itemname=$("#txtorderItem").val();
    let itemprice=$("#txtorderItem").val();
    let QtyonH=$("#txtorderItem").val();
    let orderoty=$("#txtorderItem").val();

    var order = new itemDTO(item,itemordercode, itemname,itemprice,QtyonH,orderoty);
    orderoty.push(order);
}


