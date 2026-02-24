import React, { useState } from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const TestimonialSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const TestimonialCard = ({ testimonial, index }) => {
    const isExpanded = expandedIndex === index

    return (
      <div className='text-xs sm:text-sm text-left border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 max-w-sm w-full mx-auto'>
        {/* Header */}
        <div className='flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-t-xl'>
          <img
            className='h-10 w-10 rounded-full object-cover'
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div>
            <h1 className='text-sm sm:text-base font-medium text-gray-800'>
              {testimonial.name}
            </h1>
            <p className='text-gray-500 text-xs'>
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className='px-4 py-4'>
          <div className='flex gap-1'>
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

          <p
            className={`text-gray-600 mt-3 whitespace-pre-line leading-relaxed ${
              isExpanded ? '' : 'line-clamp-3'
            }`}
          >
            {testimonial.feedback}
          </p>

          <button
            onClick={() => toggleReadMore(index)}
            className='text-blue-500 text-xs font-medium mt-3 hover:text-blue-600'
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto'>

      <h2 className='text-2xl sm:text-3xl font-semibold text-gray-800'>
        Testimonials
      </h2>

      <p className='text-sm sm:text-base text-gray-500 mt-3 max-w-2xl mx-auto'>
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>

      {/* ✅ Mobile Carousel */}
      <div className='mt-10 sm:hidden'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
        >
          {dummyTestimonial.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Tablet & Desktop Grid */}
      <div className='hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {dummyTestimonial.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>

    </div>
  )
}

export default TestimonialSection