function customerDTO(Id,name,address,contactno) {
var customerID=Id;
var customerName=name;
var customerAddress=address;
var customerContact=contactno;

  this.getID=function () {
     return customerID;
}
    this.setID=function () {
         customerID=Id;
    }


    this.getname=function () {
        return customerName;
    }
    this.setname=function () {
       customerName=name;
    }


    this.getaddress=function () {
        return customerAddress;
    }
    this.setaddress=function () {
        customerAddress=address;
    }


    this.getcontactno=function () {
        return customerContact;
    }
    this.setaddress=function () {
        customerContact=contactno;
    }
}
