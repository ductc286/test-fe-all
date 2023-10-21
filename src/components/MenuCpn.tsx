import Link from "next/link";

export default function MenuCpn() {
  return (
    <div style={{display: "flex", gap: "20px"}}>
      <Link href={"/"}>Trang chủ</Link>
      <Link href={"/prime-table"}>prime-table</Link>
      <Link href={"/tailwind"}>tailwind</Link>
      <Link href={"/prime-other"}>prime-other</Link>
      <Link href={"/material-react-table"}>material-react-table</Link>
    </div>
  );
}
