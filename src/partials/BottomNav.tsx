import style from "../../styles/BottomNav.module.css";
export default function BottomNav() {
  return (
    <div className={style.navbar}>
      <a href="#home" className={style.active}>
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
