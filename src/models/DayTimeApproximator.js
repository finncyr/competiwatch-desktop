class DayTimeApproximator {
  static dayOfWeek(date) {
    if (typeof date === 'string') {
      date = new Date(date)
    }
    const day = date.getDay()

    if (day === 0 || day === 6) { // Sunday and Saturday
      return 'weekend'
    }

    return 'weekday'
  }

  static timeOfDay(date) {
    if (typeof date === 'string') {
      date = new Date(date)
    }
    const hours = date.getHours()

    if (hours >= 6 && hours < 12) { // 6am - high noon
      return 'morning'
    }

    else if (hours >= 12 && hours < 18) { // high noon - 18pm
      return 'afternoon'
    }

    else if (hours >= 18 && hours < 22) { // 18pm - 22pm
      return 'evening'
    }
    else{
      return 'night'
    }
  }
}

export default DayTimeApproximator
