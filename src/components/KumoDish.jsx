import Image from "next/image";

export default function KumoDish({
  imageSrc = "/assets/images/chawanmushi.png",
  // Cartoon version shown on hover — sits on top of the real image
  cartoonSrc = "/assets/images/Menu/small-plates/chawanmushiCartoon.webp",
  imageAlt = "Chawanmushi",
  kanji = "茶碗蒸し",
  name = "chawanmushi",
  subtitle = "Steamed Egg Custard",
  intro = "silken and trembling, set just beyond liquid.",
  description = "A slow-steamed dashi custard poured into lacquered stone cups — scented with yuzu, layered beneath with a single piece of poached crab and a curl of enoki mushroom. Finished tableside with a thread of aged soy and a whisper of smoked bonito oil.",
  outro = "still. quiet. precise.",
  notes = "Served warm. Contains shellfish, egg, fish.",
  price = "£8",
}) {
  return (
    <>
      <div className="home__dish">
        <div className="home__dish-image-wrap">
          {/* Real photo — always visible */}
          <Image
            fill
            className="home__dish-image"
            src={imageSrc}
            alt={imageAlt}
            sizes="(max-width: 1100px) 90vw, 40vw"
          />
          {/* Cartoon — stacked on top, fades in on hover via CSS */}
          <Image
            fill
            className="home__dish-image home__dish-image--cartoon"
            src={cartoonSrc}
            alt=""
            aria-hidden="true"
            sizes="(max-width: 1100px) 90vw, 40vw"
          />
        </div>
        <p className="home__dish-kanji">{kanji}</p>
      </div>

      <div className="home__description">
        <p>
          <span className="home__description-name">{name}</span>
          <span> - {subtitle}</span>
        </p>
        <p>{intro}</p>
        <p>{description}</p>
        <p>{outro}</p>
        <p>{notes}</p>
        <p className="home__dish-price">{price}</p>
      </div>
    </>
  );
}
