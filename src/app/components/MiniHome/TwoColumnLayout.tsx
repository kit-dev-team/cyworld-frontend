import MenuTab from "../MenuTab/MenuTab";

export default function TwoColumnLayout({
  left,
  right,
  topMessage,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  topMessage: string;
}) {
  return (
    <div className="container">
      <div className="left-wrapper">
        <div className="users">
          <p>TODAY 1 | TOTAL 2025</p>
        </div>
        <div className="left">{left}</div>
      </div>

      <div className="right-wrapper">
        <div className="top-message">
          <p>{topMessage}</p>
        </div>
        <div className="right">
          {right}
          <MenuTab />
        </div>
      </div>
    </div>
  );
}
