import { Liff } from "@line/liff/dist/lib";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../../styles/Auth.module.css";

export default function HomePage(props: any) {
  const liff: Liff = props.liff;
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState({});
  useEffect(() => {
    liff
      ?.getProfile()
      .then((profile) => {
        setName(profile.displayName);
        setUserId(profile.userId);
        console.log(profile);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleScans = async () => {
    await liff
      .scanCodeV2()
      .then((result) => {
        setResult(result);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Homepage</h1>
      <h1>{liff?.getOS()}</h1>
      <h1>{name}</h1>
      <h1>{userId}</h1>
      <button onClick={handleScans}>Scan</button>
    </div>
  );
}
