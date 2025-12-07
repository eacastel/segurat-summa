import React, { useEffect, useMemo, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    query HeroImages {
      castle: file(relativePath: { eq: "castillo-almenara-seguros.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
      oranges: file(relativePath: { eq: "mandarinas-almenara-castellon.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
      business: file(relativePath: { eq: "seguro-para-empresas.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
      agro: file(relativePath: { eq: "campos-de-naranja-valencia.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `)

  const slides = useMemo(
    () => [
      { img: getImage(data.oranges), alt: "Agroseguros Valencia - Naranjos" },
      { img: getImage(data.agro), alt: "Seguro del Campo: Granjeros y Cultivos" },
      { img: getImage(data.business), alt: "Seguros para Empresas y Negocios" },
      { img: getImage(data.castle), alt: "Seguros en Almenara - Castillo" },
    ].filter((s) => !!s.img),
    [data]
  )

  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((s, i) => (
        <GatsbyImage
          key={s.alt}
          image={s.img}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          imgClassName="w-full h-full object-cover !m-0"
          style={{ margin: 0 }}
        />
      ))}
    </div>
  )
}

export default HeroSlider
