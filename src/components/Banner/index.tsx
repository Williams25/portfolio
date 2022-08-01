import * as S from "./styles";
import { Container } from "../";
import Image from "next/image";

export const Banner = () => {
  return (
    <S.Banner>
      <Container>
        <div className="container-banner">
          <div className="content-description">
            <span className="tagline">Welcome to my Portfolio</span>

            <h1>
              {`Hi! I'm Willliam`}{" "}
              <span
                className="txt-rotate"
                data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
              >
                <span className="wrap">{"text"}</span>
              </span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
          </div>

          <div className={"animate_image"}>
            <Image
              src={"/assets/img/header-img.svg"}
              alt="Header Img"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </S.Banner>
  );
};
