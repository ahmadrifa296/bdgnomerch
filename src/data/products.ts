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
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 40,
    features: [
      'Bahan: Cotton Combed 24s (adem, nyaman, menyerap keringat)',
      'Sablon: Plastisol awet, tajam, dan tidak mudah pecah',
      'Cutting: Regular Fit yang pas dan nyaman dipakai harian',
      'Artwork eksklusif tengkorak bandana tartan khas casuals',
      'Tersedia pilihan warna Hitam & Putih'
    ],
    shopeeUrl: 'https://shopee.co.id/dim4swelah'
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
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
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
  },
  {
    id: 'bdg-001',
    name: 'BDG Ultra Heavyweight Tee 24s "Bandung Pride"',
    slug: 'bdg-ultra-heavyweight-tee-bandung-pride',
    price: 165000,
    originalPrice: 195000,
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    tags: ['Best Seller', 'Heavyweight', 'Bandung Culture'],
    isBestSeller: true,
    isNewRelease: false,
    description: 'T-Shirt edisi kebanggaan BDG BOYS MERCH dengan bahan Cotton Combed 24s Heavyweight reaktif. Potongan boxy-fit modern dengan sablon Plastisol High Density tahan cuci berkali-kali.',
    material: '100% Cotton Combed 24s Heavyweight (190-200 GSM)',
    printType: 'High Density Plastisol Ink with Cure Finish',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 28,
    features: [
      'Bahan tebal tidak menerawang dan sangat adem',
      'Jahitan rantai standar distro Bandung',
      'Rib kerah tebal 2.5cm anti melar',
      'Bonus sticker pack resmi BDG BOYS'
    ]
  },
  {
    id: 'bdg-003',
    name: 'BDG Terrace Casuals Graphic Tee "Bandung Till I Die"',
    slug: 'bdg-terrace-casuals-graphic-tee',
    price: 160000,
    originalPrice: 190000,
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    tags: ['Matchday Ready', 'Terrace Culture', 'Plastisol'],
    isBestSeller: false,
    isNewRelease: true,
    description: 'Grafis matchday suporter Bandung dengan typography vintage casuals Eropa. Desain grafis belakang full back print bertema tribun dan kebanggaan kota.',
    material: 'Cotton Combed 24s Premium Soft Reaktif',
    printType: 'Screen Print Plastisol Manual 6 Warna',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 30,
    features: [
      'Kain lembut dan sejuk nyaman untuk iklim tropis dan nonton di tribun',
      'Warna biru pekat reaktif tahan luntur',
      'Sablon presisi dengan detail tajam',
      'Jahitan overdeck 3 jarum sangat kuat'
    ]
  },
  {
    id: 'bdg-004',
    name: 'BDG Dago Casuals Polo Tee "Striped Collar"',
    slug: 'bdg-dago-casuals-polo-tee',
    price: 185000,
    originalPrice: 220000,
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1625910513413-7d2d38ec9d41?auto=format&fit=crop&w=800&q=80',
    tags: ['Casuals', 'Terrace Culture', 'Pique Cotton'],
    isBestSeller: false,
    isNewRelease: false,
    description: 'Polo shirt berkarakter casuals khas football culture Eropa yang diadaptasi untuk streetwear anak muda Bandung. Bahan Lacoste Pique Cotton sejuk dengan bordir presisi.',
    material: 'Premium Lacoste Pique Cotton 24s',
    printType: 'Precision Computer Embroidery Badge',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    stockCount: 22,
    features: [
      'Kerah rajut tebal bergaris kontras (tipping collar)',
      'Kancing bermotif cangkang mutiara eksklusif',
      'Potongan regular fit rapi untuk casual matchday',
      'Ventilasi samping dengan pita herringbone kuat'
    ]
  },
  {
    id: 'bdg-005',
    name: 'BDG Heritage Pocket Tee "Blue Tartan Accents"',
    slug: 'bdg-heritage-pocket-tee-tartan',
    price: 155000,
    originalPrice: 185000,
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    tags: ['Pocket Tee', 'Tartan Detail', 'Minimalist'],
    isBestSeller: false,
    isNewRelease: false,
    description: 'T-Shirt minimalis dengan aksen saku dada bermotif tartan biru-kuning khas BDG BOYS. Elegan untuk dipakai harian maupun acara santai.',
    material: 'Cotton Combed 24s Heavy + Tartan Cotton Pocket',
    printType: 'Woven Crest Label on Pocket',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 18,
    features: [
      'Saku dada fungsional dengan material tartan woven',
      'Woven emblem label BDG BOYS resmi',
      'Kerah anti melar dengan double stitch',
      'Regular relax fit'
    ]
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
