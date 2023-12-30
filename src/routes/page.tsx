// 文件入口

import { Helmet } from '@modern-js/runtime/head';
import MainPage from '@/routes/MainPage/MainPage';

const Index = () => (
  <div>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <MainPage />
    </main>
  </div>
);

export default Index;
