const yaml = require('js-yaml')
const fs = require('fs')

const inputFiles = [
  './data/speakers.yml',
  './data/schedule.yml',
  './data/mc.yml',
  './data/sponsors.yml',
  './data/organizers.yml',
]

for (let file of inputFiles) {
  console.log(`Converting ${file} to json.`);

  const data = yaml.load(fs.readFileSync(file, {encoding: 'utf-8'}))
  fs.writeFileSync(`${file}.json`, JSON.stringify(data, null, 2))
}

console.log('Conversions complete');
