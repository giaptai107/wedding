import styles from "./guestbook.module.scss";
import classNames from "classnames/bind";
import { useInView } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Gift from "../gift";
import Sad from "@/app/icons/sad";
import Angry from "@/app/icons/angry";
import Love from "@/app/icons/love";

import Confetti from "react-dom-confetti";
import { useDebounce } from "@/app/helper";
import validation from "@/app/helper/validation";
import { useRouter } from "next/navigation";
import {
  configConfetti,
  guestbookSection,
  WISH_API_LINK,
} from "@/app/configs/ui";
const cx = classNames.bind(styles);

function GuestBook({ fName }) {
  const ref = useRef();
  const viewRef = useRef();
  const isInView = useInView(ref, { once: true });
  const isInViewBox = useInView(viewRef, { once: false });
  const [isOpenGift, setIsOpenGift] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [willArrive, setWillArrive] = useState(null);

  const [active, setActive] = useState(false);

  const handleChangeRadio = (type) => {
    setWillArrive(type);
  };

  const handleSendMessage = useDebounce(() => {
    const isValid = validation({ name, wish, isAttend: willArrive });

    const now = new Date();
    const last = new Date(guestbookSection.time);

    if (isValid && now.getTime() <= last.getTime()) {
      var data = { name, wish, isAttend: willArrive };
      fetch(WISH_API_LINK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setName("");
          setWish("");
          setWillArrive(null);
          setActive(true);
        })
        .catch((error) => {
          alert("Xin lỗi ! Có lỗi phía server .");
        });
    } else {
      alert("Hết thời gian chúc mừng");
    }
  }, 1300);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (active) {
        setActive(false);
      }
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [active]);

  const renderIcon = (type) => {
    return type !== null && type === "yes" ? (
      <Love className={cx("emoij")} />
    ) : type === "no" ? (
      <Sad className={cx("emoij")} />
    ) : type === "or" ? (
      <Angry className={cx("emoij")} />
    ) : (
      ""
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {/* <button
          className={cx("btn")}
          style={{
            transform: isInView ? "translateY(0)" : "translateY(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          onClick={() => setIsOpenGift(true)}
        >
          Mừng cưới
        </button> */}
      </div>
      <Confetti active={active} config={configConfetti} />

      {/* {isOpenGift && (
        <div className={cx("overlay")}> */}
      <Gift onClose={() => setIsOpenGift(false)} />
      {/* </div>
      )} */}
    </div>
  );
}

export default GuestBook;
