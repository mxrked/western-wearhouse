/**
 *
 *  This function is used to declare a CDN item
 *
 */

const CDN_HOSTING =
  "https://raw.githubusercontent.com/mxrked/western-wearhouse_CDN/main/";

// This is for bgs
function CDN_BGDeclare(bgSubFolder, bgSubSubFolder, fileName, fileType) {
  // If all 3 parameters are declared
  if (bgSubFolder && projectFolder && fileName && fileType) {
    // Returns the url of the file
    return (
      CDN_HOSTING +
      "bgs/" +
      bgSubFolder +
      "/" +
      bgSubSubFolder +
      "/" +
      fileName +
      "." +
      fileType
    );
  }

  if (!bgSubFolder) {
    console.log("Could not locate " + bgSubFolder);
  }
  if (!bgSubSubFolder) {
    console.log("Could not locate " + bgSubSubFolder);
  }
  if (!fileName) {
    console.log("Could not locate " + fileName);
  }
  if (!fileType) {
    console.log("Could not locate " + fileType);
  }
}

// This is for product imgs
function CDN_PRODUCTDeclare(product_type, product_name, file_type) {
  if (product_type && product_name && file_type) {
    return (
      CDN_HOSTING +
      `imgs/products/${product_type}/${product_name}/${product_name}.${file_type}`
    );
  }

  if (!product_type) {
    console.log("404: Could not find product_type");
  }

  if (!product_name) {
    console.log("404: Could not find product_name");
  }

  if (!file_type) {
    console.log("404: Could not find file_type");
  }
}

// This is for a icons
function CDN_ICONDeclare(iconsSubFolder, fileName, fileType) {
  // If all 3 parameters are declared
  if (iconsSubFolder && fileName && fileType) {
    // Returns the url of the file
    return (
      CDN_HOSTING + "icons/" + iconsSubFolder + "/" + fileName + "." + fileType
    );
  }

  if (!iconsSubFolder) {
    console.log("Could not locate " + iconsSubFolder);
  }
  if (!fileName) {
    console.log("Could not locate " + fileName);
  }
  if (!fileType) {
    console.log("Could not locate " + fileType);
  }
}

export { CDN_BGDeclare, CDN_PRODUCTDeclare, CDN_ICONDeclare };
