"use client";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Invitation from "@/app/component/invitation";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Profile from "@/app/component/profile";
import GuestBook from "@/app/component/guestbook";
import Album from "@/app/component/album";
import Intro from "@/app/component/intro/intro";
import { animateScroll as scroll } from "react-scroll";
import PaperText from "@/app/component/paperText/paperText";
import Footer from "@/app/component/footer";
import Final from "@/app/component/final";
import Game from "@/app/component/game";
import { MultiContext } from "@/app/context";
import Disk from "@/app/component/disk";
import Timer from "@/app/component/timer";

const cx = classNames.bind(styles);
export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Bạn";

  const [isOpen, setIsOpen] = useState(false);

  const { dispatch } = useContext(MultiContext);

  useEffect(() => {
    if (searchParams.get("fbclid")) {
      window.location.href = window.location.origin + "/" + "?name=" + name;
    }
  }, [searchParams]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    dispatch({ type: "TURN_ON" });
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen == true) {
      let pageHeight = window.innerHeight;
      scroll.scrollTo(pageHeight);
    }
  }, [isOpen]);
  return (
    <div className={cx("wrapper")}>
      <Disk />
      <Intro handleOpen={handleOpenInvitation} name={name} />
      {isOpen && (
        <>
          <Profile />
          <PaperText>
            “Chúng ta chọn nhau không phải vì cuộc sống luôn dễ dàng, mà vì biết rằng dù khó khăn hay bình yên, vẫn luôn có một người cùng mình bước tiếp.”
          </PaperText>
          <Invitation />
          <Album name={name}></Album>
          <GuestBook fName={name} />
          <Timer />
          <Final />
          <Footer />
        </>
      )}
    </div>
  );
}
