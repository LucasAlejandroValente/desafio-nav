import { Link } from "react-router-dom"

const NavBar = () => {
    return (
    <div class="navbar fixed z-50 bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl"><Link to={'/'}>Digistore</Link></a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end">
        <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
                </div>
            </label>
            <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
                </div>
            </div>
            </div>
    </div>
  </div>
    )
}

export default NavBar