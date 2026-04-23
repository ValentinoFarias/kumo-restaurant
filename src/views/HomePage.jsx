import KumoDish from "../components/KumoDish";
import KumoFooter from "../components/KumoFooter";
import HeroVideo from "../components/HeroVideo";
import KumoMenu from "../components/KumoMenu";
import MenuHeader from "../components/MenuHeader";
import NavBar from "../components/NavBar";

/*
 * HomePage — full-viewport hero with a scaled desktop canvas below it.
 *
 * Structure uses BEM class names; responsive behavior lives entirely in style.css:
 *   - Hero:        always fills the viewport like a background-cover video
 *   - Desktop:     menu/footer content sits on a centered 1440px canvas
 *   - Small sizes: content below the hero stacks in normal document flow
 *
 * Overlapping decorative elements (JP/EN text pairs) still use position: absolute
 * inside a relative group wrapper — that's the only way to make them overlap.
 */

export default function HomePage() {
  return (
    <div className="home">
      <HeroVideo page="home" />
      <NavBar page="home" />

      <div className="home__canvas-shell">
        <div className="home__canvas">
          {/* Menu header — JP sits underneath, EN overlaid on top.
              id="menu-header" is the scroll target for the navbar menu link. */}
          <MenuHeader />

          {/* Menu + dish + description — stacked on mobile, grid-positioned on the desktop canvas */}
          <div className="home__menu-block">
            <KumoMenu />
            <KumoDish />
          </div>

          {/* Footer — contact columns + big brand row */}
          <KumoFooter />
        </div>
      </div>
    </div>
  );
}
