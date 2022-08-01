import { useEffect, useState } from "react";
import { Container, Button } from "../";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import * as S from "./styles";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <S.Header scrolled={scrolled}>
      <Container className="content-header">
        <div className="logo">logo</div>
        <div className="menu-items">
          <nav>
            <a href="#">Home</a>
          </nav>
          <nav>
            <a href="#">Skills</a>
          </nav>
          <nav>
            <a href="#">Projects</a>
          </nav>
          <ul>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <Button
            variant="dark"
            borderColor="#2894ff"
            title="contact"
            size="medium"
          />
        </div>
      </Container>
    </S.Header>
  );
};
