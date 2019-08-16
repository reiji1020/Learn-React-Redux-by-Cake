export const CakeListSetting = {
  initialList: [
    {
      name: "ショートケーキ",
      price: 250,
      stock: 10
    },
    {
      name: "チーズケーキ",
      price: 300,
      stock: 8
    },
    {
      name: "シュークリーム",
      price: 350,
      stock: 5
    }
  ],
  tableSetting: [
    {
      label: "なまえ",
      data: "name"
    },
    {
      label: "値段",
      data: "price"
    },
    {
      label: "在庫数",
      data: "stock"
    }
  ]
};

export default CakeListSetting;
