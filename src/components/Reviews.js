import React from "react"

const reviewsData = [
  {
    id: 1,
    name: "María González",
    role: "Seguro de Hogar",
    text: "Excelente trato personal. Me ayudaron a encontrar la póliza perfecta para mi casa en Almenara. Muy recomendables.",
    rating: 5,
  },
  {
    id: 2,
    name: "Cooperativa Agrícola",
    role: "Seguro Agrario",
    text: "Profesionales que entienden el campo. La gestión de nuestros seguros agrarios ha sido impecable y rápida.",
    rating: 5,
  },
  {
    id: 3,
    name: "Juan Carlos Pérez",
    role: "Seguro de Auto",
    text: "Tuve un siniestro con el coche y se encargaron de todo. Da gusto tener un mediador que realmente responde.",
    rating: 4,
  },
]

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const Reviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                    <StarIcon />
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{review.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-blue-600">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews