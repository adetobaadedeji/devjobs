export type Details = {
  content: string
  items: string[]
}

export type DataTypes = {
  id: number
  company: string
  logo: string
  logoBackground: string
  position: string
  postedAt: string
  contract: string
  location: string
  website: string
  apply: string
  description: string
  requirements: Details
  role: Details
}

export type JobType = {
	job: DataTypes
}

export type SearchPropsTypes = {
	data: DataTypes[]
	setData: React.Dispatch<React.SetStateAction<DataTypes[]>>
}

export type queryTypes = {
	title: string
	location: string
	contractType: boolean
}

export type filterJobTypes = {
	query: queryTypes
	data: DataTypes
}