import { EqualKeys, LikeKeys, RangeKeys, SearchKeys, SEARCH_PARAMS, SortingKeys, SORTING_TYPE } from 'interfaces'
import { SYMBOL } from 'types'

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

  hasSearchParams() {
    this.updateURL()

    return Boolean(this.url.search)
  }
}

class URLCallbacks extends URLInstanse {
  callbackList: Array<() => void>

  constructor() {
    super()

    this.callbackList = []
  }

  addCallback(callback: () => void, place: 'start' | 'end' = 'start') {
    if (place === 'start') {
      this.callbackList.unshift(callback)

      return
    }

    this.callbackList.push(callback)
  }

  clearCallbackLists() {
    this.callbackList = []
  }

  callCallbacks() {
    if (this.callbackList.length) {
      this.callbackList.forEach((callback) => callback())
    }
  }
}

class URLClearMethods extends URLCallbacks {
  resetUrl(resetedPath: string) {
    window.history.pushState({}, '', resetedPath)
    this.callCallbacks()
  }

  clearSearchParams() {
    this.updateURL()

    this.resetUrl(this.url.pathname)
  }

  removeSearchValueByKey(key: SearchKeys) {
    this.updateURL()

    this.url.searchParams.delete(key)
    this.resetUrl(this.url.href)
  }
}

class URLGetters extends URLClearMethods {
  getQueryParam<T = string>(key: SearchKeys) {
    this.updateURL()

    return this.url.searchParams.get(key) as T | null
  }

  getRangeParam(key: RangeKeys) {
    const param = this.getQueryParam(key)

    if (!param) {
      return
    }

    const range = param.replace(/[in()=]/g, '').split(SYMBOL.COMMA)

    return {
      start: Number(range[0]),
      end: Number(range[1]),
    }
  }

  getLikeParam(key: LikeKeys) {
    const param = this.getQueryParam(key)

    if (!param) {
      return
    }

    return param.replace(/[*]/g, '')
  }

  getSortByParam() {
    const param = this.getQueryParam(SEARCH_PARAMS.SORT_BY)

    if (!param) {
      return
    }

    const splitedParam = param.split(SYMBOL.COMMA).filter(Boolean)

    return {
      sortKey: splitedParam[0] as SortingKeys,
      sortType: splitedParam[1] as SORTING_TYPE,
    }
  }
}

class URLSetters extends URLGetters {
  setValue(
    key: EqualKeys | RangeKeys | LikeKeys | SortingKeys | SEARCH_PARAMS,
    value: string,
    shouldCallCallbacks = true,
  ) {
    this.url.searchParams.set(key, value)

    window.history.pushState({}, '', this.url.href)
    shouldCallCallbacks && this.callCallbacks()
  }

  setEqualValue(key: EqualKeys, value: string) {
    this.setValue(key, value)
  }

  setRangeValue(key: RangeKeys, { min, max }: { min: number; max: number }) {
    const newValue = `${SYMBOL.IN}=(${min},${max})`

    this.setValue(key, newValue)
  }

  setLikeValue(key: LikeKeys, value: string) {
    const newValue = `${SYMBOL.ASTERISK}${value}${SYMBOL.ASTERISK}`

    this.setValue(key, newValue)
  }

  setSortValue(key: SortingKeys, type: SORTING_TYPE) {
    const newValue = `${key}${SYMBOL.COMMA}${type}`

    this.setValue(SEARCH_PARAMS.SORT_BY, newValue)
  }

  // setSearchValue({ key, type, value }: SetQueryValue) {
  //   this.updateURL()

  //   if (type === 'equal') {
  //     this.url.searchParams.set(key, value)
  //   }

  //   if (type === 'range') {
  //     const { min, max } = value

  //     const newVal = `${SYMBOL.IN}=(${min},${max})`

  //     this.url.searchParams.set(key, newVal)
  //   }

  //   if (type === 'like') {
  //     const newVal = `${SYMBOL.ASTERISK}${value}${SYMBOL.ASTERISK}`

  //     this.url.searchParams.set(key, newVal)
  //   }

  //   if (type === 'sort') {
  //     const { sortKey, sortType } = value

  //     const newValue = `${sortKey}${SYMBOL.COMMA}${sortType}`

  //     this.url.searchParams.set(SEARCH_PARAMS.SORT_BY, newValue)
  //   }

  //   window.history.pushState({}, '', this.url.href)
  //   this.callCallbacks()
  // }
}

export const urlInstanse = new URLSetters()
