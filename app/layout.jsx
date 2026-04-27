export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul>
            <li>dashboard</li>
            <li>blog</li>
            <li>settings</li>
          </ul>
        </header>
        {children}
        </body>
    </html>
  );
}
