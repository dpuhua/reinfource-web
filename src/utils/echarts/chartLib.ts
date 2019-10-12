import echart from 'echarts'

export default class SetChart {
  part: any
  el: HTMLDivElement
  initOption: object
  constructor (options: Option) {
    this.el = options.el
    this.initOption = options.initOption
  }

  public initChart () {
    setTimeout(() => {
      this.part = echart.init(this.el)
      this.part.setOption(this.initOption)
      this.part.resize()
    }, 10)
  }

  setOption (obj: object) {
    setTimeout(() => {
      this.part.setOption(obj)
    }, 10)
  }
}

interface Option {
  el: any,
  initOption: object
}
