import Image from "next/image";
import * as S from "./styles";
export const NotFound = () => {
  return (
    <S.NotFound>
      <div>
        <Image
          src="/assets/img/404 error with person looking for-amico.svg"
          alt="Error not found gif"
          width={600}
          height={600}
        />
      </div>
    </S.NotFound>
  );
};
