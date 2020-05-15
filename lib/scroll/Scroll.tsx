import * as React from "react"
import {useState, useRef} from "react"
import classes from '../helper/className';
import scrollBarWidth from "./scrollBarWidth"


interface Props extends React.HTMLAttributes<HTMLDivElement> {
  barVisible?: boolean
  onPull?: () => void
}


const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, className, barVisible, ...rest} = props
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, _setTranslateY] = useState(0);
  const setTranslateY = (y: number) => {
    if (y < 0) {y = 0;} else if (y > 100) {y = 100;}
    _setTranslateY(y);
  };
  const lastYRef = useRef(0);
  const moveCount = useRef(0);
  const isPulling = useRef(false);

  const onTouchStart: React.TouchEventHandler = (e) => {
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) {return;}
    isPulling.current = true;
    lastYRef.current = e.touches[0].clientY;
    moveCount.current = 0;
  };
  const onTouchMove: React.TouchEventHandler = (e) => {
    const deltaY = e.touches[0].clientY - lastYRef.current;
    moveCount.current += 1;
    if (moveCount.current === 1 && deltaY < 0) {
      isPulling.current = false;
      return;
    }
    if (!isPulling.current) {return;}
    setTranslateY(translateY + deltaY);
    console.log(translateY + deltaY);
    lastYRef.current = e.touches[0].clientY;
  };
  const onTouchEnd: React.TouchEventHandler = () => {
    if (isPulling.current) {
      setTranslateY(0);
      props.onPull && props.onPull();
      isPulling.current = false;
    }
  };


  return (
    <div className={classes("jd-scroll", className)} {...rest}>
      <div className={classes("jd-scroll-view", barVisible ? "" : "hideBar")}
           style={{
             right: barVisible ? "0px" : -scrollBarWidth(),
             transform: `translateY(${translateY}px)`
           }}
           ref={containerRef}
           onTouchMove={onTouchMove}
           onTouchStart={onTouchStart}
           onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
    </div>
  )
}

Scroll.defaultProps = {
  barVisible: true
}


export default Scroll
