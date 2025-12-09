import NodaIcon from "../assets/noda-icon.svg";

export default function SimpleHeaderInterface() {
  return (
    <header
      className="
        w-full h-[72px]
        bg-white
        flex items-center
      "
    >
      <div className="w-full flex items-center px-8 md:px-8">
        <img src={NodaIcon} alt="Noda Technologies" className="h-12 w-auto ml-5" />
      </div>
    </header>
  );
}
