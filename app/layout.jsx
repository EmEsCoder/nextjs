import Header from "@/components/Header";
import "@/app/globals.css";
import localFont from "next/font/local";

const vazirFont = localFont({
  src: [
    {
      path: '../public/Vazir.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/Vazir-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ]
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" >
      <body>
        <Header />
        <hr />
        <p className={vazirFont.className} style={{ fontWeight: "100"}}>سلام.این یک متن ازمایشی هست</p>
        <p className={vazirFont.className}>سلام.این یک متن ازمایشی هست</p>
        {children}
      </body>
    </html>
  );
}
