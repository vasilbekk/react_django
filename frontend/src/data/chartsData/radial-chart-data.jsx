import configDB from '../customizer/config'
import { getUserFromLocalStorage } from '../../actions/auth'


import sadFace from '../../assets/images/other-images/sad_clean.png'
import smileFace from '../../assets/images/other-images/smile_clean.png'


const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;
const user = getUserFromLocalStorage()
const balance = user.balance
const perDay = user.payPerDay

const daysToBlock = () => balance/perDay
const getImageSmileOrSad = () => (daysToBlock()<=7)?sadFace:smileFace
const getColorRedOrGreen = () => (daysToBlock()<=7)?'#e31e31':'#1be33d'

export const radialChart = {
    series: [daysToBlock()/.3],
    options : {
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '70%',
            image: getImageSmileOrSad(),
            imageWidth: 112,
            imageHeight: 112,
            imageClipped: false
          },
          dataLabels: {
            name: {
              show: false,
              color: '#fff'
            },
            value: {
              show: false,
              color: '#333',
              offsetY: 70,
              fontSize: '22px'
            }
          }
        }
      },
      fill: {
        type: "gradient",
        colors:[getColorRedOrGreen()],
        gradient: {
          shadeIntensity: 0,
          opacityFrom: 0.9,
          opacityTo: 0.7,
          stops: [0, 50, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Volatility'],
      }
}