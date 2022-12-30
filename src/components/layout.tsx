import BottomNav from "./partials/BottomNav";

export default function Layout({ children }: any) {
  return (
    <>
      <main>{children}</main>
      <BottomNav />
    </>
  );
}
