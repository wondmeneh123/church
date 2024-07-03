import React from 'react'
import Header from '../component/Header'
import SIdebar from '../component/SIdebar'
const Home = () => {
  return (
    <div>
        <Header />
        <div className='flex'>

        <SIdebar/>
      <div className="flex gap-3 justify-center align-center p-10">
<a href="#" class="h-[100px] text-center mt-20 block w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">25</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Students</p>
</a><a href="#" class="h-[100px] text-center mt-20 block w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">25</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Students</p>
</a>
<a href="#" class="h-[100px] text-center mt-20 block w-64 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">25</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Students</p>
</a>
</div>  
        </div>
    </div>
  )
}

export default Home