/**
 *  Sekarang, Shoppee sedang mengadakan sale Coklat di web app nya.
 *  Dan untuk sale ini, kamu berhasil mendapatkan voucher senilai "money" yang akan kamu gunakan untuk membeli coklat.
 *
 *  Di sini diberikan list coklat beserta harga nya.
 *  Kamu ingin membeli coklat sebanyak mungkin dengan voucher yang diberikan.
 *
 *  Namun, untuk sekali 'shopping', kamu hanya bisa membeli 1 coklat per merek.
 *  Shopping adalah saat dimana kamu membeli satu per satu coklat dari daftar yang diberikan.
 *  Pastinya kamu ingin membeli coklat tersebut dari merek yang paling mahal duluan baru membeli yang lainnya.
 *
 *
 *  Contoh:
 *
 *  Misalkan diberikan list coklat (Ini hanya contoh, karena harga yang tertera di list coklat bisa berbeda tiap test case):
 *
 *  Waltz, 25000
 *  Lindt, 30000
 *  Toblerone, 20000
 *
 *  Dan voucher senilai 100000
 *
 *  Barang yang dibeli dimulai dari barang yang harganya termahal dari list barang:
 *
 *  Lindt, 30000
 *  Waltz, 25000
 *  Toblerone, 20000
 *
 *  Lalu, pada shopping #1 kamu akan membeli
 *  Lindt 1 kali => 30000
 *  Waltz 1 kali  => 25000
 *  Toblerone 1 kali   => 20000
 *  dengan total 75000
 *
 *  sisa uang kamu adalah 25000
 *
 *  Pada shopping #2 kamu akan membeli
 *  Waltz 1 kali => 25000
 *  sisa uang kamu 0
 *
 *  Jumlah Shopping 2 kali dengan sisa uang 0
 *  Kamu membeli Lindt 1, Waltz 2, Toblerone 1
 *
 *  Output yang diharapkan adalah array 2 dimensi berisi nama coklat dan jumlah yang kamu beli.
 *
 *  Contohnya seperti dibawah ini:
 *  [ [ 'Lindt', 1 ], [ 'Waltz', 2 ], [ 'Toblerone', 1 ] ]
 *
 * RULES
 * 	- Dilarang menggunakan built-in .sort .reduce .map .filter .indexOf .lastIndexOf
 *
 */

function saleCoklat(list, money) {
	//implementasikan function dibawah ini
	var result = []
	var ambilHarga = []
	for (let i = 0; i < list.length; i++) {
		ambilHarga.push([list[i][0], Number(list[i][1])])
	}
	// console.log(ambilHarga)

	// MENGURUTKAN harga barang dari ambil harga
	var urut = []
	for (let i = 0; i < ambilHarga.length; i++) {
		for (let j = i+1; j < ambilHarga.length; j++) {
			if (Number(ambilHarga[i][1]) < Number(ambilHarga[j][1])) {
				let temp = ambilHarga[i]
				ambilHarga[i] = ambilHarga[j]
				ambilHarga[j] = temp
			}
			// console.log(list.length)
		}
		urut.push(ambilHarga[i])
	}
	// console.log(urut)

	// jumlahkan dan pilih barang berdasarkan 'money'
	var pilihBarang = []
	var jumlah = 0
	for (let i = 0; i < urut.length; i++) {
		jumlah += urut[i][1]
		if (jumlah < money) {
			pilihBarang.push(urut[i][0], 1)
		}
	}


	// console.log(pilihBarang)
	return pilihBarang
}

console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		100000
	)
);
[ [ 'Hersheys', 1 ], [ 'Toblerone', 1 ] ]

console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		200000
	)
);
/**
 * 
 * [
  [ 'Hersheys', 1 ],
  [ 'Toblerone', 1 ],
  [ 'Cadbury', 1 ],
  [ 'Waltz', 1 ],
  [ 'Ferrero Rocher', 1 ]
]
 * 
 */

console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		500000
	)
);

/**
 *
[
  [ 'Hersheys', 3 ],
  [ 'Toblerone', 2 ],
  [ 'Cadbury', 2 ],
  [ 'Waltz', 2 ],
  [ 'Ferrero Rocher', 3 ],
  [ 'Guylian', 2 ]
]
 * 
 */

console.log(
	saleCoklat(
		[
			['Waltz', 25000],
			['Lindt', 30000],
			['Toblerone', 20000]
		],
		100000
	)
);

/**
 * 
[ [ 'Lindt', 1 ], [ 'Waltz', 2 ], [ 'Toblerone', 1 ] ]
 * 
 */
