import lneurobicaLogo from "../../../../assets/logo512.png";

export default function NeurobicaLogo(props: { zoom: string }) {
  return (
    <div
      className="neurobicaLogo"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={lneurobicaLogo}
        style={{ backgroundColor: "white", width: props.zoom }}
      />
    </div>
  );
}
