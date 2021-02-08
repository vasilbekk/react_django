import configDB from '../customizer/config'
import { getUserFromLocalStorage } from '../../actions/auth'
const primary = localStorage.getItem('default_color') || configDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || configDB.data.color.secondary_color;
const user = getUserFromLocalStorage()
export const radialChart = {
    series: [70],
    options : {
        chart: {
        height: 350,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: '80%',
            image: user.photo_url,
            imageWidth: 100,
            imageHeight: 200,
            imageClipped: true,
          },
          dataLabels: {
            name: {
              show: false,
              color: '#fff',
            },
            value: {
              show: true,
              color: '#333',
              offsetY: 70,
              fontSize: '22px'
            }
          }
        }
      },
      fill: {
        type: 'image',
        image: {
          src: ['../../assets/images/user-card/5.jpg'],
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Volatility'],
      }
}