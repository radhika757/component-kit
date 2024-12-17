import React from 'react'

type DataItem = {
  id: number
  name: string
  email: string
  [key: string]: string | number
}

type ScrollableTableProps = {
  data: DataItem[]
}

export const ScrollableTable: React.FC<ScrollableTableProps> = ({ data }) => {
  const allKeys = Array.from(new Set(data.flatMap(Object.keys)))
  const fixedColumns = ['id', 'name', 'email']
  const scrollableColumns = allKeys.filter(key => !fixedColumns.includes(key))

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {fixedColumns.map((key, index) => (
              <th key={key} scope="col" className={`px-6 py-3 bg-gray-50 sticky left-0 z-20 ${
                index === 1 ? 'left-[100px]' : 
                index === 2 ? 'left-[250px]' : ''
              } ${index === 2 ? 'shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]' : ''}`}>
                {key}
              </th>
            ))}
            {scrollableColumns.map(key => (
              <th key={key} scope="col" className="px-6 py-3 whitespace-nowrap">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {fixedColumns.map((key, colIndex) => (
                <td 
                  key={key} 
                  className={`px-6 py-4 whitespace-nowrap sticky z-10 ${
                    colIndex === 0 ? 'left-0' : 
                    colIndex === 1 ? 'left-[100px]' : 
                    colIndex === 2 ? 'left-[250px]' : ''
                  } ${colIndex === 2 ? 'shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]' : ''} ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  {item[key]}
                </td>
              ))}
              {scrollableColumns.map(key => (
                <td key={key} className="px-6 py-4 whitespace-nowrap">
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

