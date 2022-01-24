import { useState, useEffect } from "react"
import { DataTypes } from "../types/Types";

export const useData = (): [DataTypes[], React.Dispatch<React.SetStateAction<DataTypes[]>>, boolean] => {
  const [data, setData] = useState<DataTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    const res = await fetch(process.env.PUBLIC_URL + '/data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
    const jobData = await res.json()
    // return jobData
    // setData(jobData)

    if(jobData){
      setLoading(false)
      setData(jobData)
    } else return []
  }

  // const loadData = async () => {
  //   const datas = await getData()
  //   setLoading(false)
  //   setData(datas)
  // }

  useEffect(() => {
    getData()
  }, [])

  return [data, setData,  loading]
}

  // const loadData = async () => {
	// 	const datas = await getData()
	// 	setLoading(false)
	// 	setData(datas)
	// }

	// useEffect(() => {
	// 	loadData()
	// }, [])