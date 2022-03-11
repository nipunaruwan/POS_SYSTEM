function itemDTO(code,Itemname,Itemprice,ItemQty) {
   var item=Item;
   var itemordercode=Itemordercode;
   var itemname=Itemprice;
   var =ItemQty;

   this.getCode=function () {
      return itemcode;
   }
   this.setCode=function (code) {
      itemcode=code;
   }


   this.getName=function () {
      return itemname;
   }
   this.setName=function (Itemname) {
      itemname=Itemname;
   }


   this.getprice=function () {
      return itemprice;
   }
   this.setprice=function (Itemprice) {
      itemprice=Itemprice;
   }


   this.getQTY=function () {
      return itemQuantity;
   }
   this.setQTY=function (ItemQty) {
      itemQuantity=ItemQty;
   }
}