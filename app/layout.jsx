
import Header from "@/components/Header";

export const metadata = {
  title : "Testing project",
  description : "this is a test"
}

export default function RootLayout({ children }) {




  return (
    <html lang="en">
      <body>  
        <Header />

        {children}
        </body>
    </html>
  );
}
