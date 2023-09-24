import { Container, Grid } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import React from "react";
import NFTSearch from "./components/NFTSearch";
import AddressTextArea from "./components/AddressTextArea";
import TokenInfo from "./components/TokenInfo";
import { AppContext } from "./context/AppContext";
import ConfirmAndSend from "./components/ConfirmAndSend";
import Header from "./components/Header";
import ErrorAlert from "./components/ErrorAlert";
import TransactionAlert from "./components/TransactionAlert";
import { useEagerConnect } from "./hooks/useEagerConnect";
// import { useInactiveListener } from "./hooks/useInactiveListener";
import Hero from "./components/Hero";
import Footer from "./components/Footer";



export default function Main() {
  const { active } = useWeb3React();
  const appContext = React.useContext(AppContext);
  // const triedEadger = useEagerConnect();
  useEagerConnect();
  //useInactiveListener(!triedEadger);

  return (
    <>
      <Header />
      <Container>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid container sx={{ mt: 8 }} spacing={1}>
          {active &&
            <>
              <NFTSearch />
              {appContext.nftAddress &&
                <>
                  <TokenInfo />
                  <AddressTextArea />
                  <ConfirmAndSend />
                </>
              }
            </>
          }
          <ErrorAlert />
          <TransactionAlert />
        </Grid>
        <Footer />
      </Container>
    </>
  )
}