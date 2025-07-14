import "@fontsource/inter";
import { headers } from "next/headers";
import "./globals.css";

import { cookieToInitialState } from "wagmi";

import { wagmiAdapter } from "./config";
import AppKitProvider from "./context";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig,
    headers().get("cookie")
  );

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0&icon_names=cable"
        />
      </head>
      <body>
        <AppKitProvider initialState={initialState}>
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}
