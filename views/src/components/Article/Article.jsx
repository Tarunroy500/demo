import React from "react";
import { useSelector } from "react-redux";
import Roundedbtn from "../Ui/Roundedbtn";
import module from "./Article.module.css";
const Article = ({ coverWidth, coverTop, posterWidth, width }) => {
  //Articles logic
  const { isLoggedIn } = useSelector((store) => store.user);
  return (
    <>
      <div className={`${module.wrapper}`}>
        <div className={`${module.articles}`} style={{ width: width }}>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
          <div className={`${module.article}`}>
            <div className="lef">
              <div className={`${module.by_who}`}>
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*jCzRCTKnkeRetfJb-k2lTw.png"
                  alt=""
                />
                <h5>Truly*AdventurousT*A Team</h5>
              </div>
              <div className={`${module.content}`}>
                <h2>Victory</h2>
                <h5>
                  Eleven-year-old Victoria has her sights set on playing Little
                  League with the boys. She goes through tryouts and is told
                  to..
                </h5>

                <div className={`${module.footer}`}>
                  <h6>Jan . 24 min read . Longform</h6>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="lz"
                  >
                    <path
                      d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                      fill="#292929"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={`${module.post_potser}`}
              style={{ width: posterWidth }}
            >
              <img
                width={coverWidth}
                style={{ marginTop: coverTop }}
                src="https://miro.medium.com/fit/c/200/134/1*ssYVCq-xVknzq4LWwzxlDA.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {isLoggedIn ? (
          ""
        ) : (
          <div className={`${module.categories_links}`}>
            <h4>Discover more of what matters to you</h4>
            <div className={`${module.links}`}>
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="7vw"
                inRound="Programming"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="7vw"
                inRound="Data Science"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="7vw"
                inRound="Technology"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="9vw"
                inRound="Self Improvement"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="7vw"
                inRound="Writing"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="8vw"
                inRound="Relationships"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="10vw"
                inRound="Machine Learning"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="7vw"
                inRound="Productivity"
                color="grey"
                border="1px solid #cecece"
              />
              <Roundedbtn
                borderRadius="2px"
                backgroundColor="white"
                width="7vw"
                inRound="Politics"
                color="grey"
                border="1px solid #cecece"
              />
            </div>
            <br />
            <hr />
            <div className={`${module.options}`}>
              <h5>Help</h5>
              <h5>Status</h5>
              <h5>Writers</h5>
              <h5>Blog</h5>
              <h5>Careers</h5>
              <h5>Privacy</h5>
              <h5>Terms</h5>
              <h5>About</h5>
              <h5>Text to speech</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Article;
