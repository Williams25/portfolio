import Image from "next/image";
import { Container, Input, TextArea, Button } from "..";

import * as S from "./styles";

export const Contact = () => {
  return (
    <S.Contact id="contact">
      <Container className="contact-container">
        <div data-aos="fade-right" data-aos-offset="500" data-aos-delay="500">
          <Image
            src="/assets/img/files-sent-not-css.svg"
            alt="..."
            width={500}
            height={500}
          />
        </div>

        <div data-aos="fade-left" data-aos-offset="500" data-aos-delay="500">
          <form>
            <h1>Get In Touch</h1>
            <div className="input-group">
              <Input type="text" label="Full name" />
              <Input type="email" label="Email" />
            </div>
            <TextArea label="Description" />
            <div>
              <Button
                title="Submit"
                variant="dark"
                size="medium"
                borderColor="#FFFFFF"
                style={{
                  background: "#151515"
                }}
              />
            </div>
          </form>
        </div>
      </Container>
    </S.Contact>
  );
};
