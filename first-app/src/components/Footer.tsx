export default function Footer() {
  return (
    <footer className=" flex flex-col justify-center items-center gap-2">
      <p className="text-2xl text-[#deb887]">we are open, place your order!</p>
      <button className="bg-[#deb887] text-white py-3 px-5 text-lg rounded-3xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-105">
        order now
      </button>
    </footer>
  );
}
