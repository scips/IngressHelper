define [], () ->
  class Settings
    Settings::distanceunit = 'metric'
    Settings::energyunit = 'K'
    Settings::defaultPolarValues=
      N: 1
      NE: 1
      E: 1
      SE: 0
      S: 1
      SW: 0
      W: 0
      NW: 0
    Settings::polarValues = null

    constructor: () ->
      Settings::polarValues = Settings::defaultPolarValues

    save: () ->
      # TODO save local data

    load: () ->
      # TODO load local data