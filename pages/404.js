import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
export default function Pagina404() {
  return (
    <div className="fondo404">
       
      <Layout title="Página no encontrada">
        <p className="error">Página no encontrada</p>
        <Link href="/" legacyBehavior>
          <a className="error-enlace">Ir a Inicio</a>
        </Link>
      </Layout>
    </div>
  );
}
