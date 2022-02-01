import Footer from "components/Footer";
import Sidebar from "components/VerseExkursSidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col justify-between flex-1 h-full max-w-full">
          <main className="block w-full min-h-screen px-[15px] mx-auto xl:px-0 xl:container">
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
