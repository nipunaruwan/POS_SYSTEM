/*....................................savecustomer........................*/
$("#btnCustomerSave").click(function () {
    let alert = confirm("Do you want save");
    if (alert) {
        addCustomer();
        loadAllCustomer();
    }
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
for(var i=0;i<customerDB.length;i++){
    let row=`<tr><td>${customerDB[i].getID()}</td><td>${customerDB[i].getname()}</td><td>${customerDB[i].getaddress()}</td><td>${customerDB[i].getcontactno()}</td></tr>`;
    $("#custablebody").append(row);
    }
}
