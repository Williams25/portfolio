import Image from "next/image";
import { Container, Input, TextArea, Button } from "..";

import * as S from "./styles";

export const Contact = () => {
  return (
    <S.Contact id="contact">
      <Container className="contact-container">
        <div>
          <Image
            src="/assets/img/Programming-amico.svg"
            alt="image illustrates a programmer programming"
            width={600}
            height={600}
          />
        </div>

        <div>
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
