import title from '../../assets/title.png';

export default function Header() {
  return (
    <header className="h-8 place-self-start">
      <img src={title} alt="The perfect mentor" />
    </header>
  );
}
