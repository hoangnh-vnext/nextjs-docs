import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError,
}) => {
  async function getUserProfile() {
    const profile = await liff?.getProfile();
    return profile?.pictureUrl;
  };
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Homepage</h1>
        {liff && (
          <>
            {liff.ready.then(() => {
              if (liff.isLoggedIn()) {
                if (liff.getOS() === "android") {
                  <body></body>;
                }
              } else {
                liff.login();
              }
            })}
          </>
        )}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
