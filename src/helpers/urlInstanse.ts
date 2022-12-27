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
        sortKey: SORT_KEY
        sortType: SORT_TYPE
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

  clearSearchParams() {
    this.updateURL()

    window.history.pushState({}, '', this.url.pathname)
  }

  hasSearchParams() {
    this.updateURL()

    return Boolean(this.url.search)
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
    const param = (this.getQueryParam(SEARCH_PARAMS.SORT_BY) ?? '').split(SYMBOL.COMMA).filter(Boolean)

    return {
      sortKey: param[0] as SORT_KEY | undefined,
      sortType: (param[1] as SORT_TYPE | undefined) ?? SORT_TYPE.ASC,
    }
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

      const newValue = `${sortKey}${SYMBOL.COMMA}${sortType}`

      this.url.searchParams.set(SEARCH_PARAMS.SORT_BY, newValue)
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
