import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Rock Frog",
  description: "Your new movies platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-12">
          <Sidebar />
          <div className="col-span-12 lg:col-span-10 lg:col-start-3">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
