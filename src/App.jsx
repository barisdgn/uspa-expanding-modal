import { useEffect, useRef, useState } from "react";
import "./App.css";

/* --- Assets & Statics --- */
import logo from "./assets/logo.png";
import modal01 from "./assets/modal-01.jpg";
import modal02 from "./assets/modal-02.jpg";
import modal03 from "./assets/modal-03.jpg";
import modal04 from "./assets/modal-04.jpg";

/* --- Configuration & Mock Data --- */
const campaigns = [
  "ÜYE OL 200 TL İNDİRİM KAZAN!",
  "BABALAR GÜNÜ HEDİYELERİ",
  "SEÇİLİ ÜRÜNLERDE ÖZEL FIRSATLAR",
];

const banners = [
  {
    title: "BABALAR GÜNÜ HEDİYELERİ",
    description: "%50'ye varan + sepette sürpriz indirimler",
    coupon: true,
    image: modal01,
  },
  {
    title: "YAZA ÖZEL",
    description: "Seçili ürünlerde özel fırsatlar",
    image: modal02,
  },
  {
    title: "SEÇİLİ ÜRÜNLER",
    description: "Özel fiyat avantajlarını keşfet",
    image: modal03,
  },
  {
    title: "ÜYE OL",
    description: "200 TL indirim fırsatını yakala",
    image: modal04,
  },
];

const COUPON_CODE = "USPA200";

/**
 * Main Application Component
 * Handles the rendering of the core site layout and the promotional campaign widget.
 */
function App() {
  /* --- State Management --- */
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [campaignIndex, setCampaignIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  /* --- Refs --- */
  const copyTimerRef = useRef(null);

  /* --- Side Effects (Lifecycles) --- */

  // Mount Effect: Delays the initial rendering of the campaign widget
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Interval Effect: Handles the automated text slider in the collapsed widget state
  useEffect(() => {
    if (!visible || expanded) return;
    
    const interval = setInterval(() => {
      setCampaignIndex((current) => (current + 1) % campaigns.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [visible, expanded]);

  // DOM Mutation Effect: Toggles body scroll lock to prevent background scrolling when modal is active
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  // Cleanup Effect: Ensures memory leaks are prevented by clearing timeouts on component unmount
  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  /* --- Event Handlers --- */

  // UI State Handler: Resets widget entirely
  const closeWidget = () => {
    setExpanded(false);
    setVisible(false);
  };

  // UI State Handler: Expands widget to modal view
  const openModal = () => {
    setExpanded(true);
  };

  // Utility Handler: Integrates with Clipboard API to copy promotional code
  const copyCoupon = async (event) => {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(COUPON_CODE);
      setCopied(true);
      
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
      
      copyTimerRef.current = setTimeout(() => {
        setCopied(false);
      }, 5000);
    } catch (error) {
      console.error("Clipboard interaction failed:", error);
    }
  };

  /* --- Component Render --- */
  return (
    <>
      {/* SECTION: MAIN LAYOUT */}
      <main className="demo-page">
        <header className="site-header">
          <div className="header-main">
            
            {/* Component: Header Navigation & Brand Identity */}
            <div className="header-left">
              <button className="menu-button" aria-label="Menü">
                <span></span>
                <span></span>
                <span></span>
              </button>
              
              {/* Element: Mobile-only Search Action */}
              <button className="icon-button mobile-search-button" aria-label="Ara">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16L21 21" />
                </svg>
              </button>

              <a href="#" className="site-logo" aria-label="U.S. Polo Assn.">
                <img src={logo} alt="U.S. POLO ASSN." />
              </a>
            </div>

            {/* Component: Desktop Search Module */}
            <div className="header-center">
              <div className="search-box">
                <span className="search-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M16 16L21 21" />
                  </svg>
                </span>
                <input type="text" placeholder="Tişört, Gömlek" />
                <span className="search-camera">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="6" width="18" height="14" rx="2" />
                    <circle cx="12" cy="13" r="3" />
                    <path d="M8 6l1.5-2h5L16 6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Component: User Account & Cart Actions */}
            <div className="header-right">
              {/* Element: Desktop-only Login */}
              <button className="login-text-button">GİRİŞ YAP</button>
              
              {/* Element: Mobile-only Account Icon */}
              <button className="icon-button mobile-account-button" aria-label="Hesabım">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>

              {/* Element: Desktop-only Wishlist */}
              <button className="icon-button favorite-button" aria-label="Favoriler">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              
              {/* Element: Cart Action Indicator */}
              <button className="icon-button cart-button" aria-label="Sepet">
                <span className="cart-count">0</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="cart-icon">
                  <path d="M4 8h16v11H4z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 8V6.5C7 5.1 8.1 4 9.5 4h5C15.9 4 17 5.1 17 6.5V8" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4 8h16" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>

          </div>
          
          {/* Element: Brand Identity Visual Rules */}
          <div className="header-lines">
            <span className="red-line"></span>
            <span className="navy-line"></span>
          </div>
        </header>
      </main>

      {/* SECTION: CAMPAIGN WIDGET */}
      {visible && (
        <>
          {/* Component: Collapsed Campaign Banner */}
          {!expanded && (
            <section className="campaign-bar" onClick={openModal} aria-label="Kampanyaları aç">
              <button 
                className="bar-close" 
                aria-label="Kampanyayı kapat" 
                onClick={(event) => {
                  event.stopPropagation();
                  closeWidget();
                }}
              >
                ×
              </button>
              <div className="campaign-text">
                <div className="campaign-slider">
                  <div 
                    className="campaign-track" 
                    style={{ transform: `translateY(calc(${campaignIndex} * -1 * var(--slide-height, 16px)))` }}
                  >
                    {campaigns.map((campaign) => (
                      <div className="campaign-slide" key={campaign}>
                        <span>{campaign}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <span className="expand-arrow" aria-hidden="true">⌃</span>
            </section>
          )}

          {/* Component: Expanded Campaign Modal */}
          {expanded && (
            <section className="campaign-modal" aria-label="Kampanyalar">
              
              {/* Element: Desktop Modal Controls */}
              <button className="modal-close" aria-label="Kapat" onClick={closeWidget}>
                ×
              </button>
              
              <button className="modal-logo" onClick={closeWidget} aria-label="Kapat">
                <img src={logo} alt="U.S. POLO ASSN." />
              </button>

              {/* Element: Mobile Modal Navigation */}
              <div className="campaign-header">
                <div className="header-left">
                  <button className="mobile-header-close" onClick={closeWidget} aria-label="Tamamen Kapat">
                    ×
                  </button>
                  <strong>KAMPANYALAR</strong>
                </div>
                
                <div className="header-right">
                  <button className="view-all">Tümünü Gör</button>
                  <button 
                    className="header-collapse" 
                    aria-label="Küçült" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded(false);
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Component: Campaign Cards Grid */}
              <div className="banner-grid">
                {banners.map((banner) => (
                  <article 
                    className="campaign-card" 
                    key={banner.title} 
                    style={{ backgroundImage: `url(${banner.image})` }}
                  >
                    <div className="card-overlay"></div>
                    <div className="card-content">
                      <h3>{banner.title}</h3>
                      <p>{banner.description}</p>
                      {banner.coupon && (
                        <button 
                          className={`copy-button ${copied ? "is-copied" : ""}`} 
                          onClick={copyCoupon}
                        >
                          {copied ? "KOPYALANDI" : "KOPYALA"}
                        </button>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

export default App;