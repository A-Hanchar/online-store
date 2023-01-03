import { PAGE_SIZE, SEARCH_PARAMS, SORT_TYPE, SYMBOL } from 'enums'
import { Appearance, EqualKeys, FormName, LikeKeys, PaginationKeys, RangeKeys, SearchKeys, SortingKeys } from 'types'

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
      sortType: splitedParam[1] as SORT_TYPE,
    }
  }

  getPaginationParam(): Record<PaginationKeys, number> | undefined {
    const param = this.getQueryParam(SEARCH_PARAMS.PAGINATION)

    if (!param) {
      return
    }

    const splitedParam = param.split(SYMBOL.SEMICOLON)

    const [total, page, size] = splitedParam.map((param) => Number(param.split(SYMBOL.COMMA)[1]))

    if (!total || !page || !size) {
      return
    }

    const lastPage = Math.ceil(total / size)

    return {
      total,
      page: page > lastPage ? lastPage : page,
      size,
    }
  }

  getAppearanceParam() {
    return this.getQueryParam<Appearance>('appearance') ?? 'standart'
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

  setSortValue(key: SortingKeys, type: SORT_TYPE) {
    const newValue = `${key}${SYMBOL.COMMA}${type}`

    this.setValue(SEARCH_PARAMS.SORT_BY, newValue)
  }

  setPaginationValue(key: PaginationKeys, value: number) {
    const params = this.getPaginationParam() ?? { total: 0, page: 1, size: PAGE_SIZE.THREE }

    if (params[key] === value) {
      return
    }

    params[key] = value

    const newValue = Object.entries(params).join(SYMBOL.SEMICOLON)

    this.setValue(SEARCH_PARAMS.PAGINATION, newValue)
  }

  createURL(name: string, value: string) {
    const url = new URL(this.getUrl().origin)
    url.searchParams.set(name, value)
    return url
  }

  getModalValue() {
    const param = this.getQueryParam<FormName>(SEARCH_PARAMS.MODAL)

    if (!param) {
      return
    }

    return param
  }

  setModalParam(value: FormName) {
    this.setValue(SEARCH_PARAMS.MODAL, value)
  }
}

export const urlInstanse = new URLSetters()
