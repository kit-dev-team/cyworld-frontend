import TwoColumnLayout from "./components/common/TwoColumnLayout";
import MiniHomeLeft from "./components/MiniHome/MiniHomeLeft";
import MiniHomeRight from "./components/MiniHome/MiniHomeRight";

export default function MiniHomePage() {
  return <TwoColumnLayout left={<MiniHomeLeft />} right={<MiniHomeRight />} />;
}
