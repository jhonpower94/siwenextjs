"use client";
import {
  getAddressFromMessage,
  getChainIdFromMessage,
  verifySignature,
} from "@reown/appkit-siwe";
import styles from "./page.module.css";
import { projectId } from "./config/index";

export default function Home() {
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
    <main className={styles.main}>
      <appkit-button />
      <button onClick={handleVerMsg}>Verify</button>
    </main>
  );
}
