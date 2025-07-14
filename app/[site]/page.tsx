"use client";
import { Avatar, AvatarGroup, Container, Stack } from "@mui/joy";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import {
  getAddressFromMessage,
  getChainIdFromMessage,
  verifySignature,
} from "@reown/appkit-siwe";
import { projectId } from "../config/index";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { sitedata$ } from "../redux/action";
import { legacy_createStore as createStore } from "redux";
import { allreducer } from "../redux/reducer";

const customTheme = extendTheme({ defaultColorScheme: "dark" });

export const store = createStore(allreducer);
store.subscribe(() => console.log(store.getState()));

export default function Home({ fetch, params }) {
  const { site } = params;
  var decodeUrl = atob(site);

  //  console.log(decodeUrl);

  useEffect(() => {
    store.dispatch(sitedata$({ url: decodeUrl }));
  });

  const message = atob(
    "bG9jYWxob3N0OjMwMDAgd2FudHMgeW91IHRvIHNpZ24gaW4gd2l0aCB5b3VyIEV0aGVyZXVtIGFjY291bnQ6CjB4MjVlOTk0ZGE3NDMyMzc0MDI0N2I0NjlDOTY2MzJiMDUzODI4YTREOAoKUGxlYXNlIHNpZ24gd2l0aCB5b3VyIGFjY291bnQKClVSSTogaHR0cDovL2xvY2FsaG9zdDozMDAwClZlcnNpb246IDEKQ2hhaW4gSUQ6IDEKTm9uY2U6IDMzMzY5NzZlZmE5MmMxOTc1NTA0YjAzNjdiNjE4NGEyZjFmNWE5NzIxYjViY2YxZWYzYzI3MzNkZTAzNzY2MDEKSXNzdWVkIEF0OiAyMDI1LTAzLTA1VDA2OjMyOjU0LjU1OFo="
  );
  const chainId = getChainIdFromMessage(message);
  const address = getAddressFromMessage(message);
  const signature =
    "0x5d77f6622a0debfa1ad99562d838e322c7268d2d20fa0e475ce7423396ca2248759367d8b98d2fea2ca061c120ad54f57e9b75a6f273d0a8654b759a01fcf2f31b";

  const handleVerMsg = async () => {
    const isValid = await verifySignature({
      address,
      message,
      signature,
      chainId,
      projectId,
    });
    // return isValid;
    console.log(isValid);
    console.log(address);
  };

  return (
    <Provider store={store}>
      <CssVarsProvider
        defaultMode="dark"
        theme={customTheme}
        disableTransitionOnChange
      >
        <CssBaseline />
        <Container maxWidth="sm">
          <Stack direction={"column"} spacing={4} alignItems={"center"} mt={10}>
            <AvatarGroup>
              <Avatar size="lg" alt="Remy Sharp" color="primary" variant="soft">
                <span className="material-symbols-outlined">cable</span>
              </Avatar>
              <Avatar size="lg" alt="Travis Howard" src="./walletconnect.png" />
            </AvatarGroup>
            <appkit-button />
          </Stack>
        </Container>
      </CssVarsProvider>
    </Provider>
  );
}

/*
<main className={styles.main}>
      <appkit-button />
      <button onClick={handleVerMsg}>Verify</button>
    </main>


    const store = createStore(allreducer);
//store.subscribe(() => console.log(store.getState()));

<Provider store={store}>
    */
