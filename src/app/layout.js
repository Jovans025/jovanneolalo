import "./globals.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from "next/font/google"
import Head from "next/head"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Jovanne Olalo",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return  <>  
    <Head>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Article",
        "headline": "Jovanne Olalo",
        "datePublished": "2024-07-01",
        "author": {
          "@type": "Person",
          "name": "Jovanne Olalo"
        }, 
      })}
    </script>
  </Head>
      <html lang="en">
        <body className={`${roboto.className}`}>{children}</body>
      </html>
    </>
}
