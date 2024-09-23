import { useRouter } from "next/router";
import PlatformA from "./platforma";
import PlatformB from "./platformb";

const TypeIndexPage = () => {
  const router = useRouter();
  const { platform } = router.query;

  switch (platform) {
    case "platforma":
      return <PlatformA />;
    case "platformb":
      return <PlatformB />;
    default:
      return <PlatformA />;
  }
};

export default TypeIndexPage;
