

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


/*...........................customer validation......................*/
const itemcodeRegEx = /^(I00-)[0-9]{1,4}$/;
const itemnameRegEx = /^[A-z ]{5,20}$/;
const itempriceRegEx = /^[0-9/A-z. ,]{7,}$/;
const itemQtyRegEx = /^[076][0-9]?$/;
$('#txtitemcode,#txtitemname,#txtitemprice,#txtitemqty').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});

$('#txtitemcode,#txtitemname,#txtitemprice,#txtitemqty').on('blur', function () {
    formValid();
});

//focusing events
$("#txtitemcode").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }

    if (eventOb.key == "Control") {
        var typedCustomerID = $("#txtitemcode").val();
        var srcCustomer = searchCustomerFromID(typedCustomerID);
        $("#txtitemcode").val(srcCustomer.getCustomerID());
        $("#txtitemname").val(srcCustomer.getCustomerName());
        $("#txtitemprice").val(srcCustomer.getCustomerAddress());
        $("#txtitemqty").val(srcCustomer.getCustomerSalary());
    }


});

$("#txtitemname").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtitemprice").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtitemqty").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});
// focusing events end
$("#btnitemSave").attr('disabled', true);

function clearAll() {
    $('#txtitemcode,#txtitemname,#txtitemprice,#txtitemqty').val("");
    $('#txtitemcode,#txtitemname,#txtitemprice,#txtitemqty').css('border', '2px solid #ced4da');
    $('#txtitemcode').focus();
    $("#btnitemSave").attr('disabled', true);
    loadAllCustomer();
    $("#lblitemcode,#lblitemname,#lblitemprice,#lblitemqty").text("");
}

function formValid() {
    var itemcode = $("#txtitemcode").val();
    $("#txtitemcode").css('border', '2px solid green');
    $("#lblitemcode").text("");
    if (itemcodeRegEx.test(itemcode)) {
        var itemname = $("#txtCusName").val();
        if (itemnameRegEx.test(itemname)) {
            $("#txtCusName").css('border', '2px solid green');
            $("#lblcusname").text("");
            var cusAddress = $("#txtaddress").val();
            if (cusAddressRegEx.test(cusAddress)) {
                var Contact = $("#txtcontact").val();
                var resp = cusSalaryRegEx.test(Contact);
                $("#txtaddress").css('border', '2px solid green');
                $("#lblcusaddress").text("");
                if (resp) {
                    $("#txtcontact").css('border', '2px solid green');
                    $("#lblContact").text("");
                    return true;
                } else {
                    $("#txtcontact").css('border', '2px solid red');
                    $("#lblContact").text("Cus Contact no is a required field : contact should be 10 number");
                    return false;
                }
            } else {
                $("#txtaddress").css('border', '2px solid red');
                $("#lblcusaddress").text("Cus Name is a required field : Mimum 7");
                return false;
            }
        } else {
            $("#txtCusName").css('border', '2px solid red');
            $("#lblcusname").text("Cus Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtCusID").css('border', '2px solid red');
        $("#lblcusid").text("Cus ID is a required field : Pattern C00-000");
        return false;
    }
}

function checkIfValid() {
    var cusID = $("#txtCusID").val();
    if (cusIDRegEx.test(cusID)) {
        $("#txtCusName").focus();
        var cusName = $("#txtCusName").val();
        if (cusNameRegEx.test(cusName)) {
            $("#txtaddress").focus();
            var cusAddress = $("#txtCusAddress").val();
            if (cusAddressRegEx.test(cusAddress)) {
                $("#txtcontact").focus();
                var cusSalary = $("#txtcontact").val();
                var resp = cusSalaryRegEx.test(cusSalary);
                if (resp) {
                    let res = confirm("Do you really need to add this Customer..?");
                    if (res) {
                        saveCustomer();
                        clearAll();
                    }
                } else {
                    $("#txtcontact").focus();
                }
            } else {
                $("#txtaddress").focus();
            }
        } else {
            $("#txtCusName").focus();
        }
    } else {
        $("#txtCusID").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#btnCustomerSave").attr('disabled', false);
    } else {
        $("#btnCustomerSave").attr('disabled', true);
    }
}

$('#btnCustomerSave').click(function () {
    checkIfValid();
});
