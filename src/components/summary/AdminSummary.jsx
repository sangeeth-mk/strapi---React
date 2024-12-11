import React from 'react'
import SummaryCards from '../cards/SummaryCards'
import { Users,Building2,IndianRupee,X,Check,CircleDashed,ClipboardMinus  } from "lucide-react";



const AdminSummary = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold'>Dashboard Overview</h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        <SummaryCards icon={<Users/>} text={"Total Employees"} number={13} color='bg-teal-600'/>
        <SummaryCards icon={<Building2/>} text={"Total Departments"} number={5} color='bg-blue-300'/>
        <SummaryCards icon={<IndianRupee/>} text={"Monthly salary"} number={5} color='bg-green-400'/>
      </div>

      <div className='mt-12'>
        <h4 className='text-2xl font-bold'>Leave Details</h4>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        <SummaryCards icon={<ClipboardMinus/>} text={"Leave Applied"} number={13} color='bg-teal-600'/>
        <SummaryCards icon={<Check/>} text={"Leave Approved"} number={5} color='bg-green-600'/>
        <SummaryCards icon={<CircleDashed/>} text={"Leave Pending"} number={5} color='bg-yellow-400'/>
        <SummaryCards icon={<X/>} text={"Leave Rejected"} number={5} color='bg-red-600'/>
        </div>
      </div>
    </div>
   )
}

export default AdminSummary
