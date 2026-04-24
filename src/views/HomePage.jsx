import KumoFooter from "../components/KumoFooter";
import HeroVideo from "../components/HeroVideo";
import NavBar from "../components/NavBar";
import MenuSection from "../components/MenuSection";

/*
 * HomePage — full-viewport hero with a scaled desktop canvas below it.
 *
 * MenuSection owns the selected-dish state and renders both KumoMenu
 * and KumoDish internally, so this page stays a server component.
 */

export default function HomePage() {
  return (
    <div className="home">
      <HeroVideo page="home" />
      <NavBar page="home" />

      <div className="home__canvas-shell">
        <div className="home__canvas">
          {/* MenuSection renders MenuHeader + accordion nav + dish card */}
          <MenuSection />

          {/* Decorative divider between the menu and the footer */}
          <img
            src="/assets/images/divider-right.svg"
            alt=""
            aria-hidden="true"
            className="home__section-divider"
            style={{
              position: "absolute",
              top: "870px",
              left: "0",
              width: "1440px",
              height: "auto",
              display: "block",
              zIndex: 1,
            }}
          />

          {/* Footer — contact columns + big brand row */}
          <KumoFooter />
        </div>
      </div>
    </div>
  );
}
