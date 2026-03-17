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
    name: "Beijing",
    slug: "beijing",
    region: "North China",
    topCategories: ["Tech", "Policy Exports", "Cultural Goods"],
    description: "Technology hub and policy-driven export centre.",
    imageUrl: `${basePath}/images/beijing.webp`,
  },
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
  {
    name: "Xuchang",
    slug: "xuchang",
    region: "Central China",
    topCategories: ["Wigs", "Hair Products", "Beauty"],
    description: "Wig capital of the world \u2014 60%+ global market share, $2B+ exports.",
    imageUrl: `${basePath}/images/xuchang.webp`,
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
  { name: "Electronics", slug: "electronics", description: "Consumer electronics, components, PCBs, and smart devices", topCities: ["Shenzhen", "Kunshan", "Dongguan"] },
  { name: "Home & Kitchen", slug: "home-kitchen", description: "Kitchenware, home d\u00e9cor, storage, and household products", topCities: ["Ningbo", "Yiwu", "Foshan"] },
  { name: "Apparel & Textiles", slug: "apparel", description: "Clothing, fashion accessories, and garment manufacturing", topCities: ["Guangzhou", "Quanzhou", "Shanghai"] },
  { name: "Beauty & Personal Care", slug: "beauty", description: "Cosmetics, skincare, hair care, and beauty tools", topCities: ["Guangzhou", "Xuchang", "Qingdao"] },
  { name: "Packaging & Print", slug: "packaging", description: "Custom packaging, labels, boxes, and print materials", topCities: ["Yiwu", "Guangzhou", "Shanghai"] },
  { name: "Toys & Games", slug: "toys", description: "Children\u2019s toys, educational products, and gaming accessories", topCities: ["Dongguan", "Guangzhou", "Yiwu"] },
  { name: "Lighting", slug: "lighting", description: "LED, commercial lighting, smart lighting, and fixtures", topCities: ["Zhongshan", "Shenzhen", "Foshan"] },
  { name: "Building Materials", slug: "building-materials", description: "Tiles, stone, plumbing fixtures, and construction materials", topCities: ["Foshan", "Quanzhou", "Guangzhou"] },
  { name: "Furniture", slug: "furniture", description: "Home furniture, office furniture, and outdoor furniture", topCities: ["Foshan", "Dongguan", "Shanghai"] },
  { name: "Auto Parts", slug: "auto-parts", description: "Vehicle parts, accessories, and automotive components", topCities: ["Chongqing", "Qingdao", "Ningbo"] },
  { name: "Small Commodities", slug: "small-commodities", description: "Daily-use products, dollar-store goods, and general merchandise", topCities: ["Yiwu", "Guangzhou", "Ningbo"] },
  { name: "Health & Medical", slug: "health-medical", description: "Medical devices, health products, and wellness equipment", topCities: ["Shenzhen", "Beijing", "Shanghai"] },
  { name: "Pet Supplies", slug: "pet-supplies", description: "Pet food, accessories, grooming, and pet care products", topCities: ["Ningbo", "Guangzhou", "Yiwu"] },
  { name: "Sports & Outdoors", slug: "sports-outdoors", description: "Fitness equipment, outdoor gear, and sportswear", topCities: ["Quanzhou", "Xiamen", "Dongguan"] },
  { name: "Bags & Luggage", slug: "bags-luggage", description: "Travel bags, backpacks, handbags, and luggage", topCities: ["Guangzhou", "Quanzhou", "Yiwu"] },
  { name: "Stationery & Office", slug: "stationery-office", description: "Office supplies, writing instruments, and paper products", topCities: ["Yiwu", "Ningbo", "Shanghai"] },
  { name: "Garden & Landscaping", slug: "garden-landscaping", description: "Garden tools, outdoor furniture, and landscaping materials", topCities: ["Yiwu", "Foshan", "Ningbo"] },
  { name: "Jewelry & Accessories", slug: "jewelry-accessories", description: "Fashion jewelry, watches, and personal accessories", topCities: ["Yiwu", "Guangzhou", "Shenzhen"] },
  { name: "Tools & Hardware", slug: "tools-hardware", description: "Hand tools, power tools, and hardware fittings", topCities: ["Ningbo", "Yiwu", "Qingdao"] },
  { name: "Cleaning Supplies", slug: "cleaning-supplies", description: "Cleaning products, equipment, and hygiene supplies", topCities: ["Yiwu", "Guangzhou", "Ningbo"] },
  { name: "Food & Beverage Equipment", slug: "food-equipment", description: "Commercial kitchen equipment, food processing, and packaging", topCities: ["Shanghai", "Guangzhou", "Ningbo"] },
  { name: "Safety & Security", slug: "safety-security", description: "CCTV, alarms, PPE, and safety equipment", topCities: ["Shenzhen", "Dongguan", "Beijing"] },
  { name: "Textiles & Fabrics", slug: "textiles-fabrics", description: "Raw fabrics, functional textiles, and technical materials", topCities: ["Guangzhou", "Quanzhou", "Yiwu"] },
  { name: "Machinery & Industrial", slug: "machinery-industrial", description: "Industrial machinery, CNC equipment, and manufacturing tools", topCities: ["Shanghai", "Chongqing", "Zhengzhou"] },
];
