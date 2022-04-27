import { useEffect, useState } from "react"
import get from "../services";

export default function Home({data}) {
  return (
    <h1 className="text-3xl font-bold underline">
      {JSON.stringify(data)}
    </h1>
  )
}

export async function getServerSideProps(context) {
  const data = await get('aboutme/public');
  return {
    props: { data },
  };
}
