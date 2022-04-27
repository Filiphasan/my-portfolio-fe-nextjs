import { useEffect, useState } from "react"
import get from "../services";

export default function Home() {
  const [data, setData] = useState({})
  useEffect(() => {
    get('aboutme/public')
  }, [])


  return (
    <h1 className="text-3xl font-bold underline">
      {JSON.stringify(data)}
    </h1>
  )
}
