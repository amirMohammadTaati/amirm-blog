import Sidebar from "./Sidebar";

interface GeneralInfo {
  title: string;
  description: string;
  logo: {
    url: string;
  };
}
interface Props {
  children: React.ReactNode;
  general: GeneralInfo;
}

export default function Layout({ children, general }: Props) {
  return (
    <>
      <Sidebar
        name={general.title}
        description={general.description}
        logoUrl={general.logo?.url}
      />
      {children}
    </>
  );
}
