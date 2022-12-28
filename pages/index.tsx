import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Auth from "./auth";

async function getUserProfile(liff: Liff) {
  const profile = await liff?.getProfile();
  console.log(profile);
}

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError,
}) => {
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <>
          {liff && (liff.isLoggedIn() ? <Auth /> : liff.login())}
          {liffError && (
            <>
              <p>LIFF init failed.</p>
              <p>
                <code>{liffError}</code>
              </p>
            </>
          )}
        </>
        {/* {liff && (
          <>
            {liff.ready.then(() => {
              if (liff.isLoggedIn()) {
                if (liff.getOS() === "android") {
                <Auth />
                } else {
                  <body></body>
                }
              } else {
                // liff.login();
              }
            })}
          </>
        )} */}
      </main>
    </div>
  );
};

export default Home;
