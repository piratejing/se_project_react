import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>Developed by Alan Shieh</div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
}
