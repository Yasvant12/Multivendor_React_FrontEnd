import { useState } from "react";

/* ── DATA ─────────────────────────────────────────── */
const BASE = "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img";

const CATEGORIES = [
  { id:1, name:"Fruits",        items:320, pct:"30%", border:"outline-pink-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round"><circle cx="32" cy="36" r="20"/><path d="M32 16 C32 16 36 6 46 8"/><path d="M20 28 Q10 20 18 12"/></svg> },
  { id:2, name:"Bakery",        items:65,  pct:null,  border:"outline-green-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round"><ellipse cx="32" cy="40" rx="22" ry="10"/><path d="M10 40 Q10 20 32 18 Q54 20 54 40"/><path d="M20 18 Q22 10 32 10 Q42 10 44 18"/></svg> },
  { id:3, name:"Vegetables",    items:548, pct:"15%", border:"outline-pink-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round"><path d="M32 52 L32 20"/><path d="M32 30 Q18 24 14 10 Q28 12 32 30"/><path d="M32 36 Q46 28 50 14 Q36 16 32 36"/></svg> },
  { id:4, name:"Dairy & Milk",  items:48,  pct:"10%", border:"outline-red-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16 L16 52 Q16 56 32 56 Q48 56 48 52 L44 16 Z"/><path d="M18 26 Q32 32 46 26"/><rect x="22" y="10" width="20" height="8" rx="3"/></svg> },
  { id:5, name:"Snack & Spice", items:59,  pct:null,  border:"outline-blue-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round"><rect x="14" y="28" width="36" height="26" rx="4"/><path d="M22 28 L22 20 Q22 10 32 10 Q42 10 42 20 L42 28"/><line x1="14" y1="38" x2="50" y2="38"/><line x1="26" y1="38" x2="26" y2="54"/><line x1="38" y1="38" x2="38" y2="54"/></svg> },
  { id:6, name:"Juice & Drinks",items:845, pct:null,  border:"outline-lime-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 14 L18 54 Q18 58 32 58 Q46 58 46 54 L42 14 Z"/><path d="M42 22 L52 18 L50 30 L42 28"/><path d="M20 14 L44 14"/><path d="M22 34 Q32 30 42 34"/></svg> },
  { id:7, name:"Seafood",       items:652, pct:null,  border:"outline-teal-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 32 Q20 16 40 32 Q54 44 56 32 Q54 20 40 32 Q20 48 8 32Z"/><circle cx="44" cy="28" r="2" fill="#5c9b3d"/><path d="M54 24 L60 18 M54 32 L62 32 M54 40 L60 46"/></svg> },
  { id:8, name:"Fast Food",     items:253, pct:"20%", border:"outline-orange-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8" strokeLinecap="round"><path d="M12 30 Q12 22 32 22 Q52 22 52 30"/><rect x="10" y="30" width="44" height="8" rx="3"/><rect x="14" y="38" width="36" height="8" rx="2"/><path d="M20 22 Q18 14 28 12"/><path d="M36 22 Q34 12 44 14"/></svg> },
  { id:9, name:"Eggs",          items:154, pct:null,  border:"outline-purple-200",
    icon:<svg viewBox="0 0 64 64" fill="none" stroke="#5c9b3d" strokeWidth="1.8"><ellipse cx="32" cy="36" rx="16" ry="20"/><ellipse cx="32" cy="26" rx="10" ry="14"/></svg> },
];

const PRODUCTS = [
  { id:1, name:"Dates Value Pack Pouch",          cat:"Dried Fruits", price:"$78.00", old:"$85.00", badge:"Sale", img1:"2_1", img2:"2_2" },
  { id:2, name:"Crunchy Triangle Chips Snacks",   cat:"chips & fries", price:"$59.00", old:"$87.00", badge:null,   img1:"1_1", img2:"1_2" },
  { id:3, name:"Californian Almonds Value Pack",  cat:"Dried Fruits", price:"$58.00", old:"$65.00", badge:"Sale", img1:"3_1", img2:"3_2" },
  { id:4, name:"Banana Chips Snacks & Spices",    cat:"Foods",        price:"$45.00", old:"$50.00", badge:"New",  img1:"4_1", img2:"4_2" },
  { id:5, name:"Berry & Graps Mix Snack",         cat:"Snacks",       price:"$25.00", old:"$35.00", badge:"New",  img1:"5_1", img2:"5_2" },
  { id:6, name:"Mixed Nuts Seeds & Berries Pack", cat:"Dried Fruits", price:"$45.00", old:"$56.00", badge:"Sale", img1:"6_1", img2:"6_2" },
  { id:7, name:"Mixed Nuts & Almonds Dry Fruits", cat:"Foods",        price:"$49.00", old:"$65.00", badge:null,   img1:"7_1", img2:"7_2" },
  { id:8, name:"Smoked Honey Spiced Nuts",        cat:"Snacks",       price:"$32.00", old:"$45.00", badge:null,   img1:"8_1", img2:"8_2" },
  { id:9, name:"Dates Value Pack Pouch",          cat:"Dried Fruits", price:"$78.00", old:"$85.00", badge:"Sale", img1:"2_1", img2:"2_2" },
];

const CART_INIT = [
  { id:1, name:"Fresh Lichi",           meta:"$25.00 × 1 kg",   img:"25_1" },
  { id:2, name:"Ginger - Organic",      meta:"$5.00 × 1 250g",  img:"17_1" },
  { id:3, name:"Dates Value Pack Pouch",meta:"$59.00 × 1 pack", img:"2_1"  },
];

const COLORS = ["#e74c3c","#f39c12","#f1c40f","#2ecc71","#3498db","#9b59b6","#1abc9c","#34495e","#ecf0f1","#e91e63"];
const TAGS   = ["Clothes","Fruits","Snacks","Dairy","Seafood","Fastfood","Toys","perfume","jewelry","Bags"];
const SIDEBAR_CATS = [
  { name:"Dairy & Bakery",      checked:true  },
  { name:"Fruits & Vegetable",  checked:true  },
  { name:"Snack & Spice",       checked:false },
  { name:"Juice & Drinks",      checked:false },
];

/* ── ICONS (inline SVG helpers) ──────────────────── */
const IconCart = () => <svg className="w-7 h-7 stroke-gray-600" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>;
const IconHeart = ({cls=""}) => <svg className={`w-4 h-4 ${cls}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
const IconUser = () => <svg className="w-7 h-7 stroke-gray-600" viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconSearch = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
const IconBars = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const IconCompare = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>;
const IconEye = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const IconGrid = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
const IconList = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const IconX = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

/* ── PRODUCT CARD ─────────────────────────────────── */
function ProductCard({ product, onQuickView }) {
  const [hovered, setHovered] = useState(false);
  const img1 = `${BASE}/product-images/${product.img1}.jpg`;
  const img2 = `${BASE}/product-images/${product.img2}.jpg`;

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg overflow-hidden relative group cursor-pointer transition-shadow duration-300 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img src={img1} alt={product.name} className={`w-full h-full object-cover absolute inset-0 transition-all duration-400 ${hovered ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
          onError={e => e.target.src="https://placehold.co/280x280/f9f9f9/aaa?text=Product"}/>
        <img src={img2} alt={product.name} className={`w-full h-full object-cover absolute inset-0 transition-all duration-400 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          onError={e => e.target.style.display="none"}/>

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded z-10 ${product.badge === "Sale" ? "bg-orange-500" : "bg-green-600"}`}>
            {product.badge.toUpperCase()}
          </span>
        )}

        {/* Hover action buttons */}
        <div className={`absolute right-3 flex flex-col gap-2 z-10 transition-all duration-250 ${hovered ? "bottom-3 opacity-100" : "-bottom-2 opacity-0"}`}>
          {[
            { icon:<IconHeart/>, title:"Wishlist" },
            { icon:<IconCompare/>, title:"Compare" },
            { icon:<IconEye/>,    title:"Quick View", onClick: () => onQuickView(product) },
          ].map(({ icon, title, onClick }) => (
            <button key={title} title={title} onClick={e => { e.stopPropagation(); onClick?.(); }}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-gray-500 hover:bg-green-600 hover:text-white transition-colors duration-150">
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <span className="text-xs font-semibold text-green-600 uppercase tracking-wide block mb-1">{product.cat}</span>
        <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-snug line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-3 line-clamp-2 leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-green-600">{product.price}</span>
            <span className="text-xs text-gray-300 line-through">{product.old}</span>
          </div>
          <button onClick={e => e.stopPropagation()}
            className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded transition-colors duration-200 whitespace-nowrap">
            + Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── QUICK VIEW MODAL ─────────────────────────────── */
function QuickViewModal({ product, onClose }) {
  const [size, setSize] = useState("250g");
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-xl max-w-2xl w-full flex overflow-hidden shadow-2xl relative max-h-[90vh]">
        <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 z-10 transition-colors">✕</button>
        <div className="w-64 flex-shrink-0 bg-gray-50">
          <img src={`${BASE}/product-images/${product.img1}.jpg`} alt={product.name} className="w-full h-full object-cover"
            onError={e => e.target.src="https://placehold.co/280x380/f9f9f9/aaa?text=Product"} style={{height:380}}/>
        </div>
        <div className="flex-1 p-7 overflow-y-auto">
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">{product.cat}</span>
          <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3 leading-snug">{product.name}</h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-green-600">{product.price}</span>
            <span className="text-base text-gray-300 line-through">{product.old}</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
          <div className="flex gap-2 mb-6 flex-wrap">
            {["250g","500g","1kg","2kg"].map(s => (
              <button key={s} onClick={() => setSize(s)}
                className={`px-4 py-2 rounded text-sm border transition-colors ${size === s ? "bg-green-600 text-white border-green-600" : "border-gray-200 text-gray-600 hover:border-green-600"}`}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded text-sm transition-colors flex items-center justify-center gap-2">
              🛒 Add To Cart
            </button>
            <button className="border border-gray-200 hover:border-green-600 hover:text-green-600 text-gray-600 font-semibold py-3 px-5 rounded text-sm transition-colors flex items-center gap-2">
              <IconHeart/> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── CART DRAWER ──────────────────────────────────── */
function CartDrawer({ open, onClose, items, onRemove }) {
  const subtotal = 300, vat = 60, total = 360;
  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}/>
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 flex flex-col shadow-2xl transition-transform duration-350 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h3 className="text-base font-bold text-gray-800">My Cart ({items.length})</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl leading-none transition-colors">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <img src={`${BASE}/product-images/${item.img}.jpg`} alt={item.name} className="w-14 h-14 object-cover rounded border border-gray-100 flex-shrink-0"
                onError={e => e.target.src="https://placehold.co/56x56/f9f9f9/aaa?text=P"}/>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.meta}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 text-lg leading-none transition-colors flex-shrink-0">×</button>
            </div>
          ))}
        </div>
        <div className="p-5 border-t border-gray-200">
          <div className="space-y-2 mb-4">
            {[["Sub-Total :", `$${subtotal}.00`],["VAT (20%) :", `$${vat}.00`]].map(([l,v]) => (
              <div key={l} className="flex justify-between text-sm text-gray-500"><span>{l}</span><span>{v}</span></div>
            ))}
            <div className="flex justify-between text-base font-bold text-gray-800 pt-2 border-t border-gray-200">
              <span>Total :</span><span>${total}.00</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2.5 rounded text-sm transition-colors">View Cart</button>
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded text-sm transition-colors">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── SIDEBAR ──────────────────────────────────────── */
function Sidebar({ activeTags, setActiveTags }) {
  const [activeColor, setActiveColor] = useState(0);
  const [catChecks, setCatChecks] = useState(SIDEBAR_CATS.map(c => c.checked));
  const [weights, setWeights]     = useState([true,true,false,false,false]);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo]     = useState(100);

  const SBlock = ({ title, children }) => (
    <div className="bg-white border border-gray-200 rounded mb-5 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">{title}</span>
        <span className="text-gray-400 text-base">−</span>
      </div>
      {children}
    </div>
  );

  return (
    <aside className="w-64 flex-shrink-0">
      {/* Category */}
      <SBlock title="Category">
        <div className="py-2">
          {SIDEBAR_CATS.map((c, i) => (
            <label key={c.name} className={`flex items-center gap-2.5 px-5 py-2.5 cursor-pointer text-sm transition-colors hover:bg-gray-50 ${catChecks[i] ? "text-green-600 font-medium" : "text-gray-500"}`}>
              <input type="checkbox" checked={catChecks[i]} onChange={() => setCatChecks(prev => prev.map((v,j) => j===i ? !v : v))}
                className="w-4 h-4 accent-green-600 cursor-pointer flex-shrink-0"/>
              <span>{c.name}</span>
            </label>
          ))}
        </div>
      </SBlock>

      {/* Weight */}
      <SBlock title="Weight">
        <div className="px-5 py-3 flex flex-col gap-2.5">
          {["500gm Pack","1kg Pack","2kg Pack","5kg Pack","10kg Pack"].map((w,i) => (
            <label key={w} className="flex items-center gap-2.5 cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              <input type="checkbox" checked={weights[i]} onChange={() => setWeights(prev => prev.map((v,j) => j===i ? !v : v))}
                className="w-3.5 h-3.5 accent-green-600 cursor-pointer flex-shrink-0"/>
              <span>{w}</span>
            </label>
          ))}
        </div>
      </SBlock>

      {/* Color */}
      <SBlock title="Color">
        <div className="px-5 py-3.5 flex flex-wrap gap-2.5">
          {COLORS.map((c,i) => (
            <button key={i} onClick={() => setActiveColor(i)}
              className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${activeColor===i ? "ring-2 ring-offset-1 ring-gray-700 scale-110" : ""}`}
              style={{background:c}}/>
          ))}
        </div>
      </SBlock>

      {/* Price */}
      <SBlock title="Price">
        <div className="px-5 py-3.5">
          <div className="flex gap-2 mb-3">
            <input type="number" value={priceFrom} onChange={e=>setPriceFrom(e.target.value)}
              className="w-1/2 border border-gray-200 rounded px-2.5 py-1.5 text-sm outline-none focus:border-green-600"/>
            <input type="number" value={priceTo} onChange={e=>setPriceTo(e.target.value)}
              className="w-1/2 border border-gray-200 rounded px-2.5 py-1.5 text-sm outline-none focus:border-green-600"/>
          </div>
          <input type="range" min="0" max="200" value={priceTo} onChange={e=>setPriceTo(e.target.value)}
            className="w-full accent-green-600 mb-3"/>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded transition-colors">Apply</button>
        </div>
      </SBlock>

      {/* Tags */}
      <SBlock title="Tags">
        <div className="px-5 py-3.5 flex flex-wrap gap-2">
          {TAGS.map(t => (
            <button key={t} onClick={() => setActiveTags(prev => prev.includes(t) ? prev.filter(x=>x!==t) : [...prev,t])}
              className={`px-3 py-1 text-xs border rounded transition-colors ${activeTags.includes(t) ? "bg-green-600 text-white border-green-600" : "border-gray-200 text-gray-500 hover:border-green-600 hover:text-green-600"}`}>
              {t}
            </button>
          ))}
        </div>
      </SBlock>
    </aside>
  );
}

/* ── MAIN APP ─────────────────────────────────────── */
export default function GrabitShop() {
  const [cartOpen,    setCartOpen]    = useState(false);
  const [cartItems,   setCartItems]   = useState(CART_INIT);
  const [quickView,   setQuickView]   = useState(null);
  const [activePage,  setActivePage]  = useState(1);
  const [viewMode,    setViewMode]    = useState("grid");
  const [activeTags,  setActiveTags]  = useState(["Clothes","Fruits","Snacks","Dairy","Perfume","Jewelry"]);
  const [filterTags,  setFilterTags]  = useState(["Clothes","Fruits","Snacks","Dairy","Perfume","Jewelry"]);

  const removeCartItem = id => setCartItems(prev => prev.filter(i => i.id !== id));
  const removeFilterTag = tag => setFilterTags(prev => prev.filter(t => t !== tag));

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800" style={{fontFamily:"'Poppins',sans-serif"}}>


      <div className="bg-white border-b border-gray-200 py-3.5">
        <div className="max-w-screen-xl mx-auto px-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Category Page</h2>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <a href="#" className="text-green-600 hover:underline">Home</a>
            <span>›</span>
            <span>Category Page</span>
          </div>
        </div>
      </div>

      {/* ── CATEGORY ROW — full width ─────────────── */}
      <div className="bg-white border-b border-gray-200 py-5">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="flex gap-4 overflow-x-auto pb-1" style={{scrollbarWidth:"none"}}>
            {CATEGORIES.map(cat => (
              <div key={cat.id}
                className={`flex-shrink-0 w-40 bg-white rounded-lg relative cursor-pointer transition-all duration-250 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-center text-center py-5 px-3 shadow-sm outline outline-2 ${cat.border}`}
                style={{minHeight:176}}>
                {cat.pct && (
                  <span className="absolute top-2.5 right-2.5 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {cat.pct}
                  </span>
                )}
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  {cat.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-800 leading-snug mb-0.5">{cat.name}</h4>
                <span className="text-xs text-gray-400">{cat.items} Items</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SHOP LAYOUT ───────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-5 py-6 flex gap-6 items-start">

        {/* Sidebar */}
        <Sidebar activeTags={activeTags} setActiveTags={setActiveTags}/>

        {/* Main */}
        <main className="flex-1 min-w-0">

          {/* Toolbar */}
          <div className="bg-white border border-gray-200 rounded px-5 py-3 flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="flex border border-gray-200 rounded overflow-hidden">
                <button onClick={() => setViewMode("grid")}
                  className={`w-9 h-9 flex items-center justify-center transition-colors ${viewMode==="grid" ? "bg-green-600 text-white" : "bg-white text-gray-400 hover:text-gray-600"}`}>
                  <IconGrid/>
                </button>
                <button onClick={() => setViewMode("list")}
                  className={`w-9 h-9 flex items-center justify-center transition-colors ${viewMode==="list" ? "bg-green-600 text-white" : "bg-white text-gray-400 hover:text-gray-600"}`}>
                  <IconList/>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Sort by</span>
              <select className="border border-gray-200 rounded px-3 py-1.5 text-sm outline-none focus:border-green-600 cursor-pointer bg-white text-gray-700">
                <option>Position</option>
                <option>Name, A to Z</option>
                <option>Name, Z to A</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
              </select>
            </div>
          </div>

          {/* Active Filter Tags */}
          {filterTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {filterTags.map(tag => (
                <div key={tag} onClick={() => removeFilterTag(tag)}
                  className="flex items-center gap-1.5 bg-white border border-gray-200 text-sm text-gray-700 px-3 py-1.5 rounded cursor-pointer hover:border-green-500 transition-colors group">
                  {tag}
                  <span className="text-gray-400 group-hover:text-red-500 transition-colors text-base leading-none">×</span>
                </div>
              ))}
              <button onClick={() => setFilterTags([])}
                className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold px-4 py-1.5 rounded transition-colors">
                Clear All
              </button>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} onQuickView={setQuickView}/>
            ))}
          </div>

          {/* Pagination */}
          <div className="text-center text-sm text-gray-400 mb-4">Showing 1–9 of 21 item(s)</div>
          <div className="flex items-center justify-center gap-1.5">
            {[1,2,3,"...",8].map((p, i) => (
              <button key={i} onClick={() => typeof p === "number" && setActivePage(p)}
                disabled={p === "..."}
                className={`min-w-[36px] h-9 px-2 rounded border text-sm font-medium transition-colors
                  ${p === activePage ? "bg-green-600 text-white border-green-600"
                  : p === "..." ? "border-transparent text-gray-400 cursor-default"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600"}`}>
                {p}
              </button>
            ))}
            <button className="px-4 h-9 rounded border border-gray-200 text-sm font-medium bg-white text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors">
              Next →
            </button>
          </div>

        </main>
      </div>

      {/* ── QUICK VIEW MODAL ──────────────────────── */}
      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)}/>}

      {/* ── CART DRAWER ───────────────────────────── */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cartItems} onRemove={removeCartItem}/>

    </div>
  );
}
