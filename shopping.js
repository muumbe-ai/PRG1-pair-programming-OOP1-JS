
  class shoppingList {
    _ListCode;
    
    constructor(ListCode){
      this._ListCode = ListCode;
      this.shoppingList = [];
    }

    addItem(shoppingItem) {
      this.shoppingList.push(shoppingItem)
      return this.shoppingList.length;
  }
    removeItem(shoppingItem) {
      this.shoppingList.splice(shoppingItem[0], 1)
      return this.shoppingList.length;
  }
    getNumItems() {
       return this.shoppingList.length;
    }
    getListOfItems() {
        return this.shoppingList;
    }
  
  }

  class shoppingItem {
    _itemName;
    _itemQuantity;

    constructor(itemName, itemQuantity){
      this._itemName = itemName;
      this._itemQuantity = itemQuantity;
    
    }

    get itemName(){
        return this._itemName;
    }
    set itemName(itemName){
        this._itemName = itemName;
      }
    
    get itemQuantity(){
      return this._itemQuantity;
    }
    set itemQuantity(itemQuantity){
        this._itemQuantity = Number(itemQuantity);
      }

  }
  const bread = new shoppingItem("bread", 7);
 const list1 = new shoppingList ("757")
  list1.addItem('bread')

  console.log(list1)