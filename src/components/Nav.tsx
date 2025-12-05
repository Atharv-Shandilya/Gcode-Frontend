import { Bell, HomeIcon, SearchIcon, TvMinimal } from "lucide-react";
import logoIcon from "../assets/logo.svg";
export default () => {
  return (
    <header className=" bg-primary text-white flex items-center py-4 px-5 relative justify-between">
      <section className="">
        <img src={logoIcon} />
      </section>
      <nav className="absolute left-1/2 transform -translate-x-1/2 text-center ">
        <ul className="[&>li>a]:flex [&>li>a>p]:ml-2 flex [&>li]:mr-5 ">
          <li>
            <a>
              <HomeIcon />
              <p>My Dashboard</p>
            </a>
          </li>
          <li>
            <a>
              <SearchIcon />
              <p>Explore</p>
            </a>
          </li>
          <li>
            <a>
              <TvMinimal />
              <p>My Bookings</p>
            </a>
          </li>
        </ul>
      </nav>

      <section className="flex items-center">
        <Bell className="mr-6" />
        <article className="flex ">
          <section className="bg-white rounded-full text-black flex items-center justify-center w-10 h-10 mr-4">
            SS
          </section>
          <search>
            <h2 className="text-lg">Shashwat Shandilya</h2>
            <p className="text-sm">Domain Expert</p>
          </search>
        </article>
      </section>
    </header>
  );
};
