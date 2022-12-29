import { Liff } from "@line/liff/dist/lib";
import Head from "next/head";
import { useState } from "react";
import packageJson from "../../package.json";
import styles from "../../styles/Auth.module.css";

export default function Auth(props: any) {
  const liff: Liff = props.liff;
  const [name, setName] = useState('');
  liff?.getProfile()
    .then((profile) => {
      setName(profile.displayName);
    })
    .catch((err) => {
      console.log("error", err);
    });
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Homepage</h1>
      <h1>{liff?.getOS()}</h1>
      <h1>{name}</h1>
    </div>
  );
}
