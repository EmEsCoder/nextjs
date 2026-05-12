import Header from "@/components/Header";
import "@/app/globals.css";
import Toastify from "@/components/Toastify";
import FContext from "@/app/context/authContext";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        {/* لینک خالی برای favicon */}
        <link rel="icon" href="data:," />
      </head>
      <FContext>
        <body>
          <Header />
          {children}
          <Toastify />
        </body>
      </FContext>
    </html>
  );
}
