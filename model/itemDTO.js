function itemDTO(code,Itemname,Itemprice,ItemQty) {
    var itemcode=code;
    var itemname=Itemname;
    var itemprice=Itemprice;
    var itemQuantity=ItemQty;

    this.getCode=function () {
        return itemcode;
    }
    this.setCode=function () {
        itemcode=code;
    }


    this.getName=function () {
        return itemname;
    }
    this.setName=function () {
        itemname=Itemname;
    }


    this.getprice=function () {
        return itemprice;
    }
    this.setprice=function () {
        itemprice=Itemprice;
    }


    this.getQTY=function () {
        return itemQuantity;
    }
    this.setQTY=function () {
        itemQuantity=ItemQty;
    }
}