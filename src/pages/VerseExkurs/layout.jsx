import Footer from "components/Footer";

export default function Layout({ children }) {
  return (
    <>
      SIDEBAR
      <main className="px-4 md:container md:mx-auto">{children}</main>
      
      <Footer />
    </>
  );
}
