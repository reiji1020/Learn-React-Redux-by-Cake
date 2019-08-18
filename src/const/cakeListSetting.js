export const CakeListSetting = {
	initialList: [
		{
			name: 'ショートケーキ',
			price: 350,
			stock: 10,
		},
		{
			name: 'チーズケーキ',
			price: 380,
			stock: 8,
		},
		{
			name: 'シュークリーム',
			price: 250,
			stock: 15,
		},
		{
			name: 'ロールケーキ',
			price: 250,
			stock: 5,
		},
		{
			name: 'モンブラン',
			price: 450,
			stock: 6,
		},
	],
	tableSetting: [
		{
			label: 'なまえ',
			data: 'name',
		},
		{
			label: '値段',
			data: 'price',
		},
		{
			label: '在庫数',
			data: 'stock',
		},
		{
			label: '売る',
			data: 'sell',
		},
		{
			label: '在庫を増やす',
			data: 'refill',
		},
	],
};

export default CakeListSetting;
