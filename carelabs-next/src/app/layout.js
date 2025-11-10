import Header from "@/components/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" 
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" />
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
