import { NotFound } from "src/components";
import Head from "next/head";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Page - Not found</title>
      </Head>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
