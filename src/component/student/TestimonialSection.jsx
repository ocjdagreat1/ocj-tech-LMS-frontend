import React, { useState } from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  // ---------- CARD ----------
  const TestimonialCard = ({ testimonial, index }) => {
    const isExpanded = expandedIndex === index

    return (
      <div className='w-full max-w-[320px] sm:max-w-[340px] text-xs sm:text-sm text-left border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 mx-auto'>

        {/* Header */}
        <div className='flex items-center gap-3 px-5 py-4 bg-gray-50 rounded-t-xl'>
          <img
            className='h-10 w-10 rounded-full object-cover'
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
        <div className='px-5 py-5'>

          {/* Rating */}
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

          {/* Feedback */}
          <p
            className={`text-gray-600 mt-3 whitespace-pre-line leading-relaxed ${
              isExpanded ? '' : 'line-clamp-3'
            }`}
          >
            {testimonial.feedback}
          </p>

          {/* Read More */}
          <button
            onClick={() => toggleReadMore(index)}
            className='text-blue-500 text-xs font-medium mt-3 hover:text-blue-600 transition-colors'
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

      {/* ---------- MOBILE CAROUSEL ---------- */}
      <div className='mt-10 sm:hidden w-full px-2'>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={16}
        >
          {dummyTestimonial.map((testimonial, index) => (
            <SwiperSlide key={index} className="!w-[280px]">
              <TestimonialCard testimonial={testimonial} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---------- TABLET & DESKTOP ---------- */}
      <div className='hidden sm:flex flex-wrap justify-center gap-8 mt-12'>
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
