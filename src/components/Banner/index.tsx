import * as S from "./styles";
import { Container } from "../";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type BannerProps = {
  title: string;
  rotateText: {
    text: string;
  }[];
  description: { text: string };
};

export const Banner = ({ rotateText, title, description }: BannerProps) => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const toRotate = rotateText.map((item) => item.text);
  const period = 2000;

  const tick = useCallback((): void => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [setText, setDelta, setLoopNum, setIsDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <S.Banner>
      <Container>
        <div className="container-banner">
          <div className="content-description">
            <span className="tagline">Welcome to my Portfolio</span>

            <h1>
              {title}{" "}
              <span
                className="txt-rotate"
                data-rotate={JSON.stringify(toRotate)}
              >
                <span className="wrap" translate="no">
                  {text}
                </span>
              </span>
            </h1>
            <p>{description.text}</p>
          </div>

          <div className={"animate_image"}>
            <Image
              src={"/assets/img/header-img.svg"}
              alt="image illustrates an astronaut"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </S.Banner>
  );
};
