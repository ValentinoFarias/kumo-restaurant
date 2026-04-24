/*
 * SectionDivider.jsx
 * Decorative divider between page sections.
 * Loads the SVG from /public as an image so it renders without any path issues.
 */

export default function SectionDivider() {
  return (
    <img
      src="/assets/images/divider-right.svg"
      alt=""
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}
