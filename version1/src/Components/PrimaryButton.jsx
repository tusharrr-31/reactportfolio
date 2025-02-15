import { Button } from "@material-tailwind/react";
 
export function PrimaryButton({ButtonText, onClick}){
  return(
    <>
    <Button className="flex items-center gap-3 rounded-full" onClick={onClick}>
        {ButtonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </>
  )
}
export function SecondaryButton({ButtonText, onClick}){
  return(
    <>
    <Button variant="outlined" className="flex items-center gap-3 bg-white rounded-full" onClick={onClick}>
        {ButtonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </>
  )
}


