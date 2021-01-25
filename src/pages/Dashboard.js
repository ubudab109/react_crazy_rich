import React from 'react'
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import PageTitle from '../components/Typography/PageTitle'
import { PeopleIcon, AccountCash, Dollar, Invest } from '../icons'
import RoundIcon from '../components/RoundIcon'
import Slider from 'react-slick'
import Banner1 from '../assets/img/banner.png'
import Banner2 from '../assets/img/banner2.png'
import Banner3 from '../assets/img/banner3.png'
import { Card,
  CardBody,
} from '@windmill/react-ui'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function Dashboard() {
  // slider
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slideToShow: 3,
    slideToScroll: 1
  }


  return (
    <>  
    <br/>
      <CTA />

      <PageTitle>Dashboard</PageTitle>


      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Referral" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Referral Bonus" value="$ 46,760.89">
          <RoundIcon
            icon={AccountCash}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Profit & Refund" value="376">
          <RoundIcon
            icon={Dollar}
            iconColorClass="text-green-400 dark:text-green-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Investment" value="35" subtitle="test" subvalue="test">
          <RoundIcon
            icon={Invest}
            iconColorClass="text-red-500 dark:text-red-100"
            bgColorClass="bg-red-100 dark:bg-red-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <Card className="mb-8 shadow-md">
        <CardBody colored="true" className="text-white bg-orange-500">
          <p className="text-sm text-white-600 dark:text-white-400">
            Live Trading
          </p>
        </CardBody>
        <CardBody>
          <p className="text-sm text-gray-600 dark:text-gray-400">
          Please Like And Subscribe CrazyRich Youtube Channel
          </p>
        </CardBody>
      </Card>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-white">Banners</p>
            <hr/>
            <div className="container">
            <Slider {...settings}>
              <div>
                <img src={Banner1} alt="banner1" />
              </div>
              <div>
                <img src={Banner2} alt="banner2"/>
              </div>
              <div>
                <img src={Banner3} alt="banner3"/>
              </div>
            </Slider>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="mb-4 font-semibold text-gray-600 dark:text-white">Colored card</p>
            <hr/>
            <iframe width="560" title="youtube-live" height="315" src="https://www.youtube.com/embed/JVUgD50m_LA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Dashboard
