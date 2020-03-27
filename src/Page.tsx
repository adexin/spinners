/** @jsx jsx */
import React, { useState, useEffect, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import { css, jsx } from '@emotion/core';
import Slider from '@material-ui/core/Slider';

import ColorSlider from './ColorSlider';
import useDebounce from './useDebounce';
import { ReactComponent as AngularLogo } from './images/angular.svg';
import { ReactComponent as Facebook } from './images/fb.svg';
import { ReactComponent as GithubLogo } from './images/github-logo.svg';
import { ReactComponent as GithubText } from './images/github.svg';
import { ReactComponent as Linkedin } from './images/in.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as ReactLogo } from './images/react.svg';
import { ReactComponent as Twitter } from './images/tw.svg';

export type PageProps = {
  tabIndex: number,
  spinners: { [key: string]: any },
  name: string,
  colors: {
    bg: CSSProperties['background'],
    secondaryBg: CSSProperties['color'],
    secondaryBgVariant: CSSProperties['background'],
    text: CSSProperties['color'],
    primary: CSSProperties['color'],
    slider: {
      track: CSSProperties['background'],
    },
    spinners: {
      bg: CSSProperties['background'],
      grid: CSSProperties['background'],
      border: CSSProperties['color'],
    },
  },
  Scripts: React.FC,
}

const Page = (props: PageProps) => {
  const {
    colors,
    Scripts,
    spinners,
    name,
    tabIndex
  } = props;
  const [size, setSize] = useState<number>(50);
  const [thickness, setThickness] = useState<number>(100);
  const [color, setColor] = useState(colors.primary);
  const [speed, setSpeed] = useState(100);
  const [selected, setSelected] = useState(0);
  const [still, setStill] = useState(false);
  const textareaRef = React.createRef<HTMLTextAreaElement>();
  const debouncedSpeed = useDebounce(speed, 300);
  const shareUrl = 'https://adexin.github.io/spinners/?shared';
  const linkCss = css`
    outline: none;
    text-decoration: none;
  `;
  const columnCss = css`
    width: 40vw;
    display: flex;
    justify-content: space-between;
    min-height: 143px;
    align-items: center;

    @media (max-width: 1280px) {
      width: 100%;
      min-height: 80px;
    }
  `;
  const tabCss = css`
    display: inline-block;
    width: 60px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    background: ${colors.secondaryBg};

    svg {
      vertical-align: middle;
    }
  `;
  const activeTabCss = css`
    ${tabCss}
    background: none;
  `;
  const sliderThumbCss = css`
    color: #fff;
    width: 57px !important;
    height: 22px !important;
    border-radius: 12px !important;
    margin-top: -10px;
    margin-left: -28px;
  `;
  const sliderCss = css`
    &.MuiSlider-root {
      color: ${colors.text};
      margin: 18px 0;
    }

    & .MuiSlider-rail {
      margin-top: -1px;
      height: 5px;
      opacity: 1;
      background: ${colors.slider.track};
      border-radius: 5px;
    }

    & .MuiSlider-track {
      margin-top: -1px;
      height: 5px;
      background: ${colors.primary};
      border-radius: 5px;
    }

    & .MuiSlider-mark {
      display: none;
    }

    & .MuiSlider-markLabel {
      color: ${colors.text};
      font-size: 14px;
      font-weight: 600;
      opacity: 0.25;
    }

    & .MuiSlider-thumb {
      ${sliderThumbCss}
    }

    & .MuiSlider-thumb:hover, & .MuiSlider-thumb.MuiSlider-active {
      box-shadow: none;
    }
  `;

  useEffect(() => setStill(false), [debouncedSpeed]);

  return (
    <div
      css={css`
        color: ${colors.text};
        padding: 0 8vw;
        background: ${colors.bg};
        min-height: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;

          @media (max-width: 1280px) {
            flex-direction: column;
            justify-content: space-around;
          }
        `}
      >
        <div css={columnCss}
        >
          <div
            css={css`
              font-size: 60px;
              text-transform: uppercase;
              min-height: 143px;
              display: flex;
              align-items: center;

              @media (max-width: 1280px) {
                min-height: 130px;
              }
            `}
          >
            <span>
              Spinners
              <span css={css`color: ${colors.primary};`}> {name}</span>
            </span>
          </div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adexin/spinners-react"
            css={css`
              display: flex;
              align-items: center;
              color: ${colors.text};
              ${linkCss}
            `}
          >
            <GithubLogo width="43px" />
            &nbsp;&nbsp;
            <GithubText width="75px" />
          </a>
        </div>
        <div css={columnCss}>
          <nav
            css={css`
              border: 1px solid ${colors.secondaryBg};
              border-radius: 6px;
            `}
          >
            <Link css={tabIndex === 0 ? activeTabCss : tabCss} to="/">
              <ReactLogo width="40px" />
            </Link>
            <Link css={tabIndex === 1 ? activeTabCss : tabCss} to="/angular">
              <AngularLogo width="35px" />
            </Link>
          </nav>
          <div>
            <span
              css={css`
              font-size: 21px;
              line-height: 25px;
              opacity: 0.5;
              vertical-align: top;
              top: -8px;
              padding-right: 10px;
              position: relative;
            `}
            >
              created by 
            </span>
            <a css={linkCss} rel="noopener noreferrer" target="_blank" href="https://adexin.com">
              <Logo css={css`color: ${colors.text};`} width="200px" />
            </a>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;

          @media (max-width: 1280px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            border-radius: 25px;
            overflow: hidden;
            width: 40vw;
            height: 40vw;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 1px;
            margin-bottom: 30px;
            min-height: 0;
            min-width: 0;

            @media (max-width: 1280px) {
              width: 84vw;
              height: 84vw;
            }
          `}
        >
          {Object.keys(spinners).map((key, i) => {
            const Spinner = spinners[key];
            const props = {
              ...(still ? { still } : {}),
              color,
              size,
              speed,
              thickness,
            };

            return (
              <a
                key={i}
                href={`#${key}`}
                css={css`
                  background: ${colors.spinners.bg};
                  opacity: 0.85;
                  padding: 8.4%;
                  display: block;
                  outline: none;
                `}
                onClick={(e => {
                  setSelected(i);
                  e.preventDefault();
                })}
              >
                <div css={css`
                  background: ${colors.spinners.grid};
                  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.07);
                  border-radius: 20px;
                  height: 100%;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 3px solid transparent;
                  ${ selected === i ? `border-color: ${colors.spinners.border};` : '' }

                  :hover {
                    border-color: ${colors.spinners.border};
                  }
                `}
                >
                  <Spinner {...props} />
                </div>
              </a>
            );
          })}
        </div>
        <div
          css={css`
            width: 40vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 30px;

            @media (max-width: 1280px) {
              width: 84vw;
            }
          `}
          >
          <div>
            <div
              css={css`
                background: ${colors.secondaryBg};
                display: flex;
                align-items: center;
                padding: 0 42px;
                border-radius: 15px;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  width: 192px;
                  flex-shrink: 0;
                  font-size: 18px;
                  font-weight: 600;
                `}
              >
                Size - {size} px
              </div>
              <div css={css`width: 100%;`}>
                <Slider
                  css={sliderCss}
                  value={size}
                  marks={[30, 50, 70, 90].map(value => ({ value, label: `${value} px` }))}
                  onChange={(e, val) => setSize(val as number)}
                  min={30}
                  max={90}
                />
              </div>
            </div>
            <div
              css={css`
                background ${colors.secondaryBg};
                display: flex;
                align-items: center;
                padding: 0 42px;
                border-radius: 15px;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  width: 192px;
                  flex-shrink: 0;
                  font-size: 18px;
                  font-weight: 600;
                `}
              >
                Thickness - {thickness} %
              </div>
              <div css={css`width: 100%;`}>
                <Slider
                  css={sliderCss}
                  value={thickness}
                  marks={[20, 60, 100, 140, 180].map(value => ({ value, label: `${value} %` }))}
                  onChange={(e, val) => setThickness(val as number)}
                  min={20}
                  max={180}
                />
              </div>
            </div>
            <div
              css={css`
                background ${colors.secondaryBg};
                display: flex;
                align-items: center;
                padding: 0 42px;
                border-radius: 15px;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  width: 192px;
                  flex-shrink: 0;
                  font-size: 18px;
                  font-weight: 600;
                `}
              >
                Color -
                {' '}
                <span
                  css={css`
                    width: 30px;
                    height: 30px;
                    border-radius: 6px;
                    background: ${color};
                    display: inline-block;
                    vertical-align: middle;
                  `}
                >
                </span>
              </div>
              <div
                css={css`
                  width: 100%;
                  padding: 32px 0;
                `}
              >
                <ColorSlider
                  color={color}
                  onChange={color => setColor(color.hex)}
                />
              </div>
            </div>
            <div
              css={css`
                background ${colors.secondaryBg};
                display: flex;
                align-items: center;
                padding: 0 42px;
                border-radius: 15px;
                margin-bottom: 10px;
              `}
            >
              <div
                css={css`
                  width: 192px;
                  flex-shrink: 0;
                  font-size: 18px;
                  font-weight: 600;
                `}
              >
                Speed - {speed} %
              </div>
              <div css={css`width: 100%;`}>
                <Slider
                  css={sliderCss}
                  value={speed}
                  marks={[20, 60, 100, 140, 180].map(value => ({ value, label: `${value} %` }))}
                  onChange={(e, val) => {
                    const newSpeed = val as number;

                    setStill(newSpeed !== debouncedSpeed);
                    setSpeed(newSpeed);
                  }}
                  min={20}
                  max={180}
                />
              </div>
            </div>
          </div>
          <div>
            <textarea
              ref={textareaRef}
              value={`<${Object.keys(spinners)[selected]} color="${color}" size={${size}} speed={${speed}} thickness={${thickness}} />`}
              readOnly
              css={css`
                resize: none;
                width: 100%;
                height: 171px;
                background ${colors.secondaryBgVariant};
                border-radius: 15px;
                color: ${colors.text};
                padding: 17px 27px;
                outline: none;
                border: 2px solid ${colors.secondaryBg};
                box-sizing: border-box;
                margin-bottom: 10px;
                font-size: 18px;
                line-height: 22px;
                :focus {
                  border-color: #9d9d9d;
                }
              `}
            />
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <button
                onClick={() => {
                  if (textareaRef.current) textareaRef.current.select();
                  document.execCommand('copy');
                }}
                css={css`
                  background: none;
                  border: 2px solid ${colors.primary};
                  color: ${colors.text};
                  border-radius: 10px;
                  width: 215px;
                  height: 45px;
                  box-sizing: border-box;
                  font-size: 18px;
                  text-transform: uppercase;
                  outline: none;
                  cursor: pointer;

                  :active {
                    opacity: 0.6;
                  }
                `}
              >
                {'</>'} Copy Code
              </button>
              <div
                css={css`
                  * { vertical-align: middle; }
                  button {
                    margin-left: 25px;
                    outline: none;
                  }
                `}
              >
                <span
                  css={css`
                    font-size: 22px;
                  `}
                >
                  Share us: 
                </span>
                <FacebookShareButton url={shareUrl}>
                  <Facebook />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}>
                  <Twitter />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <Linkedin />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scripts />
    </div>
  );
}

export default Page;
