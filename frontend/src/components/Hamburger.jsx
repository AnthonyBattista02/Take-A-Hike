import '../App.css'

export default function Hamburger({ isOpen, toggleMenu }) {
  return (
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="burger1" />
      <div className="burger2" />
      <div className="burger3" />
    </div>
  );
}
  