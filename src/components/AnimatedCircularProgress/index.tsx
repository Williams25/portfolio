import Image from "next/image";
import * as S from "./styles";

export type AnimatedCircularProgressProps = {
  percent: number;
  image: { url: string };
  backgroundProgress: {
    hex: string;
  };
  name: string;
};

export const AnimatedCircularProgress = ({
  percent = 75,
  backgroundProgress,
  image,
  name
}: AnimatedCircularProgressProps) => {
  const totalPercent = 440 - (440 * percent) / 100;

  return (
    <S.AnimatedCircularProgress
      totalPercent={totalPercent}
      percent={percent}
      backgroundProgress={backgroundProgress}
    >
      <div className="content-progress">
        <div className="percent">
          <div className="dot"></div>
          <svg>
            <circle cx="70" cy="70" r="70" />
            <circle cx="70" cy="70" r="70" />
          </svg>

          <div className="content">
            <Image src={image.url} alt={name} width={70} height={70} priority />
          </div>
        </div>
      </div>
    </S.AnimatedCircularProgress>
  );
};
