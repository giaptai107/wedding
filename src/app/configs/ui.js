import images from "../images";

const WISH_API_LINK = ""; // use mock api
const cdnLink =
  "https://res.cloudinary.com/do6sozxbo/image/upload/f_auto,q_auto/v1/wedding5";

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    title: "Thành Hôn",
    time: {
      date: "25/07",
      year: "2026",
      time: "11:00",
      full: "Thành Hôn: Thứ Bảy, Ngày 25 Tháng 07 năm 2026",
      full2: "Vu Quy: Chủ Nhật, Ngày 19 Tháng 07 năm 2026",
    },
    address: "Nhà Hàng Nam Châu Hội Quán, 04 Kim Long (hoặc 07 Vạn Xuân), thành phố Huế",
    street: "Nhà Hàng Nam Châu Hội Quán, 04 Kim Long (hoặc 07 Vạn Xuân), thành phố Huế",
    phone: "",
    posision: "bottom left",
  },
  {
    title: "Vu Quy",
    time: {
      date: "19/07",
      year: "2026",
      time: "16:00",
      full: "Thành Hôn: Thứ Bảy, Ngày 25 Tháng 07 năm 2026",
      full2: "Vu Quy: Chủ Nhật, Ngày 19 Tháng 07 năm 2026",
    },
    address: "Nhà Hàng Mê Kông, 66 Lê Duẩn,  Phường Đông Hà, Quảng Trị",
    street: "Nhà Hàng Mê Kông, 66 Lê Duẩn,  Phường Đông Hà, Quảng Trị",
    phone: "",
    posision: "bottom left",
  },
];

// December
const daysInMonth = [
  {
    title: "mon",
    days: [29, 6, 13, 20, 27, 0],
  },
  {
    title: "tue",
    days: [30, 7, 14, 21, 27, 0],
  },
  {
    title: "wed",
    days: [1, 8, 15, 22, 29, 0],
  },
  {
    title: "thu",
    days: [2, 9, 16, 23, 30, 0],
  },
  {
    title: "fri",
    days: [3, 10, 17, 24, 31, 0],
  },
  {
    title: "sat",
    days: [4, 11, 18, 25, 1, 0],
  },
  {
    title: "sun",
    days: [5, 12, 19, 26, 2, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage:
    "https://res.cloudinary.com/duo7zuvde/image/upload/v1782866993/DSC_5338_cgymcd.jpg",
  brideFirstLetter: "QT",
  groomFirstLetter: "GT",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải tìm một người hoàn hảo, mà là cùng nhau tạo nên một tình yêu hoàn hảo",
  profiles: [
    {
      title: "bride",
      name: "Phạm Lê Quế Trâm",
      avatar: `https://res.cloudinary.com/duo7zuvde/image/upload/v1782404804/DSC_6223_unmorl.jpg`,
      images: [`https://res.cloudinary.com/duo7zuvde/image/upload/v1782400475/DSC_6605_uii7zx.jpg`, `https://res.cloudinary.com/duo7zuvde/image/upload/v1782400454/DSC_6601_hmiwce.jpg`],
    },
    {
      title: "groom",
      name: "Trương Quang Giáp Tài",
      avatar: `https://res.cloudinary.com/duo7zuvde/image/upload/v1782404339/DSC_6265_mfmgb6.jpg`,
      images: [`https://res.cloudinary.com/duo7zuvde/image/upload/v1782404365/DSC_6252_et3jbi.jpg`, `https://res.cloudinary.com/duo7zuvde/image/upload/v1782404284/DSC_6268_pnoa6a.jpg`],
    },
  ],
};

// invitation section

const invitationSection = {
  imgs: [`${cdnLink}/e7`, `${cdnLink}/e4`, `${cdnLink}/e6`],
  activeDay: 25,
  activeDay2: 19,
};

// album section

const albumSection = {
  images: [
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870076/e1_hmqngs.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870075/e2_zxkysj.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870075/e3_znnv2l.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870075/e4_w6fb6m.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870075/e5_ml3iwm.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782869022/intro_dutrxd.jpg`,
  ],
};

// guestbook section

const guestbookSection = {
  image: `${cdnLink}/e5`,
  time: "12/12/2024",
};

// gift section

const giftSection = {
  image:
    "https://res.cloudinary.com/duo7zuvde/image/upload/v1782870574/guest_vh2bx5.jpg",
  brideBank: {
    name: "Phạm Lê Quế Trâm",
    bankName: "BIDV ",
    qr: images.qr2.default.src,
    bankNumber: "5400595061",
  },
  groomBank: {
    name: "Trương Quang Giáp Tài",
    bankName: "Vietcombank ",
    qr: images.qr.default.src,
    bankNumber: "9796565695",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 25,
    month: 7,
  },
};

// final section

const finalSection = {
  images: [
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870780/DSC_5552_vneuyo.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870778/DSC_5708_dzsqus.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782870781/DSC_5683_vrkwuc.jpg`,
    `https://res.cloudinary.com/duo7zuvde/image/upload/v1782866993/DSC_5338_cgymcd.jpg`,
  ],
};

// Album Page

const albumPage = {
  topImage: `${cdnLink}/aland3`,
  bottomImage: `${cdnLink}/aland2`,
  mainImage: `${cdnLink}/e1`,
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: `${cdnLink}/e1`,
      },

      {
        id: 2,
        img: `${cdnLink}/e4`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: `${cdnLink}/e3`,
      },
      {
        id: 4,
        img: `${cdnLink}/e5`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: `${cdnLink}/e6`,
      },
      {
        id: 6,
        img: `${cdnLink}/e7`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: `${cdnLink}/e8`,
      },
      {
        id: 8,
        img: `${cdnLink}/groom3`,
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: `${cdnLink}/e9`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: `${cdnLink}/e13`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: `${cdnLink}/e10`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: `${cdnLink}/e11`,
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: `${cdnLink}/e15`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: `${cdnLink}/e14`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: `${cdnLink}/e16`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: `${cdnLink}/e17`,
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Wedding GT - QT | Kính Mời",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/land.jpg",
  },

  wish: {
    title: "Tất cả lời chúc dành cho Tài - Trâm",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/am11.jpg",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730394150/wedding5_1/a3.jpg",
  },
  album: {
    title: "Album của Tài - Trâm",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/final3.jpg",
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
