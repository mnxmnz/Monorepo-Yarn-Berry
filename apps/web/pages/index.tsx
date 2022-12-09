import { sayHello } from "@workspace/lib";
import { Button } from "@workspace/ui";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monorepo - Yarn Berry</title>
        <meta name="description" content="Monorepo - Yarn Berry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{sayHello()}</h1>
        <Button variant="contained">Hello from UI</Button>
      </main>
    </div>
  );
}
