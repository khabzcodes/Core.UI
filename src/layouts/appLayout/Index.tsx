import SideNavigation from '../../components/sideNavigation/SideNavigation';

interface AppLayoutProps {
  children: JSX.Element;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className='row flex-nowrap"'>
      <SideNavigation />
      <div className="col py-3">{children}</div>
    </div>
  );
}

export default AppLayout;
