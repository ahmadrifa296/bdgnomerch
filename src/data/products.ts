import type { Product, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bdg-010',
    name: '10 Pcs Sticker Pack "Ex Undis Sol"',
    slug: '10-pcs-sticker-pack-ex-undis-sol',
    price: 30000,
    originalPrice: 40000,
    category: 'Aksesoris',
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
    name: 'Paris Van Java Heritage Oversized Hoodie',
    slug: 'paris-van-java-heritage-oversized-hoodie',
    price: 320000,
    originalPrice: 385000,
    category: 'Hoodie & Sweatshirt',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    tags: ['Edisi Terbatas', 'Cotton Fleece', 'Warm & Soft'],
    isBestSeller: true,
    isNewRelease: false,
    description: 'Hoodie premium dengan bahan Cotton Fleece Taiwan 330 GSM yang lembut dan tebal. Desain grafis tipografi vintage Paris Van Java di bagian punggung dan bordir emblem BDG di dada kiri.',
    material: 'Heavy Cotton Fleece Taiwan 330 GSM',
    printType: 'Combination of High Definition Discharge & Woven Emblem',
    sizes: ['M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 15,
    features: [
      'Gramasi tebal 330 GSM cocok untuk hawa dingin Bandung',
      'Double-lined hood dengan tali serut braided katun',
      'Kantung kangaroo lapang dengan bar-tack reinforce',
      'Washed vintage finish yang estetik'
    ]
  },
  {
    id: 'bdg-003',
    name: 'Bandung Boys Matchday Supporter Jersey 2026',
    slug: 'bandung-boys-matchday-supporter-jersey',
    price: 245000,
    originalPrice: 280000,
    category: 'Jersey',
    image: 'https://images.unsplash.com/photo-1577210897949-1f56f9435024?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
    tags: ['New Release', 'Sublimation', 'Matchday Ready'],
    isBestSeller: false,
    isNewRelease: true,
    description: 'Jersey suporter resmi bernuansa biru kebanggaan dengan aksen strip emas dan pola jacquard khas kota kembang. Teknologi Dry-Fit Breathable menjamin kenyamanan saat di tribun maupun hangout.',
    material: 'Milano Jacquard Polyester Dry-Fit 160 GSM',
    printType: 'Full Sublimation Print Anti-Luntur & 3D Silicone Badge',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 42,
    features: [
      'Bahan cepat menyerap keringat dan cepat kering (Quick Dry)',
      'Patch logo 3D Heat-Press timbul berkualitas',
      'Kerah rib elastis V-neck sporty',
      'Detail woven label keaslian di ujung bawah'
    ]
  },
  {
    id: 'bdg-004',
    name: 'Pasupati Cyber-Distro Zip Hoodie "Midnight"',
    slug: 'pasupati-cyber-distro-zip-hoodie-midnight',
    price: 345000,
    originalPrice: 399000,
    category: 'Hoodie & Sweatshirt',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    tags: ['Zip Hoodie', 'YKK Metal', 'Heavyweight'],
    isBestSeller: false,
    isNewRelease: true,
    description: 'Zip hoodie serbaguna dengan zipper YKK metal original. Terinspirasi dari gemerlap arsitektur jembatan Pasupati di malam hari. Dilengkapi saku dalam tambahan untuk gadget.',
    material: 'Terry Heavyweight 340 GSM',
    printType: 'Reflective 3M Print on Sleeves & Plastisol Chest',
    sizes: ['M', 'L', 'XL', 'XXL'],
    inStock: true,
    stockCount: 19,
    features: [
      'Ritsleting full zip merk YKK Original kuat dan halus',
      'Grafis reflektif menyala jika terkena sorotan lampu malam',
      'Extra interior pocket aman untuk dompet atau HP',
      'Fit relax streetwear santai'
    ]
  },
  {
    id: 'bdg-005',
    name: 'Dago Casuals Vintage Polo Shirt',
    slug: 'dago-casuals-vintage-polo-shirt',
    price: 185000,
    originalPrice: 220000,
    category: 'T-Shirt',
    image: 'https://images.unsplash.com/photo-1625910513413-7d2d38ec9d41?auto=format&fit=crop&w=800&q=80',
    tags: ['Casuals', 'Terrace Culture', 'Pique Cotton'],
    isBestSeller: false,
    isNewRelease: false,
    description: 'Polo shirt berkarakter casuals khas football culture Eropa yang diadaptasi untuk anak muda Bandung. Bahan Lacoste Pique Cotton sejuk dengan bordir presisi.',
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
    id: 'bdg-006',
    name: 'Heritage Trucker Cap "BDG 1923" Curved Brim',
    slug: 'heritage-trucker-cap-bdg-1923',
    price: 110000,
    originalPrice: 135000,
    category: 'Headwear',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    tags: ['Caps', 'Snapback', 'Embroidered'],
    isBestSeller: true,
    isNewRelease: false,
    description: 'Trucker cap vintage dengan busa depan tebal dan jaring breathable di bagian belakang. Patch bordir 3D "BDG 1923" bergaya retro street.',
    material: 'Cotton Twill Front Panel + Soft Polyester Mesh',
    printType: '3D High-Raised Embroidery Patch',
    sizes: ['All Size (Adjustable Snapback)'],
    inStock: true,
    stockCount: 35,
    features: [
      'Snapback closure yang mudah diatur sesuai lingkar kepala',
      'Penyerap keringat (sweatband) katun tebal di bagian lingkar dalam',
      'Lengkungan visor kokoh tidak mudah patah',
      'Desain timeless cocok untuk semua gaya'
    ]
  },
  {
    id: 'bdg-007',
    name: 'BDG Ultra Bucket Hat Reversible (Dua Sisi)',
    slug: 'bdg-ultra-bucket-hat-reversible',
    price: 125000,
    originalPrice: 150000,
    category: 'Headwear',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80',
    tags: ['Reversible', 'Outdoor', 'Festival Ready'],
    isBestSeller: false,
    isNewRelease: true,
    description: 'Bucket hat inovatif yang bisa dibolak-balik (2 in 1). Sisi luar hitam pekat dengan woven label BDG, sisi dalam motif tartan casuals legendaris.',
    material: 'Water-Repellent Canvas & Woven Tartan Cotton',
    printType: 'Woven Jacquard Label & Screen-printed Brim',
    sizes: ['All Size (Circumference 58-60 cm)'],
    inStock: true,
    stockCount: 20,
    features: [
      'Bisa dipakai 2 gaya berbeda sesuai mood outfit',
      'Bahan canvas luar tahan cipratan gerimis ringan',
      'Jahitan keliling brim yang rapi dan kokoh',
      'Ringan dan mudah dilipat ke dalam tas'
    ]
  },
  {
    id: 'bdg-008',
    name: 'Bandung Pride Jacquard Football Scarf (Syal Rajut)',
    slug: 'bandung-pride-jacquard-football-scarf',
    price: 135000,
    originalPrice: 160000,
    category: 'Aksesoris',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
    tags: ['Football Scarf', 'Tribun Culture', '14 Get'],
    isBestSeller: true,
    isNewRelease: false,
    description: 'Syal rajut jacquard 14 get berkualitas Eropa dengan rumbai tebal di kedua ujung. Desain "BANDUNG TILL I DIE" dengan warna ikonik biru, putih, dan strip emas.',
    material: '100% Acrylic Soft-Touch Yarn 14-Gauge',
    printType: 'Double Jacquard Knit Technique',
    sizes: ['145 cm x 18 cm + Fringe'],
    inStock: true,
    stockCount: 18,
    features: [
      'Rajutan rapat 14 get tidak tembus pandang dan halus di kulit',
      'Rumbai benang ganda yang terikat rapi',
      'Wajib dimiliki suporter sejati untuk matchday dan koleksi',
      'Edisi kultus favorit fans merchandise Bandung'
    ]
  },
  {
    id: 'bdg-009',
    name: 'BDG Corduroy Heavy Tote Bag + Metal Keychain',
    slug: 'bdg-corduroy-heavy-tote-bag',
    price: 130000,
    originalPrice: 155000,
    category: 'Aksesoris',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    tags: ['Corduroy', 'Campus Ready', 'Free Keychain'],
    isBestSeller: false,
    isNewRelease: true,
    description: 'Tote bag fungsional berbahan corduroy 8-wale premium. Muat laptop hingga 15 inci, dilengkapi ritsleting utama dan saku kancing dalam.',
    material: 'Heavy Corduroy 8-Wale with Satin Lining',
    printType: 'Embroidered Lettering & Antique Brass Zipper',
    sizes: ['40 cm x 36 cm x 10 cm'],
    inStock: true,
    stockCount: 25,
    features: [
      'Bahan corduroy bertekstur tebal dan awet',
      'Lapisan dalam furing satin lembut tahan gores',
      'Penutup ritsleting menjaga barang bawaan tetap aman',
      'Bonus metal enamel keychain eksklusif BDG'
    ]
  }
];

export const CATEGORIES = [
  'Semua',
  'T-Shirt',
  'Hoodie & Sweatshirt',
  'Jersey',
  'Headwear',
  'Aksesoris'
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
    question: 'Metode pembayaran dan rekening resmi apa saja yang didukung?',
    answer: 'Pembayaran transfer bank resmi (BCA, Mandiri, BRI, BNI) dan QRIS resmi untuk semua e-wallet (GoPay, OVO, Dana, ShopeePay). Kami tidak pernah menggunakan rekening perorangan yang tidak terdaftar atas nama official store.'
  },
  {
    question: 'Berapa lama estimasi pengiriman pesanan?',
    answer: 'Pesanan terverifikasi sebelum jam 16.00 WIB dikirim pada hari yang sama. Pengiriman menggunakan ekspedisi resmi (JNE, J&T, SiCepat) dengan estimasi Jawa Barat 1 hari kerja, Pulau Jawa 1-2 hari kerja, dan luar Jawa 2-4 hari kerja.'
  },
  {
    question: 'Apakah ada jaminan tukar ukuran jika tidak pas?',
    answer: 'Kami melayani penukaran ukuran maksimal 2 hari setelah paket diterima. Syaratnya kondisi baju belum dicuci, hangtag label masih terpasang utuh, dan stok ukuran pengganti tersedia.'
  }
];
