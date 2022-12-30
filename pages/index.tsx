import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import HomePage from "../src/pages/Home";
import BottomNav from "../src/components/partials/BottomNav";
import styles from "../styles/Home.module.css";

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
          {liff &&
            (liff.isLoggedIn() ? (
              <div>
                <HomePage liff={liff} />
              </div>
            ) : (
              liff.login()
            ))}
          {liffError && (
            <>
              <p>LIFF init failed.</p>
              <p>
                <code>{liffError}</code>
              </p>
            </>
          )}
        </>
      </main>
    </div>
  );
};

export default Home;
