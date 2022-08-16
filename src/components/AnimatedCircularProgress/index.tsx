import Image from "next/image";
import * as S from "./styles";

export type AnimatedCircularProgressProps = {
  percent: number;
  imageSrc: string;
  backgroundProgress: string;
  label: string;
};

export const AnimatedCircularProgress = ({
  percent = 75,
  backgroundProgress,
  imageSrc,
  label
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
            <Image src={imageSrc} alt={label} width={70} height={70} />
          </div>
        </div>
      </div>
    </S.AnimatedCircularProgress>
  );
};
