const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title,imageUrl,price,description) {
    //Object title is created
    this.title = title;
    this.imageUrl=imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    //Refers to this object
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    // products.push(this);
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
