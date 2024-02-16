import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
       <Layout>
      <h1>Enlace</h1>
      <Link href={`/tienda`} legacyBehavior>
        <a>
          Enlace

        </a>
      </Link>
      </Layout>
    </>
  );
}
