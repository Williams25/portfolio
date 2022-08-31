import Image from "next/image";
import { Container } from "../Container";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import * as S from "./styles";

export const Contact = () => {
  return (
    <S.Contact>
      <Container className="contact-container" data-aos="zoom-in-up">
        <Image
          src="/assets/img/files-sent-not-css.svg"
          alt="..."
          width={400}
          height={500}
        />

        <div>
          <form>
            <h1>Get In Touch</h1>
            <div className="input-group">
              <Input label="Full name" />
              <Input label="Email" />
            </div>
            <TextArea label="Email" />
          </form>
        </div>
      </Container>
    </S.Contact>
  );
};
