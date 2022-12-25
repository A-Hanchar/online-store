import { SEARCH_PARAMS, SORT_KEY, SORT_TYPE, SYMBOL } from 'types'

type SetQueryValue =
  | {
      key: SEARCH_PARAMS
      type: 'equal' | 'like'
      value: string
    }
  | {
      key: SEARCH_PARAMS
      type: 'range'
      value: {
        min: number
        max: number
      }
    }
  | {
      key?: undefined
      type: 'sort'
      value: {
        sortType: SORT_TYPE
        sortKey: SORT_KEY
      }
    }

class URLInstanse {
  url: URL
  constructor() {
    this.url = new URL(window.location.href)
  }

  updateURL() {
    this.url = new URL(window.location.href)
  }

  getUrl() {
    this.updateURL()

    return this.url
  }

  getRangeParam(key: SEARCH_PARAMS) {
    const param = this.getQueryParam(key)
    const range = param?.replace(/[in()=]/g, '').split(',')

    return {
      start: range?.[0] && Number(range[0]),
      end: range?.[1] && Number(range[1]),
    }
  }

  getLikeParam(key: SEARCH_PARAMS) {
    const param = this.getQueryParam(key)

    return param?.replace(/[*]/g, '')
  }

  getQueryParam<T = string>(key: SEARCH_PARAMS) {
    this.updateURL()

    return this.url.searchParams.get(key) as T | null
  }

  getSortByParam() {
    return (this.getQueryParam(SEARCH_PARAMS.SORT_BY) ?? '').split(SYMBOL.COMMA).filter(Boolean)
  }

  getSortTypeByKey(key: SORT_KEY) {
    const param = this.getSortByParam().find((item) => item.includes(key))

    return (param?.split(SYMBOL.EQUAL)[1] as SORT_TYPE | undefined) ?? SORT_TYPE.ASC
  }

  setSearchValue({ key, type, value }: SetQueryValue) {
    this.updateURL()

    if (type === 'equal') {
      this.url.searchParams.set(key, value)
    }

    if (type === 'range') {
      const { min, max } = value

      const newVal = `${SYMBOL.IN}=(${min},${max})`

      this.url.searchParams.set(key, newVal)
    }

    if (type === 'like') {
      const newVal = `${SYMBOL.ASTERISK}${value}${SYMBOL.ASTERISK}`

      this.url.searchParams.set(key, newVal)
    }

    if (type === 'sort') {
      const { sortKey, sortType } = value

      const currentVal = this.getSortByParam()
      const indexExistedKey = currentVal.findIndex((item) => item.includes(sortKey))

      const newValue = `${sortKey}${SYMBOL.EQUAL}${sortType}`

      indexExistedKey > -1 ? (currentVal[indexExistedKey] = newValue) : currentVal.push(newValue)

      this.url.searchParams.set(SEARCH_PARAMS.SORT_BY, currentVal.toString())
    }

    window.history.pushState({}, '', this.url.href)
  }

  removeSearchValueByKey(key: SEARCH_PARAMS) {
    this.updateURL()

    this.url.searchParams.delete(key)

    window.history.pushState({}, '', this.url.href)
  }
}

export const urlInstanse = new URLInstanse()
