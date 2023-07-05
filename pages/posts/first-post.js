import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";
import Image from "next/image";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>First Post</h1>
      <p>
        My scratch apps. You can also find me on{" "}
        <Link href={"https://scratch.mit.edu/users/megaphieu/"}>
          this site!
        </Link>{" "}
      </p>

      <div>
        <p>- Nujabes walking bear:</p>
        <iframe
          src="https://scratch.mit.edu/projects/870461663/embed"
          allowtransparency="true"
          width="485"
          height="402"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <p>- My flappy bat:</p>
        <iframe
          src="https://scratch.mit.edu/projects/872077235/embed"
          allowtransparency="true"
          width="485"
          height="402"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <p>- Game animation test:</p>
        <iframe
          src="https://scratch.mit.edu/projects/871218881/embed"
          allowtransparency="true"
          width="485"
          height="402"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <p>Phản ứng của tôi kiểu:</p>
        <Image
          src="/images/truedumage.PNG"
          height={144}
          width={144}
          alt="truedumage"
        />
      </div>

      <div>
        <h2>
          <Link href={"/"}>← Back to home</Link>
        </h2>
      </div>
    </Layout>
  );
}
