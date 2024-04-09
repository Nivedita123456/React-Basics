import './Header-Comp.css'
import { useEffect } from 'react';
export function Header() {
    return (
      <header>
        <div className="logo">Your Logo</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <a href="#">Login</a>
          <br></br>
          <a href="#">Sign Up</a>
        </div>
      </header>
    );
  };




const useScript = (url:any, onload:any) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.onload = onload;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [url, onload]);
};

export default useScript;
  