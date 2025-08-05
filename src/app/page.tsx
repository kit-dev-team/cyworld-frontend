import TwoColumnLayout from "./components/MiniHome/TwoColumnLayout";
import MiniHomeLeft from "./components/MiniHome/MiniHomeLeft";
import MiniHomeRight from "./components/MiniHome/MiniHomeRight";

export default function MiniHomePage() {
  return (
    <TwoColumnLayout
      left={<MiniHomeLeft />}
      topMessage="내가 최고짱이다~~"
      right={<MiniHomeRight />}
    />
  );
}
