import MenuCpn from "src/components/MenuCpn";
import PrimeTableCpn from "src/components/PrimeTableCpn";

export default function PrimeTable() {
  return (
    <>
      <div className="container-tcd">
        <h1>PrimeTable</h1>
        <MenuCpn></MenuCpn>

        <PrimeTableCpn></PrimeTableCpn>
      </div>
    </>
  );
}
