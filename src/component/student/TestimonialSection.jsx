import React, { useState } from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className='pb-14 px-8 md:px-0 text-center'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation,
        success, and how our
        <br /> platform has made a difference in their lives
      </p>

      <div className='grid grid-cols-auto gap-8 mt-14'>
        {dummyTestimonial.map((testimonial, index) => {
          const isExpanded = expandedIndex === index

          return (
            <div
              key={index}
              className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden transition-all duration-300'
            >
              {/* Header */}
              <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
                <img
                  className='h-12 w-12 rounded-full'
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>
                    {testimonial.name}
                  </h1>
                  <p className='text-gray-800/80'>{testimonial.role}</p>
                </div>
              </div>

              {/* Body */}
              <div className='p-5 pb-2'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      className='h-5'
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
                  className={`text-gray-500 mt-5 whitespace-pre-line transition-all duration-300 ${
                    isExpanded ? '' : 'line-clamp-4'
                  }`}
                >
                  {testimonial.feedback}
                </p>
              </div>

              {/* Read More Button */}
              <button
                onClick={() => toggleReadMore(index)}
                className='text-blue-500 underline px-5 mt-2 font-medium'
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TestimonialSection