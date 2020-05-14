import * as React from "react"
import classes from '../helper/className';
import scrollBarWidth from "./scrollBarWidth"


interface Props extends React.HTMLAttributes<HTMLDivElement> {

}


const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, className, ...rest} = props

  return (
    <div className={classes("jd-scroll", className)} {...rest}>
      <div className={"jd-scroll-view"} style={{right: -scrollBarWidth()}}>
        {children}
      </div>
    </div>
  )


}

export default Scroll
