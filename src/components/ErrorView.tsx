import EmojiComponent from "./EmojiComponent";

function ErrorViewComponent({ mensaje = "Something wrong with the request" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: "30vh",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "100%" }}>
        <EmojiComponent
          symbol="😧"
          label="anguished-face"
          style={{
            fontSize: "10vh",
          }}
        ></EmojiComponent>
      </div>
      <p style={{ marginTop: "16px", paddingTop: "16px" }}>{mensaje}</p>
    </div>
  );
}

export default ErrorViewComponent;
