import { InventoryItemName } from "./game";

export enum LimitedItemType {
  BlacksmithItem = "BlacksmithItem",
  MarketItem = "MarketItem",
  BarnItem = "BarnItem",
  Flag = "Flag",
  MOMEventItem = "MOMEventItem",
  QuestItem = "QuestItem",
  MutantChicken = "MutantChicken",
  SalesmanItem = "SalesmanItem",
  WarTentItem = "WarTentItem",
}

export const KNOWN_IDS: Record<InventoryItemName, number> = {
  "Sunflower Seed": 101,
  "Potato Seed": 102,
  "Pumpkin Seed": 103,
  "Carrot Seed": 104,
  "Cabbage Seed": 105,
  "Beetroot Seed": 106,
  "Cauliflower Seed": 107,
  "Parsnip Seed": 108,
  "Radish Seed": 109,
  "Wheat Seed": 110,
  "Kale Seed": 111,
  "Apple Seed": 112,
  "Blueberry Seed": 113,
  "Orange Seed": 114,
  "Magic Bean": 115,
  "Shiny Bean": 116,
  "Golden Bean": 117,

  Sunflower: 201,
  Potato: 202,
  Pumpkin: 203,
  Carrot: 204,
  Cabbage: 205,
  Beetroot: 206,
  Cauliflower: 207,
  Parsnip: 208,
  Radish: 209,
  Wheat: 210,
  Kale: 211,
  Apple: 212,
  Blueberry: 213,
  Orange: 214,

  Axe: 301,
  Pickaxe: 302,
  "Stone Pickaxe": 303,
  "Iron Pickaxe": 304,
  Hammer: 305,
  Rod: 306,
  "Rusty Shovel": 307,
  Shovel: 308,
  "Power Shovel": 309,
  "Sand Shovel": 310,

  "Sunflower Statue": 401,
  "Potato Statue": 402,
  "Christmas Tree": 403,
  Scarecrow: 404,
  "Farm Cat": 405,
  "Farm Dog": 406,
  Gnome: 407,
  "Chicken Coop": 408,
  "Gold Egg": 409,
  "Golden Cauliflower": 410,
  "Sunflower Tombstone": 411,
  "Sunflower Rock": 412,
  "Goblin Crown": 413,
  Fountain: 414,
  "Woody the Beaver": 415,
  "Apprentice Beaver": 416,
  "Foreman Beaver": 417,
  "Mysterious Parsnip": 418,
  "Carrot Sword": 419,
  Nancy: 420,
  Kuebiko: 421,
  "Nyon Statue": 422,
  "Farmer Bath": 423,
  "Homeless Tent": 424,
  "Mysterious Head": 425,
  "Golden Bonsai": 426,
  "Rock Golem": 427,
  "Tunnel Mole": 428,
  "Rocky the Mole": 429,
  Nugget: 430,
  "Wicker Man": 431,
  "Victoria Sisters": 432,
  "Peeled Potato": 433,
  "Cabbage Boy": 434,
  "Cabbage Girl": 435,
  "Wood Nymph Wendy": 436,
  "Stellar Sunflower": 437,
  "Peaceful Potato": 438,
  "Perky Pumpkin": 439,
  "Colossal Crop": 440,
  "Immortal Pear": 441,
  "Lady Bug": 442,

  "Pumpkin Soup": 501,
  "Roasted Cauliflower": 502,
  Sauerkraut: 503,
  "Radish Pie": 504,
  "Sunflower Cake": 505,
  "Potato Cake": 506,
  "Pumpkin Cake": 507,
  "Carrot Cake": 508,
  "Cabbage Cake": 509,
  "Beetroot Cake": 510,
  "Cauliflower Cake": 511,
  "Parsnip Cake": 512,
  "Radish Cake": 513,
  "Wheat Cake": 514,
  "Boiled Eggs": 515,
  "Bumpkin Broth": 516,
  "Bumpkin Salad": 517,
  "Goblin's Treat": 518,
  "Mashed Potato": 519,
  "Cauliflower Burger": 520,
  "Club Sandwich": 521,
  "Roast Veggies": 522,
  Pancakes: 523,
  "Apple Pie": 524,
  "Blueberry Jam": 525,
  "Fermented Carrots": 526,
  "Honey Cake": 527,
  "Kale & Mushroom Pie": 528,
  "Kale Stew": 529,
  "Mushroom Jacket Potatoes": 530,
  "Mushroom Soup": 531,
  "Orange Cake": 532,
  "Sunflower Crunch": 533,
  "Reindeer Carrot": 534,
  "Apple Juice": 535,
  "Orange Juice": 536,
  "Purple Smoothie": 537,
  "Power Smoothie": 538,
  "Bumpkin Detox": 539,

  Wood: 601,
  Stone: 602,
  Iron: 603,
  Gold: 604,
  Egg: 605,
  Chicken: 606,
  Cow: 607,
  Pig: 608,
  Sheep: 609,
  "Speed Chicken": 610,
  "Fat Chicken": 611,
  "Rich Chicken": 612,
  Rooster: 613,
  Honey: 614,
  "Wild Mushroom": 615,
  "Magic Mushroom": 616,
  Diamond: 617,
  "Clam Shell": 618,
  "Sea Cucumber": 619,
  Coral: 620,
  Crab: 621,
  Starfish: 622,

  "Green Thumb": 701,
  "Barn Manager": 702,
  "Seed Specialist": 703,
  Wrangler: 704,
  Lumberjack: 705,
  Prospector: 706,
  Logger: 707,
  "Gold Rush": 708,
  Artist: 709,
  Coder: 710,
  "Liquidity Provider": 711,
  "Discord Mod": 712,
  "Trading Ticket": 713,
  Warrior: 714,
  "Beta Pass": 715,

  "Australian Flag": 801,
  "Belgian Flag": 802,
  "Brazilian Flag": 803,
  "Chinese Flag": 804,
  "Finnish Flag": 805,
  "French Flag": 806,
  "German Flag": 807,
  "Indonesian Flag": 808,
  "Indian Flag": 809,
  "Iranian Flag": 810,
  "Italian Flag": 811,
  "Japanese Flag": 812,
  "Moroccan Flag": 813,
  "Dutch Flag": 814,
  "Philippine Flag": 815,
  "Polish Flag": 816,
  "Portuguese Flag": 817,
  "Russian Flag": 818,
  "Saudi Arabian Flag": 819,
  "South Korean Flag": 820,
  "Spanish Flag": 821,
  "Sunflower Flag": 822,
  "Thai Flag": 823,
  "Turkish Flag": 824,
  "Ukrainian Flag": 825,
  "American Flag": 826,
  "Vietnamese Flag": 827,
  "Canadian Flag": 828,
  "Singaporean Flag": 829,
  "British Flag": 830,
  "Sierra Leone Flag": 831,
  "Romanian Flag": 832,
  "Rainbow Flag": 833,
  "Goblin Flag": 834,
  "Pirate Flag": 835,
  "Algerian Flag": 836,
  "Mexican Flag": 837,
  "Dominican Republic Flag": 838,
  "Argentinian Flag": 839,
  "Lithuanian Flag": 840,
  "Malaysian Flag": 841,
  "Colombian Flag": 842,

  // Special events
  "Egg Basket": 901,
  "Red Egg": 902,
  "Blue Egg": 903,
  "Yellow Egg": 904,
  "Pink Egg": 905,
  "Purple Egg": 906,
  "Orange Egg": 907,
  "Green Egg": 908,
  "Easter Bunny": 909,
  "Engine Core": 910,
  Observatory: 911,
  "Goblin Key": 912,
  "Sunflower Key": 913,
  "Ancient Goblin Sword": 914,
  "Ancient Human Warhammer": 915,
  "Rapid Growth": 916,
  "War Bond": 917,
  "Goblin War Point": 918,
  "Human War Point": 919,
  "Human War Banner": 920,
  "Goblin War Banner": 921,
  "Jack-o-lantern": 923,
  //Golden crop event
  "Golden Crop": 924,

  // Buildings
  Market: 1001,
  "Fire Pit": 1002,
  Workbench: 1003,
  Tent: 1004,
  "Water Well": 1005,
  "Hen House": 1006,
  Bakery: 1007,
  Kitchen: 1008,
  Deli: 1009,
  "Smoothie Shack": 1010,

  // Temporary Bumpkin items
  "Chef Apron": 1101,
  "Chef Hat": 1102,
  "Sunflower Amulet": 1103,
  "Carrot Amulet": 1104,
  "Beetroot Amulet": 1105,
  "Green Amulet": 1106,
  "Warrior Shirt": 1107,
  "Warrior Helmet": 1108,
  "Warrior Pants": 1109,
  "Sunflower Shield": 1110,
  "Skull Hat": 1111,
  "War Skull": 1112,
  "War Tombstone": 1113,
  "Undead Rooster": 1114,

  // Decorations
  "White Tulips": 1201,
  "Potted Sunflower": 1202,
  Cactus: 1203,
  "Basic Bear": 1204,
  "Chef Bear": 1205,
  "Construction Bear": 1206,
  "Angel Bear": 1207,
  "Badass Bear": 1208,
  "Bear Trap": 1209,
  "Brilliant Bear": 1210,
  "Classy Bear": 1211,
  "Farmer Bear": 1212,
  "Sunflower Bear": 1213,
  "Rich Bear": 1214,
  "Potted Potato": 1215,
  "Potted Pumpkin": 1216,
  "Christmas Bear": 1217,
  "Rainbow Artist Bear": 1218,
  "Christmas Snow Globe": 1219,
};

// The reverse of above
export const KNOWN_ITEMS: Record<string, InventoryItemName> = Object.assign(
  {},
  ...Object.entries(KNOWN_IDS).map(([a, b]) => ({ [b]: a }))
);

export const IDS = Object.values(KNOWN_IDS);
