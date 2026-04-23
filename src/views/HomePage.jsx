import KumoFooter from "../components/KumoFooter";
import HeroVideo from "../components/HeroVideo";
import MenuHeader from "../components/MenuHeader";
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
          {/* Menu header — scroll target for the navbar "menu" link */}
          <MenuHeader />

          {/* Accordion nav + dish card, connected via shared state */}
          <MenuSection />

          {/* Footer — contact columns + big brand row */}
          <KumoFooter />
        </div>
      </div>
    </div>
  );
}
