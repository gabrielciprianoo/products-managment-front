

export default function ErrorMessage( { children } : React.PropsWithChildren) {
  return (
    <div className="text-center text-white font-bold p-2 uppercase bg-red-600 text-sm my-4">{ children }</div>
  )
}
