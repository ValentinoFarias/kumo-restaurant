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

          {/* Footer — contact columns + big brand row */}
          <KumoFooter />
        </div>
      </div>
    </div>
  );m
}
