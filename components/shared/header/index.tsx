import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constant";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start link-dark">
            <Image
              src="/images/logo.svg"
              alt={APP_NAME}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lgBlock font-bold text-2xl ml-3">
                {APP_NAME} 
            </span>
          </Link>

        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
