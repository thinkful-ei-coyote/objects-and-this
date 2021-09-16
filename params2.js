const products = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const options = { salesTax: 0.0825 };

function calculateTotal(products=[], {discountPercentage=.25,salesTax}={} ){
    let result = 0;
    for(let product of products){
        let {priceInCents, quantity}= product;
        result+=priceInCents*quantity;
    }
    console.log(discountPercentage, salesTax);
    if(discountPercentage) result *= 1-discountPercentage;
    return result * (1+salesTax);
}
  
console.log(calculateTotal(products));