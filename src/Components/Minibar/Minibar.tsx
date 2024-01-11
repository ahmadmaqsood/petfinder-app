import React from 'react'

export default function Minibar() {
    return (
        <>
            <div className="minibar bg-primary py-2 ">
                <div className="flex items-center justify-evenly  md:mr-28    ">
                    <div className="properties1 text-gray-100 xx:text-xs sm:text-xs md:text-sm">
                        ADOPT OR GET INVOLVED
                    </div>
                    <div className="properties1 text-gray-100 xx:text-xs sm:text-xs md:text-sm">
                        DOGS AND PUPPIES
                    </div>
                    <div className="properties1 text-gray-100 xx:text-xs sm:text-xs md:text-sm">
                        CATS AND KITTENS
                    </div>
                    <div className="properties1 text-gray-100 xx:text-xs sm:text-xs md:text-sm">
                        OTHER TYPES OF PETS
                    </div>
                </div>
            </div>
        </>
    )
}
