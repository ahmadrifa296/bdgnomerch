import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, RotateCcw, PackageX } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import type { ProductCategory } from '../types';

export const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('cat') as ProductCategory) || 'Semua';

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    CATEGORIES.includes(initialCategory as any) ? initialCategory : 'Semua'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular');
  const [onlyInStock, setOnlyInStock] = useState(false);

  // Sync with URL query parameter
  useEffect(() => {
    const cat = searchParams.get('cat') as ProductCategory;
    if (cat && CATEGORIES.includes(cat as any)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
    if (category === 'Semua') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: category });
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Filter
      if (selectedCategory !== 'Semua' && product.category !== selectedCategory) {
        return false;
      }

      // In Stock Filter
      if (onlyInStock && !product.inStock) {
        return false;
      }

      // Search Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesTags = product.tags.some((t) => t.toLowerCase().includes(query));
        const matchesMaterial = product.material.toLowerCase().includes(query);
        return matchesName || matchesCategory || matchesTags || matchesMaterial;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNewRelease ? 1 : 0) - (a.isNewRelease ? 1 : 0);
      // Popular (Best Seller)
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, onlyInStock]);

  const handleResetFilters = () => {
    setSelectedCategory('Semua');
    setSearchQuery('');
    setSortBy('popular');
    setOnlyInStock(false);
    setSearchParams({});
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-xs uppercase tracking-wider font-bold text-blue-400">
          Koleksi Lengkap BDG BOYS MERCH
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit']">
          KATALOG MERCHANDISE
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
          Temukan apparel streetwear, kaos 24s heavyweight, hoodie fleece, hingga aksesoris suporter resmi khas Bandung.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#0c1220] border border-white/10 space-y-4">
        {/* Search & Sort Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kaos, hoodie, jersey, bucket hat..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <SlidersHorizontal className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Urutkan:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="popular" className="bg-[#0c1220] text-white">Paling Populer</option>
              <option value="price-asc" className="bg-[#0c1220] text-white">Harga: Terendah ke Tertinggi</option>
              <option value="price-desc" className="bg-[#0c1220] text-white">Harga: Tertinggi ke Terendah</option>
              <option value="newest" className="bg-[#0c1220] text-white">Rilisan Terbaru</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-gray-400">
        <div>
          Menampilkan <strong className="text-white">{filteredProducts.length}</strong> produk
          {selectedCategory !== 'Semua' && (
            <span> dalam kategori <strong className="text-blue-400">{selectedCategory}</strong></span>
          )}
          {searchQuery && (
            <span> untuk pencarian "<strong className="text-amber-400">{searchQuery}</strong>"</span>
          )}
        </div>

        {(selectedCategory !== 'Semua' || searchQuery || sortBy !== 'popular') && (
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filter</span>
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 px-4 rounded-3xl bg-[#0c1220] border border-white/10 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center text-gray-500">
            <PackageX className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white font-['Outfit']">Tidak ada produk ditemukan</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Maaf, kami tidak dapat menemukan produk yang sesuai dengan filter atau kata kunci yang kamu cari.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-colors"
          >
            Tampilkan Semua Produk
          </button>
        </div>
      )}
    </div>
  );
};
