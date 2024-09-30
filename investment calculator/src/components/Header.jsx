import  logo  from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header>
      <div id="header">
        <img src={logo} alt="investment-logo" />
        <h1>Investment Calculator</h1>
      </div>
    </header>
  );
}
