const HERO_CONFIG = {
  book: {
    prefix: "book",
    videoSrc: "/assets/video/hero-book.mp4",
  },
  home: {
    prefix: "home",
    videoSrc: "/assets/video/hero-home.mp4",
  },
};

export default function HeroVideo({ page = "book" }) {
  const { prefix, videoSrc } = HERO_CONFIG[page] ?? HERO_CONFIG.book;

  return (
    <section className={`${prefix}__hero`}>
      <video
        className={`${prefix}__hero-video`}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={`${prefix}__hero-overlay`} />
      <div className={`${prefix}__hero-frame`} />
      <p className={`${prefix}__hero-title-en`}>kumo ramen</p>
      <p className={`${prefix}__hero-title-jp`}>雲ラーメン</p>
    </section>
  );
}
