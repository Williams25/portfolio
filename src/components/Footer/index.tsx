import * as S from "./styles";
import { Container } from "..";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <S.Footer>
      <Container className="container-footer">
        <div className="logo">
          <Link href="/#">
            <a aria-label="portfolio logo <wg />">
              <Image
                src="/assets/img/logo.svg"
                alt="portfolio logo <wg />"
                width={100}
                height={50}
              />
            </a>
          </Link>
        </div>

        <div className="info-footer">
          <div className="social-media">
            <Link href="https://github.com/Williams25">
              <a aria-label="go to Github" target="_blank" draggable={false}>
                <FaGithub size={30} />
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/william-gabriel-291a031b4/">
              <a
                aria-label="go to LinkedinIn"
                target="_blank"
                draggable={false}
              >
                <FaLinkedinIn size={30} />
              </a>
            </Link>
          </div>
          <p>Copyright ©{new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </Container>
    </S.Footer>
  );
};
