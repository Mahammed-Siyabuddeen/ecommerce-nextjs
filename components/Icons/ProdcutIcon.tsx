import { SVGProps } from "react";

export function ProductIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M44 14L24 4L4 14v20l20 10l20-10z"></path><path strokeLinecap="round" d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"></path></g></svg>
  )
}