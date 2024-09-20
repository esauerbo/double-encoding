import { useRouter } from "next/router";
import Page1 from "../page1";
import Page2 from "../page2";

const SlugPage = () => {
  const router = useRouter();
  const { platform } = router.query;
  switch (platform) {
    case "page1":
      return <Page1 />;
    case "page2":
      return <Page2 />;
    default:
      return <h1>Page not found</h1>;
  }
};

export default SlugPage;
