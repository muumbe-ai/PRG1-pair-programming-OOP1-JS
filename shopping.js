
  class shoppingList {
   // _ListCode;
    
    constructor(ListCode){
      //this._ListCode = ListCode;
      this.shoppingList = [];
    }

    addItem(shoppingItem) {
      this.shoppingList.push(shoppingItem)
      console.log("Item has been added to list")
      return this.shoppingList.length;
  }

  removeItem(itemName) {
    this.shoppingList = this.shoppingList.filter(item => item.itemName !== itemName);
    return this.shoppingList.length;
}
    getNumItems() {
       return `Number of items on the list are: ${this.shoppingList.length}`;
    }
    getListOfItems() {
        return this.shoppingList.map(item => item.itemName);
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
  const eggs = new shoppingItem("eggs", 12);
 const list1 = new shoppingList ()
  list1.addItem(bread)
  list1.addItem(eggs)

  console.log(list1.getListOfItems())