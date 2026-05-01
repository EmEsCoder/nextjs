import Header from "@/components/Header";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head>
        {/* لینک خالی برای favicon */}
        <link rel="icon" href="data:," />
      </head>
      <body>
        <Header />
        <hr />
        {children}
      </body>
    </html>
  );
}
