import React from 'react'

const NavSearch = () => {
  return (
    <div>
        <form>
            <input type="search" placeholder='Search here' className='text-blue-900 xs:hidden sm:hidden lg:hidden xl:block w-[230%] relative right-[100%] rounded-[5px]' />
        </form>
    </div>
  )
}

export default NavSearch