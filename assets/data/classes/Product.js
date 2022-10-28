/** This is the Product product class */

export default class Product {
  constructor(
    productID,
    productType,
    productName,
    productDesc,
    productImg,
    productColor,
    productSize,
    productPrice,
    productQuantity
  ) {
    this.productID = productID;
    this.productType = productType;
    this.productName = productName;
    this.productDesc = productDesc;
    this.productImg = productImg;
    this.productColor = productColor;
    this.productSize = productSize;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
  }

  // Setters
  set setProductID(productID) {
    this.productID = productID;
  }
  set setProductType(productType) {
    this.productType = productType;
  }
  set setProductName(productName) {
    this.productName = productName;
  }
  set setProductDesc(productDesc) {
    this.productDesc = productDesc;
  }
  set setProductImg(productImg) {
    this.productImg = productImg;
  }
  set setProductColor(productColor) {
    this.productColor = productColor;
  }
  set setProductSize(productSize) {
    this.productSize = productSize;
  }
  set setProductPrice(productPrice) {
    this.productPrice = productPrice;
  }
  set setProductQuantity(productQuantity) {
    this.productQuantity = productQuantity;
  }

  // Getters
  get getProductID() {
    return "#" + this.productID.toString();
  }
  get getProductType() {
    return this.productType;
  }
  get getProductName() {
    return this.productName;
  }
  get getProductDesc() {
    return this.productDesc;
  }
  get getProductImg() {
    return this.productImg;
  }
  get getProductColor() {
    return this.productColor;
  }
  get getProductSize() {
    return this.productSize;
  }
  get getProductPrice() {
    return this.productPrice.toFixed(2);
  }
  get getProductQuantity() {
    return this.productQuantity;
  }

  displayProductDetails() {
    return (
      "ID: " +
      this.getProductID() +
      "\nType: " +
      this.getProductType() +
      "\nName: " +
      this.getProductName() +
      "\nDescription: " +
      this.getProductDesc() +
      "\nImg: " +
      this.getProductImg() +
      "\nColor: " +
      this.getProductColor() +
      "\nSize: " +
      this.getProductSize() +
      "\nPrice: $" +
      this.getProductPrice() +
      "\nQuantity: " +
      this.getProductQuantity()
    );
  }
}
