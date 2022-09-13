import styled, { css } from "styled-components";
import { AnimatedCircularProgressProps } from ".";

type AnimatedCircularProgressStyle = Pick<
  AnimatedCircularProgressProps,
  "backgroundProgress" | "percent"
> & {
  totalPercent: number;
};

export const AnimatedCircularProgress = styled.div<AnimatedCircularProgressStyle>`
  ${({ percent, totalPercent, backgroundProgress }) => css`
    .content-progress {
      position: relative;
      width: 180px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      & .percent {
        position: relative;
        width: 150px;
        height: 150px;

        & .dot {
          position: absolute;
          inset: 5px;
          z-index: 10;
          animation: animationDot 2s linear forwards;

          &::before {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: ${backgroundProgress.hex};
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            box-shadow: 0 0 10px ${backgroundProgress.hex},
              0 0 20px ${backgroundProgress.hex};
          }
        }

        & svg {
          position: relative;
          width: 150px;
          height: 150px;
          transform: rotate(270deg);

          & circle {
            width: 100%;
            height: 100%;
            fill: transparent;
            stroke-width: 2;
            stroke: #191919;
            transform: translate(5px, 5px);
            transition: all 1s linear;

            &:nth-child(2) {
              opacity: 0;
              stroke: ${backgroundProgress.hex};
              stroke-dasharray: 440;
              stroke-dashoffset: 440;
              animation: fadeInCircle 2s linear forwards;
            }
          }
        }

        & .content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${backgroundProgress.hex};
          animation: fadeIn 1s linear forwards;
          animation-delay: 2.5s;
          opacity: 0;
          user-select: none;
        }
      }
    }

    @keyframes animationDot {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(calc(3.6deg * ${percent}));
      }
    }
    @keyframes fadeInCircle {
      from {
        opacity: 0;
      }
      to {
        stroke-dashoffset: ${totalPercent};
        opacity: 1;
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
`;
