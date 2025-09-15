import React from 'react'

import Highlights from "@/components/Highlights"
// import Sort_Intro from "@/components/Sort_Intro"

const Wrap_High_Intro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Highlights />
          </div>
          <div>
            {/* <Sort_Intro /> */}
          </div>
        </div>
      </div>
       <Highlights />
    </section>
  )
}

export default Wrap_High_Intro
