// GifArabibi.jsx
import Image from "next/image";
import css from "./GifArabibi.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const gifItems = [
  "/assests/img/casestudy/arabibi/gif/conference.gif",
  "/assests/img/casestudy/arabibi/gif/loop.gif",
  "/assests/img/casestudy/arabibi/gif/shield.gif",
  "/assests/img/casestudy/arabibi/gif/badge.gif",
  "/assests/img/casestudy/arabibi/gif/stock.gif",
  "/assests/img/casestudy/arabibi/gif/fire.gif",
  "/assests/img/casestudy/arabibi/gif/heart.gif",
  "/assests/img/casestudy/arabibi/gif/investor.gif",
  "/assests/img/casestudy/arabibi/gif/start.gif",
];

function GifArabibi() {
  return (
    <section className={css.wrapper}>
      <ContentWidth>
        <div className={css.heading}>
          <h2>Animated GIF icons</h2>

          <p>
            Warm, playful, and trustworthy — animated GIF icons, soft colour
            palettes, and a friendly typography system that works equally well
            for children&apos;s content and professional tutor profiles.
          </p>
        </div>

        <div className={css.gifContainer}>
          {gifItems.map((item, index) => (
            <div className={css.gifItem} key={index}>
              <Image
                src={item}
                width={120}
                height={120}
                alt={`gif-${index}`}
                className={css.gifImage}
              />
            </div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
}

export default GifArabibi;
