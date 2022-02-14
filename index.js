import got from 'got'
import { bold, red, yellow, green } from 'colorette'

const json = await got('https://www.fhi.no/api/chartdata/api/90814').json()
const result = json.slice(Math.max(json.length - 5, 1)).reduce((acc, e) => acc + e[2], 0)

console.log("Number of cases in the last 5 days:", getLevel(result)(result))

function getLevel(cases) {
  if (cases > 20000) return s => bold(red(s))
  if (cases > 10000) return red
  if (cases > 7500) return yellow
  return green
}
