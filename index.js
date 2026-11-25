//Listen med produdkter er const fordi den aldri endres. 

const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];

  //1: Denne koden filtrerer ut de produktene som koster under 200 kroner, og skaper et nytt array. 
  const productsUnder200 = products.filter((product) => product.price < 200);
  //Skriver ut produktene som koster under 200kr
  console.log(productsUnder200);

  // 2: Her lager vi en ny array med kun navnet itl hvert enkelt produkt.
  const prouctNames = products.map((product) => product.name);
  //Skriver ut navnet på alle produkter.

  // 3: Filter helter ut elektronikkprodukter, og bruker map for å få et array med navnene på disse produktene.
  const electronicsProductNames = products.filter((product) => product.category === "electronics").map((product) => product.name);

  // 4: Some gir true om et produkt koster mer enn 1000 kroner, ellers false.
  const hasProductsOver1000 = products.some((product) => product.price > 1000);




  

