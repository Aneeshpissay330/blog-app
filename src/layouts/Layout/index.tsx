import Footer from "../Footer";
import Header from "../Header";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout : React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;