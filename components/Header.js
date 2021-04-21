import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="Home" Icon={HomeIcon} />
        <HeaderItems title="Thundering" Icon={LightningBoltIcon} />
        <HeaderItems title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItems title="Collection" Icon={CollectionIcon} />
        <HeaderItems title="Search" Icon={SearchIcon} />
        <HeaderItems title="User" Icon={UserIcon} />
      </div>
      <Image src="/assets/hulu.png" width={100} height={35} />
    </header>
  );
};

export default Header;
