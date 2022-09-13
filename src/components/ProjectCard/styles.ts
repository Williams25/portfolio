import styled, { css } from "styled-components";

export const ProjectCard = styled.div`
  ${() => css`
    border: 4px solid rgb(64, 221, 255);
    border-radius: 24px;
    box-shadow: rgb(64, 221, 255) 0px 0px 12px;
    min-height: 200px;
    max-width: 400px;
    width: 100%;
    padding: 40px 40px 48px 48px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.8, -1, 0.2, 1.5) 0s;
    background: rgba(0, 0, 0, 0)
      linear-gradient(rgb(124, 127, 255) 0%, rgb(64, 221, 255) 100%) repeat
      scroll 0% 0%;

    & .image-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 24px;
      overflow: hidden;
      pointer-events: none;
    }

    & .content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      padding-top: 0.5rem;
      z-index: 2;

      & h1 {
        text-shadow: rgb(23, 15, 30) -1px -1px 6px,
          rgba(124, 127, 255, 0.6) 1px 1px 6px;
        overflow-wrap: break-word;
        font-size: 1.125rem;
        letter-spacing: 0.1rem;
        line-height: 1.25;
        margin: 0.5rem 0;
      }

      & a {
        background: rgb(23, 15, 30) none repeat scroll 0% 0%;
        border: medium none;
        border-radius: 2px;
        user-select: none;
        clip-path: polygon(
          12px 0px,
          100% 0px,
          100% 72%,
          calc(100% - 12px) 100%,
          0px 100%,
          0px 12px
        );
        color: rgb(229, 225, 230);
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        line-height: 24px;
        display: inline-block;
        overflow: hidden;
        padding: 8px 18px;
        text-decoration: none;
        transition: all 0.2s ease 0s;

        &:hover {
          filter: brightness(0.7);
        }
      }
    }

    &::after {
      background-image: url("/assets/media/sparkle-5.57c3794f.gif");
      border-radius: inherit;
      content: "";
      height: 100%;
      left: 0px;
      opacity: 0.5;
      pointer-events: none;
      position: absolute;
      top: 0px;
      width: 100%;
      mix-blend-mode: color-dodge;
    }

    /* & .binary {
      font-weight: 400;
      line-height: 24px;
      font-size: 12px;
      pointer-events: none;
      position: absolute;
      text-align: center;
      width: 100%;
      mask-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 5%,
        rgb(0, 0, 0) 20%,
        rgb(0, 0, 0) 80%,
        rgba(0, 0, 0, 0) 95%
      );
      white-space: nowrap;
      overflow: hidden;
      overflow-wrap: break-word;
      color: rgb(64, 221, 255);
      z-index: 2;

      &::after {
        content: "00111010 00101101 00101001 00101001" " "
          "00111010 00101101 00101001 00101001" " "
          "00111010 00101101 00101001 00101001";
      }

      &.side {
        height: 100%;
        text-align: center;
        top: 0px;
        width: auto;
        writing-mode: vertical-rl;
        mask-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0) 5%,
          rgb(0, 0, 0) 20%,
          rgb(0, 0, 0) 80%,
          rgba(0, 0, 0, 0) 95%
        );
      }

      &.top.large {
        left: 0px;
        top: 10px;
      }

      &.side.right {
        right: 10px;
      }

      &.bottom {
        bottom: 0px;
        left: 0px;
        color: rgb(124, 127, 255);
        transform: rotate(180deg);
      }

      &.side.left {
        left: 10px;
        transform: rotate(180deg);
      }
    } */

    &:hover {
      box-shadow: rgb(64, 221, 255) 0px 0px 25px,
        rgb(64, 221, 255) 0px 0px 8px 2px;
      transform: translateY(-12px);

      & .content a {
        transform: scale(0.9);
      }
    }
  `}
`;
