import { styles } from "./layoutStyles";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div style={styles.Layout}>{children}</div>;
};

export default Layout;
