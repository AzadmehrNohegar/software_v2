import clsx from "clsx";
import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <header className="h-20 w-full border-b border-b-white border-opacity-10">
        <div className="flex items-center h-full container-xxl px-8 gap-x-1">
          <Link to="/" className="text-white text-[13px] font-light me-6">
            Software Gestionale
          </Link>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost font-normal text-white hover:bg-white hover:bg-opacity-10 text-[13px] py-2 h-10 btn-sm hidden sm:inline-flex",
                isActive && "bg-white bg-opacity-10"
              )
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/personal-info"
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost font-normal text-white hover:bg-white hover:bg-opacity-10 text-[13px] py-2 h-10 btn-sm hidden sm:inline-flex",
                isActive && "bg-white bg-opacity-10"
              )
            }
          >
            Personal Info
          </NavLink>
          <NavLink
            to="/esigenze-formative"
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost font-normal text-white hover:bg-white hover:bg-opacity-10 text-[13px] py-2 h-10 btn-sm hidden sm:inline-flex",
                isActive && "bg-white bg-opacity-10"
              )
            }
          >
            Esigenze Formative
          </NavLink>
          <NavLink
            to="/standard"
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost font-normal text-white hover:bg-white hover:bg-opacity-10 text-[13px] py-2 h-10 btn-sm hidden sm:inline-flex",
                isActive && "bg-white bg-opacity-10"
              )
            }
          >
            Standard
          </NavLink>
          <NavLink
            to="/gestione-standard"
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost font-normal text-white hover:bg-white hover:bg-opacity-10 text-[13px] py-2 h-10 btn-sm hidden sm:inline-flex",
                isActive && "bg-white bg-opacity-10"
              )
            }
          >
            Gestione Standard
          </NavLink>
          <NavLink
            to="/storico-formazione"
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost font-normal text-white hover:bg-white hover:bg-opacity-10 text-[13px] py-2 h-10 btn-sm hidden sm:inline-flex",
                isActive && "bg-white bg-opacity-10"
              )
            }
            onClick={(e) => e.preventDefault()}
          >
            Storico formazione
          </NavLink>
          <NavLink
            to="/machine"
            end
            className={({ isActive }) =>
              clsx(
                "btn btn-ghost font-normal text-white hover:bg-white hover:bg-opacity-10 text-[13px] py-2 h-10 btn-sm hidden sm:inline-flex",
                isActive && "bg-white bg-opacity-10"
              )
            }
          >
            Machine
          </NavLink>
        </div>
      </header>
      <main className="min-h-[300px]">
        <Outlet />
      </main>
      <footer className="container-xxl py-2">
        <span className="text-[13px] text-gray-300">2021©</span>{" "}
        <a
          href="https://keenthemes.com"
          target="_blank"
          className="text-gray-800 hover:text-blue-500 transition-colors text-[13px]"
        >
          Stefano
        </a>
      </footer>
    </Fragment>
  );
}

export { Layout };
