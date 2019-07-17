const mongoose = require('mongoose');
const models = require('./index.js');

const categorySeedData = [
  { name: "Living Room" },
  { name: "Sofa & Sectional Collections" },
  { name: "Dining Room & Kitchen" },
  { name: "Kitchen Furniture" },
  { name: "Bedroom" },
  { name: "Home Office" },
  { name: "More Rooms" },
  { name: "Outdoor Furniture" },
  { name: "Outdoor Pillows & Decor" },
  { name: "Planters & Garden" },
  { name: "Outdoor Planters" },
  { name: "All Planters & Terrariums" },
  { name: "Outdoor Entertaining" },
  { name: "All Rugs" },
  { name: "Windows" },
  { name: "All Bedding" },
  { name: "Bedding Essentials" },
  { name: "All Bedding Essentials" },
  { name: "Baby & Kids Bedding" },
  { name: "Bath Linens" },
  { name: "Bath Linen Collections" },
  { name: "Bath Accessories & Organization" },
  { name: "Bathroom Hardware & Lighting" },
  { name: "All Lighting" },
  { name: "Lighting Collections" },
  { name: "Pillows & Throws & Poufs" },
  { name: "All Pillows, Throws & Poufs" },
  { name: "Organization" },
  { name: "All Home Organization" },
  { name: "Room Accents" },
  { name: "Accessories & Gifts" },
  { name: "Mirrors" },
  { name: "All Mirrors" },
  { name: "Art" },
  { name: "All Art" },
  { name: "Art By Color" },
  { name: "Art By Subject" },
  { name: "Wall Organization" },
  { name: "Frames & Wall Decor" },
  { name: "Dinnerware" },
  { name: "Dinnerware Collections" },
  { name: "All Dinnerware" },
  { name: "Serveware" },
  { name: "Flatware" },
  { name: "Bar & Glassware" },
  { name: "All Barware & Glassware" },
  { name: "Table Linens" },
  { name: "All Table Linens" },
  { name: "Kitchen" },
  { name: "Brands" }
];

const descriptionSeedData = [
    {name: "glass"},
    {name: "stem"},
    {name: "bath"},
    {name: "garden"},
    {name: "dining"},
    {name: "bar"},
    {name: "counter"},
    {name: "kitchen"},
    {name: "desk"},
    {name: "office"},
    {name: "baby"},
    {name: "kids"},
    {name: "accent"},
    {name: "urban"},
    {name: "side"},
    {name: "outdoor"},
    {name: "patio"},
    {name: "indoor"},
    {name: "patterned"},
    {name: "solid"},
    {name: "moroccan"},
    {name: "persian"},
    {name: "natural"},
    {name: "entryway"},
    {name: "hallway"},
    {name: "window"},
    {name: "decorative"},
    {name: "linen"},
    {name: "organic cotton"},
    {name: "white"},
    {name: "neutral"},
    {name: "gray"},
    {name: "blue"},
    {name: "purple"},
    {name: "pink"},
    {name: "floor"},
    {name: "table"},
    {name: "ceiling"},
    {name: "closet"},
    {name: "wall"},
    {name: "abstract"},
    {name: "modern"},
    {name: "leather"},
    {name: "wood"},
    {name: "marble"},
    {name: "rattan"},
    {name: "silk"},
    {name: "mid-century"},
    {name: "bamboo"},
    {name: "wicker"},
    {name: "plastic"},
    {name: "metal"}
]

const seedCategoryFunction = () => {
    models.Category.create(categorySeedData)
    .then( () => {
        console.log('Database seeded!');
        mongoose.connection.close();
    })
    .catch( err => console.error(err));
}

const seedDescFunction = () => {
    models.Description.create(descriptionSeedData)
    .then( () => {
        console.log('Database seeded!');
        mongoose.connection.close();
    })
    .catch( err => console.error(err));
}

seedCategoryFunction();
seedDescFunction();
