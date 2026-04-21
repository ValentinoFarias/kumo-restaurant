import "@/assets/css/style.css";

export const metadata = {
  title: "Kumo Ramen",
  description: "Kumo Ramen — Bristol",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
