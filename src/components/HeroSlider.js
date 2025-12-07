// src/components/HeroSlider.js
import React from "react"
import Slider from "react-slick"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query HeroSliderImages {
      castle: file(relativePath: { eq: "castillo-almenara-seguros.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
      oranges: file(relativePath: { eq: "mandarinas-almenara-castellon.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
      business: file(relativePath: { eq: "seguro-para-empresas.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
      agro: file(relativePath: { eq: "campos-de-naranja-valencia.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
        }
      }
    }
  `)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    adaptiveHeight: false,
  }

  const slide = (imgNode, alt) => {
    const image = getImage(imgNode)
    if (!image) return null
    return (
      <div className="h-full">
        <GatsbyImage
          image={image}
          alt={alt}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className="hero-slick h-full w-full overflow-hidden">
      <Slider {...settings}>
        {slide(data.oranges, "Agroseguros Valencia - Naranjos")}
        {slide(data.agro, "Seguro del Campo")}
        {slide(data.business, "Seguros para Empresas")}
        {slide(data.castle, "Seguros en Almenara - Castillo")}
      </Slider>
    </div>
  )
}

export default HeroSlider
