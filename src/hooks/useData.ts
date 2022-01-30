import { useState, useEffect } from "react"
import { DataTypes } from "../types/Types";

export const useData = (): [DataTypes[], React.Dispatch<React.SetStateAction<DataTypes[]>>, boolean] => {
  const [data, setData] = useState<DataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true)
    const res = await fetch(process.env.PUBLIC_URL + '/data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
    const jobData = await res.json()
    setData(jobData)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return [data, setData,  loading]
}
