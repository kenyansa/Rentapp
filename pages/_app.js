import Router from "next/router";
import {ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "..components/Layout";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
