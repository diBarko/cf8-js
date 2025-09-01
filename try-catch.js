class ProductError extends Error {
  constructor(message) {
    super(message);
    this.code = 'ProductError';
  }
}

class InvalidProductError extends Error {
  constructor(message) {
    super(message);
    this.code = 'InvalidProductError';
  }
}

class DuplicateProductError extends Error {
  constructor(message) {
    super(message);
    this.code = 'DuplicateProductError';
  }
}

function insert(arr, product) {
  try {
    if (!product || typeof product !== "object") {
      // throw new Error("Invalid product");      
      throw new InvalidProductError("Invalid product");
    }

    if(arr.some(p => p.id === product.id)) {
      // throw new Error("Product already exists");
      throw new DuplicateProductError(`Product with id ${product.id} already exists`);
    }

    arr.push(product);
    console.log(`Product [${JSON.stringify(product)}] inserted successfully`);
  } catch (error) {
    console.error(`${new Date().toLocaleString()}. Error: ${error.message}`);
    throw error;    // Re-throw 
  }
}

const products = []
try {
  insert(products, { id: 1, title: "Computer", price: 1000 });
  insert(products, { id: 1, title: "Mobile", price: 500 });
} catch (error) {
  // console.log(`Error: ${error}`);
  if (error instanceof InvalidProductError) {
    console.log(`Error: ${error.message}`);
  } else if (error instanceof DuplicateProductError) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log(`Unexpected Error: ${error.message}`);
  }
}