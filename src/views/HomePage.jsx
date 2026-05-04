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

export default function HomePage({ menu }) {
  return (
    <div className="home">
      <HeroVideo page="home" />
      <NavBar page="home" />

      <div className="home__canvas-shell">
        <div className="home__canvas">
          {/* MenuSection renders MenuHeader + accordion nav + dish card */}
          <MenuSection menu={menu} />

          {/* Decorative divider between the menu and the footer */}
          <img
            src="/assets/images/dividerfinal.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="home__section-divider"
          />

          {/* Footer — contact columns + big brand row */}
          <KumoFooter />
        </div>
      </div>
    </div>
  );
}
