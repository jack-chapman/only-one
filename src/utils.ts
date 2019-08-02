import { Order } from './models';

const firstNames = [
  'Jack',
  'Louise',
  'Tim',
  'Tom',
  'Jim',
  'John',
  'Sandra',
  'Georgie',
  'Emma',
  'Billy',
  'Rose',
  'Prim',
  'Barbra'
];

const lastNames = [
  'Chopman',
  'Oldridge',
  'Smith',
  'Joseph',
  'Orange',
  'Jervis',
  'Giles',
  'Vanhooser',
  'Earp',
  'Davids',
  'Milburn',
  'Capehart',
  'Oldman'
]

const cities = [
  'La Gattown',
  'Santa Branchbrier',
  'Cape Sitglace',
  'Feagtonton',
  'Briggci',
  'Saint Vilmits',
  'Port Vernorth',
  'Nupey',
  'Helmount',
  'Wyzouchia'
]

const models = [
  'Storm',
  'Meridian',
  'Dusk',
  'Orbit',
  'Umbra',
  'Vortex',
  'Eternity',
  'Legend',
  'Ranger',
  'Escape'
];

const colours = [
  'Red',
  'Blue',
  'Green',
  'Aqua',
  'White',
  'Orange',
  'Black',
  'Yellow',
  'Pink',
  'Purple'
]
function randomInArray(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)]
}

function generateName(): string {
  return `${randomInArray(firstNames)} ${randomInArray(lastNames)}`
}

export function createOrder(): Order {
  return {
    name: generateName(),
    address: randomInArray(cities),
    wheelsAmount: 1,
    model: randomInArray(models),
    colour: randomInArray(colours)
  }
}
