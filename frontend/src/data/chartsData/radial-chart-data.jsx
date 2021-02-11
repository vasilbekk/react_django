import configDB from '../customizer/config'
import store from '../../store'

import { getDaysToBlock } from '../../actions/user'

import sadFace from '../../assets/images/other-images/sad_clean.png'
import smileFace from '../../assets/images/other-images/smile_clean.png'

const getImageSmileOrSad = (daysToBlock) => (daysToBlock<=7)?sadFace:smileFace
const getColorRedOrGreen = (daysToBlock) => (daysToBlock<=7)?'#e31e31':'#1be33d'

export const radialChart = daysToBlock => ({
    series: [(daysToBlock/30)*100],
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
            image: getImageSmileOrSad(daysToBlock),
            imageWidth: 86,
            imageHeight: 86,
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
        colors:[getColorRedOrGreen(daysToBlock)],
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
})