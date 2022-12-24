import { SEARCH_PARAMS, SYMBOL } from 'types'

type SetQueryValue = {
  key: SEARCH_PARAMS
} & (
  | {
      type: 'none'
      value: string
    }
  | {
      type: 'range'
      value: {
        min: number
        max: number
      }
    }
)

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
    this.updateURL()

    const param = this.getQueryParam(key)

    if (typeof param === 'string') {
      const range = param.replace(/[in()=]/g, '').split(',')

      return {
        start: Number(range[0]),
        end: Number(range[1]),
      }
    }

    return {
      start: null,
      end: null,
    }
  }

  getQueryParam(key: SEARCH_PARAMS) {
    this.updateURL()

    return this.url.searchParams.get(key)
  }

  setSearchValue({ key, type, value }: SetQueryValue) {
    this.updateURL()

    if (type === 'none') {
      this.url.searchParams.set(key, value)
    }

    if (type === 'range') {
      const newVal = `${SYMBOL.IN}=(${value.min},${value.max})`

      this.url.searchParams.set(key, newVal)
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
