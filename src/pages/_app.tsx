import "src/styles/globals.css";

// import "src/styles/tailwind.css";

import type { AppProps } from "next/app";

import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

// theme
import "primeflex/primeflex.css"; // css utility
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { usePassThrough } from "primereact/passthrough";
import { classNames } from "primereact/utils";

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'
// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)
// import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App({ Component, pageProps }: AppProps) {
  //Tailwind customization
  const CustomTailwind = usePassThrough(
    Tailwind,
    {
      organizationchart: {
        table: "mx-auto my-0 border-spacing-0 border-separate",
        cell: "text-center align-top py-0 px-3",
        node: {
          className: classNames(
            "relative inline-block bg-white border border-gray-300 text-gray-600 p-5",
            "dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80" // Dark Mode
          ),
        },
        linecell: "text-center align-top py-0 px-3",
        linedown: {
          className: classNames(
            "mx-auto my-0 w-px h-[20px] bg-gray-300",
            "dark:bg-blue-900/40" //Dark Mode
          ),
        },
        lineleft: ({ context }:{ context:any }) => ({
          className: classNames(
            "text-center align-top py-0 px-3 rounded-none border-r border-gray-300",
            "dark:border-blue-900/40", //Dark Mode
            {
              "border-t": context.lineTop,
            }
          ),
        }),
        lineright: ({ context }:{ context:any }) => ({
          className: classNames(
            "text-center align-top py-0 px-3 rounded-none",
            "dark:border-blue-900/40", //Dark Mode
            {
              "border-t border-gray-300": context.lineTop,
            }
          ),
        }),
        nodecell: "text-center align-top py-0 px-3",
        nodetoggler: {
          className: classNames(
            "absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none",
            "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]" // Focus styles
          ),
        },
        nodetogglericon: "relative inline-block w-4 h-4",
      },
    },
    { mergeSections: true, mergeProps: false }
  );

  return (
    // <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>

    // <PrimeReactProvider value={{  pt: Tailwind }}>

       <PrimeReactProvider >

      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
