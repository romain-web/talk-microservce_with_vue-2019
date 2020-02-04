import Myo from 'Myo'
import merge from 'lodash/merge'

function install (Vue, options) {
  const defaultOptions = {
    namespace: 'myAwesomeVueApp'
  }

  options = merge(options, defaultOptions)

  const myo = {
    init () {

      Myo.on('fist', function () {
        this.vibrate()
      })

      Myo.on('connected', function () {
        console.log('connected')
        this.streamEMG(true)
      })

      Myo.connect(`com.myo.${options.namespace}`)
    }
  }

  myo.init()

  Vue.prototype.$myo = myo
}

export default {
  install
}
