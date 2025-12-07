import React, { useEffect, useMemo, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query HeroImages {
      castle: file(relativePath: { eq: "castillo-almenara-seguros.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      oranges: file(relativePath: { eq: "mandarinas-almenara-castellon.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      business: file(relativePath: { eq: "seguro-para-empresas.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      agro: file(relativePath: { eq: "campos-de-naranja-valencia.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const slides = useMemo(() => {
    const items = [
      { img: getImage(data.oranges), alt: "Agroseguros Valencia - Naranjos" },
      { img: getImage(data.agro), alt: "Seguro del Campo" },
      { img: getImage(data.business), alt: "Seguros para Empresas" },
      { img: getImage(data.castle), alt: "Seguros en Almenara - Castillo" },
    ]
    return items.filter((s) => !!s.img)
  }, [data])

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.alt}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <GatsbyImage
            image={s.img}
            alt={s.alt}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  )
}

export default HeroSlider
