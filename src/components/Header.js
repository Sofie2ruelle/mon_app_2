import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="App-header">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="#"> <img src={logo} className="App-logo" alt="logo" width="50" /></NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink className="nav-link active" to="/mon-app2/">Home</NavLink>
              <NavLink className="nav-link" to="/mon-app2/gallery">Gallery</NavLink>
              <NavLink className="nav-link" to="/mon-app2/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <h2></h2>
    </header>

  )
}
export default Header