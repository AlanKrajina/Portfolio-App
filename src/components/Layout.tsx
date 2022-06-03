import './Layout.css';

interface LayoutProps {
    children: any;
}

const Layout: React.FC<LayoutProps> = ({
    children
}) => {
    return (
      <div className='layout'>
        {children}
      </div>
    )
  }
  
  export default Layout;