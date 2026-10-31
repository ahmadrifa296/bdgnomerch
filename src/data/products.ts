import type { Product, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bdg-006',
    name: 'T-Shirt BDG SKULL',
    slug: 't-shirt-bdg-skull',
    price: 110000,
    originalPrice: 135000,
    category: 'T-Shirt',
    image: '/products/bdg-skull.jpg',
    tags: ['BDG Skull', 'New Release', 'Casuals Culture'],
    isBestSeller: true,
    isNewRelease: true,
    description: 'T-Shirt grafis ikonik BDG SKULL dengan artwork tengkorak berbalut scarf/bandana tartan khas kultur casuals suporter. Menggunakan material Cotton Combed 24s berkualitas tinggi yang sejuk, nyaman, dan menyerap keringat. Tersedia dalam pilihan warna Black & White.',
    material: 'Cotton Combed 24s',
    printType: 'Plastisol',
    cutting: 'Regular Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    stockCount: 40,
    features: [
      'Bahan: Cotton Combed 24s (adem, nyaman, menyerap keringat)',
      'Sablon: Plastisol awet, tajam, dan tidak mudah pecah',
      'Cutting: Regular Fit yang pas dan nyaman dipakai harian',
      'Artwork eksklusif tengkorak bandana tartan khas casuals',
      'Tersedia pilihan warna Hitam & Putih'
    ]
  },
  {
    id: 'bdg-002',
    name: 'T-Shirt EX UNDIS SOL',
    slug: 't-shirt-ex-undis-sol',
    price: 110000,
    originalPrice: 135000,
    category: 'T-Shirt',
    image: '/products/t-shirt-ex-undis-sol.jpg',
    tags: ['Ex Undis Sol', 'New Release', 'Bandung Pride'],
    isBestSeller: true,
    isNewRelease: true,
    description: 'T-Shirt official BDG BOYS MERCH edisi "EX UNDIS SOL" warna putih dengan artwork heraldik lambang kebanggaan kota Bandung. Dibuat menggunakan bahan katun combed 24s dengan sablon plastisol berkualitas tinggi dan potongan pola regular fit.',
    material: 'Cotton Combed 24s',
    printType: 'Plastisol',
    cutting: 'Regular Fit',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    stockCount: 35,
    features: [
      'Bahan: Cotton Combed 24s (adem, halus, menyerap keringat)',
      'Sablon: Plastisol awet, tajam, dan tidak mudah retak',
      'Cutting: Regular Fit nyaman untuk matchday dan harian',
      'Artwork grafis heraldik singa "Ex Undis Sol" khas Bandung pride',
      'Jahitan rantai pundak rapi dan standar distro berkualitas'
    ]
  },
  {
    id: 'bdg-010',
    name: '10 Pcs Sticker Pack "Ex Undis Sol"',
    slug: '10-pcs-sticker-pack-ex-undis-sol',
    price: 30000,
    originalPrice: 40000,
    category: 'Stiker',
    image: '/products/sticker-pack.png',
    tags: ['Official Sticker', 'Vinyl Waterproof', 'Ex Undis Sol'],
    isBestSeller: true,
    isNewRelease: true,
    description: 'Official 10 Pcs Sticker Pack edisi "Ex Undis Sol" dari BDG BOYS MERCH (@bdgnomercyy). Berisi 10 buah stiker die-cut vinyl berkualitas tinggi dengan lapisan laminasi doff anti-air dan anti-sinar UV. Cocok ditempel di helm, motor, laptop, koper, dan perlengkapan matchday.',
    material: 'Vinyl Premium Die-Cut + Doff Lamination (Waterproof & Scratch-Resistant)',
    printType: 'High Quality UV Print Die-Cut Contour',
    sizes: ['1 Pack (10 Pcs)'],
    inStock: true,
    stockCount: 50,
    features: [
      'Isi 10 pcs stiker vinyl die-cut desain kultus Bandung Boys',
      'Material vinyl tebal tahan air hujan, cuaca panas, dan goresan',
      'Laminasi doff premium tidak mudah pudar atau sobek',
      'Dikemas rapi dalam zip-lock pouch hitam eksklusif Ex Undis Sol'
    ],
    shopeeUrl: 'https://shopee.co.id/Sticker-Persib-Casual-Ex-Undis-Sol-Bandung-i.713581501.41834547390?extraParams=%7B%22display_model_id%22%3A311528753052%2C%22model_selection_logic%22%3A3%7D&image_ids=sg-11134207-8258v-mtatzv9c70ua13'
  }
];

export const CATEGORIES = [
  'Semua',
  'T-Shirt',
  'Stiker'
] as const;

export const FAQS: FaqItem[] = [
  {
    question: 'Bagaimana alur pemesanan merchandise via WhatsApp?',
    answer: 'Pilih produk dan ukuran di katalog, lalu klik tombol Order via WhatsApp. Pesan otomatis tersusun rapi dengan nama produk, ukuran, dan jumlah. Admin kami akan langsung merespons dengan ketersediaan stok, ongkos kirim, dan nomor rekening resmi.'
  },
  {
    question: 'Apakah produk di website ini ready stock?',
    answer: 'Semua produk yang berstatus Ready Stock siap dikirim langsung dari workshop kami. Jika ukuran habis, tombol pemesanan akan menginfokan status pre-order atau restock berikutnya.'
  },
  {
    question: 'Apakah bisa memesan lewat Shopee?',
    answer: 'Ya! Untuk produk seperti Sticker Pack dan merchandise resmi lainnya, Anda juga dapat memesan langsung melalui Shopee Official Store kami di shopee.co.id/dim4swelah.'
  },
  {
    question: 'Metode pembayaran dan rekening resmi apa saja yang didukung?',
    answer: 'Pembayaran transfer bank resmi (BCA, Mandiri, BRI, BNI) dan QRIS resmi untuk semua e-wallet (GoPay, OVO, Dana, ShopeePay). Kami tidak pernah menggunakan rekening perorangan yang tidak terdaftar atas nama official store.'
  },
  {
    question: 'Berapa lama estimasi pengiriman pesanan?',
    answer: 'Pesanan terverifikasi sebelum jam 16.00 WIB dikirim pada hari yang sama. Pengiriman menggunakan ekspedisi resmi (JNE, J&T, SiCepat) dengan estimasi pengiriman cepat ke seluruh wilayah Indonesia.'
  },
  {
    question: 'Apakah produk yang sudah dibeli bisa ditukar ukuran atau diretur?',
    answer: 'Mohon maaf, kami tidak melayani penukaran ukuran (tukar size) maupun retur produk setelah pesanan diproses dan dikirim. Pastikan Anda telah memeriksa panduan ukuran (size chart) pada setiap produk kaos sebelum memesan.'
  }
];
