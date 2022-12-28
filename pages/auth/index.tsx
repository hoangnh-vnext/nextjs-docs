import { Liff } from "@line/liff/dist/lib";
import Head from "next/head";
import packageJson from "../../package.json";
import styles from "../../styles/Auth.module.css"

export default function Auth(props: any) {
  const liff: Liff = props.liff;
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Homepage</h1>
      <h1>{liff.getOS()}</h1>
    </div>
  );
}
