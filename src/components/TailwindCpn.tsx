
export default function BasicDemo() {
  const className = "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3";
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-2 items-start bg-yellow-100">
      <div className={className}>01</div>
      <div className={className}>02</div>
      <div className={className}>03</div>
      <div className={className}>04</div>
      <div className={className}>05</div>
      <div className={className}>06</div>
    </div>
  );
}
