export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
