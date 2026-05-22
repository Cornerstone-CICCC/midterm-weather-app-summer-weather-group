type PlaceKitResult = {
  highlight: string
  name: string
  city: string
  county: string
  administrative: string
  country: string
  administrativecode: string
  citycode: string
  countrycode: string
  countycode: string
  zipcode: string[]
  population: number
  lat: number
  lng: number
  coordinates: string
  type: string
}

export type PlaceKitResponse = {
  results: PlaceKitResult[]
  resultsCount: number
  maxResults: number
  query: string
}

export type City = Pick<PlaceKitResult, 'country' | 'name' | 'lat' | 'lng' | 'coordinates'>
