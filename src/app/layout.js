import "./globals.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto } from "next/font/google"

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
      {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />  */}
      <html lang="en">
        <body className={`${roboto.className}`}>{children}</body>
      </html>
    </>
}
