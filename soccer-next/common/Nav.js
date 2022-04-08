import Link from "next/link";
import style from "common/style/Nav.module.css";
export default function Nav(){
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.li}> <Link href='/'>Home</Link> </li>
        <li className={style.li}> <Link href='/admin/dashboard'>DashBoard</Link> </li>
        <li className={style.li}> <Link href='/basic/calc'>Calculator</Link> </li>
        <li className={style.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={style.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={style.li}> <Link href='/board/board-list'>BoardList</Link> </li>
        <li className={style.li}> <Link href='/board/board-form'>BoardForm</Link> </li>
        <li className={style.li}> <Link href='/game/game-list'>GameList</Link> </li>
        <li className={style.li}> <Link href='/game/team-list'>TeamList</Link> </li>
        <li className={style.li}> <Link href='/user/sign-in'>SingIn</Link> </li>
        <li className={style.li}> <Link href='/user/sign-up'>SingUp</Link> </li>
        
        
      </ul>
    </nav>
  );
};