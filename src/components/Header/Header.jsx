import title from '../../assets/title.png';
import './Header.css';

export default function Header() {
  return (
    <header className="h-8 place-self-start mt-4">
      <img src={title} alt="The perfect mentor" />
    </header>
  );
}
