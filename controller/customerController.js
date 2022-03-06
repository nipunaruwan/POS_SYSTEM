$("#Customerpage").click(function () {
   genCusID();
})



/*....................................savecustomer........................*/
$("#btnCustomerSave").click(function () {
    let alert = confirm("Do you want save");
    if (alert) {
        addCustomer();
        loadAllCustomer();
    }
    genCusID();
});

function addCustomer() {
    let CustomerId = $("#txtCusID").val();
    let Customername = $("#txtCusName").val();
    let Customeraddress = $("#txtaddress").val();
    let CustomerContact = $("#txtcontact").val();

    var customer = new customerDTO(CustomerId, Customername, Customeraddress, CustomerContact);
    customerDB.push(customer);

}

function loadAllCustomer() {
    $("#custablebody").empty();
    for (var i = 0; i < customerDB.length; i++) {
        let row = `<tr><td>${customerDB[i].getID()}</td><td>${customerDB[i].getname()}</td><td>${customerDB[i].getaddress()}</td><td>${customerDB[i].getcontactno()}</td></tr>`;
        $("#custablebody").append(row);
    }
}

/*......................update customer...................................*/
$("#btnCustomerupdate").click(function () {
    let customerId = $("#txtCusID").val();
    UpdateCustomer(customerId);
});

function UpdateCustomer(CId) {
    let id = $("#txtCusID").val();
    let name = $("#txtCusName").val();
    let address = $("#txtaddress").val();
    let contact = $("#txtcontact").val();

    for (var i=0; i<customerDB.length;i++){
        if (customerDB[i].getID()==CId){
            customerDB[i].setID(id);
            customerDB[i].setname(name);
            customerDB[i].setaddress(address);
            customerDB[i].setcontactno(contact);

            loadAllCustomer();
        }
    }
}

/*......................search customer.................................*/
$("#btnCustomerSearch").click(function () {
var CustomerId=$("#txtCusID").val();
    SearchCustomer(CustomerId);
});
function SearchCustomer(id) {
    for (var i=0; i<customerDB.length;i++){
        if (customerDB[i].getID()==id){
            $("#txtCusID").val(customerDB[i].getID());
            $("#txtCusName").val(customerDB[i].getname());
            $("#txtaddress").val(customerDB[i].getaddress());
            $("#txtcontact").val(customerDB[i].getcontactno());


        }
    }

}

/*...........................delete customer......................*/
$("#btnCustomerDelete").click(function () {
    let alert3=confirm("Do you want to Delete");
   if (alert3) {
       DeleteCustomer();
   }
});
function DeleteCustomer(id) {
    var searchCustomer=$("#txtCusID").val();
    for (var i=0; i<customerDB.length;i++){
        if(customerDB[i].getID()==searchCustomer){
            customerDB.splice(i, 1);
            loadAllCustomer();
        }
    }

}
/*...........................other method......................*/
function genCusID() {
    if (customerDB.length == 0) {
        $("#txtCusID").val("C00-0001");
    } else if (customerDB.length > 0) {
        var code = customerDB[customerDB.length - 1].getID().split("-")[1];
        var tempCode = parseInt(code);
        tempCode = tempCode + 1;
        if (tempCode <= 9) {
            $("#txtCusID").val("C00-000" + tempCode);
        } else if (tempCode <= 99) {
            $("#txtCusID").val("C00-00" + tempCode);
        } else if (tempCode <= 999) {
            $("#txtCusID").val("C00-0" + tempCode);
        } else if (tempCode <= 9999) {
            $("#txtCusID").val("C00-" + tempCode);
        }
    }

}