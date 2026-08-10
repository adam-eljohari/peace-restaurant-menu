export const restaurant = {
  name: { he: 'מסעדת השלום', en: 'Peace Restaurant' },
  ownerLine: { he: 'סובחי ובניו', en: 'Sobhi & Sons' },
  description: {
    he: 'מטבח מקומי, חומוס טרי ובשרים מהאש.',
    en: 'Local cuisine, fresh hummus and charcoal-grilled meats.',
  },
  eyebrow: { he: 'מאז 1968 · לוד', en: 'Since 1968 · Lod' },
  address: { he: 'רח׳ הרצוג 8, לוד', en: '8 Herzog St, Lod' },
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=%D7%94%D7%A8%D7%A6%D7%95%D7%92+8+%D7%9C%D7%95%D7%93',
  instagram: '',
  facebook: '',
  openingHours: {
    label: {
      he: 'א׳ סגור · ב׳–ה׳ 07:30–18:00 · ו׳ 07:30–16:30 · שבת 06:30–18:00',
      en: 'Sun closed · Mon–Thu 07:30–18:00 · Fri 07:30–16:30 · Sat 06:30–18:00',
    },
    schedule: {
      0: null,
      1: { open: '07:30', close: '18:00' },
      2: { open: '07:30', close: '18:00' },
      3: { open: '07:30', close: '18:00' },
      4: { open: '07:30', close: '18:00' },
      5: { open: '07:30', close: '16:30' },
      6: { open: '06:30', close: '18:00' },
    },
  },
  paymentNote: { he: 'התשלום במזומן בלבד', en: 'Cash payment only' },
  locale: 'he-IL',
  language: 'he',
  direction: 'rtl',
}

export const localize = (value, language = restaurant.language) => {
  if (typeof value === 'string') return value
  return value?.[language] ?? value?.he ?? value?.en ?? ''
}

const dayNames = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
const toMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export const getOpenStatus = (date = new Date()) => {
  const currentDay = date.getDay()
  const currentMinutes = date.getHours() * 60 + date.getMinutes()
  const today = restaurant.openingHours.schedule[currentDay]

  if (today) {
    const opensAt = toMinutes(today.open)
    const closesAt = toMinutes(today.close)

    if (currentMinutes >= opensAt && currentMinutes < closesAt) {
      return { isOpen: true, label: `פתוח עכשיו · עד ${today.close}` }
    }

    if (currentMinutes < opensAt) {
      return { isOpen: false, label: `סגור עכשיו · נפתח היום ב־${today.open}` }
    }
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const nextDayIndex = (currentDay + offset) % 7
    const nextDay = restaurant.openingHours.schedule[nextDayIndex]

    if (nextDay) {
      const when = offset === 1 ? 'מחר' : `ביום ${dayNames[nextDayIndex]}`
      return { isOpen: false, label: `סגור עכשיו · נפתח ${when} ב־${nextDay.open}` }
    }
  }

  return { isOpen: false, label: 'סגור עכשיו' }
}
