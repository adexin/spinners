/** @jsx jsx */
import React, { useState, useEffect, CSSProperties } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import { css, jsx } from '@emotion/core';
import { RGBColor, MaterialPicker } from 'react-color'
import Slider from '@material-ui/core/Slider';

import AlphaSlider from './AlphaSlider';
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
  colors: {
    bg: CSSProperties['background'],
    secondaryBg: CSSProperties['color'],
    secondaryBgVariant: CSSProperties['background'],
    logoText: CSSProperties['color'],
    text: CSSProperties['color'],
    primary: CSSProperties['color'],
    slider: {
      track: CSSProperties['background'],
    },
    spinners: {
      bg: CSSProperties['background'],
      grid: CSSProperties['background'],
      gridHover: CSSProperties['background'],
      border: CSSProperties['color'],
      secondary: CSSProperties['color'],
    },
  },
  name: string,
  Scripts: React.FC,
  spinners: { [key: string]: any },
  styles: {
    tabs: string[],
    slider: {
      legend: {
        opacity: CSSProperties['opacity'],
      },
    },
  },
  hrefs: {
    github: string,
  },
  tabIndex: number,
  usageCode: Function,
}

const noSecondaryColorIndexes = [3, 4, 5, 6];

const Page = (props: PageProps) => {
  const {
    colors,
    name,
    styles,
    Scripts,
    spinners,
    hrefs,
    tabIndex,
    usageCode,
  } = props;
  const [size, setSize] = useState(50);
  const [thickness, setThickness] = useState(100);
  const [color, setColor] = useState(colors.primary);
  const [secondaryColor, setSecondaryColor] = useState(colors.spinners.secondary);
  const [speed, setSpeed] = useState(100);
  const [selected, setSelected] = useState(0);
  const [still, setStill] = useState(false);
  const textareaRef = React.createRef<HTMLTextAreaElement>();
  const debouncedSpeed = useDebounce(speed, 300);
  const colorToCss = (color: RGBColor) => `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  const shareUrl = `${window.location.href}?shared`;
  const [showMaterialPicker, setShowMaterialPicker] = useState(false);
  const [showMaterialPicker2, setShowMaterialPicker2] = useState(false);
  const isSpinnerWebComponent = name !== 'React';

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
      margin: 18px 3px;
    }

    & .MuiSlider-rail {
      margin-top: -1px;
      height: 5px;
      opacity: 1;
      background: ${colors.slider.track};
      border-right: 1px solid ${colors.slider.track};
      border-radius: 5px;
    }

    & .MuiSlider-track {
      margin-top: -1px;
      height: 5px;
      background: ${colors.primary};
      border-radius: 5px;
    }

    & .MuiSlider-mark {
      display: none;const [color, setColor] = useState<string>(colors.primary);

    }

    & .MuiSlider-markLabel {
      color: ${colors.text};
      font-size: 14px;
      font-weight: 600;
      opacity: ${styles.slider.legend.opacity};
    }

    & .MuiSlider-thumb {
      ${sliderThumbCss}
    }

    & .MuiSlider-thumb:hover, & .MuiSlider-thumb.MuiSlider-active {
      box-shadow: none;
    }
  `;

  useEffect(() => setStill(false), [debouncedSpeed]);
  useEffect(() => setColor(colors.primary), [colors.primary]);

  return (
    <div
      css={css`
        color: ${colors.text};
        padding: 0 8vw;
        background: ${colors.bg};
        min-height: 100%;
      `}
    >
      <Helmet>
        <meta name="theme-color" content={(colors.bg || '').toString()} />
        <meta
          name="description"
          content={`Lightweight SVG/CSS spinners for ${name}`}
        />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/share-${name.toLowerCase()}.png`} />
        <title>Spinners {name}</title>
      </Helmet>
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
              font-size: 40px;
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
            href={hrefs.github}
            css={css`
              display: flex;
              align-items: center;
              color: ${colors.logoText};
              ${linkCss}
            `}
          >
            <GithubLogo width="34px" />
            &nbsp;&nbsp;
            <GithubText width="65px" />
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
              <ReactLogo css={css`${styles.tabs[0]}`} width="40px" />
            </Link>
            <Link css={tabIndex === 1 ? activeTabCss : tabCss} to="/angular">
              <AngularLogo css={css`${styles.tabs[1]}`} width="35px" />
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
              <Logo css={css`color: ${colors.text};`} width="139px" />
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
              color,
              size,
              speed: debouncedSpeed,
              thickness,
              ...(still ? { still } : {}),
              ...(!noSecondaryColorIndexes.includes(i)
                ? { [isSpinnerWebComponent ? 'secondary-color' : 'secondaryColor']: secondaryColor }
                : {}
              ),
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
                    background-color: ${colors.spinners.gridHover};
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
              <div css={css`width: 100%; padding-right: 1px;`}>
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
              <div css={css`width: 100%; padding-right: 1px;`}>
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
                Speed - {speed} %
              </div>
              <div css={css`width: 100%; padding-right: 1px;`}>
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
                <span css={css`
                  width: 70px;
                  white-space: nowrap;
                  display: inline-block;
                `}>Color -</span>
                {' '}
                <span
                  onClick={() => setShowMaterialPicker(true)}
                  css={css`
                    width: 30px;
                    height: 30px;
                    border-radius: 6px;
                    background: ${color};
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;
                  `}
                />
                { showMaterialPicker
                  ? (
                    <div
                      css={css`
                        position: absolute;
                        zIndex: 2;
                      `}
                    >
                      <div
                        css={css`
                          position: fixed;
                          top: 0px;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          width: 100%;
                          height: 100%;
                        `}
                        onClick={() => setShowMaterialPicker(false)}
                      />
                      <MaterialPicker
                        color={color}
                        onChange={color => setColor(colorToCss(color.rgb))}
                      />
                    </div>
                  )
                  : null
                }
              </div>
              <div
                css={css`
                  width: 100%;
                  padding: 20px 0;
                `}
              >
                <ColorSlider
                  color={color}
                  onChange={color => setColor(colorToCss(color.rgb))}
                />
                <div
                  css={css`
                    width: 100%;
                    padding: 20px 0 0 0;
                  `}
                >
                  <AlphaSlider
                    color={color}
                    onChange={color => setColor(colorToCss(color.rgb))}
                  />
                </div>
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
                <span css={css`
                  width: 70px;
                  white-space: nowrap;
                  display: inline-block;
                `}>Color 2 -</span>
                {' '}
                <span
                  onClick={() => setShowMaterialPicker2(true)}
                  css={css`
                    width: 30px;
                    height: 30px;
                    border-radius: 6px;
                    background: ${secondaryColor};
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;
                  `}
                />
                { showMaterialPicker2
                  ? (
                    <div
                      css={css`
                        position: absolute;
                        zIndex: 2;
                      `}
                    >
                      <div
                        css={css`
                          position: fixed;
                          top: 0px;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          width: 100%;
                          height: 100%;
                        `}
                        onClick={() => setShowMaterialPicker2(false)}
                      />
                      <MaterialPicker
                        color={secondaryColor}
                        onChange={color => setSecondaryColor(colorToCss(color.rgb))}
                      />
                    </div>
                  )
                  : null
                }
              </div>
              <div
                css={css`
                  width: 100%;
                  padding: 20px 0;
                `}
              >
                <ColorSlider
                  color={secondaryColor}
                  onChange={color => setSecondaryColor(colorToCss(color.rgb))}
                />
                <div
                  css={css`
                    width: 100%;
                    padding: 20px 0 0 0;
                  `}
                >
                  <AlphaSlider
                    color={secondaryColor}
                    onChange={color => setSecondaryColor(colorToCss(color.rgb))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <textarea
              ref={textareaRef}
              value={usageCode(
                Object.keys(spinners)[selected],
                size,
                thickness,
                speed,
                color,
                noSecondaryColorIndexes.includes(selected) ? undefined : secondaryColor
              )}
              readOnly
              css={css`
                resize: none;
                width: 100%;
                height: 127px;
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
                font-family: Lato;
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
