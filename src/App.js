import './App.css';
import logo from './image/Vector.png'
import cart from './image/cart.png'
import cart1 from './image/cart1.png'
import usd from './image/usd.png'
import session from './image/session.png'
import client from './image/client.png'
import downArrow from './image/downArrow.png'
import arrowUp from './image/arrowup.png'
import arrowdown from './image/arrowdown.png'
import profile from './image/girl.png'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
function App() {


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#ABABAB',
          font: {
            size: 10,
            weight: 'bold'
          }
        }
      },
      y: {
        grid: {
          display: true,
          color: "rgba(241, 241, 241, 1)",

        },

        min: 0,
        max: 500,
        ticks: {
          stepSize: 250,
          color: '#ABABAB',
          font: {
            size: 10,
            weight: 'bold'
          }
        }
      },

    },
    layout: {
      padding: 10
    },
    plugins: {
      legend: {

        display: false,
      },
      tooltip: {
        enabled: false
      },


    },
  };
  const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV'];

  const data = {
    labels,

    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 150, 300, 250, 320, 400, 350, 250, 50, 390, 430],
        barThickness: 6,
        borderRadius: 40,
        borderSkipped: false,
        backgroundColor: 'rgba(3, 37, 69, 1), rgba(0, 100, 102, 1)',
      },
      {
        label: 'Dataset 2',
        data: [200, 300, 250, 350, 200, 250, 150, 490, 350, 250, 300],
        barThickness: 6,
        borderRadius: 40,
        borderSkipped: false,
        backgroundColor: 'rgba(155, 205, 206, 1)',
      },
    ],
  };






  return (
    <section className='bg-[#F1F1F1A3] min-h-screen'>

      {/* Fisrt Section   */}

      {/* Card 1 */}

      <div className='flex items-center  justify-center select-none md:justify-between  gap-3 flex-wrap  '>

        <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5 '>
          <div className='bg-[#0083FF] w-[48px] h-[48px]  rounded-full flex items-center justify-center'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='flex items-start  justify-center gap-3 flex-col'>
            <h2 className='text-text1 text-[12px] font-poppine font-normal'>Withdrawable</h2>
            <h1 className='font-poppine text-text2 font-semibold text-[24px]'>$24,487</h1>
          </div>


        </div>
        {/* Card 2 */}

        <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5  '>
          <div className='bg-[#FE9216] w-12 h-12  rounded-full flex items-center justify-center'>
            <img src={usd} alt="Logo" />
          </div>
          <div className='flex items-start  justify-center gap-3 flex-col'>
            <h2 className='text-text1 text-[12px] font-poppine font-normal'>Today’s Revenue</h2>
            <h1 className='font-poppine text-text2 font-semibold text-[24px]'>$3,547</h1>
          </div>


        </div>
        {/* Card 3 */}

        <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5 '>
          <div className='bg-[#8697A6] w-12 h-12  rounded-full flex items-center justify-center'>
            <img src={cart} alt="Logo" />
          </div>
          <div className='flex items-start  justify-center gap-3 flex-col'>
            <h2 className='text-text1 text-[12px] font-poppine font-normal'>Total Orders Today</h2>
            <h1 className='font-poppine text-text2 font-semibold text-[24px]'>237</h1>
          </div>


        </div>


        {/* Card 4 */}

        <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5  '>
          <div className='bg-[#8697A6] w-12 h-12  rounded-full flex items-center justify-center'>
            <img src={session} alt="Logo" />
          </div>
          <div className='flex items-start  justify-center gap-3 flex-col'>
            <h2 className='text-text1 text-[12px] font-poppine font-normal'>Sessions Today</h2>
            <h1 className='font-poppine text-text2 font-semibold text-[24px]'>72</h1>
          </div>


        </div>


        {/* Card 5 */}

        <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5  '>
          <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
            <img src={client} alt="Logo" />
          </div>
          <div className='flex items-start  justify-center gap-3 flex-col'>
            <h2 className='text-text1 text-[12px] font-poppine font-normal'>Online Clients</h2>
            <h1 className='font-poppine text-text2 font-semibold text-[24px]'>63</h1>
          </div>


        </div>



        {/* Card 6 */}


        <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5 '>
          <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
            <img src={client} alt="Logo" />
          </div>
          <div className='flex items-start  justify-center gap-3 flex-col  '>
            <h2 className='text-text1 text-[12px] font-poppine font-normal'>OnSite Clients</h2>
            <h1 className='font-poppine text-text2 font-semibold text-[24px]'>257</h1>
          </div>


        </div>
      </div>
      {/* end Fisrt Section   */}

      {/* second section/  */}


      {/*end second section/  */}

      <div className='flex'>

        <div className='w-1/2  '>
          <div className='flex justify-between'>
            <div className='w-[320px] min-w-1/2 rounded-[16px] min-h-[180px] items-center justify-between flex px-3 bg-white shadow-customShadow  '>
              <div className='w-1/2 flex flex-col  gap-3 '>
                <h2 className='text-[#067E81] text-[20px] font-poppine font-semibold'>Total Clients</h2>
                <h1 className='font-poppine text-text2 font-semibold text-[32px]'>257</h1>
                <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View Client</p>

              </div>
              <div className='w-1/2'>
                <div className='flex items-center gap-3'>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center gap-3 flex-col  '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Online Clients</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>63</h1>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center gap-3 flex-col  '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Onsite Clients</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>124</h1>
                  </div>
                </div>
              </div>

            </div>
            <div className='w-[320px] min-w-1/2 rounded-[16px] min-h-[180px] items-center justify-between flex px-3 bg-white shadow-customShadow  '>
              <div className='w-1/2 flex flex-col  gap-3 '>
                <h2 className='text-[#067E81] text-[20px] font-poppine font-semibold'>Total Pets</h2>
                <h1 className='font-poppine text-text2 font-semibold text-[32px]'>147</h1>
                <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View Pets</p>

              </div>
              <div className='w-1/2'>
                <div className='flex items-center gap-3'>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center gap-3 flex-col  '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Cat Pets</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>63</h1>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center gap-3 flex-col  '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Dog Pets</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>124</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className='flex justify-between'>
            <div className=' w-[200px] rounded-[16px] min-h-[150px] flex justify-center  flex-col p-3 bg-white shadow-customShadow  gap-3 '>
              <h2 className='text-[#067E81] text-[20px] font-poppine font-semibold'>Total Doctors</h2>
              <h1 className='font-poppine text-text2 font-semibold text-[32px]'>147</h1>
              <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View Doctors</p>

            </div>
            <div className=' w-[230px] rounded-[16px] min-h-[150px] flex justify-center  flex-col p-3 bg-white shadow-customShadow  gap-3 '>
              <h2 className='text-[#067E81] text-[20px] font-poppine font-semibold'>Total Receptionist</h2>
              <h1 className='font-poppine text-text2 font-semibold text-[32px]'>147</h1>
              <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View Doctors</p>

            </div>
            <div className=' w-[200px] rounded-[16px] min-h-[150px] flex justify-center  flex-col p-3 bg-white shadow-customShadow  gap-3 '>
              <h2 className='text-[#067E81] text-[20px] font-poppine font-semibold'> Services Offered</h2>
              <h1 className='font-poppine text-text2 font-semibold text-[32px]'>15</h1>
              <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View Services</p>

            </div>

          </div>

          {/* table 1  */}
          <div className='w-full min-w-1/2 rounded-[16px] min-h-[180px]  p-3 bg-white shadow-customShadow'>

            <div className='flex justify-between w-full items-center '>
              <h2 className='text-[#067E81] text-[20px] font-poppine inline-block font-semibold'>Today’s Appointments</h2>
              <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View All</p>
            </div>


            <div>
              <table className='w-full  '>
                <thead >
                  <tr className=' border-b border-[#F1F1F1]  '>
                    <th className='text-[#ABABAB]  p-2 py-4 text-start text-[12px] font-normal font-poppine'>Client Name</th>
                    <th className='text-[#ABABAB]  p-2   text-start  text-[12px] font-normal font-poppine'>Pet Name</th>
                    <th className='text-[#ABABAB]  p-2   text-start text-[12px] font-normal font-poppine'>Service</th>
                    <th className='text-[#ABABAB]  p-2  text-start  text-[12px] font-normal font-poppine'>Doctor</th>
                    <th className='text-[#ABABAB]   p-2  text-start text-[12px] font-normal font-poppine'>Time</th>
                    <th className='text-[#ABABAB]  p-2   text-start text-[12px] font-normal font-poppine'>Status</th>

                  </tr>
                </thead>
                <tbody className=''>
                  <tr className=' border-b border-[#F1F1F1]  '>

                    <td class=" p-2 py-4 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Silver
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Tommy
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dummy Text
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dr. Mason
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      14:20
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start cursor-pointer ">
                      <div className='h-6  bg-[#B7FFB6] rounded-lg flex items-center justify-center'>
                        <h2 className='text-center text-[#067E81] capitalize'>active</h2>
                      </div>

                    </td>
                  </tr>
                  <tr className=' border-b border-[#F1F1F1]  '>

                    <td class=" p-2 py-4 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Silver
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Tommy
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dummy Text
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dr. Mason
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      14:20
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start cursor-pointer ">
                      <div className='h-6  bg-[#FFB7B7] rounded-lg flex items-center justify-center'>
                        <h2 className='text-center text-[#C90000] capitalize'>Delayed</h2>
                      </div>

                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>



          {/* tabel 2 */}

          <div className='w-full min-w-1/2 rounded-[16px] min-h-[180px]  p-3 bg-white shadow-customShadow'>

            <div className='flex justify-between w-full items-center '>
              <h2 className='text-[#067E81] text-[20px] font-poppine inline-block font-semibold'>Booking Request</h2>
              <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View All</p>
            </div>


            <div>
              <table className='w-full  '>
                <thead >
                  <tr className=' border-b border-[#F1F1F1]  '>
                    <th className='text-[#ABABAB]  p-2 py-4 text-start text-[12px] font-normal font-poppine'>Client Name</th>
                    <th className='text-[#ABABAB]  p-2   text-start  text-[12px] font-normal font-poppine'>Pet Name</th>
                    <th className='text-[#ABABAB]  p-2   text-start text-[12px] font-normal font-poppine'>Service</th>
                    <th className='text-[#ABABAB]  p-2  text-start  text-[12px] font-normal font-poppine'>Doctor</th>
                    <th className='text-[#ABABAB]   p-2  text-start text-[12px] font-normal font-poppine'>Time</th>
                    <th className='text-[#ABABAB]  p-2   text-start text-[12px] font-normal font-poppine'>Date</th>

                  </tr>
                </thead>
                <tbody className=''>
                  <tr className=' border-b border-[#F1F1F1]  '>

                    <td class=" p-2 py-4 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Silver
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Tommy
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dummy Text
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dr. Mason
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      14:20
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      12-20-23
                    </td>
                  </tr>
                  <tr className=' border-b border-[#F1F1F1]  '>

                    <td class=" p-2 py-4 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Silver
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Tommy
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dummy Text
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      Dr. Mason
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      14:20
                    </td>
                    <td class=" p-2 text-[#032545] text-sm font-poppine font-normal text-start ">
                      12-10-23
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>


          {/* tabel 3 */}

          <div className='w-full min-w-1/2 rounded-[16px] min-h-[180px] flex justify-between flex-col  p-3 bg-white shadow-customShadow'>

            <div className='flex justify-between w-full items-center '>
              <h2 className='text-[#067E81] text-[20px] font-poppine inline-block font-semibold'>Booking Sales</h2>
              <div className='flex gap-3'>

                <p className='font-poppine flex items-center justify-center gap-2 text-[#ABABAB]  font-medium text-[12px] bg-[#F0F0F0] px-3 rounded-[16px]
                
                '>2022 - 2023 <img src={downArrow} alt="downArrow" className='block' /> </p>

                <p className='font-poppine flex items-center justify-center gap-2 text-[#ABABAB]  font-medium text-[12px] bg-[#F0F0F0] px-3 rounded-[16px]
                
                '>Year <img src={downArrow} alt="downArrow" className='block' /> </p>
              </div>
            </div>


            <div className='flex justify-between flex-wrap'>
              <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5   border-2 border-[#F1F1F1]'>
                <div className='bg-[#FE9216] w-12 h-12  rounded-full flex items-center justify-center'>
                  <img src={usd} alt="Logo" />
                </div>
                <div className='flex items-start  justify-center gap-3 flex-col'>
                  <h2 className='text-text1 text-[12px] font-poppine font-normal'>Total Sales</h2>
                  <h1 className='font-poppine text-text2 font-semibold text-[24px]'>$3,547</h1>
                </div>


              </div>

              <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5   border-2 border-[#F1F1F1]'>
                <div className='bg-[#06B51E] w-12 h-12  rounded-full flex items-center justify-center'>
                  <img src={session} alt="Logo" />
                </div>
                <div className='flex items-start  justify-center gap-3 flex-col'>
                  <h2 className='text-text1 text-[12px] font-poppine font-normal'>Total Bookings</h2>
                  <h1 className='font-poppine text-text2 font-semibold text-[24px]'>237</h1>
                </div>


              </div>





              <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[220px]
     rounded-[16px] flex items-center justify-start gap-3 px-4   border-2 border-[#F1F1F1]'>
                <div className='bg-[#9A9A9A] w-12 h-12  rounded-full flex items-center justify-center'>
                  <img src={session} alt="Logo" />
                </div>
                <div className='flex items-start  justify-center gap-3 flex-col'>
                  <h2 className='text-text1 text-[12px] font-poppine font-normal'>Bookings Cancelled</h2>
                  <h1 className='font-poppine text-text2 font-semibold text-[24px]'>128</h1>
                </div>


              </div>

            </div>
          </div>



          {/* tabel 4 */}

          <div className='w-full min-w-1/2 rounded-[16px] min-h-[180px] flex justify-between flex-col  p-3 bg-white shadow-customShadow'>

            <div className='flex justify-between w-full items-center '>
              <h2 className='text-[#067E81] text-[20px] font-poppine inline-block font-semibold'>Product Sales </h2>
              <div className='flex gap-3'>

                <p className='font-poppine flex items-center justify-center gap-2 text-[#ABABAB]  font-medium text-[12px] bg-[#F0F0F0] px-3 rounded-[16px]
                
                '>2022 - 2023 <img src={downArrow} alt="downArrow" className='block' /> </p>

                <p className='font-poppine flex items-center justify-center gap-2 text-[#ABABAB]  font-medium text-[12px] bg-[#F0F0F0] px-3 rounded-[16px]
                
                '>Year <img src={downArrow} alt="downArrow" className='block' /> </p>
              </div>
            </div>


            <div className='flex justify-between flex-wrap'>
              <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5   border-2 border-[#F1F1F1]'>
                <div className='bg-[#FE9216] w-12 h-12  rounded-full flex items-center justify-center'>
                  <img src={usd} alt="Logo" />
                </div>
                <div className='flex items-start  justify-center gap-3 flex-col'>
                  <h2 className='text-text1 text-[12px] font-poppine font-normal'>Total Sales</h2>
                  <h1 className='font-poppine text-text2 font-semibold text-[24px]'>$3,547</h1>
                </div>


              </div>

              <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[200px]
     rounded-[16px] flex items-center justify-start gap-3 px-5   border-2 border-[#F1F1F1]'>
                <div className='bg-[#06B51E] w-12 h-12  rounded-full flex items-center justify-center'>
                  <img src={cart} alt="Logo" />
                </div>
                <div className='flex items-start  justify-center gap-3 flex-col'>
                  <h2 className='text-text1 text-[12px] font-poppine font-normal'>Total Orders</h2>
                  <h1 className='font-poppine text-text2 font-semibold text-[24px]'>237</h1>
                </div>


              </div>





              <div className='bg-white shadow-customShadow h-24 min-w-[15%] w-[220px]
     rounded-[16px] flex items-center justify-start gap-3 px-4   border-2 border-[#F1F1F1]'>
                <div className='bg-[#3069EA] w-12 h-12  rounded-full flex items-center justify-center'>
                  <img src={cart1} alt="Logo" />
                </div>
                <div className='flex items-start  justify-center gap-3 flex-col'>
                  <h2 className='text-text1 text-[12px] font-poppine font-normal'>Total Products</h2>
                  <h1 className='font-poppine text-text2 font-semibold text-[24px]'>3212</h1>
                </div>


              </div>

            </div>
          </div>



        </div>


        {/* second side of the project */}
        <div className='w-1/2  '>
          <div className='flex justify-between'>

            <div className='w-2/3 rounded-[16px] min-h-[180px] flex flex-col gap-3 p-3 bg-white shadow-customShadow'>

              <div className='flex justify-between w-full items-center '>
                <h2 className='text-[#067E81] text-[20px] font-poppine inline-block font-semibold'>Messages </h2>
                <p className='font-poppine text-[#067E81]  font-medium text-[12px] underline'>View All</p>
              </div>


              <div className='relative overflow-hidden   min-h-[250px] h-[250px] '>
                <table className='w-full table-fixed '>

                  <tbody className=''>
                    <tr className=' my-3 border-b border-[#F1F1F1] w-full flex justify-between items-center h-14 '>

                      <td className='flex gap-5'>
                        <td>
                          <img src={profile} alt='profille' />
                        </td>

                        <td class="flex flex-col  justify-between h-full gap-3">
                          <h1 className=' text-[#032545] text-sm font-poppine font-normal text-start'>  Jason Smith</h1>
                          <p className='opacity-50 text-[#032545] text-[12px] font-poppine font-normal text-start'>Hi, How are you doing today?</p>
                        </td>
                      </td>

                      <td class=" p-2 text-[#ABABAB] text-[8px] font-poppine font-normal text-start ">
                        August 16, 2023
                      </td>
                    </tr>
                    <tr className='my-3 border-b border-[#F1F1F1] w-full flex justify-between items-center h-14 '>

                      <td className='flex gap-5'>
                        <td>
                          <img src={profile} alt='profille' />
                        </td>

                        <td class="flex flex-col  justify-between h-full gap-3">
                          <h1 className=' text-[#032545] text-sm font-poppine font-normal text-start'>  Jason Smith</h1>
                          <p className=' text-[#032545] text-[12px] font-poppine font-normal text-start'>Hi, How are you doing today?</p>
                        </td>
                      </td>


                      <td className='flex flex-col items-end   gap-5'>

                        <td class=" p-2 text-[#ABABAB] text-[8px] font-poppine font-normal text-start ">
                          August 16, 2023
                        </td>

                        <td class=" h-[10px] w-[10px] bottom-[6px]  right-4  relative bg-[#FF0000] rounded-full">

                        </td>

                      </td>



                    </tr>
                    <tr className=' my-3 border-b border-[#F1F1F1] w-full flex justify-between items-center h-14 '>

                      <td className='flex gap-5'>
                        <td>
                          <img src={profile} alt='profille' />
                        </td>

                        <td class="flex flex-col  justify-between h-full gap-3">
                          <h1 className=' text-[#032545] text-sm font-poppine font-normal text-start'>  Jason Smith</h1>
                          <p className='opacity-50 text-[#032545] text-[12px] font-poppine font-normal text-start'>Hi, How are you doing today?</p>
                        </td>
                      </td>

                      <td class=" p-2 text-[#ABABAB] text-[8px] font-poppine font-normal text-start ">
                        August 16, 2023
                      </td>
                    </tr>
                    <tr className='opacity-40 my-3 border-b border-[#F1F1F1] w-full flex justify-between items-center h-14 '>

                      <td className='flex gap-5'>
                        <td>
                          <img src={profile} alt='profille' />
                        </td>

                        <td class="flex flex-col  justify-between h-full gap-3">
                          <h1 className=' text-[#032545] text-sm font-poppine font-normal text-start'>  Jason Smith</h1>
                          <p className=' text-[#032545] text-[12px] font-poppine font-normal text-start'>Hi, How are you doing today?</p>
                        </td>
                      </td>


                      <td className='flex flex-col items-end   gap-5'>

                        <td class=" p-2 text-[#ABABAB] text-[8px] font-poppine font-normal text-start ">
                          August 16, 2023
                        </td>

                        <td class=" h-[10px] w-[10px] bottom-[6px]  right-4  relative bg-[#FF0000] rounded-full">

                        </td>

                      </td>



                    </tr>

                  </tbody>
                </table>

              </div>


            </div>

            <div className='w-[30%] rounded-[16px] min-h-[180px] flex  gap-5 flex-col  justify-between   p-3  bg-white shadow-customShadow'>

              <div className='flex flex-col gap-5'>
                <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>App Users Today</h2>
                <h2 className='text-[#032545] text-[32px] font-poppine block font-semibold'>253</h2>
              </div>

              <div className='flex flex-col gap-5'>
                <div className='flex justify-between w-full items-center  '>
                  <h2 className='text-[#067E81] text-[12px] font-poppine inline-block font-semibold'>Compare </h2>
                  <p className='font-poppine flex items-center justify-center  gap-2 text-[#ABABAB]  font-medium text-[12px]
                   bg-[#F0F0F0] px-3 rounded-[16px]
                
                '>Daily <img src={downArrow} alt="downArrow" className='block' /> </p>
                </div>

                <div className=' flex justify-between border-b gap-3 items-center border-[#F1F1F1] py-2'>

                  <div className='flex-1'>
                    <h2 className='text-[#032545] text-[12px] font-poppine inline-block font-normal'>Today’s Users</h2>
                    <div className='w-full flex justify-between'>
                      <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>253</h2>
                      <h2 className='text-[#39DC00] text-[18px] font-poppine inline-block font-semibold'>+45% </h2>

                    </div>
                  </div>
                  <img src={arrowUp} alt="Logo" className='block h-12 w-12' />
                </div>

                <div className=' flex justify-between border-b gap-3 items-center border-[#F1F1F1] py-2'>

                  <div className='flex-1'>
                    <h2 className='text-[#032545] text-[12px] font-poppine inline-block font-normal'>Yesterday’s Users</h2>
                    <div className='w-full flex justify-between'>
                      <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>253</h2>
                      <h2 className='text-[#AAAAAA] text-[18px] font-poppine inline-block font-semibold'>+45% </h2>

                    </div>
                  </div>
                  <img src={arrowdown} alt="Logo" className='block h-12 w-12' />
                </div>
              </div>



            </div>
          </div>

          {/* Chart Secction */}
          {/* Cart 1 */}
          <div className='p-3 bg-white shadow-customShadow rounded-[16px]'>
            {/* Heading Secction  */}
            <div className='flex items-center justify-between px-2'>
              <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>Comparison </h2>
              <div className='flex items-center justify-between gap-3'>
                <div className='flex gap-2'>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2022  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-[#9BCDCE]'></div>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2023  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-bg1'></div>
                  </div>
                </div>
                <p className='font-poppine flex items-center justify-center  gap-2 text-[#ABABAB]  font-medium text-[12px]
                   bg-[#F0F0F0] px-3 p-1 rounded-[16px]
                '>Yearly  <img src={downArrow} alt="downArrow" className='block' /> </p>
              </div>
            </div>
            {/* chart  Section  */}
            <div className='flex justify-between w-full h-36 mt-5  '>
              <div className='flex-1  '>
                <Bar options={options} data={data} width="450px" />
              </div>
              <div className='flex flex-col justify-center gap-3 w-44 '>
                <div className=' flex flex-col border-b gap-1 items-start border-[#F1F1F1] py-2'>
                  <h2 className='text-[#032545] text-[12px] font-poppine inline-block font-normal'>Appointments made</h2>
                  <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>5451</h2>
                </div>
                <div className=' flex flex-col  gap-1 items-start  py-2'>
                  <h2 className='text-[#032545] text-[12px] font-poppine inline-block font-normal'>Appointments cancelled</h2>
                  <h2 className='text-[#C90000] text-[18px] font-poppine inline-block font-semibold'>54</h2>
                </div>

              </div>
            </div>
          </div>


          {/* Cart 2 */}


          <div className='p-3 bg-white shadow-customShadow rounded-[16px]'>
            {/* Heading Secction  */}
            <div className='flex items-center justify-between px-2'>
              <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>Comparison </h2>
              <div className='flex items-center justify-between gap-3'>
                <div className='flex gap-2'>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2022  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-[#9BCDCE]'></div>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2023  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-bg1'></div>
                  </div>
                </div>
                <p className='font-poppine flex items-center justify-center  gap-2 text-[#ABABAB]  font-medium text-[12px]
                   bg-[#F0F0F0] px-3 p-1 rounded-[16px]
                '>Yearly  <img src={downArrow} alt="downArrow" className='block' /> </p>
              </div>
            </div>
            {/* chart  Section  */}
            <div className='flex justify-between w-full h-36 mt-5  '>
              <div className='flex-1  '>
                <Bar options={options} data={data} width="450px" />
              </div>
              <div className='flex flex-col justify-center gap-3 w-44 '>
                <div className=' flex flex-col border-b gap-1 items-start border-[#F1F1F1] py-2'>
                  <h2 className='text-[#032545] text-[12px] font-poppine inline-block font-normal'>Total Bookings</h2>
                  <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>5451</h2>
                </div>
                <div className=' flex flex-col  gap-1 items-start  py-2'>
                  <h2 className='text-[#032545] text-[12px] font-poppine inline-block font-normal'>Bookings cancelled</h2>
                  <h2 className='text-[#C90000] text-[18px] font-poppine inline-block font-semibold'>54</h2>
                </div>

              </div>
            </div>
          </div>



          {/* cart 3 */}
          <div className='p-3 px-5 bg-white shadow-customShadow rounded-[16px]'>
            {/* Heading Secction  */}
            <div className='flex items-center justify-between px-2'>
              <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>Comparison </h2>
              <div className='flex items-center justify-between gap-3'>
                <div className='flex gap-2'>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2022  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-[#9BCDCE]'></div>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2023  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-bg1'></div>
                  </div>
                </div>
                <p className='font-poppine flex items-center justify-center  gap-2 text-[#ABABAB]  font-medium text-[12px]
                   bg-[#F0F0F0] px-3 p-1 rounded-[16px]
                '>Yearly  <img src={downArrow} alt="downArrow" className='block' /> </p>
              </div>
            </div>
            {/* chart  Section  */}
            <div className='flex justify-between w-full h-36 mt-5 '>
              <div className='flex-1  '>
                <Bar options={options} data={data} width="450px" />
              </div>
              <div className='flex flex-col justify-center gap-5 w-44 '>
                <div className=' flex   gap-3 items-start '>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center  flex-col '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Online Clients</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>63</h1>
                  </div>
                </div>
                <div className=' flex   gap-3 items-start '>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center  flex-col '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Onsite Clients</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>163</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>


          {/* cart 4 */}


          <div className='p-3 px-5 bg-white shadow-customShadow rounded-[16px]'>
            {/* Heading Secction  */}
            <div className='flex items-center justify-between px-2'>
              <h2 className='text-[#067E81] text-[18px] font-poppine inline-block font-semibold'>Comparison </h2>
              <div className='flex items-center justify-between gap-3'>
                <div className='flex gap-2'>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2022  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-[#9BCDCE]'></div>
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <h2 className='text-[#032545] text-[14px] font-poppine inline-block font-semibold'>2023  </h2>
                    <div className='w-3 rounded-[6px] h-1 bg-bg1'></div>
                  </div>
                </div>
                <p className='font-poppine flex items-center justify-center  gap-2 text-[#ABABAB]  font-medium text-[12px]
                   bg-[#F0F0F0] px-3 p-1 rounded-[16px]
                '>Yearly  <img src={downArrow} alt="downArrow" className='block' /> </p>
              </div>
            </div>
            {/* chart  Section  */}
            <div className='flex justify-between w-full h-36 mt-5 '>
              <div className='flex-1   '>
                <Bar options={options} data={data} width="450px" />
              </div>
              <div className='flex flex-col justify-center gap-5 w-44 '>
                <div className=' flex   gap-3 items-start '>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center  flex-col '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Online Clients</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>63</h1>
                  </div>
                </div>
                <div className=' flex   gap-3 items-start '>
                  <div className='bg-[#F1F1F1] w-12 h-12  rounded-full flex items-center justify-center'>
                    <img src={client} alt="Logo" />
                  </div>
                  <div className='flex items-start  justify-center  flex-col '>
                    <h2 className='text-text1 text-[12px] font-poppine font-normal'>Onsite Clients</h2>
                    <h1 className='font-poppine text-text2 font-semibold text-[24px]'>163</h1>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* end cart section  */}
        </div>

      </div>

      {/*end second section/  */}

    </section>

  );
}

export default App;
