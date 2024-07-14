
import dynamic from 'next/dynamic';
import {Layout} from 'antd';
const Header = dynamic(() => import('../app/components/Header'), { ssr: false });

export default function Home() {
  return (
    <Layout
      style={{ minHeight: '100vh', backgroundColor: 'white' }}
    >
      <Header/>
    </Layout>
  );
};
