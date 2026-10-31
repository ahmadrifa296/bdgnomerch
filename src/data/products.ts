import type { Product, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
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
    shopeeUrl: 'https://shopee.co.id/bdgnomercyy'
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
    id: 'bdg-002',
    name: 'BDG Boxy Heavyweight Tee 20s "Ex Undis Sol" Black',
    slug: 'bdg-boxy-heavyweight-tee-ex-undis-sol-black',
    price: 175000,
    originalPrice: 210000,
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    tags: ['Ex Undis Sol', 'Boxy Fit', 'Cotton 20s'],
    isBestSeller: true,
    isNewRelease: true,
    description: 'T-Shirt oversized boxy-fit dengan tipografi khas "Ex Undis Sol" dan grafis heraldik singa Bandung. Menggunakan material katun combed 20s heavy (210 GSM) dengan tekstur kokoh jatuh sempurna di badan.',
    material: '100% Cotton Combed 20s Heavyweight (210 GSM)',
    printType: 'Discharge & Plastisol Vintage Texture',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 24,
    features: [
      'Potongan boxy cut streetwear drop shoulder',
      'Bahan combed 20s heavy yang kokoh dan tidak mudah susut',
      'Sablon discharge menyatu dengan serat kain',
      'Official woven label BDG BOYS MERCH di sisi bawah'
    ],
    shopeeUrl: 'https://shopee.co.id/bdgnomercyy'
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
    answer: 'Pilih produk dan ukuran di katalog, lalu klik tombol Order via WhatsApp. Pesan otomatis tersusun rapi dengan nama artikel, ukuran, dan jumlah. Admin kami akan langsung merespons dengan ketersediaan stok, ongkos kirim, dan nomor rekening resmi.'
  },
  {
    question: 'Apakah produk di website ini ready stock?',
    answer: 'Semua artikel yang berstatus Ready Stock siap dikirim langsung dari studio workshop kami di Bandung. Jika ukuran habis, tombol pemesanan akan menginfokan status pre-order atau restock berikutnya.'
  },
  {
    question: 'Apakah bisa memesan lewat Shopee?',
    answer: 'Ya! Untuk artikel seperti Sticker Pack dan merchandise resmi lainnya, Anda juga dapat memesan langsung melalui Shopee Official Store kami di shopee.co.id/bdgnomercyy.'
  },
  {
    question: 'Metode pembayaran dan rekening resmi apa saja yang didukung?',
    answer: 'Pembayaran transfer bank resmi (BCA, Mandiri, BRI, BNI) dan QRIS resmi untuk semua e-wallet (GoPay, OVO, Dana, ShopeePay). Kami tidak pernah menggunakan rekening perorangan yang tidak terdaftar atas nama official store.'
  },
  {
    question: 'Berapa lama estimasi pengiriman pesanan?',
    answer: 'Pesanan terverifikasi sebelum jam 16.00 WIB dikirim pada hari yang sama. Pengiriman menggunakan ekspedisi resmi (JNE, J&T, SiCepat) dengan estimasi Jawa Barat 1 hari kerja, Pulau Jawa 1-2 hari kerja, dan luar Jawa 2-4 hari kerja.'
  },
  {
    question: 'Apakah ada jaminan tukar ukuran jika tidak pas?',
    answer: 'Kami melayani penukaran ukuran kaos maksimal 2 hari setelah paket diterima. Syaratnya kondisi baju belum dicuci, hangtag label masih terpasang utuh, dan stok ukuran pengganti tersedia.'
  }
];
