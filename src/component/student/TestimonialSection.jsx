import React, { useState } from 'react' 
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // ---------- CARD ----------
  const TestimonialCard = ({ testimonial, index }) => {
    const isExpanded = expandedIndex === index

    return (
      <div className='w-full max-w-[95%] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px] text-xs sm:text-sm text-left border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 mx-auto mb-6 flex flex-col h-full'>

        {/* Header */}
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 px-5 py-4 bg-gray-50 rounded-t-xl text-center sm:text-left'>
          <img
            className='h-10 w-10 rounded-full object-cover mx-auto sm:mx-0'
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div>
            <h1 className='text-sm sm:text-base font-semibold text-gray-800'>
              {testimonial.name}
            </h1>
            <p className='text-gray-500 text-xs'>
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className='px-5 py-5 flex flex-col flex-1'>
          {/* Rating */}
          <div className='flex justify-center sm:justify-start gap-1'>
            {[...Array(5)].map((_, i) => (
              <img
                className='h-4'
                key={i}
                src={
                  i < Math.floor(testimonial.rating)
                    ? assets.star
                    : assets.star_blank
                }
                alt='star'
              />
            ))}
          </div>

          {/* Feedback */}
          <p
            className={`text-gray-600 mt-3 whitespace-pre-line leading-relaxed ${
              isExpanded ? '' : 'line-clamp-3'
            } text-center sm:text-left flex-1`}
          >
            {testimonial.feedback}
          </p>

          {/* Read More */}
          <button
            onClick={() => toggleReadMore(index)}
            className='text-blue-500 text-xs font-medium mt-3 hover:text-blue-600 transition-colors block mx-auto sm:mx-0'
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto overflow-hidden'>

      {/* Section Title */}
      <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
        Testimonials
      </h2>

      <p className='text-sm sm:text-base text-gray-500 mt-3 max-w-2xl mx-auto'>
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>

      {/* ---------- MOBILE: STACKED VERTICAL ---------- */}
      <div className='flex flex-col items-center mt-10 sm:hidden'>
        {dummyTestimonial.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>

      {/* ---------- TABLET & DESKTOP: GRID with equal height cards ---------- */}
      <div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='flex'>
            <TestimonialCard testimonial={testimonial} index={index} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default TestimonialSection
