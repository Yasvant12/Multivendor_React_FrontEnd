import { useState } from "react";
import Breadcrumb from "./Breadcrumb";

const IMAGES = [
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=450&fit=crop",
];

const FREQ_PRODUCTS = [
  { name: "Honey Spiced Nuts", price: "$32.00", old: "$45.00", img: "https://images.unsplash.com/photo-1548396743-f19e94a8253f?w=200&h=200&fit=crop" },
  { name: "Dates Value Pouch", price: "$56.00", old: "$60.00", img: "https://images.unsplash.com/photo-1559181567-c3190bfa4945?w=200&h=200&fit=crop" },
  { name: "Grapes Mix Snack", price: "$28.00", old: "$35.00", img: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=200&h=200&fit=crop" },
  { name: "Roasted Almonds", price: "$16.00", old: "$23.00", img: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=200&h=200&fit=crop" },
];

const RELATED = [
  { badge: "Sale", badgeColor: "bg-red-500", category: "Dried Fruits", name: "Mixed Nuts Seeds & Berries Pack", weight: "", price: "$45.00", old: "$56.00", img: "https://images.unsplash.com/photo-1548396743-f19e94a8253f?w=400&h=280&fit=crop" },
  { badge: "Sale", badgeColor: "bg-red-500", category: "Cookies", name: "Multi-Grain Jaggery Combo Cookies", weight: "10 kg", price: "$25.00", old: "$30.00", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop" },
  { badge: "", badgeColor: "", category: "Foods", name: "Fresh Mango Tasty Juice 500ml Pack", weight: "", price: "$49.00", old: "$65.00", img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=280&fit=crop" },
  { badge: "Sale", badgeColor: "bg-red-500", category: "Dried Fruits", name: "Dates Value Solimo Fresh Pouch", weight: "", price: "$78.00", old: "$85.00", img: "https://images.unsplash.com/photo-1559181567-c3190bfa4945?w=400&h=280&fit=crop" },
  { badge: "New", badgeColor: "bg-green-700", category: "Foods", name: "Stick Fiber Gluten Free Masala-Magic", weight: "2 pack", price: "$45.00", old: "$50.00", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=280&fit=crop" },
  { badge: "New", badgeColor: "bg-green-700", category: "Fresh Fruit", name: "Natural Hub Red Cherry Karonda", weight: "1 kg", price: "$20.00", old: "$21.00", img: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&h=280&fit=crop" },
  { badge: "", badgeColor: "", category: "Tuber Root", name: "Fresh Organic Ginger Product", weight: "100 g", price: "$2.00", old: "$3.00", img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&h=280&fit=crop" },
];

const TAGS = ["Clothes","Fruits","Snacks","Dairy","Seafood","Fastfood","Toys","Perfume","Jewelry","Bags"];
const COLORS = ["#e63946","#2d6a4f","#1d3557","#f4a261","#a8dadc","#333333","#ffffff","#f9c74f"];
const WEIGHTS_SIDEBAR = ["500gm Pack","1kg Pack","2kg Pack","5kg Pack","10kg Pack"];
const WEIGHT_OPTS = ["250g","500g","1kg","2kg"];

// ---- ICONS (inline SVG helpers) ----
const Icon = ({ d, size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={d} />
  </svg>
);
const StarIcon = ({ filled, half }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : half ? "url(#half)" : "none"} stroke="#f59e0b" strokeWidth="2">
    {half && <defs><linearGradient id="half"><stop offset="50%" stopColor="#f59e0b"/><stop offset="50%" stopColor="transparent"/></linearGradient></defs>}
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);




function Sidebar({ activeWeightSidebar, setActiveWeightSidebar, activeColor, setActiveColor }) {
  const [tagActive, setTagActive] = useState(null);
  const [priceVal, setPriceVal] = useState(3000);

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col gap-5">
      {/* Category */}
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-green-700 text-sm">Category</h3>
        <ul className="space-y-2">
          {["Dairy & Bakery","Fruits & Vegetable","Snack & Spice","Juice & Drinks"].map((cat) => (
            <li key={cat}>
              <a href="#" className="text-gray-500 hover:text-green-700 text-sm flex items-center gap-2 transition-colors">
                <span className="text-xs text-gray-300">›</span> {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Weight */}
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-green-700 text-sm">Weight</h3>
        <div className="flex flex-wrap gap-2">
          {WEIGHTS_SIDEBAR.map((w) => (
            <button key={w} onClick={() => setActiveWeightSidebar(w)}
              className={`px-3 py-1 rounded border text-xs transition-all ${activeWeightSidebar === w ? "bg-green-700 text-white border-green-700" : "border-gray-300 text-gray-500 hover:border-green-700 hover:text-green-700"}`}>
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-green-700 text-sm">Color</h3>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((c) => (
            <button key={c} onClick={() => setActiveColor(c)}
              style={{ background: c, border: activeColor === c ? "2px solid #374151" : "2px solid transparent", outline: c === "#ffffff" ? "1px solid #ddd" : "none" }}
              className="w-7 h-7 rounded-full transition-all hover:scale-110" title={c} />
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-green-700 text-sm">Price</h3>
        <input type="range" min="0" max="5000" value={priceVal} onChange={e => setPriceVal(e.target.value)}
          className="w-full accent-green-700 mb-3" />
        <div className="flex items-center gap-2">
          <input type="text" value="$0" className="border border-gray-300 rounded px-2 py-1 text-xs w-16 outline-none focus:border-green-600" readOnly />
          <span className="text-gray-400 text-xs">—</span>
          <input type="text" value={`$${priceVal}`} className="border border-gray-300 rounded px-2 py-1 text-xs w-20 outline-none focus:border-green-600" readOnly />
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-green-700 text-sm">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button key={tag} onClick={() => setTagActive(tag)}
              className={`px-3 py-1 rounded-full border text-xs transition-all ${tagActive === tag ? "bg-green-700 text-white border-green-700" : "border-gray-300 text-gray-500 hover:bg-green-700 hover:text-white hover:border-green-700"}`}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

function Gallery({ images }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative border border-gray-100 rounded-xl overflow-hidden mb-3">
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">-78%</span>
        <img src={images[active]} alt="Product" className="w-full h-80 object-cover transition-all duration-300" />
      </div>
      <div className="flex gap-2 flex-wrap">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`w-16 h-16 border-2 rounded-lg overflow-hidden transition-all ${active === i ? "border-green-700" : "border-gray-200 hover:border-green-400"}`}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductInfo() {
  const [qty, setQty] = useState(1);
  const [activeWeight, setActiveWeight] = useState("250g");
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 leading-snug mb-3">
        Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.
      </h2>

      {/* Stars */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {[1,2,3,4].map(i => <StarIcon key={i} filled />)}
          <StarIcon half />
        </div>
        <span className="text-xs text-gray-400">992 Ratings</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-3xl font-bold text-green-700">$664.00</span>
        <span className="text-lg text-gray-400 line-through">$2,999.00</span>
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">-78%</span>
      </div>

      {/* Meta */}
      <div className="flex gap-6 text-sm mb-3">
        <div className="text-gray-500">SKU#: <span className="text-gray-700 font-medium">WH12</span></div>
        <div className="text-gray-500">Status: <span className="text-green-600 font-semibold">IN STOCK</span></div>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1990.
      </p>

      <ul className="text-sm text-gray-500 space-y-1 mb-4">
        {[["Closure","Hook & Loop"],["Sole","Polyvinyl Chloride"],["Width","Medium"],["Outer Material","A-Grade Standard Quality"]].map(([k,v]) => (
          <li key={k} className="flex gap-2"><span className="text-gray-400">•</span><strong className="text-gray-600">{k}:</strong> {v}</li>
        ))}
      </ul>

      {/* Weight Options */}
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-700 mb-2">Weight</div>
        <div className="flex gap-2 flex-wrap">
          {WEIGHT_OPTS.map(w => (
            <button key={w} onClick={() => setActiveWeight(w)}
              className={`px-4 py-2 border-2 rounded text-sm transition-all ${activeWeight === w ? "border-green-700 text-green-700 bg-green-50" : "border-gray-300 text-gray-500 hover:border-green-500"}`}>
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex items-center gap-3 flex-wrap mb-4">
        <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
          <button onClick={() => setQty(q => Math.max(1, q-1))} className="w-9 h-10 bg-gray-100 hover:bg-gray-200 text-xl text-gray-600 transition-colors">−</button>
          <input type="number" value={qty} readOnly className="w-12 h-10 text-center font-semibold outline-none text-sm border-none" />
          <button onClick={() => setQty(q => q+1)} className="w-9 h-10 bg-gray-100 hover:bg-gray-200 text-xl text-gray-600 transition-colors">+</button>
        </div>
        <button className="bg-green-700 hover:bg-green-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
          🛒 Add To Cart
        </button>
        <button onClick={() => setWishlisted(w => !w)}
          className={`border-2 px-4 py-2.5 rounded-lg text-lg transition-all ${wishlisted ? "border-red-400 text-red-400" : "border-gray-200 text-gray-400 hover:border-red-400 hover:text-red-400"}`}>
          {wishlisted ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Share */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400">Share:</span>
        <div className="flex gap-2">
          {[["🇫","bg-blue-700"],["🐦","bg-sky-400"],["📌","bg-red-600"],["💬","bg-green-400"]].map(([icon, bg], i) => (
            <button key={i} className={`${bg} text-white w-8 h-8 rounded-full text-xs flex items-center justify-center hover:opacity-80 transition-opacity`}>
              {["f","t","P","w"][i]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FrequentlyBought() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h3 className="font-semibold text-gray-800 mb-4 text-base">Frequently Bought Together</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {FREQ_PRODUCTS.map((p) => (
          <div key={p.name} className="min-w-36 border border-gray-100 rounded-lg p-3 text-center hover:shadow-md transition-shadow cursor-pointer">
            <img src={p.img} alt={p.name} className="w-24 h-24 object-cover rounded-lg mx-auto mb-2" />
            <div className="text-xs text-gray-600 font-medium mb-1">{p.name}</div>
            <div className="text-sm font-bold text-green-700">{p.price} <span className="text-xs text-gray-400 line-through font-normal">{p.old}</span></div>
            <button className="mt-2 w-7 h-7 bg-green-700 text-white rounded-full text-base font-bold flex items-center justify-center mx-auto hover:bg-green-900 transition-colors">+</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tabs() {
  const [active, setActive] = useState("details");
  const [rating, setRating] = useState(0);
  const tabs = [
    { id: "details", label: "Detail" },
    { id: "specs", label: "Specifications" },
    { id: "vendor", label: "Vendor" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex border-b border-gray-200">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)}
            className={`px-6 py-3.5 text-sm font-medium transition-all border-b-2 -mb-0.5 ${active === t.id ? "text-green-700 border-green-700 font-semibold" : "text-gray-500 border-transparent hover:text-green-600"}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="p-6 text-sm text-gray-600 leading-relaxed">
        {active === "details" && (
          <div className="space-y-3">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <ul className="space-y-1">
              {["Any Product types that You want - Simple, Configurable","Downloadable/Digital Products, Virtual Products","Inventory Management with Backordered items","Flatlock seams throughout."].map(i => (
                <li key={i} className="flex gap-2"><span className="text-green-600">✓</span>{i}</li>
              ))}
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          </div>
        )}
        {active === "specs" && (
          <table className="w-full border-collapse">
            <tbody>
              {[["Model","SKU140"],["Weight","500 g"],["Dimensions","35 × 30 × 7 cm"],["Color","Black, Pink, Red, White"],["Size","10 X 20"]].map(([k,v]) => (
                <tr key={k} className="border-b border-gray-100">
                  <td className="py-3 pr-6 text-gray-400 font-medium w-40">{k}</td>
                  <td className="py-3 text-gray-700">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {active === "vendor" && (
          <div className="flex gap-5 flex-wrap">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop&crop=center" alt="Vendor" className="w-24 h-24 rounded-full object-cover border-4 border-gray-100" />
            <div className="flex-1">
              <div className="font-bold text-gray-800 text-base mb-2">Ocean Crate</div>
              <div className="flex gap-6 mb-3">
                <span className="text-xs text-gray-500">Products: <strong className="text-green-700">358</strong></span>
                <span className="text-xs text-gray-500">Sales: <strong className="text-green-700">5587</strong></span>
              </div>
              <ul className="space-y-1.5 mb-3">
                {[["📞","+00 987654321"],["✉","Example@gmail.com"],["📍","2548 Broaddus Maple Court, Madisonville KY 4783, USA."]].map(([icon,val]) => (
                  <li key={val} className="flex gap-2 text-xs text-gray-500"><span>{icon}</span>{val}</li>
                ))}
              </ul>
              <p className="text-xs text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        )}
        {active === "reviews" && (
          <div>
            <div className="space-y-5 mb-6">
              {[
                { name: "Mariya Lykra", stars: 5, date: "March 2, 2024", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." },
                { name: "Moris Willson", stars: 4, date: "Feb 18, 2024", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it." },
              ].map(r => (
                <div key={r.name} className="flex gap-4 pb-5 border-b border-gray-100">
                  <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-semibold text-gray-800 text-sm">{r.name}</span>
                      <span className="text-yellow-400 text-xs">{"★".repeat(r.stars)}{"☆".repeat(5-r.stars)}</span>
                      <span className="text-xs text-gray-400">{r.date}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Add Review */}
            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="font-semibold text-gray-800 mb-3">Add a Review</h4>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(n => (
                  <button key={n} onClick={() => setRating(n)} className={`text-2xl transition-colors ${n <= rating ? "text-yellow-400" : "text-gray-300"}`}>★</button>
                ))}
              </div>
              <div className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-600 transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-600 transition-colors" />
                <textarea placeholder="Write your review..." rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-600 transition-colors resize-none" />
                <button className="bg-green-700 hover:bg-green-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors">Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RelatedProducts() {
  return (
    <div className="mt-8">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
        <p className="text-sm text-gray-400 mt-1">Browse The Collection of Top Products</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {RELATED.map((p) => (
          <div key={p.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer">
            {p.badge && (
              <div className="relative">
                <span className={`absolute top-2 left-2 z-10 ${p.badgeColor} text-white text-xs font-bold px-2 py-0.5 rounded`}>{p.badge}</span>
              </div>
            )}
            <div className="relative h-44 overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-end justify-center gap-2 pb-3 opacity-0 group-hover:opacity-100">
                {["🛒","🤍","👁"].map((icon, i) => (
                  <button key={i} className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-green-700 hover:text-white transition-all text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200" style={{ transitionDelay: `${i * 50}ms` }}>
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-3">
              <div className="text-xs text-gray-400 mb-1">{p.category}</div>
              <div className="text-sm font-medium text-gray-700 leading-snug mb-1 line-clamp-2">{p.name}</div>
              {p.weight && <div className="text-xs text-gray-400 mb-2">{p.weight}</div>}
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-green-700">{p.price}</span>
                <span className="text-sm text-gray-400 line-through">{p.old}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ---- MAIN PAGE ----
export default function GrabitProductPage() {
  const [activeWeightSidebar, setActiveWeightSidebar] = useState("500gm Pack");
  const [activeColor, setActiveColor] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Breadcrumb />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-7 flex gap-6 items-start">
        <Sidebar
          activeWeightSidebar={activeWeightSidebar}
          setActiveWeightSidebar={setActiveWeightSidebar}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />

        <div className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Product Detail */}
          <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Gallery images={IMAGES} />
            <ProductInfo />
          </div>

          <FrequentlyBought />
          <Tabs />
          <RelatedProducts />
        </div>
      </div>

    </div>
  );
}
