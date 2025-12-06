import React from "react"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      castle: file(relativePath: { eq: "castillo-almenara-seguros.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
      oranges: file(relativePath: { eq: "mandarinas-almenara-castellon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
      business: file(relativePath: { eq: "seguro-para-empresas.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
      agro: file(relativePath: { eq: "campos-de-naranja-valencia.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
    }
  `)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  }

  const renderSlide = (imageFile, altText) => {
    const image = getImage(imageFile)
    if (!image) return null

    return (
      <div className="h-full">
        <GatsbyImage
          image={image}
          alt={altText}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="hero-slick w-full h-full overflow-hidden">
    <Slider {...settings} className="h-full">
        {renderSlide(data.oranges, "Agroseguros Valencia - Naranjos")}
        {renderSlide(data.agro, "Seguro del Campo: Granjeros y Cultivos")}
        {renderSlide(data.business, "Seguros para Empresas y Negocios")}
        {renderSlide(data.castle, "Seguros en Almenara - Castillo ")}
      </Slider>
    </div>
  )
}

export default HeroSlider
