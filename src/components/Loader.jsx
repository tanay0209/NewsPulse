import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='w-full flex items-center justify-center h-[85vh]'>
            <MutatingDots
                height="100"
                width="100"
                color="rgb(248 113 113)"
                secondaryColor='rgb(96 165 250 )'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader
