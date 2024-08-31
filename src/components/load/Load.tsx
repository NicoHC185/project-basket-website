import Image from "next/image";
import "./styles.css";

export default function LoadImg() {
  return (
    <>
      <div
        style={{
          maxHeight: "75vh",
        }}
      >
        <div
          className="loader-container"
          style={{
            height: "35vh"
          }}
        >
          <div className="slide">
            <div className="rotateIcon">
              <Image
                src={`/assets/images/ball2.png`}
                alt={"alt"}
                width="250"
                height="257"
                style={{
                  animation: "rotate 4s linear",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="loader-container"
          style={{
            marginTop: "10vh",
          }}
        >
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
