import './Navbar.css'

function Navbar(){
    return (
        <div className=''>
           

           <nav class="navbar navbar-expand-lg bg-body-tertiary mx-2">
  <div class="container-fluid text-light">
    <a className="navbar-brand" href="#">Home</a>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">About</a>
        <a class="nav-link active" href="#">Contact</a>
        <a class="nav-link active" href="#">Services</a>
        <a class="nav-link active">Login</a>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;