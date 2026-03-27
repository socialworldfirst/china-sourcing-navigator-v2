import basePath from "./basePath";

export interface City {
  name: string;
  slug: string;
  region: string;
  topCategories: string[];
  description: string;
  imageUrl: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  topCities: string[];
}

export const cities: City[] = [
  // South China — Pearl River Delta
  {
    name: "Guangzhou",
    slug: "guangzhou",
    region: "South China",
    topCategories: ["Apparel", "Leather", "Cosmetics", "Toys"],
    description: "Canton Fair host city and gateway to the Pearl River Delta manufacturing belt.",
    imageUrl: `${basePath}/images/guangzhou.webp`,
  },
  {
    name: "Shenzhen",
    slug: "shenzhen",
    region: "South China",
    topCategories: ["Electronics", "Smart Hardware", "LED"],
    description: "China\u2019s tech manufacturing powerhouse and hardware capital.",
    imageUrl: `${basePath}/images/shenzhen.webp`,
  },
  {
    name: "Dongguan",
    slug: "dongguan",
    region: "South China",
    topCategories: ["Plastics", "Moulds", "Toys"],
    description: "The world\u2019s factory floor for precision manufacturing.",
    imageUrl: `${basePath}/images/dongguan.webp`,
  },
  {
    name: "Zhongshan",
    slug: "zhongshan",
    region: "South China",
    topCategories: ["Lighting", "LED", "Electrical"],
    description: "Home to Guzhen \u2014 the lighting capital of China.",
    imageUrl: `${basePath}/images/zhongshan.webp`,
  },
  {
    name: "Foshan",
    slug: "foshan",
    region: "South China",
    topCategories: ["Furniture", "Ceramics", "Aluminium"],
    description: "Building materials and furniture capital of China.",
    imageUrl: `${basePath}/images/foshan.webp`,
  },

  // East China — Yangtze River Delta
  {
    name: "Shanghai",
    slug: "shanghai",
    region: "East China",
    topCategories: ["Trade Hub", "Fashion", "Services"],
    description: "China\u2019s international trade hub and logistics command centre.",
    imageUrl: `${basePath}/images/shanghai.webp`,
  },
  {
    name: "Yiwu",
    slug: "yiwu",
    region: "East China",
    topCategories: ["Small Commodities", "Hosiery", "Packaging"],
    description: "World\u2019s largest small commodities market. Includes Datang/Zhuji hosiery cluster.",
    imageUrl: `${basePath}/images/yiwu.webp`,
  },
  {
    name: "Kunshan",
    slug: "kunshan",
    region: "East China",
    topCategories: ["Electronics", "Precision Components", "Tech Hardware"],
    description: "The quiet powerhouse of global tech hardware. \u201CLittle Taipei\u201D.",
    imageUrl: `${basePath}/images/kunshan.webp`,
  },
  {
    name: "Danyang",
    slug: "danyang",
    region: "East China",
    topCategories: ["Eyewear", "Optical Lenses", "Precision"],
    description: "One of the world\u2019s largest production centres for optical lenses.",
    imageUrl: `${basePath}/images/danyang.webp`,
  },
  {
    name: "Ningbo",
    slug: "ningbo",
    region: "East China",
    topCategories: ["Home Products", "Hardware", "Appliances"],
    description: "Major port city with dense SME clusters and diverse manufacturing.",
    imageUrl: `${basePath}/images/ningbo.webp`,
  },
  {
    name: "Hangzhou",
    slug: "hangzhou",
    region: "East China",
    topCategories: ["E-commerce", "Women\u2019s Fashion", "Silk"],
    description: "Alibaba\u2019s home city. E-commerce fashion capital and China\u2019s silk heritage hub.",
    imageUrl: `${basePath}/images/hangzhou.jpg`,
  },
  {
    name: "Suzhou",
    slug: "suzhou",
    region: "East China",
    topCategories: ["Silk", "Textiles", "Precision Manufacturing"],
    description: "Silk capital with Shengze fabric hub and Changshu garment wholesale market.",
    imageUrl: `${basePath}/images/suzhou.jpg`,
  },

  // Southeast China — Fujian
  {
    name: "Xiamen",
    slug: "xiamen",
    region: "Southeast China",
    topCategories: ["Port Hub", "Tungsten", "Art"],
    description: "Fujian\u2019s port gateway with specialised export clusters.",
    imageUrl: `${basePath}/images/xiamen.webp`,
  },
  {
    name: "Quanzhou",
    slug: "quanzhou",
    region: "Southeast China",
    topCategories: ["Footwear", "Menswear", "Sanitary Ware"],
    description: "Jinjiang footwear + Shishi menswear + Nan\u2019an stone & plumbing in one cluster.",
    imageUrl: `${basePath}/images/quanzhou.webp`,
  },

  // North China
  {
    name: "Qingdao",
    slug: "qingdao",
    region: "North China",
    topCategories: ["Tires", "Rubber", "Appliances", "Eyelashes"],
    description: "Industrial port city with strong rubber, appliance, and beauty clusters.",
    imageUrl: `${basePath}/images/qingdao.webp`,
  },
  {
    name: "Pingxiang, Hebei",
    slug: "pingxiang",
    region: "North China",
    topCategories: ["Children\u2019s Bicycles", "Ride-on Products"],
    description: "Children\u2019s bicycle capital \u2014 145M units/year, 40% global share.",
    imageUrl: `${basePath}/images/pingxiang.webp`,
  },

  // Central China
  {
    name: "Zhengzhou",
    slug: "zhengzhou",
    region: "Central China",
    topCategories: ["Smartphones", "Assembly", "Logistics"],
    description: "\u201CiPhone City\u201D \u2014 smartphone assembly hub and CR Express gateway.",
    imageUrl: `${basePath}/images/zhengzhou.webp`,
  },
  {
    name: "Chongqing",
    slug: "chongqing",
    region: "Central China",
    topCategories: ["Laptops", "Automotive", "Electronics"],
    description: "\u201CGlobal Laptop Capital\u201D with expanding automotive exports.",
    imageUrl: `${basePath}/images/chongqing.webp`,
  },
  {
    name: "Chengdu",
    slug: "chengdu",
    region: "Central China",
    topCategories: ["IT", "Software", "Engineering"],
    description: "China\u2019s engineering lab \u2014 where R&D meets manufacturing.",
    imageUrl: `${basePath}/images/chengdu.webp`,
  },

  // Hong Kong
  {
    name: "Hong Kong",
    slug: "hong-kong",
    region: "Hong Kong",
    topCategories: ["Trade Orchestration", "Compliance", "Finance"],
    description: "The sourcing control tower \u2014 governance, QC, and trade finance hub.",
    imageUrl: `${basePath}/images/hong-kong.webp`,
  },
];

export const categories: Category[] = [
  // 18 categories — buyer-intent taxonomy, locked March 2026
  // topCities are provisional — will be confirmed by /csn_category_research per category
  { name: "Electronics", slug: "electronics", description: "Consumer electronics, components, PCBs, and smart devices", topCities: ["Shenzhen", "Dongguan", "Guangzhou"] },
  { name: "Appliances", slug: "appliances", description: "Kitchen appliances, home appliances, and small electronics", topCities: ["Ningbo", "Foshan", "Qingdao"] },
  { name: "Apparel", slug: "apparel", description: "Clothing, fashion, fabrics, and garment manufacturing", topCities: ["Guangzhou", "Dongguan", "Hangzhou"] },
  { name: "Footwear", slug: "footwear", description: "Sneakers, sandals, boots, and shoe manufacturing", topCities: ["Quanzhou", "Dongguan", "Guangzhou"] },
  { name: "Bags & Luggage", slug: "bags-luggage", description: "Handbags, backpacks, suitcases, and travel goods", topCities: ["Guangzhou", "Quanzhou", "Yiwu"] },
  { name: "Beauty", slug: "beauty", description: "Cosmetics, skincare, haircare, wigs, and beauty tools", topCities: ["Guangzhou", "Yiwu", "Qingdao"] },
  { name: "Toys", slug: "toys", description: "Children\u2019s toys, educational products, and games", topCities: ["Dongguan", "Guangzhou", "Yiwu"] },
  { name: "Baby", slug: "baby", description: "Baby clothing, strollers, feeding products, and maternity", topCities: ["Pingxiang, Hebei", "Ningbo", "Guangzhou"] },
  { name: "Sports", slug: "sports", description: "Sports equipment, fitness gear, and athletic products", topCities: ["Quanzhou", "Xiamen", "Ningbo"] },
  { name: "Outdoor", slug: "outdoor", description: "Camping, hiking gear, outdoor furniture, and recreation", topCities: ["Ningbo", "Yiwu", "Xiamen"] },
  { name: "Home & Furniture", slug: "home-furniture", description: "Furniture, home decor, storage, bedding, and ceramics", topCities: ["Foshan", "Guangzhou", "Yiwu"] },
  { name: "Lighting", slug: "lighting", description: "LED, commercial lighting, decorative lighting, and smart lighting", topCities: ["Zhongshan", "Shenzhen", "Foshan"] },
  { name: "Pets", slug: "pets", description: "Pet food, accessories, grooming, beds, and pet toys", topCities: ["Ningbo", "Guangzhou", "Yiwu"] },
  { name: "Health & Medical", slug: "health-medical", description: "Medical devices, health products, and wellness equipment", topCities: ["Shenzhen", "Shanghai", "Guangzhou"] },
  { name: "Jewelry", slug: "jewelry", description: "Fashion jewelry, watches, sunglasses, and accessories", topCities: ["Yiwu", "Guangzhou", "Shenzhen"] },
  { name: "Hardware & Tools", slug: "hardware-tools", description: "Hand tools, power tools, fasteners, and hardware fittings", topCities: ["Ningbo", "Yiwu", "Qingdao"] },
  { name: "Building Materials", slug: "building-materials", description: "Tiles, stone, plumbing, sanitary ware, and construction materials", topCities: ["Foshan", "Quanzhou", "Guangzhou"] },
  { name: "Packaging", slug: "packaging", description: "Custom packaging, labels, boxes, and printing materials", topCities: ["Yiwu", "Guangzhou", "Shanghai"] },
];
