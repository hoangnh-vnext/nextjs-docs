import Link from "next/link";
import style from "../../../styles/BottomNav.module.css";
import { navLinks } from "../../routes/route";
import { useRouter } from "next/router";
export default function BottomNav(props: any) {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className={style.navbar}>
      {navLinks.map((menuItem, index) => (
        <Link
          href={{
            pathname: menuItem.path,
            query: menuItem?.query,
          }}
          className={router.pathname == menuItem.path ? style.active : ""}
          key={index}
          legacyBehavior
        >
          {menuItem.name}
        </Link>
      ))}
    </div>
  );
}
