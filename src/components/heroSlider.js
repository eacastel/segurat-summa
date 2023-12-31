import React from "react"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <div className="mx-auto overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          {/* For mobile: Apply aspect ratio */}
          <div className="block md:hidden pb-[56.25%]">
            <StaticImage
              src="../images/castillo-almenara-hero-banner.jpg"
              alt="Seguros en Almenara y Castellon, Valencia"
              layout="fullWidth"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-b-lg"
            />
          </div>
          {/* For larger screens: Use original aspect ratio */}
          <div className="hidden md:block">
            <StaticImage
              src="../images/castillo-almenara-hero-banner.jpg"
              alt="Seguros en Almenara y Castellon, Valencia"
              layout="fullWidth"
              className="w-full rounded-b-lg"
            />
          </div>
          {/* Text Overlay */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="mt-[25px] ml-[30px] text-left">
              <div className="bg-black bg-opacity-50 p-4 inline-block">
                <h2 className="text-2xl md:text-4xl font-bold capitalize text-white">
                  Seguros Personales y Empresariales
                </h2>
                <p className="text-md md:text-xl text-white">
                  Te ofrecemos una amplia gama de seguros para auto, hogar, vida, salud, decesos y más.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="relative">
          {/* For mobile: Apply aspect ratio */}
          <div className="block md:hidden pb-[56.25%]">
            <StaticImage
              src="../images/naranjos-hero-banner.jpg"
              alt="Seguros del Campo, Agroseguros, Seguros Agrarios Almenara, Castellon, Valencia"
              placeholder="blurred"
              layout="fullWidth"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-b-lg"
            />
          </div>
          {/* For larger screens: Use original aspect ratio */}
          <div className="hidden md:block">
            <StaticImage
              src="../images/naranjos-hero-banner.jpg"
              alt="Seguros del Campo, Agroseguros, Seguros Agrarios Almenara, Castellon, Valencia"
              placeholder="blurred"
              layout="fullWidth"
              className="w-full rounded-b-lg"
            />
          </div>
          {/* Text Overlay */}
          <div className="absolute top-0 left-0 w-full h-full">
          <div className="mt-[25px] ml-[30px] text-left">
              <div className="bg-black bg-opacity-50 p-3 inline-block">
                <h2 className="text-2xl md:text-4xl font-bold capitalize text-white">
                  Seguros Agrarios / Agroseguros
                </h2>
                <p className="text-md md:text-xl text-white">
                  Somos especialistas en la contratación de los diferentes módulos existentes en las líneas de aseguramiento agrícola.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat for other slides */}
      </Slider>
    </div>
  )
}

export default HeroSlider
