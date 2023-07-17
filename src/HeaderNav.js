import Logo from "./Logo";
import MoviesResults from "./MoviesResults";
function HeaderNav({ children, movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
      <MoviesResults movies={movies} />
    </nav>
  );
}

export default HeaderNav;
