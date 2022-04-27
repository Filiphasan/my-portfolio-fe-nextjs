import { useEffect, useState } from "react"
import { getAboutMe } from "../services/aboutme";

export default function Home({ data }) {
  return (
    <h1 className="text-3xl font-bold underline">
      {JSON.stringify(data)}
    </h1>
  )
}

export async function getServerSideProps(context) {
  // getServerSideProps içerisinde kullandığımız service fonksiyonları Server tarafında çalışıt. Aynı fonksiyonu component içinde useEffect ile kullanırsak Client Side çalışır.
  const data = await getAboutMe();
  return {
    props: { data },
  };
}
