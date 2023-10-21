import MaterialReactTableCpn from "src/components/MaterialReactTableCpn";
import MenuCpn from "src/components/MenuCpn";

export default function PrimeTable() {
  return (
    <>
      <div className="container-tcd">
        <h1>PrimeTable</h1>
        <MenuCpn></MenuCpn>

        <MaterialReactTableCpn></MaterialReactTableCpn>
      </div>
    </>
  );
}
