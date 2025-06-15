
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h2>Inner Layout item</h2>
        {children}
    </>
        

  );
}
