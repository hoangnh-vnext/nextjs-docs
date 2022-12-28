import Head from "next/head";
import packageJson from "../../package.json";
import styles from "../../styles/Auth.module.css"

export default function Auth() {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Homepage</h1>
    </div>
  );
}
